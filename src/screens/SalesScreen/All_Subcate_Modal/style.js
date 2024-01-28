import { color } from 'react-native-reanimated';
import { scale } from 'react-native-size-matters';
import config from '../../../config/index';
export default (styles = {
    Coonstant: {
        flex: 1,
        flexDirection: "column-reverse"
    },
    mainView: { backgroundColor: config.Constant.COLOR_WHITE, height: '82%' },
    mainTitle: {
        fontSize: config.Constant.Font_Size_14,
        color: config.Constant.COLOR_DARK_GREY,
        letterSpacing: 0.38,
        fontFamily: config.Constant.Font_Semi_Bold,
        marginVertical: scale(20),
        marginHorizontal: scale(15),
        fontWeight: "600",
    },
    borderView: {
        width: '100%',
        backgroundColor: config.Constant.COLOR_DARK_GREY,
        opacity: 0.1,
        height: 1,
        alignSelf: 'center',
    },
    staticText: {
        fontSize: config.Constant.Font_Size_12,
        color: config.Constant.COLOR_DARK_GREY,
        letterSpacing: 0.03,
        opacity: 0.5,
        fontFamily: config.Constant.Font_Regular,
        marginBottom: scale(15), marginHorizontal: scale(15)
    },
    EAEText: {
        fontSize: config.Constant.Font_Size_12,
        color: config.Constant.COLOR_DARK_GREY,
        letterSpacing: 0.33,
        fontWeight: "500",
        fontFamily: config.Constant.Font_Medium,
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
    itemMainView: {
        flexDirection: "row",
        marginHorizontal: scale(15),
        justifyContent: 'space-between',
        paddingVertical: scale(18),
    },
    clickItemView: {
        width: scale(20),
        height: scale(20),
        borderRadius: scale(20), justifyContent: "center",
        alignItems: "center",
        borderColor: config.Constant.COLOR_DARK_GREY, borderWidth: 1
    },
    tickimg: { width: scale(8), height: (6) }

});
module.exports = styles;