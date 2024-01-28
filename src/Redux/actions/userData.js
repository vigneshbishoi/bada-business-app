import { UserData } from '../ActionType';

export const setUserData = (userData) => {
    return {
        type: UserData.SET_USER_DATA,
        payload: {
            userData
        }
    }
};

export const setToken = (access_token) => {
    return {
        type: UserData.SET_TOKEN,
        payload: {
            access_token
        }
    }
};