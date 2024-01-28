import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Pressable,
  Modal,
  Text,
  ScrollView,
  Alert,
} from 'react-native';
import { scale } from 'react-native-size-matters';
import config from '../config';
import images from '../config/Images';
import { BlurView } from '@react-native-community/blur';
import ToggleSwitch from './ToggleSwitch';

import { Add_To_Cart } from '.';
import CustInput from './CustInput';

const CheckoutPopup = ({ DataValue, setPayNowPopup = () => { }, Close }) => {
  const [switchVal, setSwitchVal] = useState(false);
  const [Organisation, setOrganisation] = useState('');
  const [Address, setAddress] = useState('');
  const [Gst, setGst] = useState('');
  return (
    <Modal transparent={true} visible={true} statusBarTranslucent={true}>
      <View style={styles.Coonstant}>
        <BlurView
          style={styles.BlurSty}
          blurType="dark"
          blurAmount={10}
          blurRadius={5}
          reducedTransparencyFallbackColor="white"
        />

        <View style={styles.mainView}>
          <View style={styles.rowView}>
            <Text style={styles.mainTitle}>{config.I18N.t('checkout')}</Text>
            <Text style={styles.courseCount}>{config.I18N.t('courses')}</Text>
          </View>
          <Text style={styles.line} />
          <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
            <View>
              {!!DataValue &&
                !!DataValue.cart_detail &&
                DataValue.cart_detail.map((item, index) => {
                  return (
                    <View style={[styles.rowView,{
                      marginTop: scale(20)
                    }]}>
                      <View style={styles.semiView}>
                        <Image
                          source={null}
                          style={styles.mainIMg}
                          resizeMode={'cover'}
                        />
                      </View>

                      <View style={styles.courseDetailsView}>
                        <Text style={styles.itemTitle}>{item.title}</Text>
                        <Text style={styles.itemDescription}>EAE Course</Text>
                        <Text style={styles.itemPrice}>₹ {item.basePrice}</Text>
                      </View>
                    </View>
                  );
                })}
              <View style={[styles.line, { margin: scale(15) }]} />
              <Text style={styles.priceTitle}>
                {config.I18N.t('priceSummery')}
              </Text>
              <View style={styles.rowView}>
                <Text style={styles.detailTitle}>
                  {config.I18N.t('totalFee')}
                </Text>
                <Text style={styles.detailDec}>
                  ₹{' '}
                  {DataValue.cart_total -
                    DataValue.cgst_total -
                    DataValue.sgst_total}
                </Text>
              </View>
              <View style={styles.rowView}>
                <Text style={styles.detailTitle}>CGST (9%)</Text>
                <Text style={styles.detailDec}>₹ {DataValue.cgst_total}</Text>
              </View>
              <View style={styles.rowView}>
                <Text style={styles.detailTitle}>SGST (9%)</Text>
                <Text style={styles.detailDec}>₹ {DataValue.cgst_total}</Text>
              </View>
              <View style={styles.totalView}>
                <Text style={styles.detailTotalTitle}>
                  {config.I18N.t('grandFee')}
                </Text>
                <Text style={styles.detailTotalDec}>
                  ₹ {DataValue.cart_total}
                </Text>
              </View>
              <View style={[styles.rowView, { marginHorizontal: scale(15), marginBottom: scale(15) }]}>
                <Text style={styles.gstClaimTax}>
                  {config.I18N.t('wouldYouLikeToClaim')}
                  <Text style={styles.gstClaimTaxBold}>
                    {config.I18N.t('gst')}
                  </Text>
                </Text>
                <ToggleSwitch
                  isOn={switchVal}
                  onColor="white"
                  offColor="white"
                  size="large"
                  trackOnStyle={{
                    borderWidth: 1,
                    backgroundColor: 'white',
                    borderColor: config.Constant.COLOR_BLUE,
                  }}
                  trackOffStyle={{
                    borderWidth: 1,
                    backgroundColor: 'white',
                    borderColor: '#dfdfe0',
                  }}
                  onToggle={val => setSwitchVal(val)}
                />
              </View>
              {!!switchVal && (
                <View>
                  <CustInput
                    value={Organisation}
                    onChangeText={name => {
                      setOrganisation(name);
                    }}
                    label={config.I18N.t('OrganizationName')}
                    style={styles.textView1}
                  />
                  <CustInput
                    value={Address}
                    onChangeText={val => {
                      setAddress(val);
                    }}
                    label={config.I18N.t('address')}
                    style={styles.textView2}
                  />
                  <CustInput
                    value={Gst}
                    onChangeText={val => {
                      setGst(val);
                    }}
                    label={config.I18N.t('gst')}
                    style={styles.textView3}
                  />
                </View>
              )}
              <Add_To_Cart
                onPress={() => {
                  if(!!switchVal){
                    if(!Organisation){
                      Alert.alert('Error','Organisation name is required')
                      return true
                    }
                    else if(!Address){
                      Alert.alert('Error','Address is required')
                      return true
                    }
                    else if(!Address){
                      Alert.alert('Error','GST Number is required')
                      return true
                    }else{
                      setPayNowPopup();   
                    }
                  }else{
                    setPayNowPopup();
                  }
                }}
                price={'₹ ' + DataValue.cart_total}
                price_detail={config.I18N.t('total')}
                Go_to={config.I18N.t('payNow')}
                style={{ backgroundColor: 'yellow' }}
              />
            </View>
          </ScrollView>
        </View>
        <View style={styles.CloseMainView}>
          <Pressable onPress={Close} style={styles.CloseBtn}>
            <View style={styles.CloseSemiView}>
              <Image
                source={images.CloseIcon}
                style={styles.CloseImg}
                resizeMode={'cover'}
              />
            </View>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  Coonstant: {
    flex: 1,
    flexDirection: 'column-reverse',

  },
  mainView: {
    backgroundColor: config.Constant.COLOR_WHITE,
    maxHeight: config.Constant.SCREEN_HEIGHT * 0.8
  },

  line: {
    height: scale(1),
    opacity: 0.1,
    backgroundColor: config.Constant.COLOR_DARK_GREY,
  },
  staticText: {
    fontSize: config.Constant.Font_Size_12,
    color: config.Constant.COLOR_DARK_GREY,
    letterSpacing: 0.33,
    opacity: 0.5,
    fontFamily: config.Constant.Font_Regular,
    marginBottom: scale(15),
    marginHorizontal: scale(15),
  },
  CloseMainView: { alignSelf: 'center' },
  CloseBtn: { padding: scale(8) },
  CloseSemiView: {
    padding: scale(8),
    backgroundColor: config.Constant.COLOR_BLACK,
    borderRadius: scale(50),
  },
  CloseImg: {
    width: scale(10),
    height: scale(10),
    tintColor: config.Constant.COLOR_WHITE,
  },
  ItemBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  BlurSty: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  mainTitle: {
    fontSize: config.Constant.Font_Size_14,
    color: config.Constant.COLOR_DARK_GREY,
    letterSpacing: 0.33,
    fontFamily: config.Constant.Font_Semi_Bold,
    marginVertical: scale(20),
    marginHorizontal: scale(15),
  },
  courseCount: {
    fontSize: config.Constant.Font_Size_12,
    color: config.Constant.COLOR_DARK_GREY,
    letterSpacing: 0.33,
    opacity: 0.7,
    fontFamily: config.Constant.Font_Regular,
    marginVertical: scale(20),
    marginHorizontal: scale(15),
  },
  rowView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  semiView: {
    width: scale(100),
    backgroundColor: 'silver',
    borderRadius: scale(4),
    justifyContent: 'center',
    marginLeft: scale(15),
  },
  mainIMg: {
    flex: 1,
    width: scale(100),
    height: scale(100),
    borderTopLeftRadius: scale(5),
    borderBottomLeftRadius: scale(5),
  },
  courseDetailsView: {
    flex: 1,
    marginHorizontal: scale(15),
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  itemTitle: {
    fontSize: scale(12),
    color: config.Constant.COLOR_DARK_GREY,
    letterSpacing: 0.33,
    fontFamily: config.Constant.Font_Medium,
    fontWeight: '500',
    marginTop: 0,
    marginBottom: scale(2),
  },
  itemDescription: {
    fontSize: scale(12),
    color: config.Constant.COLOR_DARK_GREY,
    opacity: 0.6,
    letterSpacing: 0.33,
    fontFamily: config.Constant.Font_Regular,
    marginTop: 0,
    marginBottom: scale(10),
  },
  itemPrice: {
    fontSize: scale(12),
    color: config.Constant.COLOR_DARK_GREY,
    letterSpacing: 0.33,
    fontFamily: config.Constant.Font_Semi_Bold,
    marginBottom: scale(5),
  },
  priceTitle: {
    fontSize: scale(10),
    color: config.Constant.COLOR_DARK_GREY,
    opacity: 0.6,
    letterSpacing: 0.33,
    fontFamily: config.Constant.Font_Regular,
    marginBottom: scale(15),
    marginHorizontal: scale(15),
  },
  detailTitle: {
    fontSize: scale(12),
    color: config.Constant.COLOR_DARK_GREY,
    letterSpacing: 0.33,
    fontFamily: config.Constant.Font_Medium,
    marginBottom: scale(15),
    marginHorizontal: scale(15),
    fontWeight: '500',
  },
  detailDec: {
    fontSize: scale(12),
    color: config.Constant.COLOR_DARK_GREY,
    letterSpacing: 0.33,
    fontFamily: config.Constant.Font_Semi_Bold,
    marginBottom: scale(15),
    marginHorizontal: scale(15),
    fontWeight: '600',
  },
  detailTotalTitle: {
    fontSize: scale(12),
    color: config.Constant.COLOR_DARK_GREY,
    letterSpacing: 0.33,
    fontFamily: config.Constant.Font_Medium,
    fontWeight: '500',
  },
  detailTotalDec: {
    fontSize: scale(12),
    color: config.Constant.COLOR_DARK_GREY,
    letterSpacing: 0.33,
    fontFamily: config.Constant.Font_Semi_Bold,
    fontWeight: '600',
  },
  totalView: {
    backgroundColor: config.Constant.COLOR_LIGHT_BLACK_DRAWER,
    marginBottom: scale(22),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: scale(15),
  },
  gstClaimTax: {
    fontSize: scale(12),
    color: config.Constant.COLOR_DARK_GREY,
    letterSpacing: 0.33,
    fontFamily: config.Constant.Font_Medium,
    fontWeight: '500',
  },
  gstClaimTaxBold: {
    fontSize: scale(12),
    color: config.Constant.COLOR_DARK_GREY,
    letterSpacing: 0.33,
    fontFamily: config.Constant.Font_Bold,
    fontWeight: '700',
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
    marginBottom: 20,
  },
});

export default CheckoutPopup;
