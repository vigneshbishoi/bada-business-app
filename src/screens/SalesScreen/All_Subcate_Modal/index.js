import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, Pressable, Text, Modal, FlatList, Platform, } from 'react-native';
import { scale } from 'react-native-size-matters';
import config from '../../../config';
import images from '../../../config/Images'
import styles from './style'
import { BlurView } from "@react-native-community/blur";

const All_Subcate_Modal = ({ props, Close, Arr, onSelect, subcateIndex }) => {

    const [selectItem, setSelectItem] = useState(subcateIndex)

    // useEffect(() => {
    //     return(selectItem)
    // }, [selectItem])

    const Item = ({ item, index }) => {
        return (
            <Pressable onPress={() => [setSelectItem(index), onSelect(item, index)]}>
                <View style={styles.itemMainView}>
                    <Text style={[styles.EAEText, {
                        color: selectItem == index ? config.Constant.COLOR_RED
                            : config.Constant.COLOR_DARK_GREY
                    }]}>{item.title}</Text>
                    <View style={[styles.clickItemView, {
                        backgroundColor: selectItem == index ? config.Constant.COLOR_RED
                            : config.Constant.COLOR_WHITE,
                        opacity: selectItem == index ? 1 : 0.3,
                        borderColor: selectItem == index ?
                            config.Constant.COLOR_RED :
                            config.Constant.COLOR_DARK_GREY
                    }]} ><Image source={images.TickIcon}
                        style={styles.tickimg} resizeMode={'cover'} /></View>
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
                        {config.I18N.t('Sale_Select_Subcategories')}</Text>
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

export default All_Subcate_Modal
