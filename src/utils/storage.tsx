import { MMKV } from 'react-native-mmkv';

export const storage = new MMKV();

export const getData = (key: string) => {
    const data = storage.getString(key);
    if (data) {
        return JSON.parse(data);
    }
    return null;
};

export const saveData = (key: string, data: any) => {
    storage.set(key, JSON.stringify(data));
};

export const deleteData = (key: string) => {
    storage.delete(key);
};

export const getUserAccessToken = () => {
    return getData('accessToken');
};

export const tokenSavedTime = () => {
    return getData('tokenSavedTime');
};

export const tokenDuration = () => {
    return getData('accessTokenDuration');
};

export const getUserRefreshToken = () => {
    return getData('refreshToken');
};


