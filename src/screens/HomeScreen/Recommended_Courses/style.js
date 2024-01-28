import { scale } from 'react-native-size-matters';
import config from '../../../config/index';
export default (styles = {
    mainView: {
        height: scale(270),        
        borderRadius: scale(4),
        backgroundColor: config.Constant.COLOR_WHITE,        
        marginVertical: scale(8),
        borderColor: config.Constant.COLOR_BORDER_HOME_LIST,
        borderStyle: 'solid',
        borderWidth: scale(1),
        shadowColor: config.Constant.COLOR_SHADOW_HOME_LIST,
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,                        
    },
    semiView: {
        height: scale(185),
        backgroundColor: "silver",
        borderTopLeftRadius: scale(8),
        borderTopRightRadius: scale(8),
    },
    itemTitle: {
        fontSize: config.Constant.Font_Size_12,
        color: config.Constant.COLOR_DARK_GREY,
        letterSpacing: 0.33,
        fontWeight: "500",
        fontFamily: config.Constant.Font_Medium,
        marginTop: scale(10),
    },
    DescriptionView: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        paddingTop: scale(1)
    },
    clockImg: {
        width: scale(12),
        height: scale(12),
        marginTop: scale(-2)
    },
    saveImg: {
        width: scale(12),
        height: scale(14.9),
    },
    eyeImg: {
        width: scale(17),
        height: scale(12),
    },
    timeText: {
        fontSize: config.Constant.Font_Size_12,
        color: config.Constant.COLOR_DARK_GREY,
        letterSpacing: 0.33,
        fontFamily: config.Constant.Font_Medium,
        marginLeft: scale(4),
        opacity:0.6
    },
    dotStyle: {
        width: scale(5),
        height: scale(5),
        borderRadius: scale(5),
        marginLeft: scale(5),
        backgroundColor: config.Constant.COLOR_GREY
    },
    itemAuther: {
        fontSize: config.Constant.Font_Size_12,
        color: config.Constant.COLOR_DARK_GREY,
        letterSpacing: 0.33,
        fontWeight: "normal",
        fontFamily: config.Constant.Font_Medium,
        marginLeft: scale(4),
        opacity: 0.6
    },
    mainIMg: {
        flex: 1,
        borderTopLeftRadius: scale(4),
        borderTopRightRadius: scale(4)
    },
    viewText: {
        fontSize: config.Constant.Font_Size_12,
        color: config.Constant.COLOR_WHITE,
        letterSpacing: 0.03,

        marginLeft: scale(3.5)
    },
    watchView: {
        position: "absolute",
        flexDirection: "row",
        borderColor: "rgba(41, 40, 48, 0.5)",
        bottom: 0,
        width: scale(80), height: scale(30),
        justifyContent: 'center',
        alignItems: "center",
        borderTopRightRadius: scale(4),
        backgroundColor: "rgba(41, 40, 48, 0.6)",
        borderStyle: "solid",
        borderWidth: 1,
        alignItems: 'center'
    },
    priceView: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        paddingHorizontal: scale(10),
        marginBottom: scale(10),
        justifyContent: "space-between"
    },
    priceText: {
        fontSize: config.Constant.Font_Size_14,
        color: config.Constant.COLOR_DARK_GREY,
        letterSpacing: 0.03,
        marginTop: scale(5),
        fontFamily: config.Constant.Font_Semi_Bold
    },
    bestSellerTagViewStyle: {
        width: scale(77),
        height: scale(20),
        borderRadius: scale(4),
        backgroundColor: "#5446ff",
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        alignSelf:'flex-end',
        bottom: scale(4),
        right: scale(8)
    },
    bestSellerTagTextStyle: {
        fontFamily: config.Constant.Font_Medium,
        fontSize: scale(11),
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0.5,
        color: config.Constant.COLOR_WHITE
    }
});
module.exports = styles;