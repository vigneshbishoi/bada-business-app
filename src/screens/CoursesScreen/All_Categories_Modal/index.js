import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, Pressable, Text, Modal, FlatList, Platform, } from 'react-native';
import { scale } from 'react-native-size-matters';
import config from '../../../config';
import images from '../../../config/Images'
import styles from './style'
import { BlurView } from "@react-native-community/blur";

const All_Categories_Modal = ({ props, Close, Arr, onSelect }) => {

    const [selectItem, setSelectItem] = useState(null)

    const Item = ({ item, index }) => {
        return (
            <Pressable onPress={() => [setSelectItem(index), onSelect(item, index)]}>
                <View style={styles.itemMainView}>
                    <Image source={item.compress_image != '' && item.compress_image != undefined ?
                        { uri: item.compress_image } :
                        item.imagesmall != '' && item.imagesmall != undefined ?
                            { uri: item.imagesmall } :
                            images.RocketIcon}
                        style={[styles.flatMainImg, {
                            width: item.img == images.newtons_cradle ?
                                scale(22.5) : scale(20), height: item.img == images.newtons_cradle ?
                                    scale(16) : scale(20),
                        }]}
                        resizeMode={'contain'} />
                    <Text style={[styles.flatText, {
                        marginHorizontal: item.img ==
                            images.newtons_cradle ? scale(7) : scale(10)
                    }]} numberOfLines={1} >{item.title}</Text>
                </View>
                <View style={[styles.borderView,
                { width: config.Constant.SCREEN_WIDTH - scale(30) }]} />
            </Pressable>
        )
    }

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
                    <Text style={styles.mainTitle}>
                        {config.I18N.t('Courses_Select_Categories')}</Text>
                    <View style={styles.borderView} />
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={Arr}
                        renderItem={(item, index) => Item(item, index)}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
                <View style={styles.CloseMainView}>
                    <Pressable onPress={Close} style={styles.CloseBtn}>
                        <View style={styles.CloseSemiView}>
                            <Image source={images.CloseIcon} style={styles.CloseImg}
                                resizeMode={'cover'} />
                        </View>
                    </Pressable>
                </View>
            </View>
        </Modal>

    )
};

export default All_Categories_Modal
