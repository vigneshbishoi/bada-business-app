import { UserData } from '../ActionType';

const initialState = {
    banner: [],
    categoriesPsc6: [],
    categoriesPsc: [],
    categoriesEae: [],
    recommendedCourses: [],
    coutinueYourCourses: [],
    keyword: [],
    saveGetList: [],
    savecarts: 0
};

export default function (state = initialState, action) {
    switch (action.type) {
        case UserData.SET_BANNER:
            return {
                ...state,
                banner: action.payload.banner
            }

        case UserData.SET_CATEGORIES_PSC_6:
            return {
                ...state,
                categoriesPsc6: action.payload.categoriesPsc6
            }

        case UserData.SET_CATEGORIES_PSC:
            return {
                ...state,
                categoriesPsc: action.payload.categoriesPsc
            }

        case UserData.SET_CATEGORIES_EAE:
            return {
                ...state,
                categoriesEae: action.payload.categoriesEae
            }

        case UserData.SET_COUTINUE_YOUR_COURSE:
            return {
                ...state,
                coutinueYourCourses: action.payload.coutinueYourCourses
            }

        case UserData.SET_RECOMMENDED_COURSES:
            return {
                ...state,
                recommendedCourses: action.payload.recommendedCourses
            }

        case UserData.SET_KEYWORD:
            return {
                ...state,
                keyword: action.payload.keyword
            }

        case UserData.SET_SAVE_GET_LIST:
            return {
                ...state,
                saveGetList: action.payload.saveGetList
            }
        case UserData.SET_SAVE_CARTS:
            return {
                ...state,
                savecarts: action.payload.savecarts
            }

        default:
            return state;
    }
}