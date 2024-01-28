import { scale } from 'react-native-size-matters';
import config from '../../../config/index';
export default (styles = {
    Coonstant: {
        flex: 1,
        flexDirection: "column-reverse"
    },
    mainView: {
        backgroundColor: config.Constant.COLOR_WHITE,
        // height: config.Constant.SCREEN_HEIGHT / 2,
        paddingHorizontal: scale(15),
        borderTopLeftRadius: scale(4),
        borderTopRightRadius: scale(4),
        flexDirection: "column-reverse"
    },
    staticText: {
        fontSize: config.Constant.Font_Size_12,
        color: config.Constant.COLOR_DARK_GREY,
        letterSpacing: 0.03,
        opacity: 0.5,
        fontFamily: config.Constant.Font_Regular,
        marginBottom: scale(15), marginHorizontal: scale(15)
    },
    CloseMainView: { alignSelf: 'center', },
    CloseBtn: { padding: scale(8), },
    CloseSemiView: {
        padding: scale(8),
        backgroundColor: config.Constant.COLOR_BLACK,
        borderRadius: scale(50)
    },
    CloseImg: {
        width: scale(10),
        height: scale(10),
        tintColor: config.Constant.COLOR_WHITE
    },
    BlurSty: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    },
    authorImg: {
        width: scale(83),
        height: scale(83),
        justifyContent: 'center',
        alignSelf: "center",
        marginBottom: scale(15),
        marginTop: scale(30),
        borderRadius: scale(4)
    },
    authorName: {
        fontFamily: config.Constant.Font_Semi_Bold,
        fontSize: config.Constant.Font_Size_14,
        fontWeight: "600",
        letterSpacing: 0.38,
        textAlign: "center",
        color: config.Constant.COLOR_DARK_GREY
    },
    authorDesignation: {
        fontFamily: config.Constant.Font_Regular,
        fontSize: config.Constant.Font_Size_12,
        fontWeight: "normal",
        letterSpacing: 0.33,
        textAlign: "center",
        color: config.Constant.COLOR_DARK_GREY,
        opacity: 0.6,
        marginBottom: scale(20)
    },
    viewCoursesText: {
        fontFamily: config.Constant.Font_Medium,
        fontSize: config.Constant.Font_Size_12,
        fontWeight: "500",
        letterSpacing: 0.33,
        textAlign: "center",
        color: config.Constant.COLOR_BLUE
    },
    viewCoursesView:{
        height: scale(50), marginHorizontal: scale(-15),
        borderStyle: "solid",
        borderTopWidth: 1,
        borderColor: "rgba(20, 26, 26, 0.15)",
        justifyContent: 'center',
        alignItems: "center"
    }


});
module.exports = styles;