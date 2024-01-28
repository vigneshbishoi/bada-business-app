import React from 'react';
import {View, Text, Image} from 'react-native';
import Ripple from 'react-native-material-ripple';
import CustomButton from '../../component/CustButton';
import styles from "./styles"

export default function SuccessScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image
          resizeMode={'contain'}
          style={styles.successIcon}
          source={require('../../assets/images/successPay.png')}
        />
        <Text style={styles.titleTxt}>Successfully Purchased</Text>
        <View style={styles.itemView}>
          <View style={styles.semiView}>
            <Image
              source={
                !!props.route && props.route.params.image
                  ? {uri: props.route.params.image}
                  : null
              }
              style={styles.mainIMg}
              resizeMode={'cover'}
            />
          </View>
          <Text style={styles.itemTxt}>
            {!!props.route && props.route.params.title}
          </Text>
        </View>
      </View>
      <CustomButton
        onPress={() => {
          props.navigation.reset({
            index: 1,
            routes: [{name: 'HomeScreen'}],
          });
        }}
        validate={true}
        title={'GO TO MY COURSE'}
        style={styles.btnView}
      />
      <Ripple
        onPress={() => {
          props.navigation.reset({
            index: 1,
            routes: [{name: 'HomeScreen'}],
          });
        }}
        style={styles.btnView}>
        <Text style={styles.btnText}>EXPLORE OTHER COURSES</Text>
      </Ripple>
    </View>
  );
}
