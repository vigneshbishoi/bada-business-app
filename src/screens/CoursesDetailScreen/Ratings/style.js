import { scale } from 'react-native-size-matters';
import config from '../../../config/index';
export default (styles = {
    Coonstant: {
        flex: 1,
        flexDirection: "column-reverse"
    },
    mainView: { backgroundColor: config.Constant.COLOR_WHITE, },
    mainTitle: {
        fontSize: config.Constant.Font_Size_14,
        color: config.Constant.COLOR_DARK_GREY,
        letterSpacing: 0.38,
        fontFamily: config.Constant.Font_Semi_Bold,
        marginVertical: scale(20),
        marginHorizontal: scale(15)
    },
    line: {
        marginBottom: scale(10),
        height: scale(1),
        opacity: 0.1,
        backgroundColor: config.Constant.COLOR_DARK_GREY
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
    ItemBtn: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    BlurSty: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    },
    textInputCmt: {
        height: scale(100),
        textAlign: 'justify',
        padding: scale(10),
        marginHorizontal: scale(15),
        textAlignVertical: 'top',
        backgroundColor: config.Constant.COLOR_LIGHT_BLACK_DRAWER,
        borderRadius: scale(4),
        fontSize: config.Constant.Font_Size_12,
        fontFamily: config.Constant.Font_Regular,
        fontWeight: "normal",
        letterSpacing: 0.33,
        color: config.Constant.COLOR_DARK_GREY,
        marginVertical: scale(10)
    },
    starNumberText: {
        fontWeight: "500",
        letterSpacing: 0.38,
        textAlign: "right",
        fontSize: config.Constant.Font_Size_14,
        color: config.Constant.COLOR_DARK_GREY,
        fontFamily: config.Constant.Font_Medium,
    },
    ViewOfResultRatingNumber: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center"
    },
    MainViewOfRatingView: {
        marginVertical: scale(20),
        justifyContent: "space-between",
        flexDirection: "row",
        marginHorizontal: scale(15),
    },
    starMainView: {
        alignItems: "center", justifyContent: "center"
    },
    starBtn: {
        paddingHorizontal: scale(6),
        paddingVertical: scale(3)
    },
    customBtnView: {
        marginHorizontal: scale(15),
        marginVertical: scale(20)
    },
    errorText: {
        marginBottom: scale(-10), 
        marginHorizontal: scale(15),
        fontSize: config.Constant.Font_Size_12,
        color: config.Constant.COLOR_RED,
        letterSpacing: 0.38,
        fontFamily: config.Constant.Font_Semi_Bold,
        opacity: 0.8
    }

});
module.exports = styles;