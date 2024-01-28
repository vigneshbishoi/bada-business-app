import { UserData } from '../ActionType';

export const setYoutube = (getYoutube) => {
    return {
        type: UserData.SET_YOUTUBE,
        payload: {
            getYoutube
        }
    }
};