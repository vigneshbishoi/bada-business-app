import { scale } from 'react-native-size-matters';
import config from '../../../config/index';
export default (styles = {
    mainView: {
        width: scale(195),
        height: scale(60),
        padding: scale(5),
        borderRadius: scale(4),
        backgroundColor: config.Constant.COLOR_WHITE,
        marginRight: scale(10),
        marginHorizontal: scale(5),
        marginVertical: scale(5),
        flexDirection: "row",
        alignItems: 'center',
        borderColor: config.Constant.COLOR_BORDER_HOME_LIST,
        borderWidth: scale(1),
    },
    semiview: {
        width: scale(50),
        height: scale(50),
        borderRadius: scale(5),
        backgroundColor: config.Constant.COLOR_LIGHT_BLACK_DRAWER,
        justifyContent: "center",
        alignItems: "center"
    },
    itemTitle: {
        fontSize: config.Constant.Font_Size_12,
        color: config.Constant.COLOR_DARK_GREY,
        letterSpacing: 0.03, width: "65%",
        fontFamily: config.Constant.Font_Medium, marginLeft: scale(10)
    },
    imgsty: { width: scale(20), height: scale(20) }
});
module.exports = styles;