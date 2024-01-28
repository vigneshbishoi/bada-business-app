import React, { useState } from 'react';
import { View, StyleSheet, Image, Pressable, Text, } from 'react-native';
import { scale } from 'react-native-size-matters';
import config from '../config';
import images from '../config/Images'

const Add_To_Cart = ({ price, price_detail, Go_to, onPress }) => {

    return (
        <View style={styles.mainView}>
            <Pressable onPress={onPress} style={styles.semiViewBtn}>
                <View style={styles.spliteView}>
                    <Text style={styles.courseFee}>{price_detail}</Text>
                    <Text style={styles.coursesPrice}>{price}</Text>
                </View>
                <View style={styles.AddcardView}>
                    <Text style={styles.addcardText}>{Go_to}</Text>
                    <Image source={images.Right_arrow}
                        style={styles.addcardSideImg} resizeMode={'cover'} />
                </View>

            </Pressable>
        </View>
    )
};

const styles = StyleSheet.create({
    mainView: {
        flexDirection: "column-reverse",
        paddingHorizontal: scale(15),
        borderColor: config.Constant.COLOR_SILVER,
        borderTopWidth: 1,
    },
    semiViewBtn: {
        marginVertical: scale(20),
        borderRadius: scale(4),
        flexDirection: "row",
        height: scale(50),
        paddingHorizontal: scale(15),
        backgroundColor: config.Constant.COLOR_RED,
        paddingVertical: scale(6),
        alignItems: "center",
        justifyContent: "space-between"
    },
    spliteView: { justifyContent: "space-between" },
    courseFee: {
        fontSize: config.Constant.Font_Size_10,
        fontFamily: config.Constant.Font_Medium,
        opacity: 0.8,
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: 0.27,
        color: config.Constant.COLOR_WHITE
    },
    coursesPrice: {
        fontSize: config.Constant.Font_Size_12,
        color: config.Constant.COLOR_WHITE,
        fontFamily: config.Constant.Font_Medium,
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: 0.33,
    },
    AddcardView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    addcardText: {
        fontSize: config.Constant.Font_Size_12,
        color: config.Constant.COLOR_WHITE,
        letterSpacing: 0.33,
        fontWeight: '500',
        fontFamily: config.Constant.Font_Medium
    },
    addcardSideImg: {
        width: scale(5),
        height: scale(9),
        marginLeft: scale(4),
        marginBottom: scale(2.8)
    }
});

export default Add_To_Cart

