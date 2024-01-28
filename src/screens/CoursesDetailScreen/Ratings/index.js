import React, { useState } from 'react';
import { View, StyleSheet, Image, Pressable, Text, Modal, FlatList, Platform, TextInput, KeyboardAvoidingView, } from 'react-native';
import { scale } from 'react-native-size-matters';
import config from '../../../config';
import images from '../../../config/Images'
import styles from './style'
import { BlurView } from "@react-native-community/blur";
import { CustomButton } from '../../../component/index'
import { ScrollView } from 'react-native-gesture-handler';
import {
    StarEmptyRatingSvg,
    StarFillRatingSvg
} from '../../../assets/svg';

const RatingNuber = [1, 2, 3, 4, 5]

const RatingModal = ({ props, Close, ResultRating }) => {

    const [ratingComment, setRatingComment] = useState('')
    const [ratingNumber, setRatingNumber] = useState(0)
    const [commentError, setCommentError] = useState(false)

    return (
        <Modal transparent={true} visible={true} statusBarTranslucent={true}>
            <KeyboardAvoidingView style={styles.Coonstant}
                behavior={Platform.OS == "ios" ? "padding" : "padding"} enabled>
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
                            {config.I18N.t('CoursesDetail_Write_A_Reviews_Modal')}</Text>
                        <Text style={styles.line} />
                        <View style={styles.MainViewOfRatingView}>
                            <View style={styles.starMainView}>
                                <FlatList
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                    data={RatingNuber}
                                    renderItem={({ item, index }) => (
                                        ratingNumber == index ?
                                            <Pressable
                                                onPress={() => setRatingNumber(ratingNumber == item ?
                                                    0 : item)}
                                                style={styles.starBtn}>
                                                <StarEmptyRatingSvg />
                                            </Pressable> :
                                            ratingNumber > index ?
                                                <Pressable onPress={() => setRatingNumber(ratingNumber == item ?
                                                    0 : item)}
                                                    style={styles.starBtn}>
                                                    <StarFillRatingSvg />
                                                </Pressable> :
                                                <Pressable onPress={() => setRatingNumber(ratingNumber == item ?
                                                    0 : item)}
                                                    style={styles.starBtn}>
                                                    <StarEmptyRatingSvg />
                                                </Pressable>
                                    )}
                                    keyExtractor={(item, index) => index.toString()} />
                            </View>
                            <View style={styles.ViewOfResultRatingNumber}>
                                <Text style={styles.starNumberText}>{ratingNumber}</Text>
                                <Text style={styles.starNumberText}>/</Text>
                                <Text style={styles.starNumberText}>5</Text>
                            </View>
                        </View>
                        <TextInput
                            style={[styles.textInputCmt,]}
                            onChangeText={(text) => setRatingComment(text)}
                            value={ratingComment}
                            placeholder={config.I18N.t('pleaseCommentYourReview')}
                            placeholderTextColor={"rgba(41, 40, 48, 0.5)"}
                            keyboardType='default'
                            multiline={true}
                        />
                        {commentError ?
                            <Text style={styles.errorText}>
                                *{config.I18N.t('pleaseEnterYourReview')}</Text> : null}
                        <View style={styles.customBtnView}>
                            <CustomButton
                                onPress={() => ratingComment.length != 0 ?
                                     ResultRating(ratingNumber, ratingComment):
                                    setCommentError(true)}
                                validate={true}
                                title={'SUBMIT'}
                            />
                        </View>
                    </View>
                    <View style={styles.CloseMainView}>
                        <Pressable onPress={Close} style={[styles.CloseBtn, {

                        }]}>
                            <View style={styles.CloseSemiView}>
                                <Image source={images.CloseIcon} style={styles.CloseImg}
                                    resizeMode={'cover'} />
                            </View>
                        </Pressable>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </Modal>

    )
};

export default RatingModal
