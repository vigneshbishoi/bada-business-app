import React, {useState, useEffect, useRef} from 'react';
import {View, Image, Platform, Pressable, FlatList, Text} from 'react-native';
import styles from './style';
import config from '../../config/index';
import images from '../../config/Images';
import {Add_To_Cart} from '../../component/index';
import Ripple from 'react-native-material-ripple';
import Cart_List from '../../component/Cart_List';
import {scale} from 'react-native-size-matters';
import CheckoutPopup from '../../component/CheckoutPopup';
import modules from '../../modules';
import RazorpayCheckout from 'react-native-razorpay';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  setSaveCarts
} from '../../Redux/actions/homeData'

function CartScreen(props) {
  const [DataValue, setDataValue] = useState(null);
  const [checkoutPop, setCheckoutPopup] = useState(false);

  useEffect(() => {
    getCartDetails();
  }, []);

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
        email: !!config.Constant.USER_DATA.email?config.Constant.USER_DATA.email:'',
        contact: config.Constant.USER_DATA.country_code+''+config.Constant.USER_DATA.phone_no,
        name: `${
          !!config.Constant.USER_DATA.first_name
            ? config.Constant.USER_DATA.first_name
            : ''
        } ${
          !!config.Constant.USER_DATA.last_name
            ? config.Constant.USER_DATA.last_name
            : ''
        }`,
      },
      theme: {color: config.Constant.COLOR_BLUE},
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
                title: DataValue.cart_detail[0].title,
                image: DataValue.cart_detail[0].image,
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

  const setPayNowPopup = async () => {
    config.Constant.showLoader.showLoader();
    var formData = {
      discount: 0,
      courseId: !!DataValue && DataValue.cart_detail[0].course_id,
      discountType: 'NATIONAL',
      orderType: 'NORMAL',
      amount: DataValue.cart_total,
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
        <Text style={styles.cartTxt}>{config.I18N.t('cart')}</Text>
        <Ripple style={styles.btnView}>
          <Text style={styles.btnName}>{config.I18N.t('savedCourse')}</Text>
        </Ripple>
      </View>
    );
  };

  const getCartDetails = async () => {
    var data = await modules.APIServices.GetApiCall(
      config.ApiEndpoint.GET_CART_DETAILS,
    );
    config.Constant.showLoader.hideLoader();
    if (data.success == true) {
      setDataValue(data.data);
    } else {
      // Alert.alert('error', data.message);
    }
  };

  const deleteCartId = async deleteCartId => {
    config.Constant.showLoader.showLoader();
    var formData = {
      cartId: deleteCartId,
    };
    var data = await modules.APIServices.DeleteApiCall(
      config.ApiEndpoint.DELETE_CART,
      formData,
    );
    config.Constant.showLoader.hideLoader();
    if (data.success == true) {
      props.setSaveCarts(props?.homeData?.savecarts - 1, () => { })
      setDataValue([]);
    } else {
      // Alert.alert('error', data.message);
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <Cart_List
        Arr={
          !!DataValue && !!DataValue.cart_detail ? DataValue.cart_detail : []
        }
        deleteCartId={id => {
          deleteCartId(id);
        }}
        props={props}
        marginHorizontal={scale(15)}
        onEndReached={() => {}}
        colorAuthor={config.Constant.COLOR_DARK_GREY}
      />
      {!!DataValue && !!DataValue.cart_total && (
        <Add_To_Cart
          onPress={() => {
            setCheckoutPopup(true);
          }}
          price={'₹ ' + DataValue.cart_total}
          price_detail={config.I18N.t('courses')}
          Go_to={config.I18N.t('proceedToCheckout')}
          style={{backgroundColor: 'yellow'}}
        />
      )}
      {!!DataValue && !!DataValue.cart_total && (
        <Text style={styles.taxTxt}>
          ₹ {DataValue.cart_total} {config.I18N.t('inclusiveOfTaxes')}
        </Text>
      )}
      {checkoutPop && (
        <CheckoutPopup
          DataValue={DataValue}
          setPayNowPopup={() => {
            setPayNowPopup();
            setCheckoutPopup(false);
          }}
          Close={() => setCheckoutPopup(false)}
        />
      )}
    </View>
  );
}
//---- Connect to props functions and values -----//
function mapStateToProps({ userData, homeData }) {
  return { userData, homeData };
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
      setSaveCarts
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen)