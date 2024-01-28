import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, Pressable, Text, Modal, FlatList, Platform, SafeAreaView, ScrollView, Linking, } from 'react-native';
import { color } from 'react-native-reanimated';
import { scale } from 'react-native-size-matters';
import config from '../../../config';
import images from '../../../config/Images'
import styles from './style'

const DiscountCondition = ({ props, Close, IAGREE }) => {

    const [percentage, setPercentage] = useState(80)
    const [answerView, setAnswerView] = useState(null)

    return (
        <Modal transparent={true} visible={true}
            statusBarTranslucent={false}>
            <SafeAreaView style={styles.Contact}>
                <View style={styles.Contact}>
                    <View style={[styles.LinearSty,
                    styles.semiView]}>
                        <Pressable onPress={Close}
                            style={styles.backImgBtn}>
                            <Image style={styles.backImg}
                                source={images.BackIcon}
                                resizeMode={'cover'} />
                        </Pressable>
                        <Text style={styles.titleText}>
                            Discount Condition</Text>
                    </View>
                    <View style={styles.mainTextView}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <Text style={[styles.staticText,{
                                marginTop: scale(20)
                            }]}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry&apos;s standard dummy text ever since
                                the 1500s, when an unknown printer took a galley of type and scrambled
                                it to make a type specimen book. It has survived not only five centuries, but also
                            </Text>
                            <Pressable
                                style={{ marginTop: scale(20) }}
                                onPress={() => Linking.openURL('https://www.badabusiness.com')}>
                                <Text style={styles.linkText}>
                                    www.badabusiness.com</Text>
                            </Pressable>
                            <Text style={[styles.staticText, {
                                marginVertical: scale(20)
                            }]}>
                                essentially unchanged. It was popularised in the 1960s with the release
                                of Letraset sheets containing Lorem Ipsum passages, and more recently with
                                desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                {"\n"}{"\n"}Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type
                                specimen book. It has survived not only five centuries, but also the leap into
                                electronic typesetting, remaining essentially unchanged. It was popularised in
                                the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing software like Aldus PageMaker including
                                versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                It has survived not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                                publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </Text>
                        </ScrollView>
                        <View style={{
                            paddingTop: scale(20),
                            borderTopWidth: scale(1), marginHorizontal: scale(-15),
                            paddingHorizontal: scale(15),
                            borderColor: config.Constant.COLOR_BORDER_HOME_LIST
                        }}>
                            <Pressable onPress={IAGREE}
                            style={styles.iagreeBtn}>
                                <Text style={[styles.staticText, {
                                    color: config.Constant.COLOR_WHITE,
                                    fontFamily: config.Constant.Font_Medium,
                                    opacity:1
                                }]}>I AGREE</Text>
                            </Pressable>
                            <Pressable onPress={Close}
                             style={[styles.iagreeBtn, {
                                backgroundColor: config.Constant.COLOR_WHITE
                            }]}>
                                <Text style={[styles.staticText, {
                                    color: config.Constant.COLOR_BLUE,
                                    fontFamily: config.Constant.Font_Medium,
                                    opacity:1
                                }]}>NO, THANKS</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </Modal>

    )
};

export default DiscountCondition
