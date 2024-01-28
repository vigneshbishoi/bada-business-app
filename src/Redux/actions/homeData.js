import { UserData } from '../ActionType';

export const setBanner = (banner) => {
    return {
        type: UserData.SET_BANNER,
        payload: {
            banner
        }
    }
};

export const setCategoriesPsc6 = (categoriesPsc6) => {
    return {
        type: UserData.SET_CATEGORIES_PSC_6,
        payload: {
            categoriesPsc6
        }
    }
};

export const setCategoriesPsc = (categoriesPsc) => {
    return {
        type: UserData.SET_CATEGORIES_PSC,
        payload: {
            categoriesPsc
        }
    }
};

export const setCategoriesEae = (categoriesEae) => {
    return {
        type: UserData.SET_CATEGORIES_EAE,
        payload: {
            categoriesEae
        }
    }
};

export const setRecommendedCourses = (recommendedCourses) => {
    return {
        type: UserData.SET_RECOMMENDED_COURSES,
        payload: {
            recommendedCourses
        }
    }
};

export const setCoutinueYourCourses = (coutinueYourCourses) => {
    return {
        type: UserData.SET_COUTINUE_YOUR_COURSE,
        payload: {
            coutinueYourCourses
        }
    }
};

export const setKeywordSearch = (keyword) => {
    return {
        type: UserData.SET_KEYWORD,
        payload: {
            keyword
        }
    }
};

export const setSaveCarts = (savecarts) => {
    return {
        type: UserData.SET_SAVE_CARTS,
        payload: {
            savecarts
        }
    }
};

export const setSaveGetList = (saveGetList) => {
    return {
        type: UserData.SET_SAVE_GET_LIST,
        payload: {
            saveGetList
        }
    }
}