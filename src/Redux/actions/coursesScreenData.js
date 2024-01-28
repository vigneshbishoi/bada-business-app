import { UserData } from '../ActionType';

export const setCoursesScreenEAEData = (EAE_Courses_screen_List) => {
    return {
        type: UserData.SET_EAE_COURSESSCREEN_LIST,
        payload: {
            EAE_Courses_screen_List
        }
    }
};

export const setCoursesScreenPSCData = (PSC_Courses_screen_List) => {
    return {
        type: UserData.SET_PSC_COURSESSCREEN_LIST,
        payload: {
            PSC_Courses_screen_List
        }
    }
};