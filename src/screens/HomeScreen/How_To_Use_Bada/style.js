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
        letterSpacing: 0.03,
        fontFamily: config.Constant.Font_Semi_Bold,
        marginVertical: scale(20),
        marginHorizontal: scale(15)
    },
    line: {
        marginBottom: scale(20),
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
    EAEItemView: {
        marginHorizontal: scale(12),
        paddingHorizontal: scale(3),
        marginTop: scale(5),
        paddingVertical: scale(5),
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: scale(5)
    },
    PSCItemView: {
        marginHorizontal: scale(12),
        paddingHorizontal: scale(3),
        marginVertical: scale(15),
        paddingVertical: scale(5),
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: scale(5)
    },
    EAEText: {
        fontSize: config.Constant.Font_Size_12,
        color: config.Constant.COLOR_DARK_GREY,
        letterSpacing: 0.03,
        fontFamily: config.Constant.Font_Semi_Bold,
    },
    imageStatic: { width: scale(30), height: scale(30) },
    EAEItemSemiText: {
        fontSize: config.Constant.Font_Size_12,
        color: config.Constant.COLOR_DARK_GREY,
        letterSpacing: 0.03,
        fontFamily: config.Constant.Font_Regular,
    },
    EAEInsideViewText: {
        flex: 1,
        marginLeft: scale(12),
        justifyContent: 'space-between'
    },
    EAEInsideViewStaticText: {
        marginTop: scale(4), fontSize: config.Constant.Font_Size_12,
        color: config.Constant.COLOR_DARK_GREY,
        letterSpacing: 0.03,
        opacity: 0.5,
        fontFamily: config.Constant.Font_Regular,
    },
    TipView: {
        backgroundColor: config.Constant.COLOR_HOME__LIGHT_CLICABLE,
        padding: scale(15),
        marginHorizontal: scale(15),
        borderRadius: scale(5),
        flexDirection: "row",
        marginBottom: scale(30),
        alignItems:"center"
    },
    TipImg: { width: scale(8), height: scale(20) },
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
    }

});
module.exports = styles;