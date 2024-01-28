import React, { useState } from 'react';
import { View, StyleSheet, Image, Pressable, Text, Modal, FlatList, Platform, } from 'react-native';
import { scale } from 'react-native-size-matters';
import config from '../../../config';
import images from '../../../config/Images'
import styles from './style'
import { BlurView } from "@react-native-community/blur";

const Use_Bada = ({ props, Close }) => {

    const [selectItem, setSelectItem] = useState(0)

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
                        {config.I18N.t('Home_How_to_use_Bada_Business')}</Text>
                    <Text style={styles.line} />
                    <Text style={styles.staticText}>
                        {config.I18N.t('Home_There_are_two_types_of_courses')}</Text>
                    <View style={[styles.EAEItemView,
                    {
                        backgroundColor: selectItem == 1 ?
                            config.Constant.COLOR_HOME__LIGHT_CLICABLE : config.Constant.COLOR_WHITE
                    }]}>
                        <Pressable onPress={() => setSelectItem(selectItem == 1 ? 0 : 1)} style={styles.ItemBtn}>
                            <Image source={images.RocketIcon}
                                style={styles.imageStatic} resizeMode={'cover'} />
                            <View style={styles.EAEInsideViewText}>
                                <Text style={styles.EAEText}>
                                    {config.I18N.t('Home_EAE')} -
                                    <Text style={[styles.EAEItemSemiText,
                                    { fontWeight: Platform.OS == 'android' ? '400' : null, }]}>
                                        {config.I18N.t('Home_EAE_Everything_about_entrepreneurship')}</Text>
                                </Text>
                                <Text style={styles.EAEInsideViewStaticText}>
                                    {config.I18N.t('Home_1_Credit_is_1_EAE_Course')}</Text>
                            </View>
                        </Pressable>
                    </View>
                    <View style={[styles.PSCItemView,
                    {
                        backgroundColor: selectItem == 2 ?
                            config.Constant.COLOR_HOME__LIGHT_CLICABLE : config.Constant.COLOR_WHITE
                    }]}>
                        <Pressable onPress={() => setSelectItem(selectItem == 2 ? 0 : 2)} style={styles.ItemBtn}>
                            <Image source={images.IdeaIcon}
                                style={styles.imageStatic} resizeMode={'cover'} />
                            <View style={styles.EAEInsideViewText}>
                                <Text style={styles.EAEText}>
                                    {config.I18N.t('Home_PSC')} -
                                    <Text style={[styles.EAEItemSemiText,
                                    { fontWeight: Platform.OS == 'android' ? '400' : null, }]}>
                                        {config.I18N.t('Home_PSC_Problem_solving_courses')}</Text>
                                </Text>
                                <Text style={styles.EAEInsideViewStaticText}>
                                    {config.I18N.t('Home_1_EAE_course_provides_10PSC')}</Text>
                            </View>
                        </Pressable>
                    </View>
                    <View style={styles.TipView}>
                        <Image source={images.TieIcon} style={styles.TipImg}
                            resizeMode={'cover'} />
                        <Text style={[styles.EAEText, { marginHorizontal: scale(15) }]}>
                            {config.I18N.t('Home_Tip')} -
                                    <Text style={[styles.EAEItemSemiText,
                            { fontWeight: Platform.OS == 'android' ? '400' : null, }]}>
                                {config.I18N.t('Home_Purchase_life_time_membership_plan_in_order_to_access_Alladin_Ka_Chirag')}</Text>
                        </Text>
                    </View>
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

export default Use_Bada
