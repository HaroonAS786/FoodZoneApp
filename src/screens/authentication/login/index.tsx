import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';

import { PasswordLock, PasswordUnlock } from '../../../assets/svgs';
import CustomButton from '../../../components/CustomButton';
import CustomText from '../../../components/CustomText';
import CustomTextInput from '../../../components/CustomTextInput';
import FlashNotification from '../../../components/FlashMessage';
import LayoutContainer from '../../../components/LayoutContainer';
import Spacer from '../../../components/Spacer';
import { themeColors } from '../../../config/colors';
import { SCREEN_HEIGHT } from '../../../config/typography';
import useAuthentication from '../../../hooks/useAuthentication';
import { getStyles } from './style';
import { useDispatch } from 'react-redux';
import { saveData } from '../../../utils/storage';
import { signIn } from '../../../redux/actions';

const LoginScreen: React.FC<any> = (props) => {
    const [loading, setLoading] = useState(false);
    const styles = getStyles()
    const dispatch = useDispatch()
    const { userLogin } = useAuthentication()
    const [passwordToggle, setPasswordToggle] = useState(false);
    const [data, setData] = useState({
        email: {
            value: '',
            errors: [],
            success: [],
        },
        password: {
            value: '',
            errors: [],
            success: [],
        },
    });

    const isValidated = data?.email?.value?.length && data?.password?.value?.length;

    const handleInput = (t: string, tag: string) => {
        setData((prevState) => {
            const valueToSet: { value: string; errors: string[]; success: string[] } = {
                value: '',
                errors: [],
                success: [],
            };
            if (tag === 'email') {
                valueToSet.value = t;
                if (t.match(/.@.*\.../)) {
                    valueToSet.value = t;
                } else {
                    valueToSet.errors = ['Enter Valid Email'];
                }
            }
            if (tag === 'password') {
                valueToSet.value = t;
                if (t.length < 8) {
                    valueToSet.errors = ['Password must be at least 8 characters long'];
                }
            }
            return {
                ...prevState,
                [tag]: valueToSet,
            };
        });
    };

    const handleLogin = () => {
        setLoading(true)
        userLogin(data.email.value, data.password.value).then((res) => {
            if (res) {
                setLoading(false);
                FlashNotification.show("Login Successfully", 'success')
                dispatch(
                    signIn({
                        token: res,
                        email: "",
                    })
                );
            }
        }).catch((err) => {
            FlashNotification.show(err.message, 'error')
            setLoading(false);
        })
    };

    const OffToSignUp = () => {
        props.navigation.navigate('SignUpScreen');
    };

    return (
        <LayoutContainer leftIconOff={false} isForm>
            <Spacer height={SCREEN_HEIGHT * 0.2} />
            <CustomText h2 bold color={themeColors.primary}>
                Food Zone
            </CustomText>
            <Spacer height={20} />
            <View style={styles.fieldContainer}>
                <CustomTextInput
                    label={'Email'}
                    autoCapitalize={'none'}
                    placeholder={'name@email.com'}
                    keyboardType={'email-address'}
                    onChangeText={(t) => handleInput(t, 'email')}
                    errors={data.email.errors}
                    success={data.email.success}
                />
                <Spacer height={25} />
                <CustomTextInput
                    label={'Password'}
                    placeholder={'Enter Password'}
                    onChangeText={(t) => handleInput(t, 'password')}
                    password={!passwordToggle}
                    rightIcon={passwordToggle ? <PasswordUnlock /> : <PasswordLock />}
                    rightIconPress={() => setPasswordToggle(!passwordToggle)}
                    errors={data.password.errors}
                    success={data.password.success}
                />
                <Spacer height={25} />
                <CustomButton
                    loading={loading}
                    disabled={!isValidated}
                    label={'Log In'}
                    onPress={handleLogin}
                />
            </View>
            <Spacer height={6} />
            <View style={styles.footerView}>
                <CustomText body color={themeColors.label}>
                    Don’t have an account yet?{' '}
                </CustomText>
                <TouchableOpacity onPress={OffToSignUp} activeOpacity={0.6}>
                    <CustomText body color={themeColors.primary}>
                        Sign up
                    </CustomText>
                </TouchableOpacity>
            </View>
        </LayoutContainer>
    );
};

export default LoginScreen;
