import {Platform, StyleSheet} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
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
    paddingHorizontal: scale(15)
  },
  textView1: {
    marginTop: 10,
    width: '90%',
    alignSelf: 'center',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  textView2: {
    width: '90%',
    borderTopWidth: 0,
    alignSelf: 'center',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  textView3: {
    width: '90%',
    borderTopWidth: 0,
    alignSelf: 'center',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    marginBottom: scale(5),
  },
  borderStyle: {
    width: '100%',
  },
  btnStyle: {
    alignSelf: 'center',
    marginVertical: 30,
    width: config.Constant.SCREEN_WIDTH - scale(30),
  },
  absoluteView: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    backgroundColor: 'white',
    zIndex: 1,
    padding: 7,
    borderRadius: 20,
    elevation: 10,
    justifyContent:'center',
    alignItems:'center'
  },
});