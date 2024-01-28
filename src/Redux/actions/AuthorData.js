import { UserData } from '../ActionType';

export const setAuthorList = (author_List) => {
    return {
        type: UserData.SET_AUTHOR_LIST,
        payload: {
            author_List
        }
    }
};
