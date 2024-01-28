import React, { useState, useEffect, useRef } from 'react';
import {
    View,
    Text,
    Modal,
    Image,
    Platform,
    Pressable,
    FlatList,
    ImageBackground,
    Alert,
    TextInput,
    Share,
} from 'react-native';
import { scale } from 'react-native-size-matters';
import styles from './style';
import config from '../../config/index';
import images from '../../config/Images';
import { ScrollView } from 'react-native-gesture-handler';
import {
    Courses_Screen_List,
    Add_To_Cart,
    SaveAndUnsaveHandle,
} from '../../component/index';
import ReadingMaterial from './ReadingMaterial/index';
import Assessment from './Assessment/index';
import SyllabusFullDetails from './SyllabusFullDetail/index';
import AssessmentResult from './AssessmentResult/index';
import { msToHMS } from '../../Util/Utilities';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PlayIcon } from '../../assets/svg';
import HTML from 'react-native-render-html';
import { setSaveGetList, setSaveCarts } from '../../Redux/actions/homeData';
import RatingModal from './Ratings/index';
import { BrightcovePlayer } from 'react-native-brightcove-player';
import AuthorDetails from './AuthorDetails/index'

//For Only UI testing Arr
const Data = [
    {
        name: '15 On-demand videos',
        rating: 'Ashish Mehta',
        details:
            'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print.',
    },
    {
        name: 'Reading Material',
        rating: 'Vaibhav Joshi',
        details:
            'The passage is attributed to an unknown typesetter in the 15th century.',
    },
    {
        name: 'Assessment',
        rating: 'Vaibhav Joshi',
        details:
            'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print.',
    },
];

const Tab = [
    'Overview',
    'Related Courses',
    // "Benefits",
    'Syllabus',
    'Ratings',
];

const Syll = [
    {
        title: 'Massive Action Plan',
    },
    {
        title: 'Reading Material',
    },
    {
        title: 'Assessment',
    },
];

const Syll_Extra_Leraning = [
    {
        title: 'Reading Material',
    },
    {
        title: 'Assessment',
    },
    {
        title: 'Massive Action Plan',
    },
];

//////////////////////////////

