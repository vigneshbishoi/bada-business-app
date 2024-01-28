import { Platform, StyleSheet } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
import config from '../../config';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Constant.COLOR_WHITE,
    },
    LinearSty: {
        height: scale(62),
        width: '100%',
        justifyContent: 'center',
        paddingBottom: scale(5),
        marginBottom: -scale(5),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: '#26141a1a',
    },
    mainView: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
    },
    semiView: {},
    backImgBtn: {
        marginLeft: scale(5),
        width: scale(35),
        justifyContent: 'center',
        height: scale(36),
    },
    backImg: {
        width: scale(13),
        height: scale(11),
        marginLeft: scale(10),
        tintColor: config.Constant.COLOR_DARK_GREY,
    },
    cardBtn: {
        marginRight: scale(5),
    },
    cartTxt: {
        color: config.Constant.COLOR_DARK_GREY,
        fontFamily: config.Constant.Font_Medium,
        fontSize: scale(16),
        flex: 1,
        textAlign: 'left',
        paddingRight: scale(10),
    },
    btnView: {
        paddingVertical: scale(5),
        paddingHorizontal: scale(10),
        borderRadius: 5,
        backgroundColor: 'white',
        borderColor: '#292830',
        borderWidth: 0,
        marginRight: scale(15),
    },
    innerView: {
        flex: 1,
        backgroundColor: 'white',
        borderTopRightRadius: scale(10),
        borderTopLeftRadius: scale(10),
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: '#26141a1a',
    },
    imageViewStyle: {
        height: scale(200), 
        backgroundColor: config.Constant.COLOR_LIGHT_GREY,        
    },
    descTextStyle: {
        color: config.Constant.COLOR_DARK_GREY,
        fontFamily: config.Constant.Font_Medium,
        fontSize: scale(14),
        flex: 1,
        textAlign: 'left',
        paddingRight: scale(10),
        margin: scale(20)
    }
});