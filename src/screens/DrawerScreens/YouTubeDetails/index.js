import React, { useState, useEffect } from 'react';
import { View, Image, Pressable, Text, Modal, FlatList, TextInput, SafeAreaView, ScrollView, Share } from 'react-native';
import { scale } from 'react-native-size-matters';
import config from '../../../config';
import images from '../../../config/Images'
import styles from './style'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import modules from '../../../modules'
import { setYoutube } from '../../../Redux/actions'
import voice from '@react-native-voice/voice'
import YouTubeCard from './YouTubeCard/index'

function YouTubeDetails(props) {

    const [search, setSearch] = useState('')
    const [searchFunCall, setSearchFunCall] = useState(false)
    const [searchApiCount, setSearchApiCount] = useState(0)
    const [youTubeDetails, setYoutubeDetails] = useState([])
    const [allCateList, setAllCateList] = useState([])
    const [subcateIndex, setSubcateIndex] = useState(0)
    const [videoApiCount, setVideoApiCount] = useState(0)
    const [checkMicColor, setCheckMicColor] = useState(false)
    const [allcateBtnChange, setAllCateBtnChange] = useState(false)

    useEffect(async () => {

        voice.destroy().then(voice.removeAllListeners)

        YoutubeVideosApi(props.route.params?.Data?.id, false, 5)
        setSubcateIndex(props.route.params?.Position + 1)

        setAllCateList([])
        setAllCateList(allCateList => [...allCateList, { name: "All" }])
        props?.youtubeData?.getYoutube?.categories.map((key) => {
            setAllCateList(allCateList => [...allCateList, key])
        })

        function onSpeechResultsCheck(e) {
            setSearch(e.value[0])
            setVideoApiCount("0")
            YoutubeVideosSearchApi(e.value[0])
            setCheckMicColor(false)
        }

        function onSpeechEndCheck(e) {
            setCheckMicColor(false)
        }

        voice.onSpeechResults = onSpeechResultsCheck;
        voice.onSpeechEnd = onSpeechEndCheck;
        return () => {
            voice.destroy().then(voice.removeAllListeners);
        };
    }, [])

    const YoutubeVideosApi = async (id, UpdateCountValue, index) => {
        // alert(index)
        videoApiCount == 0 || subcateIndex == 0 || index == 0 ?
            config.Constant.showLoader.showLoader() : null
        var formData = {
            "category": id,
            "page": !UpdateCountValue ? `${videoApiCount}` : '0'
        }
        var cate = await modules.APIServices.PostApiCall(
            config.ApiEndpoint.YOUTUBE_VIDEOS,
            formData
        );
        if (cate.success == true) {
            config.Constant.showLoader.hideLoader();
            index == 0 ?
                cate?.data?.map((catedata) => catedata.videos.map((mapdata) => {
                    setYoutubeDetails(youTubeDetails => [...youTubeDetails, mapdata])
                })) : videoApiCount == 0 ?
                    setYoutubeDetails(cate.data[0].videos) :
                    cate?.data[0]?.videos.map((mapdata) => {
                        setYoutubeDetails(youTubeDetails => [...youTubeDetails, mapdata])
                    })
            !UpdateCountValue ? setVideoApiCount(videoApiCount + 1)
                : setVideoApiCount(1)
        } else {
            config.Constant.showLoader.hideLoader();
            // Alert.alert('error', data.message);
        }
    }

    const YoutubeVideosSearchApi = async (searchText) => {
        searchApiCount == 0 ?
            config.Constant.showLoader.showLoader() : null
        var formData = {
            "searchText": searchText,
            "page": searchApiCount
        }
        var Search = await modules.APIServices.PostApiCall(
            config.ApiEndpoint.YOUTUBE_SEARCH,
            formData
        );
        if (Search.success == true) {
            config.Constant.showLoader.hideLoader();
            searchApiCount == 0 && Array.isArray(Search?.data) ?
                setYoutubeDetails(Search?.data) :
                searchApiCount != 0 && Array.isArray(Search?.data) ?
                    Search?.data.map((mapdata) => {
                        setYoutubeDetails(youTubeDetails => [...youTubeDetails, mapdata])
                    }) : setYoutubeDetails([])
            setSearchApiCount(searchApiCount + 1)
        } else {
            config.Constant.showLoader.hideLoader();
            // Alert.alert('error', data.message);
        }
    }

    const ItemList = ({ item, index }) => {
        return (
            <YouTubeCard item={item} props={props} Arr={youTubeDetails}
                index={index}
                onPress={(PressItem, PressIndex) => {
                    props.navigation.navigate('YouTubePlayer', {
                        Item: PressItem,
                        NextVideos: youTubeDetails,
                        ApiPageNumber: videoApiCount,
                        CateTypeSelect: subcateIndex,
                        LoadMoreId: allCateList[subcateIndex]?.id,
                        ForSearch: search,
                        SearchApiPageNumber: searchApiCount
                    })
                }} />
        )
    }

    const Item = ({ item, index }) => {
        return (
            <Pressable onPress={() => [setAllCateBtnChange(true), setVideoApiCount(0),
            setSubcateIndex(index), setYoutubeDetails([]), YoutubeVideosApi(item.id, true, index)]}>
                <View style={[styles.allcateItemView,
                {
                    backgroundColor: subcateIndex == index ?
                        config.Constant.COLOR_DARK_GREY : config.Constant.COLOR_WHITE,
                    paddingHorizontal: index == 0 ? scale(20) : scale(15),
                    borderColor: subcateIndex == index ? config.Constant.COLOR_DARK_GREY : 'rgba(20, 26, 26, 0.15)',
                    borderWidth: subcateIndex == index ? 0 : 1
                }]}>
                    <Text style={[styles.allcateItemText,
                    {
                        color: subcateIndex == index ? config.Constant.COLOR_WHITE :
                            config.Constant.COLOR_DARK_GREY
                    }]}>{item.name}</Text>
                </View>
            </Pressable>
        )
    }

    return (
        <SafeAreaView style={styles.Contact}>
            <View style={styles.Contact}>
                <View style={[styles.LinearSty,
                styles.semiView]}>
                    <Pressable onPress={() => props.navigation.goBack()} style={styles.backImgBtn}>
                        <Image style={styles.backImg}
                            source={images.BackIcon} resizeMode={'cover'} />
                    </Pressable>
                    <Text numberOfLines={2} style={styles.titleText}>
                        {allCateList[subcateIndex]?.name}</Text>
                    <Text numberOfLines={1}
                        style={[styles.cateFlatVideoCout, {
                            opacity: 0.5,
                            marginHorizontal: scale(15)
                        }]}>
                        {props?.youtubeData?.getYoutube?.categories[subcateIndex]?.videos_count} Videos</Text>
                </View>
                <View style={styles.mainTextView}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={youTubeDetails && youTubeDetails}
                        renderItem={(item, index) => ItemList(item, index)}
                        keyExtractor={(item, index) => index.toString()}
                        ListHeaderComponent={(
                            <View>
                                <View style={styles.semiSearchView}>
                                    <View style={styles.backImgBtn}>
                                        <Image style={styles.searchImg}
                                            source={images.Search} resizeMode={'cover'} />
                                    </View>
                                    <TextInput
                                        style={[styles.textInputSty,
                                        { opacity: search.length == 0 ? 0.5 : 1, }]}
                                        onChangeText={(text) => setSearch(text)}
                                        value={search}
                                        autoFocus={false}
                                        onEndEditing={() => search != '' ?
                                            [YoutubeVideosSearchApi(search), setVideoApiCount("0")] : null}
                                        placeholder={config.I18N.t('Search_for_youtube_videos')}
                                        placeholderTextColor={config.Constant.COLOR_DARK_GREY}
                                        keyboardType='default'
                                    />
                                    {search.length != '' ?
                                        <Pressable onPress={() => [setSearch(''), setSearchApiCount(0),
                                        allcateBtnChange && subcateIndex != 0 ?
                                            YoutubeVideosApi(allCateList[subcateIndex]?.id, false, 5) :
                                            allcateBtnChange && subcateIndex == 0 ?
                                                [setYoutubeDetails([]),
                                                YoutubeVideosApi(allCateList[subcateIndex]?.id, false, 0)] :
                                                YoutubeVideosApi(props.route.params?.Data?.id, false, 5)]}
                                            style={styles.recodeBtn}>
                                            <Image style={styles.closeImg}
                                                source={images.CloseIcon} resizeMode={'cover'} />
                                        </Pressable> :
                                        <Pressable onPress={() => [voice.start('en-US'),
                                        setCheckMicColor(true)]} style={styles.recodeBtn}>
                                            <Image style={[styles.recodeImg, {
                                                tintColor: checkMicColor ? config.Constant.COLOR_RED
                                                    : config.Constant.COLOR_DRAWER_LIGHT
                                            }]}
                                                source={images.Recording} resizeMode={'cover'} />
                                        </Pressable>}
                                </View>
                                {search.length == '' ?
                                    <Text numberOfLines={1}
                                        style={styles.categoriesText}>
                                        {config.I18N.t('CAREGORIES')}</Text> : null}
                                {search.length == '' ?
                                    <FlatList
                                        showsHorizontalScrollIndicator={false}
                                        data={allCateList}
                                        horizontal
                                        style={{ marginBottom: scale(20), marginLeft: scale(15) }}
                                        renderItem={(item, index) => Item(item, index)}
                                        keyExtractor={(item, index) => index.toString()}
                                    /> : null}
                            </View>
                        )}
                        onEndReached={() => search != '' ? YoutubeVideosSearchApi(search) :
                            allcateBtnChange && subcateIndex != 0 ?
                                YoutubeVideosApi(allCateList[subcateIndex]?.id, false, 5) :
                                allcateBtnChange && subcateIndex == 0 ?
                                    YoutubeVideosApi(allCateList[subcateIndex]?.id, false, 0) :
                                    YoutubeVideosApi(props.route.params?.Data?.id, false, 5)}
                        onEndReachedThreshold={0.5}
                        ListEmptyComponent={<View style={styles.emptyListView}>
                            <Text style={styles.emptyListText}>
                                {config.I18N.t('No_data_available')}</Text>
                        </View>}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
};

//---- Connect to props functions and values -----//
function mapStateToProps({ youtubeData }) {
    return { youtubeData };
}

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(YouTubeDetails)
