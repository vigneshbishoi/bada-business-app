import { scale } from 'react-native-size-matters';
import config from '../../../config/index';
export default (styles = {
    Coonstant: {
        flex: 1,
        flexDirection: "column-reverse"
    },
    mainView: {
        backgroundColor: config.Constant.COLOR_WHITE,
        height: '82%'
    },
    mainTitle: {
        fontSize: config.Constant.Font_Size_14,
        color: config.Constant.COLOR_DARK_GREY,
        letterSpacing: 0.38,
        fontFamily: config.Constant.Font_Semi_Bold,
        marginVertical: scale(20),
        marginHorizontal: scale(15)
    },
    ALLEAE: {
        fontSize: config.Constant.Font_Size_12,
        color: config.Constant.COLOR_DARK_GREY,
        letterSpacing: 0.38,
        opacity: 0.7,
        fontFamily: config.Constant.Font_Regular,
        marginVertical: scale(20),
        marginHorizontal: scale(15)
    },
    areyouStudent: {
        fontSize: config.Constant.Font_Size_12,
        color: config.Constant.COLOR_DARK_GREY,
        letterSpacing: 0.38,
        fontWeight: '500',
        fontFamily: config.Constant.Font_Medium,
    },
    areyouStudentView: {
        flexDirection: "row",
        marginVertical: scale(13),
        marginHorizontal: scale(15),
        alignItems: "center",
        justifyContent: "space-between"
    },
    line: {
        height: scale(1),
        opacity: 0.1,
        backgroundColor: config.Constant.COLOR_DARK_GREY
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
    checkOutView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    save50: {
        fontSize: config.Constant.Font_Size_10,
        color: config.Constant.COLOR_BLUE,
        letterSpacing: 0.5,
        fontFamily: config.Constant.Font_Medium,
        paddingHorizontal: scale(6),
        paddingVertical: scale(3), borderRadius: scale(4),
        backgroundColor: 'rgba(84,70,255, 0.1)'
    },
    NoText: {
        fontSize: config.Constant.Font_Size_12,
        color: config.Constant.COLOR_DARK_GREY,
        letterSpacing: 0.38,
        fontWeight: 'normal',
        fontFamily: config.Constant.Font_Regular,
    },
    NoView: {
        width: scale(53),
        height: scale(25),
        borderColor: 'rgba(41,40,48, 0.2)',
        borderRadius: scale(40),
        borderWidth: scale(1),
        flexDirection: 'row',
        alignItems: 'center'
    },
    noCloseImg: {
        width: scale(7),
        height: scale(7),
        tintColor: config.Constant.COLOR_WHITE
    },
    noCloseImgView: {
        width: scale(20),
        height: scale(20),
        borderRadius: scale(20),
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: "rgba(127,126,131, 0.9)",
        marginLeft: scale(2),
        marginVertical: scale(1.6),
        marginRight: scale(6)
    },
    mainItemView: {
        paddingVertical: scale(20),
        paddingHorizontal: scale(15),
    },
    mainItemImg: {
        width: scale(74),
        height: scale(74),
        marginRight: scale(10),
        backgroundColor: 'silver',
        borderRadius: scale(4)
    },
    priceSummaryText: {
        fontSize: config.Constant.Font_Size_10,
        color: config.Constant.COLOR_DARK_GREY,
        letterSpacing: 0.5,
        opacity: 0.6,
        fontWeight: 'normal',
        fontFamily: config.Constant.Font_Regular,
    },
    grandTotalView: {
        paddingHorizontal: scale(15),
        paddingVertical: scale(12),
        backgroundColor: config.Constant.COLOR_LIGHT_BLACK_DRAWER
    },
    gstView: {
        borderWidth: 1, marginHorizontal: scale(15),
        borderRadius: scale(4), borderStyle: "solid",
        borderColor: config.Constant.COLOR_BORDER_HOME_LIST,
        borderColor: "#dfdfe0",
        marginBottom: scale(20)
    },
    gstsemiView: {
        paddingHorizontal: scale(15),
        paddingVertical: scale(12),
        borderColor: "#dfdfe0",
        borderBottomWidth: 1
    }
});
module.exports = styles;