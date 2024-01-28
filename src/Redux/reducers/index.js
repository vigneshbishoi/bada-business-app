import { combineReducers } from 'redux';

import UserDataReducer from './userData';
import HomeDataReducer from './homeData';
import CoursesScreenReducer from './coursesScreenData';
import ArticleReducer from './ArticleData';
import AuthorReducer from './AuthorData'
import YoutubeReducer from './YoutubeData'

export default combineReducers({
    userData: UserDataReducer,
    homeData: HomeDataReducer,
    coursesScreenData: CoursesScreenReducer,
    articleData: ArticleReducer,
    authorData: AuthorReducer,
    youtubeData: YoutubeReducer
})