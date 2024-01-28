import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, Pressable, Text, Modal, SafeAreaView, Animated } from 'react-native';
import { scale } from 'react-native-size-matters';
import config from '../config';
import images from '../config/Images'
import { Search, Recording } from '../assets/svg/index'
import voice from '@react-native-voice/voice'
import { BlurView } from "@react-native-community/blur";

const Search_Call = ({ props, Close }) => {

    const [animated, setAnimated] = useState(new Animated.Value(0))
    const [opacityA, setOpacityA] = useState(new Animated.Value(1))

    useEffect(async () => {
    }, [])

    const _micButton = () => {
        if (true) {
            //some function
            _runAnimation()
            return (
                <Animated.View style={{
                    width: scale(100),
                    height: scale(100),
                    borderRadius: scale(50),
                    alignSelf: 'center',
                    marginTop: scale(-18),
                    backgroundColor: '#5446ff',
                    opacity: opacityA,
                    transform: [
                        {
                            scale: animated
                        }
                    ]
                }}>

                </Animated.View>
            );
        }
    }

    const _runAnimation = () => {

        Animated.loop(
            Animated.parallel([
                Animated.timing(animated, {
                    toValue: 1,
                    duration: 1000,

                }),
                Animated.timing(opacityA, {
                    toValue: 0,
                    duration: 1000,

                })
            ])
        ).start();
    }

    return (
        <Modal transparent={true} visible={true} statusBarTranslucent={true}>
            {/* <SafeAreaView style={styles.contain}> */}
            <View style={styles.contain}>
                {/* <BlurView style={{flex:1}} blurType={'light'}></BlurView> */}
                <Pressable style={{
                    marginHorizontal: scale(15),
                    marginTop: scale(40)
                }} onPress={Close}>
                </Pressable>
                <Pressable onPress={Close} style={styles.CloseBtn}>
                    <Image source={images.CloseIcon} style={styles.CloseImg}
                        resizeMode={'cover'} />
                </Pressable>
                {_micButton()}
                <Text style={styles.searchText}>Search</Text>
                <View style={{ flex: 1 }}></View>
                {/* <Pressable style={{
                    width: 74,
                    height: 74,
                    backgroundColor: "#5446ff", borderRadius: 74 / 2,
                    alignSelf: 'center',
                    bottom: scale(128)
                }}> */}
                    
                {/* </Pressable> */}
            </View>
            {/* </SafeAreaView> */}
        </Modal>
    )
}
const styles = StyleSheet.create({
    contain: {
        flexGrow: 1,
        backgroundColor: "rgba(225,225,225,0.9)",
        paddingHorizontal: scale(15)
    },
    CloseImg: {
        height: scale(10),
        width: scale(10),
        tintColor: config.Constant.COLOR_DARK_GREY
    },
    CloseBtn: {
        width: scale(30),
        height: scale(30),
        borderRadius: scale(15),
        backgroundColor: 'red',
        justifyContent: "center",
        alignItems: "center",
        // opacity: 0.2,
        backgroundColor: "rgba(41,40,48, 0.25)"
    },
    searchText: {
        fontFamily: config.Constant.Font_Medium,
        fontSize: config.Constant.Font_Size_16,
        fontWeight: "500",
        letterSpacing: 0.43,
        color: config.Constant.COLOR_DARK_GREY,
        marginTop: scale(50)
    }

});

export default Search_Call




// import React, { Component } from 'react';
// import {
//     Platform,
//     StyleSheet,
//     Text,
//     View,
//     TouchableOpacity,
//     Button,
//     LayoutAnimation,
//     Image,
//     ScrollView,
//     Animated
// } from 'react-native';
// import { scale } from 'react-native-size-matters';
// export default class Search_Call extends Component {
//     state = {
//         animated: new Animated.Value(0),
//         opacityA: new Animated.Value(1),
//     }
//     // constructor(props) {
//     //     super(props);
//     //     this._onPress = this._onPress.bind(this);
//     // }

//     componentDidMount() {
//         const { animated, opacityA } = this.state
//         Animated.loop(
//             Animated.parallel([
//                 Animated.timing(animated, {
//                     toValue: 1,
//                     duration: 1000,

//                 }),
//                 Animated.timing(opacityA, {
//                     toValue: 0,
//                     duration: 1000,

//                 })
//             ])

//         ).start()

//     }
//     // _runAnimation() {
//     //     const { animated, opacityA } = this.state;

//     //     Animated.loop(
//     //         Animated.parallel([
//     //             Animated.timing(animated, {
//     //                 toValue: 1,
//     //                 duration: 1000,

//     //             }),
//     //             Animated.timing(opacityA, {
//     //                 toValue: 0,
//     //                 duration: 1000,

//     //             })
//     //         ])
//     //     ).start();
//     // }
//     // _stopAnimation() {
//     //     Animated.loop(
//     //         Animated.parallel([
//     //             Animated.timing(animated),
//     //             Animated.timing(opacityA)
//     //         ])
//     //     ).stop();
//     // }
//     // _onPress() {
//     //     this.setState(
//     //         state => ({ isPressed: !state.isPressed }),
//     //     )
//     // }
//     // _micButton() {
//     //     const { isPressed, animated, opacityA, } = this.state;
//     //     if (isPressed) {
//     //         //some function
//     //         this._runAnimation();
//     //         return (
//     //             <Animated.View style={{
//     //                 width: 100,
//     //                 height: 100,
//     //                 borderRadius: 50,
//     //                 backgroundColor: 'rgba(153,0,0,0.4)',
//     //                 opacity: opacityA,
//     //                 transform: [
//     //                     {
//     //                         scale: animated
//     //                     }
//     //                 ]
//     //             }}>

//     //             </Animated.View>
//     //         );
//     //     }
//     // }


//     render() {
//         return (
//             <View style={styles.container}>
//                 <Animated.View style={{
//                     width: 100,
//                     height: 100,
//                     borderRadius: 50,
//                     marginBottom: 150,
//                     backgroundColor: "rgba(153,0,0,0.4)",
//                     opacity: this.state.opacityA,
//                     transform: [
//                         { scale: this.state.animated }
//                     ]
//                 }}>

//                 </Animated.View>
//             </View>
//         );
//     }
// }
