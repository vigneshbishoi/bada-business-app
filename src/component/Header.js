import React from 'react';
import { View, StyleSheet, Image, Pressable, Text } from 'react-native';
import { scale } from 'react-native-size-matters';
import config from '../config';
import { Menu, Notification, Cart } from '../assets/svg/index'

const Header = ({ PressDrawer, PressCart = () => { }, CartCount }) => {

    return (
        <View style={styles.mainView}>
            <View style={styles.semiView}>
                <Pressable onPress={PressDrawer} style={styles.btn}>
                    <Image
                        style={styles.menu}
                        source={config.Images.Menu}
                        resizeMode={'cover'}
                    />
                </Pressable>
                <Image
                    style={styles.titleImg}
                    source={config.Images.Bada_title}
                    resizeMode={'cover'}
                />
            </View>
            <View style={styles.lastView}>
                <Pressable onPress={() => {
                    config.Constant.RootNavigation.navigate('CartScreen')
                }} style={styles.btnNoti}>
                    <Image
                        style={styles.staticImage}
                        source={config.Images.Cart}
                        resizeMode={'cover'}
                    />
                    {CartCount != null && CartCount != undefined && CartCount != 0 ?
                        <View style={styles.cartCountView}>
                            <Text style={styles.countText}>{CartCount}</Text>
                        </View> : null}
                </Pressable>
                <Pressable style={styles.btnCart}>
                    <Image
                        style={styles.staticImage}
                        source={config.Images.Notification}
                        resizeMode={'cover'}
                    />
                </Pressable>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    mainView: {
        height: scale(50),
        alignItems: "center",
        flexDirection: "row"
    },
    semiView: {
        alignItems: "center",
        flexDirection: "row",
        flex: 1
    },
    lastView: {
        alignItems: "center",
        flexDirection: "row-reverse",
        flex: 1
    },
    btnNoti: { padding: scale(5), marginRight: scale(15), },
    btnCart: { padding: scale(5), marginRight: scale(10), },
    btn: { padding: (15) },
    staticImage: {
        width: scale(18),
        height: scale(18)
    },
    titleImg: {
        width: scale(95),
        height: scale(20)
    },
    menu: {
        width: scale(17),
        height: scale(13)
    },
    cartCountView: {
        position: "absolute",
        right: scale(-2),
        backgroundColor: config.Constant.COLOR_RED,
        top: scale(-3),
        width: scale(14),
        height: scale(14),
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: scale(14)
    },
    countText: {
        fontSize: scale(8),
        color: config.Constant.COLOR_WHITE,
        letterSpacing: 0.33,
        fontFamily: config.Constant.Font_Semi_Bold,
        fontWeight: 'normal',
        marginTop: scale(1)
    }
});

export default Header

