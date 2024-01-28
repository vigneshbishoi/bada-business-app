import { UserData } from '../ActionType';

const initialState = {
    article_List: [],
    article_Category: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case UserData.SET_ARTICLE_LIST:
            return {
                ...state,
                article_List: action.payload.article_List
            }

        case UserData.SET_ARTICLE_CATEGORY:
            return {
                ...state,
                article_Category: action.payload.article_Category
            }

        default:
            return state;
    }
}