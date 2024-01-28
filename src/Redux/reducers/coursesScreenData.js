import { UserData } from '../ActionType';

const initialState = {
    EAE_Courses_screen_List: [],
    PSC_Courses_screen_List: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case UserData.SET_EAE_COURSESSCREEN_LIST:
            return {
                ...state,
                EAE_Courses_screen_List: action.payload.EAE_Courses_screen_List
            }

        case UserData.SET_PSC_COURSESSCREEN_LIST:
            return {
                ...state,
                PSC_Courses_screen_List: action.payload.PSC_Courses_screen_List
            }

        default:
            return state;
    }
}