function CoursesDetailScreen(props) {
    const myList = useRef();
    const VideoPlayRef = useRef();
    const [downloadClick, setDownloadClick] = useState(false);
    const [saveClick, setSaveClick] = useState(false);
    const [selectCate, setSelectCate] = useState(0);
    const [visibleIndex, setVisibleIndex] = useState(null);
    const [syllbusIndex, setSyllbusIndex] = useState(null);
    const [readingMaterial, setReadingMaterial] = useState(false);
    const [assessement, setAssessement] = useState(false);
    const [syllabusDetialModalBtn, setSyllabusDetailsModalBtn] = useState(false);
    const [syllabusDetialModal, setSyllabusDetailsModal] = useState('');
    const [assessementResultModal, setAssessementResultModal] = useState(false);
    const [details, setDetail] = useState('');
    const [AssessmentanswerList, setAssessementAnswerList] = useState([]);
    const [relatedListCount, setRelatedListCount] = useState(20);
    const [relatedListCountEAE, setRelatedListCountEAE] = useState(0);
    const [relatedList, setRelatedList] = useState();
    const [ratingDetails, setRatingDetails] = useState('');
    const [ratingModal, setRatingModal] = useState(false);
    const [showRatingFullList, setShowRatingFullList] = useState(false);
    const [isWatchPreviewTrue, setIsWatchPreviewTrue] = useState(false);
    const [isWatchPreviewTime, setIsWatchPreviewTime] = useState(0);
    const [videoPlay, setVideoPlay] = useState(true);
    const [changeAddToCartValue, setChangeAddToCardValue] = useState(false);
    const [UpdateScreenData, setUpdateScreenData] = useState(false);
    const [speakerDetailsModal, setSpeakerDetailsModal] = useState(false);

    useEffect(async () => {
        props.route.params?.PSCid != undefined
            ? [PSCDetailsFun(), RatingApiEAE(props.route.params?.PSCid)]
            : props.route.params?.EAEid != undefined
                ? [EAEDetailsFun(), RatingApiEAE(props.route.params?.EAEid)]
                : null;
    }, [UpdateScreenData]);

    const RatingApiEAE = async id => {
        // config.Constant.showLoader.showLoader();
        var formData = {
            topic_id: id,
        };
        var EAE = await modules.APIServices.PostApiCall(
            config.ApiEndpoint.EAE_RATING_LIST,
            formData,
        );
        if (EAE.success == true) {
            config.Constant.showLoader.hideLoader();
            setRatingDetails(Object.keys(EAE.data).length != 0 ? EAE.data : '');
        } else {
            config.Constant.showLoader.hideLoader();
            // Alert.alert('error', data.message);
        }
    };

    const Ralaetd_Topics_Fun = async ID => {
        // config.Constant.showLoader.showLoader();
        var formData = {
            type: 'related',
            categoryId: ID,
            page: 0,
            limit: relatedListCount,
        };
        var _Courses = await modules.APIServices.PostApiCall(
            config.ApiEndpoint.RECOMMENDED_COURSES,
            formData,
        );
        if (_Courses.success == true) {
            config.Constant.showLoader.hideLoader();
            setRelatedList(_Courses.data.pscCourse);
        } else {
            config.Constant.showLoader.hideLoader();
            // Alert.alert('error', data.message);
        }
    };

    const PSCDetailsFun = async () => {
        config.Constant.showLoader.showLoader();
        var formData = {
            courseId: props.route.params?.PSCid,
        };
        var PSC = await modules.APIServices.PostApiCall(
            config.ApiEndpoint.PSC_COURSE_DETAIL,
            formData,
        );
        if (PSC.success == true) {
            debugger
            setDetail(PSC.data);

            config.Constant.showLoader.hideLoader();
            Ralaetd_Topics_Fun(PSC.data.categoryId);
            setSaveClick(PSC?.data?.isSaved);
            // setPSCList(PSC.data.pscCourse)
        } else {
            config.Constant.showLoader.hideLoader();
            // Alert.alert('error', data.message);
        }
    };

    const EAEDetailsFun = async () => {
        config.Constant.showLoader.showLoader();
        var formData = {
            topicId: props.route.params?.EAEid,
        };
        var EAE = await modules.APIServices.PostApiCall(
            config.ApiEndpoint.EAE_TOPIC_DETAILS,
            formData,
        );
        if (EAE.success == true) {
            debugger
            setDetail(EAE.data);

            config.Constant.showLoader.hideLoader();
            Ralaetd_Topics_Fun_EAE(EAE.data.categoryId);
            setSaveClick(EAE?.data?.isSaved);
            // setPSCList(PSC.data.pscCourse)
        } else {
            config.Constant.showLoader.hideLoader();
            // Alert.alert('error', data.message);
        }
    };

    const Ralaetd_Topics_Fun_EAE = async id => {
        var formData = {
            progress: 'related',
            page: relatedListCountEAE,
            categoryId: [`${id}`],
            subCategoryId: [],
            authorId: '',
            sort: 'asc',
        };
        var _Courses = await modules.APIServices.PostApiCall(
            config.ApiEndpoint.EAELIST_COURSE_TAB,
            formData,
        );
        if (_Courses.success == true) {
            config.Constant.showLoader.hideLoader();
            relatedListCountEAE == 0
                ? setRelatedList(_Courses.data)
                : _Courses.data.map(mapData => {
                    setRelatedList(relatedList => [...relatedList, mapData]);
                });
            _Courses.data;
        } else {
            config.Constant.showLoader.hideLoader();
            // Alert.alert('error', data.message);
        }
    };

    const Item = ({ item, index }) => {
        return (
            <Pressable
                onPress={() => [
                    setSelectCate(index),
                    myList.current.scrollToIndex({
                        animated: true,
                        index: index,
                        viewPosition: 0,
                    }),
                ]}>
                <View style={styles.flacCateView}>
                    <Text
                        style={[
                            styles.flatCateText,
                            {
                                fontFamily:
                                    selectCate == index
                                        ? config.Constant.Font_Semi_Bold
                                        : config.Constant.Font_Regular,
                                opacity: selectCate == index ? 1 : 0.6,
                            },
                        ]}>
                        {props.route.params?.EAETrue && item == 'Syllabus'
                            ? 'Extra Learning'
                            : item}
                    </Text>
                </View>
                <View
                    style={[
                        styles.flatCateBottomLine,
                        {
                            backgroundColor:
                                selectCate == index
                                    ? config.Constant.COLOR_DARK_GREY
                                    : 'transparent',
                        },
                    ]}
                />
            </Pressable>
        );
    };

    const CateList = () => {
        return (
            <FlatList
                showsHorizontalScrollIndicator={false}
                data={Tab}
                horizontal
                style={styles.flatStyle}
                renderItem={(item, index) => Item(item, index)}
                keyExtractor={(item, index) => index.toString()}
            />
        );
    };

    const Header = () => {
        return (
            <View style={[styles.LinearSty, styles.semiView, {}]}>
                <Pressable
                    onPress={() => {
                        props.route?.params?.GoBack && props.route?.params?.GoBack(props.route?.params?.IsSave, saveClick)
                        props.navigation.goBack()
                    }}
                    style={styles.backImgBtn}>
                    <Image
                        style={styles.backImg}
                        source={images.BackIcon}
                        resizeMode={'cover'}
                    />
                </Pressable>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Pressable
                        onPress={() =>
                            details != ''
                                ? Share.share({
                                    url: details.shareShortUrl,
                                    message: `Hey, I recommend you reading this interesting article: 
                                                                ${details.shareShortUrl}`,
                                })
                                : null
                        }
                        style={styles.shareBtn}>
                        <Image
                            style={styles.shareImg}
                            source={images.ShareIcon}
                            resizeMode={'cover'}
                        />
                    </Pressable>
                    <Pressable
                        onPress={() => {
                            config.Constant.RootNavigation.navigate('CartScreen');
                        }}
                        style={styles.cardBtn}>
                        <Image
                            style={styles.cardImg}
                            source={images.Cart}
                            resizeMode={'cover'}
                        />
                        {props?.homeData?.savecarts != 0 ? (
                            <View style={styles.cartCountView}>
                                <Text style={styles.countText}>
                                    {props?.homeData?.savecarts}
                                </Text>
                            </View>
                        ) : null}
                    </Pressable>
                </View>
            </View>
        );
    };

    const OverView = () => {
        return (
            <View style={{ marginBottom: scale(30) }}>
                <Text numberOfLines={1} style={styles.overviewText}>
                    {config.I18N.t('CoursesDetail_Overview')}{' '}
                </Text>
                <View style={{ marginHorizontal: scale(15) }}>
                    {details != '' ? <HTML source={{ html: details.description }} /> : null}
                </View>
            </View>
        );
    };


    const RelatedCourses = () => {
        return (
            <View style={styles.relatedCoureseView}>
                <Text numberOfLines={1}
                    style={styles.relatedCoursesText}>
                    {props.route.params?.EAETrue ?
                        config.I18N.t('CoursesDetail_Related_Topics') :
                        config.I18N.t('CoursesDetail_Related_Courses')} </Text>
                <Courses_Screen_List Arr={relatedList} horizontal={true} props={props}
                    price={'$ 1,500'} marginRight={scale(14)}
                    width={config.Constant.SCREEN_WIDTH * 0.85}
                    Falt_style={{ marginTop: scale(-2), }}
                    colorAuthor={config.Constant.COLOR_BLUE}
                    HandlePress={(item, index) => props.route.params?.EAETrue ?
                        [props.navigation.navigate('CoursesDetailScreen', {
                            EAETrue: true,
                            EAEid: item._id,
                            IsSave: item?.isSaved,
                        }), setUpdateScreenData(!UpdateScreenData)] : [props.navigation.navigate('CoursesDetailScreen', {
                            EAETrue: false,
                            PSCid: item._id,
                            IsSave: item?.is_saved
                        }), setUpdateScreenData(!UpdateScreenData)]}
                    onEndReached={() => {
                        relatedList.length >= 4 && !props.route.params?.EAETrue ?
                            [setRelatedListCount(relatedListCount + 20),
                            Ralaetd_Topics_Fun(details.categoryId)] :
                            relatedList.length >= 4 && props.route.params?.EAETrue ?
                                [setRelatedListCountEAE(relatedListCountEAE + 1),
                                Ralaetd_Topics_Fun_EAE(details.categoryId)] :
                                null
                    }}
                    onEndReachedThreshold={0.5}
                    hidesepratorLine={true}
                    ClickOnSave={async (item, data) => !data ?
                        await SaveAndUnsaveHandle.AddToSave(item._id, props.route.params?.EAETrue ? "2" : "1") :
                        await SaveAndUnsaveHandle.DeleteSave(item._id, props.route.params?.EAETrue ? "2" : "1")
                    }
                />
            </View>
        );
    }

    const Rating = () => {
        return (
            <View style={styles.benefitView}>
                <View style={styles.ratingView}>
                    <Text
                        numberOfLines={1}
                        style={[
                            styles.relatedCoursesText,
                            {
                                marginBottom: 0,
                            },
                        ]}>
                        {config.I18N.t('CoursesDetail_Ratings')}{' '}
                    </Text>
                    {props.route.params?.EAETrue ? (
                        <Pressable
                            onPress={() => setRatingModal(true)}
                            style={[
                                styles.ratingViewAllBtn,
                                {
                                    marginVertical: 0,
                                },
                            ]}>
                            <Text
                                style={[
                                    styles.ratingName,
                                    {
                                        marginTop: scale(2),
                                    },
                                ]}>
                                {config.I18N.t('CoursesDetail_Write_A_Reviews')}
                            </Text>
                        </Pressable>
                    ) : (
                        <Text> </Text>
                    )}
                </View>
                <View style={styles.ratingNubView}>
                    {!!ratingDetails && ratingDetails != '' ? (
                        <Image
                            source={images.Star_transparent}
                            style={[styles.playImg, { marginTop: scale(-5) }]}
                            resizeMode={'cover'}
                        />
                    ) : null}
                    {!!ratingDetails && ratingDetails != '' ? (
                        <Text numberOfLines={1} style={styles.ratingNub}>
                            {ratingDetails && ratingDetails.rating}
                        </Text>
                    ) : null}
                    {!!ratingDetails && ratingDetails != '' ? (
                        <Text style={styles.flatText}>
                            ({ratingDetails && ratingDetails.review}{' '}
                            {config.I18N.t('reviews')})
                        </Text>
                    ) : null}
                </View>
                {!!ratingDetails && ratingDetails != ''
                    ? ratingDetails?.comment.map((item, key) => {
                        return key <= 1
                            ? RatingListMapView(item, key)
                            : showRatingFullList
                                ? RatingListMapView(item, key)
                                : null;
                    })
                    : null}
                {!!ratingDetails &&
                    ratingDetails?.comment.length > 1 &&
                    !showRatingFullList ? (
                    <Pressable
                        onPress={() => setShowRatingFullList(true)}
                        style={styles.ratingViewAllBtn}>
                        <Text style={styles.ratingName}>
                            {config.I18N.t('CoursesDetail_View_All_Reviews')}
                        </Text>
                    </Pressable>
                ) : null}
            </View>
        );
    };

    const RatingListMapView = (item, key) => {
        return (
            <View
                key={key}
                style={[
                    styles.ratingFlatView,
                    {
                        marginBottom: key <= 1 ? scale(30) : scale(10),
                    },
                ]}>
                <View style={styles.ratingFlatSemiView}>
                    <View style={styles.ratingSplitView}>
                        <Image
                            source={images.Profile}
                            style={styles.playImg}
                            resizeMode={'cover'}
                        />
                        {item.last_name != '' ? (
                            <Text style={styles.ratingName}>
                                {item.first_name} {item.last_name}
                            </Text>
                        ) : (
                            <Text style={styles.ratingName}>{item.first_name}</Text>
                        )}
                        <View style={styles.ratingDot} />
                        <Text style={styles.ratingDate}>
                            {item.createdAt.substr(0, 10)}
                        </Text>
                    </View>
                    <View style={styles.ratingSplitView}>
                        <Image
                            source={images.Star_transparent}
                            style={styles.ratinginsideViewstar}
                            resizeMode={'cover'}
                        />
                        <Text style={styles.ratingInsideNum}>{item.rate}</Text>
                    </View>
                </View>
                <Text style={[styles.flatText, { opacity: 0.6 }]}>{item.comment}</Text>
            </View>
        );
    };

    const ExtraLearingFlatItemView = (item, index) => {
        return (
            <Pressable
                key={item.index}
                style={styles.LearingListView}
                onPress={() =>
                    item.index == 0
                        ? props.navigation.push('WebViewText', {
                            type: 5,
                            title: 'Reading Material',
                            Data: details?.reading_content,
                        })
                        : item.index == 1 && details?.assesment_score == 0
                            ? setAssessement(true) :
                            item.index == 1 && details?.assesment_score != 0
                                ? [Platform.OS == 'android'
                                    ? setAssessementResultModal(true)
                                    : [setAssessement(false), setAssessementResultModal(true)]]
                                : item.index == 2
                                    ? setReadingMaterial(true)
                                    : null
                }>
                <Text numberOfLines={1} style={styles.learnItemText}>
                    {item.index + 1}. {item.item.title}
                </Text>
                <Image
                    source={images.Right_arrow_home}
                    style={styles.learnItemRightArrow}
                    resizeMode={'cover'}
                />
            </Pressable>
        );
    };

    const ExtraLearning_OR_Syllabus = () => {
        return (
            <View style={styles.ExtraLearingView}>
                <Text
                    numberOfLines={1}
                    style={[
                        styles.overviewText,
                        {
                            marginBottom: 0,
                        },
                    ]}>
                    {props.route.params?.EAETrue
                        ? config.I18N.t('CoursesDetail_Extra_Learning')
                        : config.I18N.t('CoursesDetail_Syllabus')}{' '}
                </Text>
                {Syll_Extra_Leraning.map((learn, index) => {
                    if (
                        details != '' &&
                        props.route.params?.EAETrue == true &&
                        details?.actionPlan != null &&
                        details?.actionPlan.length != 0
                    ) {
                        return <ExtraLearingFlatItemView item={learn} index={index} />;
                    } else if (
                        details != '' &&
                        props.route.params?.EAETrue == true &&
                        details?.actionPlan != null &&
                        details?.actionPlan.length == 0 &&
                        index != 2
                    ) {
                        return <ExtraLearingFlatItemView item={learn} index={index} />;
                    }
                })}
                {props.route.params?.EAETrue == false && details.TOPICS != undefined
                    ? details.TOPICS.map((learn, index) => {
                        return (
                            <View
                                key={index}
                                style={[
                                    styles.LearingListView,
                                    {
                                        flexDirection: 'column',
                                    },
                                ]}>
                                <Pressable
                                    onPress={() =>
                                        setSyllbusIndex(syllbusIndex == index ? null : index)
                                    }
                                    style={styles.syllabusHeaderView}>
                                    <Text numberOfLines={1} style={styles.learnItemText}>
                                        {index + 1}. {learn.title}
                                    </Text>
                                    {syllbusIndex == index ? (
                                        <Image
                                            source={images.Minus}
                                            style={styles.learnItemPlusImg}
                                            resizeMode={'contain'}
                                        />
                                    ) : (
                                        <Image
                                            source={images.Plus}
                                            style={styles.learnItemPlusImg}
                                            resizeMode={'contain'}
                                        />
                                    )}
                                </Pressable>
                                {syllbusIndex == index ? (
                                    <Pressable
                                        onPress={() => [
                                            setSyllabusDetailsModalBtn(true),
                                            setSyllabusDetailsModal(learn),
                                        ]}
                                        style={styles.syllabusMainImageView}>
                                        <ImageBackground
                                            source={learn.image != '' ? { uri: learn.image } : null}
                                            style={styles.syllabusMainImage}
                                            resizeMode={'cover'}>
                                            <PlayIcon />
                                        </ImageBackground>
                                    </Pressable>
                                ) : null}
                                {syllbusIndex == index ? (
                                    <Text style={styles.syllabusHideText}>
                                        {learn.description.replace(/<[^>]+>/g, '')}
                                    </Text>
                                ) : null}
                            </View>
                        );
                    })
                    : null}
            </View>
        );
    };

    const addRating = async (rate, comment) => {
        config.Constant.showLoader.showLoader();
        var formData = {
            video_id: props.route.params?.EAETrue
                ? details.url
                : syllabusDetialModal?.url,
            rate: rate,
            comment: comment,
        };

        var data = await modules.APIServices.PostApiCall(
            config.ApiEndpoint.ADD_RATING,
            formData,
        );
        if (data.success == true) {
            config.Constant.showLoader.hideLoader();
            alert('Review add successfully');
            props.route.params?.PSCid != undefined
                ? RatingApiEAE(props.route.params?.PSCid)
                : props.route.params?.EAEid != undefined
                    ? RatingApiEAE(props.route.params?.EAEid)
                    : null;
        } else {
            config.Constant.showLoader.hideLoader();
            // Alert.alert('error', data.message);
        }
    };

    const addToCart = async course_id => {
        config.Constant.showLoader.showLoader();
        var formData = {
            course_id: course_id,
        };
        var data = await modules.APIServices.PostApiCall(
            config.ApiEndpoint.ADD_CART,
            formData,
        );
        // props.setSaveCarts(props?.homeData?.savecarts + 1, () => { })
        config.Constant.showLoader.hideLoader();
        if (data.success == true) {
            setChangeAddToCardValue(true);
            props.setSaveCarts(props?.homeData?.savecarts + 1, () => { });
            Alert.alert('Success', data.message);
        } else {
            // Alert.alert('error', data.message);
        }
    };

    const ReadingMaterialFlatItemView = item => {
        return (
            <View
                key={item.key}
                style={[
                    styles.flatView,
                    { borderRightWidth: Syll.length - 1 == item.key ? 0 : 1 },
                ]}>
                <Text style={[styles.flatText, {
                    fontSize: config.Constant.Font_Size_11
                }]}>{item.item.title}</Text>
            </View>
        );
    };

    const HandlePreView = () => {
        if (details != '' && details?.isPurchased == false) {
            setIsWatchPreviewTrue(true)
            var ms = details?.preview_duration,
                min = Math.floor((ms / 1000 / 60) << 0),
                sec = Math.floor((ms / 1000) % 60);
            setIsWatchPreviewTime(sec)
        }
    }

    debugger
    return (
        // console.log('papipapi', syllabusDetialModalBtn,)
        <View style={styles.container}>
            <Header />
            {!!details && isWatchPreviewTrue && <BrightcovePlayer
                ref={VideoPlayRef}
                style={{
                    width: '100%',
                    height: scale(200),
                }}
                accountId={config.Constant.BrightCoveKey}
                videoId={details?.course_type == "eae" ? details?.url :
                    details?.TOPICS[0]?.url}
                play={videoPlay}
                policyKey={config.Constant.BrightCovePolicy}
            // onPause={(check) => [console.log('progresscheck', check), setVideoPlay(false)]}
            // onPlay={(check) => [console.log('progressPLlay', check), setVideoPlay(true)]}
            // onProgress={(progress) => {
            //     console.log('progress', progress, VideoPlayRef)
            //     progress.currentTime >= 10 ? VideoPlayRef.current.props.onPause() : null
            //     progress.currentTime >= 10 ? VideoPlayRef.current.play = false : null
            // }}
            />}
            <FlatList
                data={Tab}
                ref={myList}
                style={styles.SemiMainView}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => {
                    return (
                        <View>
                            {index == 0 ? (
                                <OverView />
                            ) : index == 1 ? (
                                <RelatedCourses />
                            ) : index == 2 ? (
                                // <Benefits /> : index == 3 ?
                                <ExtraLearning_OR_Syllabus />
                            ) : index == 3 ? (
                                <Rating />
                            ) : null}
                        </View>
                    );
                }}
                ListHeaderComponent={
                    <View>
                        <View style={styles.SemiMainView}>
                            {!isWatchPreviewTrue && <View style={styles.mainImageItemView}>
                                <ImageBackground
                                    source={details.image != '' ? { uri: details.image } : null}
                                    style={styles.MainImage}
                                    resizeMode={'cover'}>
                                    <Pressable onPress={() => HandlePreView()}
                                        style={styles.watchView}>
                                        <PlayIcon width={scale(18)} />
                                        <Text style={styles.watchText}>
                                            {config.I18N.t('CoursesDetail_Watch_Preview')}
                                        </Text>
                                    </Pressable>
                                </ImageBackground>
                            </View>}

                            <View style={styles.mainImageItemViewDetails}>
                                <Text numberOfLines={1} style={styles.downloadviewText}>
                                    {details != '' ? details.categoryTitle : ' '}
                                </Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Pressable
                                        onPress={async () => [
                                            setSaveClick(!saveClick),
                                            !saveClick
                                                ? await SaveAndUnsaveHandle.AddToSave(
                                                    props.route.params?.EAETrue
                                                        ? props.route.params?.EAEid
                                                        : props.route.params?.PSCid,
                                                )
                                                : await SaveAndUnsaveHandle.DeleteSave(
                                                    props.route.params?.EAETrue
                                                        ? props.route.params?.EAEid
                                                        : props.route.params?.PSCid,
                                                ),
                                        ]}
                                        style={styles.saveBtn}>
                                        <Image
                                            style={styles.saveImg}
                                            source={saveClick ? images.BookmarkFill : images.Save}
                                            resizeMode={'cover'}
                                        />
                                    </Pressable>
                                    {downloadClick ? (
                                        <Pressable onPress={() => setDownloadClick(!downloadClick)}>
                                            <View
                                                style={[
                                                    styles.downloadDoneView,
                                                    {
                                                        marginLeft: scale(-3.5),
                                                    },
                                                ]}>
                                                <Image
                                                    source={images.TickIcon}
                                                    style={styles.tickimg}
                                                    resizeMode={'cover'}
                                                />
                                            </View>
                                        </Pressable>
                                    ) : (
                                        <Pressable
                                            onPress={() => setDownloadClick(!downloadClick)}
                                            style={[styles.cardBtn]}>
                                            <Image
                                                style={styles.downloadImg}
                                                source={images.Download_Transparent}
                                                resizeMode={'cover'}
                                            />
                                        </Pressable>
                                    )}
                                </View>
                            </View>
                            <Text numberOfLines={2} style={styles.titleText}>
                                {details != '' ? details.title : ' '}{' '}
                            </Text>
                            <View style={styles.titlebelowFalt}>
                                {Syll.map((item, key) => {
                                    return !props.route.params?.EAETrue && key != 0 ? (
                                        <ReadingMaterialFlatItemView item={item} key={key} />
                                    ) : details &&
                                        props.route.params?.EAETrue &&
                                        details?.actionPlan != null &&
                                        details?.actionPlan.length == 0 &&
                                        key != 0 ? (
                                        <ReadingMaterialFlatItemView item={item} key={key} />
                                    ) : details &&
                                        props.route.params?.EAETrue &&
                                        details?.actionPlan != null &&
                                        details?.actionPlan.length != 0 ? (
                                        <ReadingMaterialFlatItemView item={item} key={key} />
                                    ) : null;
                                })}
                            </View>
                            <View
                                style={[
                                    styles.playVideoView,
                                    {
                                        justifyContent: props.route.params?.EAETrue
                                            ? 'space-around'
                                            : 'space-between',
                                    },
                                ]}>
                                {props.route.params?.EAETrue ? (
                                    <Pressable onPress={() => setSpeakerDetailsModal(true)}
                                        style={styles.playVideoItemView}>
                                        <Image
                                            source={images.Profile}
                                            style={styles.playImg}
                                            resizeMode={'cover'}
                                        />
                                        <Text numberOfLines={1} style={styles.playVideoStaticText}>
                                            {config.I18N.t('Speaker')}</Text>
                                        <Text numberOfLines={1} style={[styles.playvideoText, {
                                            color: config.Constant.COLOR_BLUE
                                        }]}>
                                            {details.authorName != undefined
                                                ? details?.authorName
                                                : ' '}
                                        </Text>
                                    </Pressable>
                                ) : null}
                                <View style={styles.playVideoItemView}>
                                    <Image
                                        source={images.Time}
                                        style={styles.playImg}
                                        resizeMode={'cover'}
                                    />
                                    <Text numberOfLines={1} style={styles.playVideoStaticText}>
                                        {config.I18N.t('CourseDuration')} </Text>
                                    <Text numberOfLines={1} style={styles.playvideoText}>
                                        {details != '' ? msToHMS(details.duration) : ''}
                                    </Text>
                                </View>
                                {props.route.params?.EAETrue ? null : (
                                    <View style={styles.playVideoItemView}>
                                        <Image
                                            source={images.PlayIcon}
                                            style={styles.playImg}
                                            resizeMode={'cover'}
                                        />
                                        <Text numberOfLines={1} style={styles.playVideoStaticText}>
                                            {config.I18N.t('NoofVideos')} </Text>
                                        <Text numberOfLines={1} style={styles.playvideoText}>
                                            {details == ''
                                                ? '0'
                                                : details.noOfVideos != ''
                                                    ? details.noOfVideos
                                                    : '0'}
                                        </Text>
                                    </View>
                                )}
                            </View>
                            <CateList />
                        </View>
                    </View>
                }
                keyExtractor={(item, index) => index.toString()}
            />
            {props.route.params?.EAETrue ? null : (
                <Add_To_Cart
                    onPress={() => {
                        debugger;
                        addToCart(details._id);
                    }}
                    price={details != '' ? `₹ ${details.basePrice}` : '₹'}
                    price_detail={'Course Fee'}
                    Go_to={changeAddToCartValue ? 'Go TO CART' : 'ADD TO CART'}
                />
            )}

            {readingMaterial ? (
                <ReadingMaterial
                    Close={() => setReadingMaterial(false)}
                    // Data={`https://docs.google.com/viewer?url=${details?.actionPlan}`}
                    Data={details?.actionPlan}
                    Title={Syll_Extra_Leraning[2].title}
                />
            ) : null}
            {assessement ? (
                <Assessment
                    EAE={props.route.params?.EAETrue}
                    Details={props.route.params?.EAETrue ? details : syllabusDetialModal}
                    Close={(intervalId) => [
                        setAssessementResultModal(false),
                        setAssessement(false),
                        clearInterval(intervalId)
                    ]}
                    Arr={
                        props.route.params?.EAEid != undefined
                            ? details.assesment
                            : syllabusDetialModal.assessment
                    }
                    Result={(value, answerList, intervalId) => [
                        [setAssessementAnswerList(answerList), clearInterval(intervalId)],
                        Platform.OS == 'android'
                            ? setAssessementResultModal(value)
                            : [setAssessement(false), setAssessementResultModal(true)],
                    ]}
                />
            ) : null}

            {syllabusDetialModalBtn == true ? (
                <SyllabusFullDetails
                    Details={syllabusDetialModal}
                    DetailsArr={details?.TOPICS}
                    onPress={index =>
                        index == 0
                            ? [
                                setSyllabusDetailsModalBtn(false),
                                props.navigation.push('WebViewText', {
                                    type: 5,
                                    title: 'Reading Material',
                                    Data: details?.reading_content,
                                    onGoBack: () => {
                                        setSyllabusDetailsModalBtn(true);
                                    },
                                }),
                            ]
                            : index == 1
                                ? setAssessement(true)
                                : null
                    }
                    Close={() => setSyllabusDetailsModalBtn(false)}
                    ViewOfOptions={true}
                    PressReview={() => setRatingModal(true)}
                />
            ) : null}

            {assessementResultModal ? (
                <AssessmentResult
                    Close={() => [
                        setAssessementResultModal(false),
                        setAssessement(false),
                    ]}
                    QuationList={
                        props.route.params?.EAEid != undefined
                            ? details.assesment
                            : syllabusDetialModal.assessment
                    }
                    AnswerList={AssessmentanswerList}
                    UserSavedAnswer={props.route.params?.EAEid != undefined
                        ? details?.assessment_log : syllabusDetialModal?.assessment_log}
                    UserSavedScore={props.route.params?.EAEid != undefined
                        ? details?.assesment_score : details?.assesment_score}
                />
            ) : null}

            {ratingModal ? (
                <RatingModal
                    props={props}
                    Close={() => setRatingModal(false)}
                    ResultRating={(rate, comment) => [
                        setRatingModal(false),
                        comment.length != 0 ? addRating(rate, comment) : null,
                    ]}
                />
            ) : null}

            {speakerDetailsModal ? <AuthorDetails props={props} Close={() =>
                setSpeakerDetailsModal(false)} Details={details}
                ViewCoursesBtn={() => [setSpeakerDetailsModal(false),
                props.navigation.navigate('SpeakersScreen', {
                    authorId: details?.authorId,
                    authorTitle: details?.authorTitle,
                    authorName: details?.authorName
                })]} /> : null}
        </View>
    );
}

//---- Connect to props functions and values -----//
function mapStateToProps({ userData, homeData }) {
    return { userData, homeData };
}

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            setSaveCarts,
            setSaveGetList,
        },
        dispatch,
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CoursesDetailScreen);
