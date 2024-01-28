import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  FlatList,
  ScrollView,
} from 'react-native';
//import styles from './style';
import config from '../../config/index';
import images from '../../config/Images';
import Ripple from 'react-native-material-ripple';
import {scale} from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import {
  TimeWhite,
  TimeGrey,
  ForwardWhite,
  DollarWhite,
  DollarBlue,
} from '../../assets/svg';

export default function CreditScores(props) {
  const myList = useRef();
  const [selectCate, setSelectCate] = useState(0);
  const [EAEScore, setEAEScore] = useState(null);
  const [PSCScore, setPSCScore] = useState(null);
  const [PSCHistory, setPSCHistory] = useState([]);
  const [EAEHistory, setEAEHistory] = useState([]);
  const Tab = ['Point Summary', 'Activation Summary'];

  useEffect(() => {
    getEAECreditScore();
    getPSCCreditScore();
    getEAECreditHistory();
    getPSCCreditHistory();
  }, []);

  const getEAECreditScore = async () => {
    var data = await modules.APIServices.GetApiCall(
      config.ApiEndpoint.GET_EAE_SCORE,
    );
    if (data.success == true) {
      setEAEScore(data.data);
    } else {
      // Alert.alert('error', data.message);
    }
  };
  const getPSCCreditScore = async () => {
    var data = await modules.APIServices.GetApiCall(
      config.ApiEndpoint.GET_PSE_SCORE,
    );
    if (data.success == true) {
      setPSCScore(data.data);
    } else {
      // Alert.alert('error', data.message);
    }
  };
  const getPSCCreditHistory = async () => {
    var data = await modules.APIServices.GetApiCall(
      config.ApiEndpoint.GET_PSC_HISTORY,
    );
    if (data.success == true) {
      setPSCHistory(data.data);
    } else {
      // Alert.alert('error', data.message);
    }
  };

  const getEAECreditHistory = async () => {
    config.Constant.showLoader.showLoader();
    var formData = {
      page: 0,
      start_date: '',
      end_date: '',
    };
    var data = await modules.APIServices.PostApiCall(
      config.ApiEndpoint.GET_EAE_HISTORY,
      formData,
    );
    config.Constant.showLoader.hideLoader();
    if (data.success == true) {
      setEAEHistory(data.data);
    } else {
      Alert.alert('error', data.message);
    }
  };

  const Header = () => {
    return (
      <View style={[styles.LinearSty, styles.semiView, {}]}>
        <Pressable
          onPress={() => props.navigation.goBack()}
          style={styles.backImgBtn}>
          <Image
            style={styles.backImg}
            source={images.BackIcon}
            resizeMode={'cover'}
          />
        </Pressable>
        <Text style={styles.cartTxt}>{config.I18N.t('creditScore')}</Text>
      </View>
    );
  };

  const Item = ({item, index}) => {
    return (
      <Pressable
        onPress={() => [
          setSelectCate(index),
          //   myList.current.scrollToIndex({
          //     animated: true,
          //     index: index,
          //     viewPosition: 0,
          //   }),
        ]}>
        <View style={styles.flacCateView}>
          <Text
            style={[
              styles.flatCateText,
              {
                fontFamily:
                  selectCate == index
                    ? config.Constant.Font_Semi_Bold
                    : config.Constant.Font_Regular,
                opacity: selectCate == index ? 1 : 0.6,
              },
            ]}>
            {item}
          </Text>
        </View>
        <View
          style={[
            styles.flatCateBottomLine,
            {
              backgroundColor:
                selectCate == index
                  ? config.Constant.COLOR_DARK_GREY
                  : 'transparent',
            },
          ]}
        />
      </Pressable>
    );
  };
  const ItemPoint = ({item, index}) => {
    return (
      <View style={styles.listViewBG}>
        <View style={{flex: 1}}>
          <Text style={styles.listViewTitle}>{item.title}</Text>
          <View style={styles.textRow}>
            <TimeGrey />
            <Text style={styles.listViewDesc}> {item.date} </Text>
            {/* <View style={styles.dotStyle} />
            <Text style={styles.listViewDesc}> 2 Videos </Text> */}
          </View>
        </View>
        {!!item.creditUsed && (
          <Text style={styles.listViewCount}>-{item.creditUsed} </Text>
        )}
        {!!item.creditUsed && <DollarBlue />}
      </View>
    );
  };
  const tab1View = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollViewStyle}>
        <Text style={styles.summeryText}>
          {config.I18N.t('pointSummeryDescription')}
        </Text>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={styles.subSingleCardTop}
          colors={['#5446ff', '#8d7cff']}>
          <Image
            resizeMode={'cover'}
            source={require('../../assets/images/bitmapPng.png')}
            style={styles.bgImage}
          />
          <Text style={styles.cardTitle}>{config.I18N.t('balanceCredit')}</Text>
          <View style={styles.borderSmallLine} />
          <View style={styles.cardRowView}>
            <DollarWhite />
            <Text style={styles.pendingPointCount}>
              {' '}
              {!!EAEScore && !!EAEScore.creditConsumed
                ? EAEScore.creditConsumed
                : '0'}{' '}
            </Text>
            <Text style={styles.totalPointCount}>
              /{' '}
              {!!EAEScore && !!EAEScore.creditBalance
                ? EAEScore.creditBalance
                : '0'}{' '}
            </Text>
            <Text style={styles.creditYear}>{config.I18N.t('creditYear')}</Text>
          </View>
          <View style={styles.cardRowView}>
            <ForwardWhite />
            <Text style={styles.creditCarried}>
              {' '}
              0 {config.I18N.t('creditCarr  ieForward')}
            </Text>
          </View>
          <View style={[styles.cardRowView, {marginTop: 30}]}>
            <TimeWhite />
            <Text style={styles.lastCarried}>
              {' '}
              {config.I18N.t('lastAdded')} 0 {config.I18N.t('creditOn')}
            </Text>
            <Text style={styles.lastCarriedDate}>JAN 04, 2021</Text>
          </View>
        </LinearGradient>
        <View style={styles.cardRowView}>
          <Text style={styles.transactionTitle}>
            {EAEHistory.length > 0 && config.I18N.t('recentTransaction')}
          </Text>
        </View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={EAEHistory}
          style={styles.flatListStyle}
          renderItem={(item, index) => ItemPoint(item, index)}
          keyExtractor={(item, index) => index.toString()}
        />
      </ScrollView>
    );
  };
  const tab2View = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollViewStyle}>
        <Text style={styles.summeryText}>
          {config.I18N.t('activateSummeryDescription')}
        </Text>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={styles.subSingleCard2Top}
          colors={['#292830', '#53515e']}>
          <Image
            resizeMode={'cover'}
            source={require('../../assets/images/bitmapPng.png')}
            style={styles.bgImage2}
          />
          <Text style={[styles.cardTitle, {color: '#c5c5c8'}]}>
            {config.I18N.t('balanceCredit')}
          </Text>
          <View
            style={[
              styles.borderSmallLine,
              {backgroundColor: '#c5c5c8', marginBottom: scale(5)},
            ]}
          />
          <View style={styles.cardRowView}>
            <Text style={styles.pendingPointCount}>
              {!!PSCScore && !!PSCScore.courseActivated
                ? PSCScore.courseActivated
                : '0'}{' '}
            </Text>
            <Text style={styles.totalPointCount}>
              /{' '}
              {!!PSCScore && !!PSCScore.creditBalance
                ? PSCScore.creditBalance
                : '0'}{' '}
            </Text>
            <Text style={styles.creditYear}>{config.I18N.t('pscCourse')}</Text>
          </View>

          <View style={[styles.cardRowView, {marginTop: 20}]}>
            <TimeWhite />
            <Text style={styles.lastCarried}>
              {' '}
              {config.I18N.t('lastAdded')} 0 {config.I18N.t('creditOn')}
            </Text>
            <Text style={styles.lastCarriedDate}> JAN 04, 2021</Text>
          </View>
        </LinearGradient>
        <View style={styles.cardRowView}>
          <Text style={styles.transactionTitle}>
            {PSCHistory.length>0 && config.I18N.t('recentTransaction')}
          </Text>
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={PSCHistory}
          style={styles.flatListStyle}
          renderItem={(item, index) => ItemPoint(item, index)}
          keyExtractor={(item, index) => index.toString()}
        />
      </ScrollView>
    );
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.mainContainer}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={Tab}
          horizontal
          style={styles.flatStyle}
          renderItem={(item, index) => Item(item, index)}
          keyExtractor={(item, index) => index.toString()}
        />
        {selectCate == 0 ? tab1View() : tab2View()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: Constant.COLOR_WHITE,
  },
  mainContainer: {
    borderTopWidth: scale(1),
    borderLeftWidth: scale(1),
    borderRightWidth: scale(1),
    borderRadius: 20,
    borderColor: '#26141a1a',
  },
  LinearSty: {
    height: scale(55),
    width: '100%',
    justifyContent: 'center',
    paddingBottom: scale(0),
    marginBottom: scale(5),
  },
  semiView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0,
    borderColor: '#26141a1a',
  },
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
    borderWidth: 0.5,
    marginRight: scale(15),
  },
  btnName: {
    fontFamily: config.Constant.Font_Medium,
    color: config.Constant.COLOR_BLUE,
    fontSize: scale(12),
    letterSpacing: 0.33,
    marginBottom: Platform.OS == 'ios' ? 0 : -2,
  },
  flacCateView: {
    marginRight: scale(8),
    marginVertical: scale(4),
    paddingVertical: scale(8),
    paddingHorizontal: scale(15),
    borderColor: config.Constant.COLOR_SILVER,
  },
  flatCateText: {
    fontSize: config.Constant.Font_Size_12,
    color: config.Constant.COLOR_DARK_GREY,
    letterSpacing: 0.03,
    fontWeight: '600',
    letterSpacing: 0.33,
    fontFamily: config.Constant.Font_Semi_Bold,
  },
  flatCateBottomLine: {
    height: scale(2),
    marginRight: scale(8),
  },
  flatStyle: {
    marginTop: scale(10),
    marginBottom: scale(20),
    paddingLeft: scale(15),
    borderBottomWidth: 1,
    borderColor: config.Constant.COLOR_SILVER,
  },
  flatListStyle: {
    paddingBottom: 200,
    //flex:1,
  },
  summeryText: {
    color: config.Constant.COLOR_DARK_GREY,
    fontFamily: config.Constant.Font_Regular,
    fontSize: scale(12),
    textAlign: 'left',
    letterSpacing: 0.33,
    opacity: 0.8,
    marginHorizontal: scale(15),
  },
  scrollViewStyle: {},
  subSingleCard2Top: {
    marginHorizontal: scale(15),
    marginVertical: scale(20),
    height: 160,
    borderRadius: 5,
  },
  bgImage2: {
    position: 'absolute',
    zIndex: 0,
    top: 0,
    bottom: 0,
    width: config.Constant.SCREEN_WIDTH,
    height: 160,
  },
  subSingleCardTop: {
    marginHorizontal: scale(15),
    marginVertical: scale(20),
    height: 185,
    borderRadius: 5,
  },
  bgImage: {
    position: 'absolute',
    zIndex: 0,
    top: 0,
    bottom: 0,
    width: config.Constant.SCREEN_WIDTH,
    height: 185,
  },
  cardTitle: {
    fontFamily: config.Constant.Font_Medium,
    fontSize: scale(12),
    fontWeight: '500',
    fontStyle: 'normal',
    letterSpacing: 0.33,
    color: '#d1cdff',
    marginTop: scale(15),
    marginHorizontal: scale(15),
  },
  borderSmallLine: {
    marginHorizontal: scale(15),
    marginTop: scale(3),
    backgroundColor: '#d1cdff',
    width: scale(10),
    height: 1,
  },
  cardRowView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: scale(15),
  },
  pendingPointCount: {
    color: 'white',
    fontSize: scale(30),
    fontWeight: '500',
    fontFamily: config.Constant.Font_Medium,
  },
  totalPointCount: {
    color: 'white',
    fontSize: scale(14),
    fontWeight: '600',
    fontFamily: config.Constant.Font_Semi_Bold,
  },
  creditYear: {
    fontFamily: config.Constant.Font_Regular,
    fontSize: scale(10),
    letterSpacing: 0.33,
    color: '#ffffff',
  },
  creditCarried: {
    fontFamily: config.Constant.Font_Regular,
    fontSize: scale(12),
    letterSpacing: 0.33,
    color: '#ffffff',
    opacity: 0.8,
  },
  lastCarried: {
    fontFamily: config.Constant.Font_Regular,
    fontSize: scale(10),
    letterSpacing: 0.37,
    color: '#ffffff',
    opacity: 0.7,
  },
  lastCarriedDate: {
    fontFamily: config.Constant.Font_Semi_Bold,
    fontSize: scale(10),
    letterSpacing: 0.27,
    color: '#ffffff',
    opacity: 0.7,
  },
  transactionTitle: {
    fontFamily: config.Constant.Font_Semi_Bold,
    fontSize: config.Constant.Font_Size_14,
    fontWeight: '600',
    letterSpacing: 0.38,
    color: config.Constant.COLOR_DARK_GREY,
    //marginHorizontal: scale(15),
    marginTop: scale(10),
    marginBottom: scale(10),
  },
  listViewBG: {
    backgroundColor: config.Constant.COLOR_LIGHT_BLACK_DRAWER,
    marginTop: 10,
    marginHorizontal: scale(15),
    padding: scale(15),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dotStyle: {
    width: scale(5),
    height: scale(5),
    borderRadius: scale(15),
    backgroundColor: config.Constant.COLOR_GREY,
    opacity: 0.8,
  },
  listViewTitle: {
    fontFamily: config.Constant.Font_Semi_Bold,
    fontSize: scale(12),
    letterSpacing: 0.33,
    fontWeight: '500',
    color: config.Constant.COLOR_DARK_GREY,
  },
  listViewDesc: {
    fontFamily: config.Constant.Font_Regular,
    fontSize: scale(12),
    letterSpacing: 0.33,
    fontWeight: '500',
    color: config.Constant.COLOR_DARK_GREY,

    opacity: 0.6,
  },
  textRow: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginTop: scale(5),
  },
  listViewCount: {
    fontFamily: config.Constant.Font_Semi_Bold,
    fontSize: scale(20),
    letterSpacing: 0.54,
    fontWeight: '500',
    color: config.Constant.COLOR_DARK_GREY,
  },
});
