import React, { useState } from 'react';
import { View } from 'react-native';

import { PasswordLock, PasswordUnlock } from '../../../assets/svgs';
import CustomText from '../../../components/CustomText';
import CustomTextInput from '../../../components/CustomTextInput';
import LayoutContainer from '../../../components/LayoutContainer';
import Spacer from '../../../components/Spacer';
import CustomButton from '../../../components/CustomButton';
import { themeColors } from '../../../config/colors';
import { SCREEN_HEIGHT } from '../../../config/typography';
import { getStyles } from './style';
import useAuthentication from '../../../hooks/useAuthentication';
import FlashNotification from '../../../components/FlashMessage';

const SignUpScreen: React.FC<any> = (props) => {
    const styles = getStyles();
    const [loading, setLoading] = useState(false);
    const [passwordToggle, setPasswordToggle] = useState(false);
    const [confirmPasswordToggle, setConfirmPasswordToggle] = useState(false);
    const { createUserOnFirebase } = useAuthentication()
    const [data, setData] = useState({
        fName: {
            value: '',
            errors: [],
            success: [],
        },
        lName: {
            value: '',
            errors: [],
            success: [],
        },
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
        confirmPassword: {
            value: '',
            errors: [],
            success: [],
        },
    });

    const isValidated =
        data?.fName?.value?.length &&
        data?.lName?.value?.length &&
        data?.email?.value?.length &&
        data?.password?.value?.length &&
        data?.confirmPassword?.value?.length;

    const handleInput = (t: string, tag: string) => {
        setData((prevState) => {
            const valueToSet: { value: string; errors: string[]; success: string[] } = {
                value: '',
                errors: [],
                success: [],
            };

            if (tag === 'fName' || tag === 'lName') {
                valueToSet.value = t;
                if (t.length > 0) {
                    valueToSet.value = t;
                } else {
                    valueToSet.errors = [`${tag} Required`];
                }
            }

            if (tag === 'email') {
                valueToSet.value = t;
                if (t.match(/.@.*\.../)) {
                    valueToSet.value = t;
                } else {
                    valueToSet.errors = ['Enter Valid Email'];
                }
            }

            if (tag === 'password' || tag === 'confirmPassword') {
                valueToSet.value = t;
                if (t.length < 8) {
                    valueToSet.errors = ['Password must be at least 8 characters long'];
                } else if (tag === 'confirmPassword' && data.password.value !== t) {
                    valueToSet.errors = ['Password does not match'];
                }
            }
            return {
                ...prevState,
                [tag]: valueToSet,
            };
        });
    };

    const handleSignUp = () => {
        setLoading(true)
        createUserOnFirebase(data.email.value, data.password.value).then((res) => {
            if (res) {
                setLoading(false);
                FlashNotification.show("Account Created", 'success')
                // props.navigation.navigate("LoginScreen")
            }
        }).catch((err) => {
            setLoading(false);
            console.log(err, 'error----')
            FlashNotification.show(err.message, 'error')
        })
    };

    return (
        <>
            <LayoutContainer leftIconOff={false} noHeight headerTitle={'Sign Up'} isHeader backOnPress={() => props.navigation.goBack()}>
                <Spacer height={SCREEN_HEIGHT * 0.02} />
                <View style={styles.container}>
                    <CustomText color={themeColors.black} h3 medium>
                        Lets get started
                    </CustomText>
                    <Spacer height={SCREEN_HEIGHT * 0.005} />
                    <CustomText color={themeColors.label} body>
                        Please add your information below
                    </CustomText>
                    <Spacer height={SCREEN_HEIGHT * 0.02} />
                    <View style={styles.FLNamesContainer}>
                        <CustomTextInput
                            label={'First Name'}
                            placeholder={'Enter'}
                            inputStyle={styles.fL_InputCon}
                            onChangeText={(t) => handleInput(t, 'fName')}
                            errors={data.fName.errors}
                            success={data.fName.success}
                        />
                        <CustomTextInput
                            label={'Last Name'}
                            placeholder={'Enter'}
                            inputStyle={styles.fL_InputCon}
                            onChangeText={(t) => handleInput(t, 'lName')}
                            errors={data.lName.errors}
                            success={data.lName.success}
                        />
                    </View>
                    <Spacer height={SCREEN_HEIGHT * 0.02} />
                    <CustomTextInput
                        label={'Email'}
                        autoCapitalize={'none'}
                        placeholder={'name@email.com'}
                        onChangeText={(t) => handleInput(t, 'email')}
                        keyboardType={'email-address'}
                        errors={data.email.errors}
                        success={data.email.success}
                    />
                    <Spacer height={SCREEN_HEIGHT * 0.02} />
                    <CustomTextInput
                        label={'Password'}
                        placeholder={'Enter Password'}
                        onChangeText={(t) => handleInput(t, 'password')}
                        errors={data.password.errors}
                        success={data.password.success}
                        password={!passwordToggle}
                        rightIcon={passwordToggle ? <PasswordUnlock /> : <PasswordLock />}
                        rightIconPress={() => setPasswordToggle(!passwordToggle)}
                    />
                    <Spacer height={SCREEN_HEIGHT * 0.02} />
                    <CustomTextInput
                        label={'Confirm Password'}
                        placeholder={'Enter Password'}
                        onChangeText={(t) => handleInput(t, 'confirmPassword')}
                        errors={data.confirmPassword.errors}
                        success={data.confirmPassword.success}
                        password={!confirmPasswordToggle}
                        rightIcon={confirmPasswordToggle ? <PasswordUnlock /> : <PasswordLock />}
                        rightIconPress={() => setConfirmPasswordToggle(!confirmPasswordToggle)}
                    />
                    <Spacer height={SCREEN_HEIGHT * 0.04} />
                </View>
            </LayoutContainer>
            <View style={styles.btnContainer}>
                <CustomButton label={'Sign Up'} loading={loading} onPress={handleSignUp} disabled={!isValidated} />
                <Spacer height={SCREEN_HEIGHT * 0.01} />
            </View>
        </>
    );
};

export default SignUpScreen;
