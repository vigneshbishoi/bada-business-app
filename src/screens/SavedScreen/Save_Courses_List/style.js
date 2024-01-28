import { scale } from 'react-native-size-matters';
import config from '../../../config/index';
export default (styles = {
    mainView: {
        height: scale(80),
        borderRadius: scale(4),
        flexDirection: 'row',
        marginHorizontal: scale(15),
        flex: 1,
        // shadowColor: config.Constant.COLOR_SHADOW_HOME_LIST,
        // shadowOffset: {
        //     width: 0,
        //     height: 6,
        // },
        // shadowOpacity: 0.37,
        // shadowRadius: 7.49,
        // elevation: 12,
    },
    mainBtn: {
        flex: 1,
        flexDirection: "row",
        marginTop: scale(10)
    },
    semiView: {
        width: scale(140),
        backgroundColor: "silver",
        borderRadius: scale(5),
        justifyContent: "center"
    },
    itemTitle: {
        fontSize: scale(10),
        color: config.Constant.COLOR_DARK_GREY,
        fontFamily: config.Constant.Font_Medium,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0.27,
    },
    DescriptionView: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        paddingTop:scale(1)
    },
    clockImg: {
        width: scale(10),
        height: scale(10),
        marginTop: scale(-2)
    },
    saveImg: {
        width: scale(10),
        height: scale(14),
    },
    eyeImg: {
        width: scale(13),
        height: scale(9),
    },
    binImg: {
        width: scale(19),
        height: scale(20),
    },
    timeText: {
        fontSize: scale(10),
        color: config.Constant.COLOR_DARK_GREY,
        letterSpacing: 0.27,
        fontWeight: "normal",
        fontFamily: config.Constant.Font_Regular,
        marginLeft: scale(4),
        opacity: 0.6,
        fontStyle: "normal"
    },
    dotStyle: {
        width: scale(5),
        height: scale(5),
        borderRadius: scale(5),
        marginLeft: scale(5),
        backgroundColor: config.Constant.COLOR_GREY,
        opacity: 0.8,
        backgroundColor: "#949397",
        borderRadius: 4,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#dfdfe0"
    },
    itemAuther: {
        fontSize: scale(12),
        color: config.Constant.COLOR_DARK_GREY,
        letterSpacing: 0.33,
        fontFamily: config.Constant.Font_Medium,
        marginLeft: scale(4),
        fontWeight: "normal",
        opacity: 0.6,
        width: '60%',
        flex: 1
    },
    mainIMg: {
        flex: 1,
        borderTopLeftRadius: scale(5),
        borderBottomLeftRadius: scale(5)
    },
    viewText: {
        fontSize: scale(10),
        color: config.Constant.COLOR_WHITE,
        letterSpacing: 0.03,
        fontFamily: config.Constant.Font_Medium,
        // marginLeft: scale(4),
        // marginTop: scale(3)
    },
    watchView: {
        position: "absolute",
        flexDirection: "row",
        borderColor: "rgba(41, 40, 48, 0.5)",
        bottom: 0,
        width: scale(65), height: scale(20),
        justifyContent: 'center',
        borderTopRightRadius: scale(4),
        backgroundColor: "rgba(41, 40, 48, 0.5)",
        borderStyle: "solid",
        // borderWidth: 1,
        borderBottomLeftRadius: scale(5),
        alignItems: "center"
    },
    priceView: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        justifyContent: "space-between",
        marginBottom: scale(5),
        marginRight: scale(-6)
    },
    priceText: {
        fontSize: config.Constant.Font_Size_12,
        color: config.Constant.COLOR_DARK_GREY,
        fontFamily: config.Constant.Font_Semi_Bold,
        fontWeight: "600",
        letterSpacing: 0.33,
        fontStyle: "normal",
    },
    TextView: {
        paddingHorizontal: scale(10),
        flex: 1,
        borderTopRightRadius: scale(5),
        borderBottomRightRadius: scale(5),
        justifyContent: "space-between"
    },
    MoreView: {
        width: scale(3.8),
        height: scale(10.2),
        marginTop: scale(4)
    },
    AddToCartStyle: {
        fontSize: config.Constant.Font_Size_10,
        color: config.Constant.COLOR_BLUE,
        letterSpacing: 0.27,
        fontFamily: config.Constant.Font_Regular,
        fontWeight: "normal",
    },
    MoreBtn: {
        width: scale(20),
        height: scale(30),
        justifyContent: "center",
        alignItems: "center"
    },
    MoreTextView: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginRight: scale(-10),
        paddingTop: scale(1)
    },
    deleteView: {
        width: scale(100), backgroundColor: config.Constant.COLOR_INPUT,
        justifyContent: "center", alignItems: "center",
        marginRight: scale(15), marginVertical: scale(1),
        borderTopRightRadius: scale(4),
        borderBottomRightRadius: scale(5),
        backgroundColor: '#f4f4f4'
    },
    bestSellerTagViewStyle: {
        width: scale(70),
        height: scale(16),
        borderRadius: scale(4),
        backgroundColor: "rgba(84,70,255,0.08)",
        alignItems: 'center',
        justifyContent: 'center'
    },
    bestSellerTagTextStyle: {
        fontFamily: config.Constant.Font_Medium,
        fontSize: scale(10),
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0.5,
        color: "#5446ff"
    },
    sepratorLineStyle: {
        marginHorizontal: scale(15),
        marginTop: scale(10),
        height: 1,
        opacity: 0.1,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#292830"
    }
});
module.exports = styles;