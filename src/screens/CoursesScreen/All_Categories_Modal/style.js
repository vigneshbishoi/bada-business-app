import { scale } from 'react-native-size-matters';
import config from '../../../config/index';
export default (styles = {
    Coonstant: {
        flex: 1,
        flexDirection: "column-reverse"
    },
    mainView: { backgroundColor: config.Constant.COLOR_WHITE, height: '82%',
    borderTopLeftRadius: scale(4) ,borderTopRightRadius: scale(4)},
    mainTitle: {
        fontSize: config.Constant.Font_Size_14,
        color: config.Constant.COLOR_DARK_GREY,
        letterSpacing: 0.03,
        fontFamily: config.Constant.Font_Semi_Bold,
        marginVertical: scale(20),
        marginHorizontal: scale(15)
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
        letterSpacing: 0.03,
        fontFamily: config.Constant.Font_Semi_Bold,
        opacity: 0.9
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
        paddingVertical: scale(18)
    },
    flatMainImg: {
        width: scale(20),
        height: scale(20),
        marginLeft: scale(10)
    },
    flatText: {
        fontSize: config.Constant.Font_Size_12,
        color: config.Constant.COLOR_DARK_GREY,
        letterSpacing: 0.33,
        fontWeight: "500",
        fontFamily: config.Constant.Font_Medium,
        marginHorizontal: scale(10), flex: 1,
        paddingTop: Platform.OS == 'android' ? scale(2) : 0
    },

});
module.exports = styles;