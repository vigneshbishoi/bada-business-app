import React, { useState, useEffect, useMemo } from 'react';
import { View, Text, Image, Platform, Pressable, FlatList, DeviceEventEmitter } from 'react-native';
import { scale } from 'react-native-size-matters';
import style from './style';
import config from '../../config/index';
import { Header, Search_Call, Add_To_Cart } from '../../component/index';
import images from '../../config/Images';
import Search_Modal from '../HomeScreen/Search_Modal/index';
import { Courses_Screen_List, SaveAndUnsaveHandle } from '../../component/index';
import All_Categories_Modal from './All_Categories_Modal/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { } from '../../Redux/actions/userData';
import EAEBuyModal from './EAEBuyModal/index';
import modules from '../../modules';
import EAECheckoutPopup from '../../component/EAECheckoutPopup';
import RazorpayCheckout from 'react-native-razorpay';
import {
  setCoursesScreenEAEData, setCoursesScreenPSCData,
  setSaveGetList
} from '../../Redux/actions/index'
import voice from '@react-native-voice/voice'
import { useIsFocused, } from "@react-navigation/native";

function CoursesScreen(props) {
  const isVisible = useIsFocused();
  const [searchModel, setSearchModal] = useState(false);
  const [EAEBtn, setEAEBtn] = useState(true);
  const [categoriesModal, setCategoriesModal] = useState(false);
  const [descriptionLineEAE, setdescriptionLineEAE] = useState(2);
  const [descriptionLinePSC, setdescriptionLinePSC] = useState(2);
  const [EAEBuy, setEAEBuy] = useState(false);
  const [EAEListcount, setEAEListCount] = useState(0);
  const [EAEList, setEAEList] = useState([]);
  const [PSCListcount, setPSCListCount] = useState(20);
  const [PSCList, setPSCList] = useState([]);
  const [PSCPaymentData, setPSCPaymentData] = useState(null);
  const [PSCTotalCourses, setPSCTotalCourses] = useState('')
  const [search, setSearch] = useState('')
  const [checkMicColor, setCheckMicColor] = useState(false)
  const [onlyCallOnce, setOnlyCallonce] = useState(true)

  useEffect(async () => {
    if (isVisible) {
      if (props?.route?.params && props?.route?.params.course_type == 'eae') {
        setEAEBtn(true)
        props.navigation.setParams({ course_type: null })
      }
      else if (props?.route?.params == undefined) {
      }
    }
    if (onlyCallOnce == true) {
      EAEListFun();
      PSCListFun();
      getPaymentDetails();
      setTimeout(() => {
        setOnlyCallonce(false)
      }, 300);
    }
    console.log('isVisible', isVisible);
  }, [isVisible]);

  const EAEListFun = async () => {
    EAEListcount == 0 ?
      config.Constant.showLoader.showLoader() : null
    var formData = {
      "progress": "NOT_INITIATED",
      "page": EAEListcount,
      "categoryId": [],
      "subCategoryId": [],
      "authorId": "",
      "sort": "asc"
    };
    var EAE = await modules.APIServices.PostApiCall(
      config.ApiEndpoint.EAELIST_COURSE_TAB,
      formData
    );
    if (EAE.success == true) {

      config.Constant.showLoader.hideLoader()
      props.setCoursesScreenEAEData(EAE, () => { })
      EAEListcount == 0 ?
        setEAEList(EAE.data) :
        EAE.data.map((mapData) => {
          setEAEList(EAEList => [...EAEList, mapData]);
        })
      setEAEListCount(EAEListcount + 1)
    } else {
      config.Constant.showLoader.hideLoader()
      // Alert.alert('error', data.message);
    }
  };

  const PSCListFun = async () => {
    PSCListcount == 20 ?
      config.Constant.showLoader.showLoader() : null
    var formData = {
      "type": "all",
      "categoryId": "",
      "page": 0,
      "limit": PSCListcount
    }
    var PSC = await modules.APIServices.PostApiCall(
      config.ApiEndpoint.RECOMMENDED_COURSES,
      formData,
    );
    if (PSC.success == true) {
      config.Constant.showLoader.hideLoader()
      props.setCoursesScreenPSCData(PSC, () => { })
      setPSCList(PSC.data.pscCourse)
      setPSCTotalCourses(PSC.data.total)
      setPSCListCount(PSCListcount + 20)
    } else {
      config.Constant.showLoader.hideLoader()
      // Alert.alert('error', data.message);
    }
  };

  const SearchApi = async (key, item, data, subdata, subtitle, subindex, id, subId) => {
    setTimeout(() => {
      [setSearch(''), setCheckMicColor(false),
      setSearchModal(false),
      props.navigation.navigate('SalesScreen', {
        SearchKeyResponse: item,
        DataTitle: data,
        SubData: subdata,
        subtitle: subtitle,
        subindex: subindex,
        searchModaid: id,
        searchSubId: subId,
      })]
    }, 300)
  }

  const getPaymentDetails = async () => {
    var PSC = await modules.APIServices.GetApiCall(
      config.ApiEndpoint.GET_PSC_PAYMENT_DETAILS,
    );
    if (PSC.success == true) {
      setPSCPaymentData(PSC.data);
    } else {
      // Alert.alert('error', data.message);
    }
  };


  const _onPressButton = (order_id, amount) => {
    var options = {
      description: 'Credits towards consultation',
      image:
        'https://static.businessworld.in/article/article_extra_large_image/1588585807_97nIIG_Bada_Business.jpg',
      currency: 'INR',
      key: 'rzp_test_hm8CSdaIVWEtxA',
      amount: amount,
      name: 'Bada Business',
      order_id: order_id,
      prefill: {
        email: !!config.Constant.USER_DATA.email ? config.Constant.USER_DATA.email : '',
        contact: config.Constant.USER_DATA.country_code+''+config.Constant.USER_DATA.phone_no,
        name: `${!!config.Constant.USER_DATA.first_name
          ? config.Constant.USER_DATA.first_name
          : ''
          } ${!!config.Constant.USER_DATA.last_name
            ? config.Constant.USER_DATA.last_name
            : ''
          }`,
      },
      theme: { color: config.Constant.COLOR_BLUE },
    };
    RazorpayCheckout.open(options)
      .then(data => {
        // handle success
        //alert(`Success: ${data.razorpay_payment_id}`);
        props.navigation.reset({
          index: 1,
          routes: [
            {
              name: 'SuccessScreen',
              params: {
                title: 'All EAE Topics',
                image: null,
              },
            },
          ],
        });
      })
      .catch(error => {
        // handle failure
        //alert(`Error: ${error.code} | ${error.description}`);
      });
  };

  const setPayNowPopup = async (orderType, cart_total, discountpercent) => {
    setEAEBuy(false)
    config.Constant.showLoader.showLoader();
    var formData = {
      discount: discountpercent,
      courseId: '5e0293ac518685681276fa02',
      discountType: orderType,
      orderType: 'NORMAL',
      amount: cart_total,
      redeemedPoints: '',
    };
    var data = await modules.APIServices.PostApiCall(
      config.ApiEndpoint.CREATE_ORDER,
      formData,
    );
    config.Constant.showLoader.hideLoader();
    if (data.success == true) {
      _onPressButton(data.data.transactionOrderId, data.data.amount * 100);
    } else {
      // Alert.alert('error', data.message);
    }
  };

  return (
    <View style={style.container}>
      <Header PressDrawer={() => props.navigation.openDrawer()}
        CartCount={props?.homeData?.savecarts} />
      <Courses_Screen_List
        ListHeaderComponent={(
          <View>
            <Text style={style.CoursesText}>
              {config.I18N.t('bottom_Tab_Courses')}
            </Text>
            <Search_Call PressSearch={() => setSearchModal(true)} props={props}
              search={search} checkMicColor={checkMicColor}
              PressOnMic={() => [voice.start('en-US'),
              setCheckMicColor(true), setSearch('')]}
              _onSpeechResults={(e) => [setCheckMicColor(false),
              setSearch(e.value[0]),
              SearchApi('', e.value[0], '', [], '', '', '', "")]}
              _onSpeechEnd={() => setCheckMicColor(false)}
            />
            <View style={style.EAEMainView}>
              <View style={style.container}>
                <View style={style.splitViewEAE}>
                  <Pressable style={[style.EAEBtn, {
                    borderColor: EAEBtn ? config.Constant.COLOR_DARK_GREY
                      : "transparent",
                  }]} onPress={() => setEAEBtn(true)}>
                    <Text style={[style.EAEText, {
                      fontFamily:
                        EAEBtn ? config.Constant.Font_Semi_Bold :
                          config.Constant.Font_Medium,
                      opacity: EAEBtn ? 1 : 0.4,
                      fontWeight: EAEBtn ? "600" : 'normal',
                    }]}>
                      {config.I18N.t('Home_EAE')}
                    </Text>
                  </Pressable>
                  <Pressable style={[style.EAEBtn, {
                    borderColor: !EAEBtn ? config.Constant.COLOR_DARK_GREY
                      : "transparent",
                  }]} onPress={() => setEAEBtn(false)}>
                    <Text style={[style.EAEText, {
                      fontFamily:
                        !EAEBtn ? config.Constant.Font_Semi_Bold :
                          config.Constant.Font_Medium,
                      opacity: !EAEBtn ? 1 : 0.4,
                      fontWeight: !EAEBtn ? "600" : 'normal',
                    }]}>
                      {config.I18N.t('Home_PSC')}</Text>
                  </Pressable>
                </View>
                <View style={style.line} />
              </View>
              <View style={style.filterBtnView}>
                <Pressable onPress={() => setCategoriesModal(true)} style={style.filterBtn}>
                  <Image source={images.filter} resizeMode={'cover'}
                    style={style.filterImg} />
                </Pressable>
              </View>
            </View>
            <View style={style.FullDescriptionMainView}>
              {EAEBtn ? <Text numberOfLines={descriptionLineEAE}
                style={style.staticTextBold}>
                Everything About Entrepreneurship{" "}
                <Text style={style.staticText}>
                  would contain more that {EAEList.length}+ courses for
                  you to enhance your skills. This
                                                </Text>
              </Text> :
                <Text numberOfLines={descriptionLinePSC}
                  style={style.staticTextBold}>
                  Problem Solving Courses{" "}
                  <Text style={style.staticText}>
                    would contain more that {PSCTotalCourses != '' ?
                      PSCTotalCourses : "0"}+ courses for
                                        you to enhance your skills. This
                                            </Text>
                </Text>}
              <View style={style.FullDescriptionView}>
                <Pressable onPress={() => EAEBtn ?
                  setdescriptionLineEAE(descriptionLineEAE == 2 ? null : 2) :
                  setdescriptionLinePSC(descriptionLinePSC == 2 ? null : 2)}
                  style={style.FullDescriptionBtn}>
                  {EAEBtn ? <Image source={descriptionLineEAE == 2 ?
                    images.down_bold_arrow : images.up_arrow} resizeMode={'cover'}
                    style={style.down_arrow} /> :
                    <Image source={descriptionLinePSC == 2 ?
                      images.down_bold_arrow : images.up_arrow} resizeMode={'cover'}
                      style={style.down_arrow} />}
                </Pressable>
              </View>
            </View>
          </View>
        )} Arr={EAEBtn ? EAEList : PSCList} props={props}
        marginHorizontal={scale(15)} price={EAEBtn ? '' : '₹ 15000'}
        HandlePress={(item, index) =>
          EAEBtn ? props.navigation.navigate('CoursesDetailScreen', {
            EAETrue: EAEBtn,
            EAEid: item._id,
            IsSave: item?.isSaved,
            GoBack: (data, check) => {
              if (data != check) {
                EAEList[index].isSaved = check
              }
            }
          }) : props.navigation.navigate('CoursesDetailScreen', {
            EAETrue: EAEBtn,
            PSCid: item._id,
            IsSave: item?.is_saved,
            GoBack: (data, check) => {
              if (data != check) {
                // PSCList[index].is_saved = check
              }
            }
          })}
        colorAuthor={config.Constant.COLOR_BLUE}
        onEndReached={() => {
          EAEBtn ? EAEListFun() : PSCListFun()
        }}
        onEndReachedThreshold={0.5}
        ClickOnSave={async (item, data) => !data ?
          await SaveAndUnsaveHandle.AddToSave(item._id, EAEBtn ? "2" : "1") :
          await SaveAndUnsaveHandle.DeleteSave(item._id, EAEBtn ? "2" : "1")
        } />

      {EAEBtn ? <Add_To_Cart price={!!PSCPaymentData ? `₹ ${parseInt(PSCPaymentData?.normal.price) -
        (parseInt(PSCPaymentData?.normal.price) * parseInt(PSCPaymentData?.normal.cgst)) /
        100 -
        (parseInt(PSCPaymentData?.normal.price) * parseInt(PSCPaymentData?.normal.sgst)) /
        100}` : `₹`} price_detail={'All EAE Topics'}
        Go_to={'PROCEED TO CHECKOUT'}
        onPress={() => EAEList.length != 0 ? setEAEBuy(true) : null} /> : null}
      {searchModel ? <Search_Modal
        props={props}
        Back={() => setSearchModal(false)}
        FullClose={(Value) => setSearchModal(!Value)}
        PSCTrue={EAEBtn ? true : false} /> : null}
      {categoriesModal ? <All_Categories_Modal Arr={EAEBtn ?
        props.homeData?.categoriesEae.data :
        props.homeData?.categoriesPsc.data}
        props={props}
        Close={() => setCategoriesModal(false)}
        onSelect={(item, index) => {
          setCategoriesModal(false)
          props.navigation.navigate('SalesScreen', {
            title: item.title,
            subCategory: item.subCategory,
            TopCateId: item.id
          })
        }}
      />
        : null}

      {EAEBuy ? (
        <EAECheckoutPopup
          setPayNowPopup={setPayNowPopup}
          DataValue={PSCPaymentData}
          Close={() => setEAEBuy(false)}
        />
      ) : null}
    </View>
  );
}

//---- Connect to props functions and values -----//
function mapStateToProps({ userData, homeData, coursesScreenData }) {
  return { userData, homeData, coursesScreenData };
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    setCoursesScreenEAEData,
    setCoursesScreenPSCData,
    setSaveGetList
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CoursesScreen);
