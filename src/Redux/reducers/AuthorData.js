import { UserData } from '../ActionType';

const initialState = {
    author_List: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case UserData.SET_AUTHOR_LIST:
            return {
                ...state,
                author_List: action.payload.author_List
            }

        default:
            return state;
    }
}