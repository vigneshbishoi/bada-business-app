import {Platform, StyleSheet} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import config from '../../config';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  subSingleCardTop: {
    width: '100%',
    height: 127,
    borderRadius: 5,
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: scale(20),
    width: '100%',
    paddingHorizontal: scale(15),
    alignSelf: 'center',
  },
  rowListView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 18,
    width: '100%',
    paddingHorizontal: scale(15),
    alignSelf: 'center',
  },
  bgImage: {
    position: 'absolute',
    zIndex: 0,
    top: 0,
    bottom: 0,
    width: config.Constant.SCREEN_WIDTH,
    height: 127,
  },
  nameTxt: {
    fontFamily: config.Constant.Font_Medium,
    color: 'white',
    fontSize: scale(20),
    letterSpacing: 0.54,
    marginBottom: Platform.OS == 'ios' ? 0 : -8,
  },
  listTxt: {
    fontFamily: config.Constant.Font_Medium,
    color: config.Constant.COLOR_DARK_GREY,
    fontSize: scale(12),
    letterSpacing: 0.54,
  },
  decTxt: {
    fontFamily: config.Constant.Font_Regular,
    color: 'white',
    fontSize: scale(12),
    letterSpacing: 0.33,
    opacity: 0.6,
  },
  btnView: {
    paddingVertical: scale(5),
    paddingHorizontal: scale(10),
    borderRadius: 5,
    backgroundColor: 'white',
  },
  btnName: {
    fontFamily: config.Constant.Font_Regular,
    color: config.Constant.COLOR_BLUE,
    fontSize: scale(12),
    letterSpacing: 0.33,
    marginBottom: Platform.OS == 'ios' ? 0 : -2,
  },
  verText: {
    fontFamily: config.Constant.Font_Regular,
    color: config.Constant.COLOR_DARK_GREY,
    fontSize: scale(10),
    textAlign: 'center',
    opacity: 0.6,
    letterSpacing: 0.5,
    marginBottom:10
  },
  nameView: {
    paddingHorizontal: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  bodyView: {
    marginTop: -25,
    paddingTop: 20,
    zIndex: 1,
    flex: 1,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  borderView: {
    width: config.Constant.SCREEN_WIDTH - scale(30),
    backgroundColor: config.Constant.COLOR_DARK_GREY,
    opacity: 0.1,
    height: 1,
    alignSelf: 'center',
  },
});
