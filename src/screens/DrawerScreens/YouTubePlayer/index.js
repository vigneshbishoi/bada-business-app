import React, { useState, useEffect } from 'react';
import { View, Image, Pressable, Text, Modal, FlatList, SafeAreaView, Share, } from 'react-native';
import { scale } from 'react-native-size-matters';
import config from '../../../config';
import images from '../../../config/Images'
import styles from './style'
import YouTubePlayer_ from "react-native-youtube-sdk";
import { YoutubeNextViewList } from '../../../component/index'

function YouTubePlayer(props) {

    const [video_id, setVideo_Id] = useState('')
    const [nextVideoList, setNextVideoList] = useState([])
    const [UpdateNewData, setUpdateNewData] = useState(false)
    const [ApiPageCount, setApiPageCount] = useState(0)
    const [SearchApiPageCount, setSearchApiPageCount] = useState(0)

    var ms = props.route?.params?.Item?.duration,
        min = Math.floor((ms / 1000 / 60) << 0),
        sec = Math.floor((ms / 1000) % 60);

    useEffect(() => {
        setNextVideoList([])
        var url = props.route?.params?.Item?.url;
        var videoid = url.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
        if (videoid != null) {
            setVideo_Id(videoid[1])
        }
        var NextVideoIndex = ''
        props.route?.params?.NextVideos.map((itm, index) => {
            if (itm._id == props.route?.params?.Item?._id) {
                NextVideoIndex = index
            }
        })
        props.route?.params?.NextVideos.map((mapdata, index) => {
            if (index > NextVideoIndex) {
                setNextVideoList(nextVideoList => [...nextVideoList, mapdata])
            }
        })
        setApiPageCount(props.route?.params?.ApiPageNumber)
        setSearchApiPageCount(props.route?.params?.SearchApiPageNumber)
    }, [UpdateNewData])

    const YoutubeVideosApi = async () => {
        var formData = {
            "category": props.route?.params?.CateTypeSelect == 0 ?
                "" : props.route?.params?.LoadMoreId,
            "page": `${ApiPageCount}`
        }
        var cate = await modules.APIServices.PostApiCall(
            config.ApiEndpoint.YOUTUBE_VIDEOS,
            formData
        );
        if (cate.success == true) {
            config.Constant.showLoader.hideLoader();
            props.route?.params?.CateTypeSelect == 0 ?
                cate?.data?.map((catedata) => catedata.videos.map((mapdata) => {
                    setNextVideoList(nextVideoList => [...nextVideoList, mapdata])
                })) :
                cate?.data[0]?.videos?.map((mapdata) => {
                    setNextVideoList(nextVideoList => [...nextVideoList, mapdata])
                })
            setApiPageCount(ApiPageCount + 1)
        } else {
            config.Constant.showLoader.hideLoader();
            // Alert.alert('error', data.message);
        }
    }

    const YoutubeVideosSearchApi = async (searchText) => {
        var formData = {
            "searchText": searchText,
            "page": SearchApiPageCount
        }
        var Search = await modules.APIServices.PostApiCall(
            config.ApiEndpoint.YOUTUBE_SEARCH,
            formData
        );
        if (Search.success == true) {
            config.Constant.showLoader.hideLoader();
            SearchApiPageCount == 0 ?
                setNextVideoList(Search?.data) :
                Search?.data.map((mapdata) => {
                    setNextVideoList(nextVideoList => [...nextVideoList, mapdata])
                })
            setSearchApiPageCount(SearchApiPageCount + 1)
        } else {
            config.Constant.showLoader.hideLoader();
            // Alert.alert('error', data.message);
        }
    }

    return (
        // console.log('LogLog', props,),
        <SafeAreaView style={styles.Contact}>
            <View style={styles.Contact}>
                <View style={[styles.LinearSty,
                styles.semiView]}>
                    <Pressable onPress={() => props.navigation.goBack()}
                        style={styles.backImgBtn}>
                        <Image style={styles.backImg}
                            source={images.BackIcon} resizeMode={'cover'} />
                    </Pressable>
                    <Pressable onPress={() => Share.share({
                        url: props.route?.params?.Item?.shareShortUrl,
                        message: `Hey, I recommend you watching this interesting video: ${props.route?.params?.Item?.shareShortUrl}`
                    })} style={[styles.backImgBtn, {
                        marginHorizontal: scale(8),
                        alignItems: 'center'
                    }]}><Image style={styles.shareImg}
                        source={images.ShareIcon} resizeMode={'cover'} />
                    </Pressable>
                </View>
                <View style={styles.mainTextView}>
                    <YouTubePlayer_
                        // ref={ref => (this.youTubePlayer = ref)}
                        videoId={video_id && `${video_id}`}
                        autoPlay={true}
                        fullscreen={false}
                        showFullScreenButton={true}
                        showSeekBar={true}
                        showPlayPauseButton={true}
                        // startTime={5}
                        style={{ width: "100%", height: scale(202) }}
                        onReady={e => console.log("onReady", e.type)}
                        onError={e => console.log("onError", e.error)}
                        onChangeState={e => console.log("onChangeState", e.state)}
                        onChangeFullscreen={e => console.log("onChangeFullscreen", e.isFullscreen)}
                    />
                    <Text style={styles.titleText}>
                        {props.route?.params?.Item?.title}</Text>
                    <View style={styles.clockMainView}>
                        <Image style={styles.clockImg}
                            source={images.Time} resizeMode={'cover'} />
                        <Text style={styles.timeText}>
                            {min.toString().length == 1 ? `0${min}` : min}:{sec.toString().length == 1 ? `0${sec}` : sec} mins </Text>
                    </View>
                    <View style={{
                        backgroundColor: config.Constant.COLOR_LIGHT_BLACK_DRAWER,
                        paddingVertical: scale(20),
                        paddingLeft: scale(15)
                    }}>
                        <Text style={styles.nextVideoText}>
                            {config.I18N.t('NextVideos')}</Text>

                        <YoutubeNextViewList
                            Arr={nextVideoList}
                            props={props}
                            horizontal={true}
                            marginRight={scale(10)}
                            width={config.Constant.SCREEN_WIDTH / 1.12}
                            HandlePress={(item, index) => {
                                props.navigation.navigate('YouTubePlayer', {
                                    Item: item,
                                    NextVideos: nextVideoList,
                                    ApiPageNumber: ApiPageCount,
                                    CateTypeSelect: props.route?.params?.CateTypeSelect,
                                    LoadMoreId: props.route?.params?.LoadMoreId,
                                    ForSearch: props.route?.params?.search,
                                    SearchApiPageNumber: SearchApiPageCount - 1
                                })
                                setUpdateNewData(!UpdateNewData)
                            }}
                            onEndReached={() => props.route?.params?.ForSearch != '' ?
                                YoutubeVideosSearchApi(props.route?.params?.ForSearch) :
                                YoutubeVideosApi()}
                            onEndReachedThreshold={0.5}
                        />

                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
};

export default YouTubePlayer;
