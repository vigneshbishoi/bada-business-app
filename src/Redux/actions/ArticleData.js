import { UserData } from '../ActionType';

export const setArticleList = (article_List) => {
    return {
        type: UserData.SET_ARTICLE_LIST,
        payload: {
            article_List
        }
    }
};

export const setArticleCategory = (article_Category) => {
    return {
        type: UserData.SET_ARTICLE_CATEGORY,
        payload: {
            article_Category
        }
    }
};