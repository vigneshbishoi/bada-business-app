import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, Pressable, Text, Modal, FlatList, Platform, SafeAreaView, ScrollView, } from 'react-native';
import { scale } from 'react-native-size-matters';
import config from '../../../config';
import images from '../../../config/Images'
import styles from './style'
import Save_Courses_List from '../../SavedScreen/Save_Courses_List/index'

const Data = [
    {
        title: '15 On-demand videos',
        rating: 'Ashish Mehta',
        details: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print.'
    },
    {
        title: "15 On-demand videos",
        rating: 'Vaibhav Joshi',
        details: 'The passage is attributed to an unknown typesetter in the 15th century.'
    },
    {
        title: "15 On-demand videos",
        rating: 'Vaibhav Joshi',
        details: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print.'
    },

];

function DownloadCoursesScreen(props) {

    return (
        <SafeAreaView style={styles.Contact}>
            <Save_Courses_List
                ListHeaderComponent={(
                    <View style={styles.Contact}>
                        <View style={[styles.LinearSty,
                        styles.semiView]}>
                            <Pressable onPress={() => props.navigation.goBack()}
                                style={styles.backImgBtn}>
                                <Image style={styles.backImg}
                                    source={images.BackIcon} resizeMode={'cover'} />
                            </Pressable>
                            <Text style={styles.titleText}>
                                {config.I18N.t('drawer_Downloaded_Courses')}</Text>
                        </View>
                        <View style={styles.mainTextView}>
                            <Text style={styles.overview}>
                                YOU CAN PLAY DOWNLOADED VIDEOS OFFLINE</Text>
                        </View>
                    </View>
                )} Arr={Data} props={props}
                // HandlePress={(item, index) =>
                //     EAEBtn ? props.navigation.navigate('CoursesDetailScreen', {
                //         EAETrue: EAEBtn,
                //         EAEDetails: item
                //     }) : props.navigation.navigate('CoursesDetailScreen', {
                //         EAETrue: EAEBtn,
                //         PSCid: item._id
                //     })}
                // colorAuthor={config.Constant.COLOR_BLUE}
                // onEndReached={() => {
                //     setPSCListCount(PSCListcount + 20)
                //     config.Constant.showLoader.showLoader();
                //     PSCListFun()
                //     config.Constant.showLoader.hideLoader();
                // }}
                // onEndReachedThreshold={0.5}
                selectedList={(index) => { }}
                marginTop={Platform.OS == 'android' ? scale(0) : scale(5)}
                marginBottom={scale(30)}
                hiddenAddToCart={true}
            />
        </SafeAreaView>
    )
};

export default DownloadCoursesScreen
