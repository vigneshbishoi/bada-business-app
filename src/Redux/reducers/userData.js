import { UserData } from '../ActionType';

const initialState = {
    userData: null,
    access_token: null,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case UserData.SET_USER_DATA:
            return {
                ...state,
                userData: action.payload.userData
            }

        case UserData.SET_TOKEN:
            return {
                ...state,
                access_token: action.payload.access_token
            }

        default:
            return state;
    }
}