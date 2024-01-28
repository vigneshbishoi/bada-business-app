import React, { useState } from 'react';
import { View, StyleSheet, Image, Pressable, Text, Modal, FlatList, Platform, } from 'react-native';
import { scale } from 'react-native-size-matters';
import config from '../../../config';
import images from '../../../config/Images'
import styles from './style'
import { BlurView } from "@react-native-community/blur";
import { ScrollView } from 'react-native-gesture-handler';
import { Add_To_Cart } from '../../../component/index'
import DiscountCondition from '../DiscountCondition/index'

const EAEBuyModal = ({ props, Close }) => {

    const [selectItem, setSelectItem] = useState(0)
    const [EAEBtn, setEAEBtn] = useState(true)
    const [discountModal, setDiscountModal] = useState(false)
    const [iagree, setIagree] = useState(false)

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
                    <View style={styles.checkOutView}>
                        <Text style={styles.mainTitle}>
                            {config.I18N.t('CoursesScreen_Checkout')}</Text>
                        <Text style={styles.ALLEAE}>
                            All EAE Topics</Text>
                    </View>
                    <Text style={styles.line} />
                    <ScrollView
                        showsVerticalScrollIndicator={false}>
                        <View style={styles.areyouStudentView}>
                            <View style={styles.checkOutView}>
                                <Text style={styles.areyouStudent}>
                                    Are you student?</Text>
                                <Pressable style={{ marginLeft: scale(6) }}>
                                    <Text style={styles.save50}>
                                        SAVE 50%</Text>
                                </Pressable>
                            </View>
                            {!iagree ? <Pressable onPress={() => setDiscountModal(true)}
                                style={styles.NoView}>
                                <View style={styles.noCloseImgView}>
                                    <Image source={images.CloseIcon}
                                        style={styles.noCloseImg}
                                        resizeMode={'cover'} />
                                </View>
                                <Text style={[styles.NoText, {
                                    opacity: 0.6
                                }]}>No</Text>
                            </Pressable> :
                                <Pressable style={[styles.NoView, {
                                    flexDirection: "row-reverse"
                                }]}>
                                    <View style={[styles.noCloseImgView, {
                                        marginRight: scale(2), backgroundColor:
                                            config.Constant.COLOR_BLUE,
                                        borderColor: config.Constant.COLOR_BLUE
                                    }]}>
                                        <Image source={images.TickIcon}
                                            style={styles.noCloseImg}
                                            resizeMode={'cover'} />
                                    </View>
                                    <Text style={[styles.NoText, {
                                        opacity: 0.6, marginTop: scale(2),
                                        color: config.Constant.COLOR_BLUE,
                                        fontFamily: config.Constant.Font_Medium
                                    }]}>Yes</Text>
                                </Pressable>}
                        </View>
                        <Text style={styles.line} />
                        <View style={[styles.mainItemView, {
                            flexDirection: "row"
                        }]}>
                            <View style={styles.mainItemImg} />
                            <View style={{ justifyContent: "space-between" }}>
                                <View>
                                    <Text style={[styles.NoText, {
                                        fontWeight: '600',
                                        fontFamily: config.Constant.Font_Medium,
                                        marginBottom: scale(2)
                                    }]}>EAE Package</Text>
                                    <Text style={[styles.NoText, {
                                        opacity: 0.6
                                    }]}>All EAE Topics</Text>
                                </View>
                                <Text style={[styles.NoText, {
                                    marginBottom: scale(2),
                                    fontFamily: config.Constant.Font_Semi_Bold,
                                }]}>₹ 45,000</Text>
                            </View>
                        </View>
                        <Text style={[styles.line,
                        { marginHorizontal: scale(15) }]} />
                        <View style={styles.mainItemView}>
                            <Text style={styles.priceSummaryText}>
                                PRICE SUMMARY</Text>
                            <View style={[styles.checkOutView, {
                                marginTop: scale(10)
                            }]}>
                                <Text style={[styles.NoText, {
                                    fontFamily: config.Constant.Font_Medium
                                }]}>Total Fee</Text>
                                <Text style={[styles.NoText, {
                                    fontFamily: config.Constant.Font_Semi_Bold
                                }]}>₹ 45,000</Text>
                            </View>
                            <View style={[styles.checkOutView, {
                                marginTop: scale(10)
                            }]}>
                                <Text style={[styles.NoText, {
                                    fontFamily: config.Constant.Font_Medium
                                }]}>CGST (9%)</Text>
                                <Text style={[styles.NoText, {
                                    fontFamily: config.Constant.Font_Semi_Bold
                                }]}>₹ 4,050</Text>
                            </View>
                            <View style={[styles.checkOutView, {
                                marginTop: scale(10)
                            }]}>
                                <Text style={[styles.NoText, {
                                    fontFamily: config.Constant.Font_Medium
                                }]}>SGST (9%)</Text>
                                <Text style={[styles.NoText, {
                                    fontFamily: config.Constant.Font_Semi_Bold
                                }]}>₹ 4,050</Text>
                            </View>
                        </View>
                        <View style={styles.grandTotalView}>
                            <View style={styles.checkOutView}>
                                <Text style={[styles.NoText, {
                                    fontSize: config.Constant.Font_Size_14,
                                    fontFamily: config.Constant.Font_Medium
                                }]}>Grand Total</Text>
                                <Text style={[styles.NoText, {
                                    fontSize: config.Constant.Font_Size_14,
                                    fontFamily: config.Constant.Font_Semi_Bold
                                }]}>₹ 53,100</Text>
                            </View>
                        </View>
                        <View style={[styles.areyouStudentView, {
                            marginVertical: scale(20)
                        }]}>
                            <View style={styles.checkOutView}>
                                <Text style={styles.areyouStudent}>
                                    {config.I18N.t('wouldYouLikeToClaim')} GST?</Text>
                            </View>
                            {!iagree ? <View style={styles.NoView}>
                                <View style={styles.noCloseImgView}>
                                    <Image source={images.CloseIcon}
                                        style={styles.noCloseImg}
                                        resizeMode={'cover'} />
                                </View>
                                <Text style={[styles.NoText, {
                                    opacity: 0.6
                                }]}>No</Text>
                            </View> :
                                <Pressable style={[styles.NoView, {
                                    flexDirection: "row-reverse"
                                }]}>
                                    <View style={[styles.noCloseImgView, {
                                        marginRight: scale(2), backgroundColor:
                                            config.Constant.COLOR_BLUE,
                                        borderColor: config.Constant.COLOR_BLUE
                                    }]}>
                                        <Image source={images.TickIcon}
                                            style={styles.noCloseImg}
                                            resizeMode={'cover'} />
                                    </View>
                                    <Text style={[styles.NoText, {
                                        opacity: 0.6, marginTop: scale(2),
                                        color: config.Constant.COLOR_BLUE,
                                        fontFamily: config.Constant.Font_Medium
                                    }]}>Yes</Text>
                                </Pressable>}
                        </View>
                        {iagree ? <View style={styles.gstView}>
                            <View style={styles.gstsemiView}>
                                <Text numberOfLines={1} style={styles.priceSummaryText}>
                                    Organisation Name</Text>
                                <Text numberOfLines={1} style={[styles.NoText, {
                                    fontFamily: config.Constant.Font_Medium
                                }]}>MazeTech</Text>
                            </View>
                            <View style={styles.gstsemiView}>
                                <Text numberOfLines={1} style={styles.priceSummaryText}>
                                    Address</Text>
                                <Text numberOfLines={1} style={[styles.NoText, {
                                    fontFamily: config.Constant.Font_Medium
                                }]}>406, MazeTech Building, near RFM Corporate.. </Text>
                            </View>
                            <View style={styles.gstsemiView}>
                                <Text numberOfLines={1} style={styles.priceSummaryText}>
                                    GST</Text>
                                <Text numberOfLines={1} style={[styles.NoText, {
                                    fontFamily: config.Constant.Font_Medium
                                }]}>07FFFF0000B2Z9</Text>
                            </View>
                        </View> : null}
                    </ScrollView>
                    {EAEBtn ? <Add_To_Cart price={'$53,100'} price_detail={'Total'}
                        Go_to={'PAY NOW'}
                        onPress={() => { }} /> : null}
                    {discountModal ? <DiscountCondition IAGREE={() => [setDiscountModal(false),
                    setIagree(true)]}
                        Close={() => setDiscountModal(false)} /> : null}
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

export default EAEBuyModal
