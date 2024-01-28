import { UserData } from '../ActionType';

const initialState = {
    getYoutube:[]
};

export default function (state = initialState, action) {
    switch (action.type) {
        case UserData.SET_YOUTUBE:
            return {
                ...state,
                getYoutube: action.payload.getYoutube
            }

        default:
            return state;
    }
}