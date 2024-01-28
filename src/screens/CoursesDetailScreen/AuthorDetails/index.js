import React, { useState } from 'react';
import { View, StyleSheet, Image, Pressable, Text, Modal, ScrollView, } from 'react-native';
import { scale } from 'react-native-size-matters';
import config from '../../../config';
import images from '../../../config/Images'
import styles from './style'
import { BlurView } from "@react-native-community/blur";
import HTML from 'react-native-render-html';

const AuthorDetails = ({ props, Close, Details, ViewCoursesBtn }) => {

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
                    <Pressable onPress={ViewCoursesBtn} 
                    style={styles.viewCoursesView}>
                        <Text style={styles.viewCoursesText}>
                            {config.I18N.t('Speakers_View_courses')}</Text>
                    </Pressable>
                    <ScrollView
                        showsVerticalScrollIndicator={false}>
                        <Image source={{
                            uri: Details?.authorImage != '' ? Details?.authorImage
                                : null
                        }}
                            style={styles.authorImg} />
                        <Text style={styles.authorName}>
                            {Details?.authorTitle} {Details?.authorName}</Text>
                        <Text style={styles.authorDesignation}>
                            {Details?.authorDesignation}</Text>
                        <HTML source={{ html: Details?.authorDescription }} />
                    </ScrollView>
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
        </Modal>

    )
};

export default AuthorDetails
