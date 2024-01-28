import { Platform } from 'react-native';
import { scale } from 'react-native-size-matters';
import config from '../../../config/index';
export default (styles = {
    Contact: {
        flex: 1,
        backgroundColor: config.Constant.COLOR_WHITE
    },
    LinearSty: {
        height: scale(50),
        width: '100%'
    },
    mainView: {
        flex: 1,
        backgroundColor: config.Constant.COLOR_WHITE, width: '100%',
        marginTop: scale(-15),
        borderTopLeftRadius: scale(10),
        borderTopRightRadius: scale(10)
    },
    semiView: {
        height: scale(51),
        marginTop: scale(15),
        // flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: scale(5),
        backgroundColor: config.Constant.COLOR_WHITE
    },
    backImgBtn: {
        marginLeft: scale(5),
        width: scale(35),
        justifyContent: "center",
        height: scale(36)
    },
    backImg: {
        width: scale(12),
        height: scale(12), marginLeft: scale(10),
        tintColor: config.Constant.COLOR_DARK_GREY
    },
    textInputSty: {
        flex: 1, fontSize: config.Constant.Font_Size_12,
        fontFamily: config.Constant.Font_Regular,
        margin: 0, padding: 0,
        fontWeight: "normal",
        letterSpacing: 0.33,
        color: config.Constant.COLOR_DARK_GREY
    },
    recodeBtn: {
        marginRight: scale(5),
        width: scale(35),
        justifyContent: "center",
        height: scale(36),
        alignItems: "flex-end"
    },
    recodeImg: {
        width: scale(10.2),
        height: scale(15.1),
        marginRight: scale(10),
        tintColor: config.Constant.COLOR_DRAWER_LIGHT
    },
    closeImg: {
        width: scale(10),
        height: scale(10),
        marginRight: scale(10),
        tintColor: config.Constant.COLOR_DRAWER_LIGHT
    },
    borderView: {
        width: '100%',
        backgroundColor: config.Constant.COLOR_DARK_GREY,
        opacity: 0.1,
        height: 1,
        alignSelf: 'center',
    },
    keywordText: {
        fontSize: config.Constant.Font_Size_14,
        color: config.Constant.COLOR_DARK_GREY,
        letterSpacing: 0.03,
        fontFamily: config.Constant.Font_Semi_Bold,
        marginHorizontal: scale(15), marginTop: scale(18), marginBottom: scale(5)
    },
    kewordView: {
        flexWrap: 'wrap',
        flexDirection: "row",
        marginHorizontal: scale(15)
    },
    keywordItem: {
        paddingVertical: scale(8),
        paddingHorizontal: scale(18),
        backgroundColor: config.Constant.COLOR_INPUT,
        // marginHorizontal: scale(8),
        marginRight: scale(8),
        marginVertical: scale(5),
        borderRadius: scale(5)
    },
    keywordItemText: {
        fontSize: config.Constant.Font_Size_12,
        color: config.Constant.COLOR_DARK_GREY,
        letterSpacing: 0.03,
        fontFamily: config.Constant.Font_Regular,
    },
    categoriesText: {
        fontSize: config.Constant.Font_Size_14,
        color: config.Constant.COLOR_DARK_GREY,
        letterSpacing: 0.03,
        fontFamily: config.Constant.Font_Semi_Bold,
        marginHorizontal: scale(15), marginTop: scale(18),
        marginBottom: scale(8)
    },
    categoriesView: {
        flex: 1, marginHorizontal: scale(15),
        borderTopLeftRadius: scale(5),
        borderTopRightRadius: scale(5),
        borderWidth: 0.4, borderBottomWidth: 0,
        borderColor: Constant.COLOR_GREY
    },
    categoriesSemiView: {
        height: scale(50),
        backgroundColor: config.Constant.COLOR_INPUT,
        borderTopRightRadius: scale(5),
        borderTopLeftRadius: scale(5),
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center"
    },
    filterText: {
        fontSize: config.Constant.Font_Size_10,
        color: config.Constant.COLOR_DARK_GREY,
        letterSpacing: 0.5,
        opacity: 0.7,
        fontFamily: config.Constant.Font_Regular,
        marginHorizontal: scale(15), flex: 1
    },
    EAEBtn: {
        padding: scale(6), borderRadius: scale(5),
        paddingHorizontal: scale(30),
        backgroundColor: config.Constant.COLOR_PRIMARY
    },
    EAEText: {
        fontSize: config.Constant.Font_Size_12,
        color: config.Constant.COLOR_WHITE,
        letterSpacing: 0.03,
        fontFamily: config.Constant.Font_Semi_Bold,
    },
    EAEView: {
        flex: 1.4,
        flexDirection: 'row',
        alignItems: 'center',
        flexDirection: "row",
    },
    PSCText: {
        fontSize: config.Constant.Font_Size_12,
        color: config.Constant.COLOR_DARK_GREY,
        letterSpacing: 0.03, paddingHorizontal: scale(30),
        fontWeight: '500',
        opacity: 0.9,
        fontFamily: config.Constant.Font_Medium,
    },
    staticTextBold: {
        fontSize: config.Constant.Font_Size_10,
        color: config.Constant.COLOR_DARK_GREY,
        letterSpacing: 0.5,
        fontWeight: '500',
        fontFamily: config.Constant.Font_Semi_Bold,
    },
    staticText: {
        fontSize: config.Constant.Font_Size_10,
        color: config.Constant.COLOR_DARK_GREY,
        letterSpacing: 0.5,
        opacity: 0.8,
        fontFamily: config.Constant.Font_Regular,
    },
    flatBottomView: {
        marginHorizontal: scale(15),
        borderBottomWidth: 0.4,
        borderColor: Constant.COLOR_GREY,
        borderBottomLeftRadius: scale(5),
        borderBottomRightRadius: scale(5),
        borderLeftWidth: 0.4,
        borderRightWidth: 0.4,
        marginBottom: scale(20)
    },
    flatBottomLine: {
        marginHorizontal: scale(15),
        height: scale(1),
        marginVertical: scale(10),
        backgroundColor: config.Constant.COLOR_WHITE
    },
    flatItem: {
        flexDirection: "row", backgroundColor: "transperent",
        borderRightWidth: 0.4,
        borderLeftWidth: 0.4, paddingHorizontal: scale(15), borderColor: Constant.COLOR_GREY,
        marginHorizontal: scale(15), paddingVertical: scale(10), alignItems: "center"
    },
    flatMainImg: { width: scale(20), height: scale(20) },
    flatText: {
        fontSize: config.Constant.Font_Size_12,
        color: config.Constant.COLOR_DARK_GREY,
        letterSpacing: 0.03,
        fontWeight: "500",
        fontFamily: config.Constant.Font_Medium,
        marginHorizontal: scale(10), flex: 1,
        paddingTop: Platform.OS == 'android' ? scale(4) : 0
    },
    flatDownArrow: {
        width: scale(12),
        height: scale(7),
        tintColor: config.Constant.COLOR_DARK_GREY,
        opacity: 1
    },
    flatInsideArr: {
        borderRightWidth: 0.4, flexWrap: 'wrap',
        flexDirection: "row",
        marginHorizontal: scale(15),
        borderLeftWidth: 0.4, paddingHorizontal: scale(15), borderColor: Constant.COLOR_GREY,
    },
    topicText:{
        opacity: 0.8,
        fontFamily: config.Constant.Font_Regular,
        fontSize: config.Constant.Font_Size_10,
        fontWeight: "normal",
        letterSpacing: 0.5,
        marginRight: scale(5),
        color: config.Constant.COLOR_DARK_BLACK
    }
});
module.exports = styles;