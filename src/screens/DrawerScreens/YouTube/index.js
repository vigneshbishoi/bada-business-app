import React, { useState, useEffect } from 'react';
import { View, Image, Pressable, Text, Modal, FlatList, TextInput, SafeAreaView, ScrollView, } from 'react-native';
import { scale } from 'react-native-size-matters';
import config from '../../../config';
import images from '../../../config/Images'
import styles from './style'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import modules from '../../../modules'
import { setYoutube } from '../../../Redux/actions'
import voice from '@react-native-voice/voice'
import { SliderBox } from "react-native-image-slider-box"
import YouTubeCard from '../YouTubeDetails/YouTubeCard/index'

function YouTube(props) {

    const [search, setSearch] = useState('')
    const [searchList, setSearchList] = useState([])
    const [searchApiCount, setSearchApiCount] = useState(0)
    const [searchActive, setSearchActive] = useState(false)
    const [youTubeDetails, setYoutubeDetails] = useState([])
    const [banner, setBanner] = useState([])
    const [checkMicColor, setCheckMicColor] = useState(false)
    const [imagearr, setImagearr] = useState(['https://office365.mcmaster.ca/app/uploads/2020/08/Microsoft-learning.png',])

    useEffect(async () => {

        YoutubeApi()

        function onSpeechResults(e) {
            setSearchActive(true)
            YoutubeVideosSearchApi(e.value[0], 0)
            setSearchApiCount(0)
            setSearch(e.value[0])
            setCheckMicColor(false)
        }

        function onSpeechEnd(e) {
            setCheckMicColor(false)
        }

        voice.onSpeechResults = onSpeechResults;
        voice.onSpeechEnd = onSpeechEnd;
        return () => {
            voice.destroy().then(voice.removeAllListeners);
        };
    }, [])

    const YoutubeApi = async () => {
        setBanner([])
        config.Constant.showLoader.showLoader();
        var cate = await modules.APIServices.GetApiCall(
            config.ApiEndpoint.YOUTUBE,
        );
        if (cate.success == true) {
            config.Constant.showLoader.hideLoader();
            setYoutubeDetails(cate.data)
            cate.data?.banners.map((img) => {
                setBanner(Banner => [...Banner, img.image]);
            })
            props.setYoutube(cate.data, () => { })
        } else {
            config.Constant.showLoader.hideLoader();
            // Alert.alert('error', data.message);
        }
    }

    const YoutubeVideosSearchApi = async (searchText, index) => {
        searchApiCount == 0 ?
            config.Constant.showLoader.showLoader() : null
        var formData = {
            "searchText": searchText,
            "page": index == 0 ? 0 : searchApiCount
        }
        var Search = await modules.APIServices.PostApiCall(
            config.ApiEndpoint.YOUTUBE_SEARCH,
            formData
        );
        if (Search.success == true) {
            config.Constant.showLoader.hideLoader();
            (searchApiCount == 0 || index == 0) && Array.isArray(Search?.data) ?
                setSearchList(Search?.data) :
                (searchApiCount != 0 || index != 0) && Array.isArray(Search?.data) ?
                    Search?.data.map((mapdata) => {
                        setSearchList(searchList => [...searchList, mapdata])
                    }) : setSearchList([])
            setSearchApiCount(searchApiCount + 1)
        } else {
            config.Constant.showLoader.hideLoader();
            // Alert.alert('error', data.message);
        }
    }

    const ItemList = ({ item, index }) => {
        return (
            <Pressable onPress={() =>
                props.navigation.navigate('YouTubeDetailsScreen', {
                    Data: item,
                    Position: index,
                })}
                style={[styles.mainFlatView, {
                    marginBottom:
                        index == youTubeDetails?.categories.length - 1 ?
                            scale(30) : null
                }]}>
                <Image style={styles.mianImgView}
                    source={{
                        uri: item?.icon != '' ?
                            item.icon : null
                    }}
                    resizeMode={'contain'} />
                <Text numberOfLines={1}
                    style={styles.cateFlatname}>{item.name}</Text>
                <Text numberOfLines={1}
                    style={styles.cateFlatVideoCout}>
                    {item.videos_count} Videos</Text>
            </Pressable>
        )
    }

    const ItemSearchList = ({ item, index }) => {
        return (
            <YouTubeCard item={item} props={props} Arr={searchList}
                index={index}
                onPress={(PressItem, PressIndex) => {
                    props.navigation.navigate('YouTubePlayer', {
                        Item: PressItem,
                        NextVideos: searchList,
                        ApiPageNumber: 0,
                        CateTypeSelect: 5,
                        LoadMoreId: 789,
                        ForSearch: search,
                        SearchApiPageNumber: searchApiCount
                    })
                }} />
        )
    }

    const MicHandle = () => {
        return (
            search.length != '' ?
                <Pressable onPress={() => [setSearch(''),
                setSearchActive(false)]} style={styles.recodeBtn}>
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
                </Pressable>
        )
    }

    return (
        <SafeAreaView style={styles.Contact}>
            <View style={styles.Contact}>
                <View style={[styles.LinearSty,
                styles.semiView]}>
                    <Pressable onPress={() => props.navigation.goBack()}
                        style={styles.backImgBtn}>
                        <Image style={styles.backImg}
                            source={images.BackIcon} resizeMode={'cover'} />
                    </Pressable>
                    <Text style={styles.titleText}>
                        {config.I18N.t('drawer_YouTube')}</Text>
                </View>
                <View style={styles.mainTextView}>
                    {!searchActive ? < FlatList
                        key={'#'}
                        showsVerticalScrollIndicator={false}
                        numColumns={2}
                        style={{ marginHorizontal: scale(15) }}
                        data={youTubeDetails && youTubeDetails?.categories}
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
                                        onEndEditing={() => search != '' ? [setSearchActive(true),
                                        YoutubeVideosSearchApi(search, 0), setSearchApiCount(0)] :
                                            [setSearchActive(false), setSearchApiCount(0)]}
                                        placeholder={config.I18N.t('Search_for_youtube_videos')}
                                        placeholderTextColor={config.Constant.COLOR_DARK_GREY}
                                        keyboardType='default'
                                    />
                                    {<MicHandle />}
                                </View>
                                <View style={{ marginBottom: scale(40) }}>
                                    <SliderBox
                                        // ImageComponent={FastImage}
                                        images={banner.length != 0 ? banner : imagearr}
                                        sliderBoxHeight={scale(170)}
                                        onCurrentImagePressed={index => { }}
                                        dotColor={config.Constant.COLOR_DRAWER_LIGHT}
                                        inactiveDotColor="#90A4AE"
                                        autoplay
                                        circleLoop
                                        resizeMethod={'resize'}
                                        resizeMode={'cover'}
                                        paginationBoxStyle={styles.dotBoxSty}
                                        dotStyle={styles.dotSty}
                                        ImageComponentStyle={styles.boxSliderSty}
                                        imageLoadingColor="#2196F3"
                                    />
                                </View>
                            </View>
                        )}
                    // onEndReachedThreshold={0.5}
                    /> :
                        <FlatList
                            key={'_'}
                            showsVerticalScrollIndicator={false}
                            numColumns={1}
                            data={searchList && searchList}
                            renderItem={(item, index) => ItemSearchList(item, index)}
                            keyExtractor={(item, index) => index.toString()}
                            ListHeaderComponent={(
                                <View>
                                    <View style={[styles.semiSearchView, {
                                        marginHorizontal: scale(15)
                                    }]}>
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
                                            onEndEditing={() => search != '' ? [setSearchActive(true),
                                            YoutubeVideosSearchApi(search, 0), setSearchApiCount(0)] :
                                                [setSearchActive(false), setSearchApiCount(0)]}
                                            placeholder={config.I18N.t('Search_for_youtube_videos')}
                                            placeholderTextColor={config.Constant.COLOR_DARK_GREY}
                                            keyboardType='default'
                                        />
                                        {<MicHandle />}
                                    </View>
                                </View>
                            )}
                            onEndReached={() => YoutubeVideosSearchApi(search, 5)}
                            onEndReachedThreshold={0.5}
                            ListEmptyComponent={<View style={styles.emptyListView}>
                                <Text style={styles.emptyListText}>
                                    {config.I18N.t('No_data_available')}</Text>
                            </View>}
                        />}
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
        setYoutube
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(YouTube)
