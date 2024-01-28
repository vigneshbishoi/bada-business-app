import React, { useState, useEffect } from 'react';
import { View, Text, Modal, Image, Platform, Pressable, FlatList, ImageBackground, Alert } from 'react-native';
import { scale } from 'react-native-size-matters';
import style from './style'
import config from '../../config/index';
import {
    Header, Search_Call, Home_Your_Course, Home_Categories, Home_Recommended_Courses,
    SaveAndUnsaveHandle
} from '../../component/index'
import { SliderBox } from "react-native-image-slider-box"
import images from '../../config/Images'
import Top_Categories from './Top_Categories/index.js'
import Recommended_Courses from './Recommended_Courses/index.js'
import Search_Modal from './Search_Modal/index'
import How_to_use_Bada from './How_To_Use_Bada/index'
import LinearGradient from 'react-native-linear-gradient';
import modules from '../../modules'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
    setBanner,
    setCategoriesPsc6,
    setCategoriesPsc,
    setCategoriesEae,
    setRecommendedCourses,
    setCoutinueYourCourses,
    setKeywordSearch,
    setSaveGetList,
    setSaveCarts
} from '../../Redux/actions/homeData'
import { Value } from 'react-native-reanimated';
import voice from '@react-native-voice/voice'
import ReadingMaterial from '../CoursesDetailScreen/ReadingMaterial/index'
import { Speaker_Modal } from '../../component/index'

function Home(props) {

    const [searchModel, setSearchModal] = useState(false)
    const [howToUseBada, setHowToUseBada] = useState(false)
    const [Banner, setBanner] = useState([])
    const [Categories, setCategories] = useState([])
    const [recommendedListCount, setrecommendedListCount] = useState(20)
    const [recommendedList, setrecommendedList] = useState([])
    const [countinueCourseListCount, setcountinueCourseListCount] = useState(20)
    const [countinueCourseList, setcountinueCourseList] = useState([])
    const [imagearr, setImagearr] = useState(['https://office365.mcmaster.ca/app/uploads/2020/08/Microsoft-learning.png',])
    const [search, setSearch] = useState('')
    const [checkMicColor, setCheckMicColor] = useState(false)
    const [bannerWebView, setBannerWebView] = useState(false)
    const [bannerWebCtaData, setBannerWebViewCtaData] = useState({})

    useEffect(async () => {
        config.Constant.RootNavigation = props.navigation
        setBanner([])
        BannerApi()
        top_Categories()
        KeywordAPI()
        CoutinueYourCoursesAPI()
        RecommendedCoursesAPI()
        getCartDetails()
        setTimeout(() => {
            setHowToUseBada(true)
        }, 1000);

    }, [])

    const SearchApi = async (key, item, data, subdata, subtitle, subindex, id, subId) => {
        setTimeout(() => {
            [setSearch(''), setCheckMicColor(false),
            setSearchModal(false),
            props.navigation.navigate('SalesScreen', {
                SearchKeyResponse: item,
                DataTitle: data,
                SubData: subdata,
                subtitle: subtitle,
                subindex: subindex,
                searchModaid: id,
                searchSubId: subId,
            })]
        }, 300);
    }

    const BannerApi = async () => {
        config.Constant.showLoader.showLoader();
        var banner = await modules.APIServices.GetApiCall(
            config.ApiEndpoint.BANNER,
        );
        if (banner.success == true) {
            config.Constant.showLoader.hideLoader();
            props.setBanner(banner?.data, (data) => { })
            banner.data.map((img) => {
                setBanner(Banner => [...Banner, img.image]);
            })
        } else {
            config.Constant.showLoader.hideLoader();
            // Alert.alert('error', data.message);
        }
    }

    const KeywordAPI = async () => {
        config.Constant.showLoader.showLoader();
        var key = await modules.APIServices.GetApiCall(
            config.ApiEndpoint.KEYWORDS,
        );
        if (key.success == true) {
            config.Constant.showLoader.hideLoader();
            props.setKeywordSearch((key), () => { })
        } else {
            config.Constant.showLoader.hideLoader();
            // Alert.alert('error', data.message);
        }
    }

    const top_Categories = async () => {
        config.Constant.showLoader.showLoader();
        var formData = {
            "limit": 6,
            "catType": "top"
        };
        var top_Categories = await modules.APIServices.PostApiCall(
            config.ApiEndpoint.CATEGORY,
            formData,
        );
        if (top_Categories.success == true) {
            config.Constant.showLoader.hideLoader();
            props.setCategoriesPsc6(top_Categories, () => { })
            setCategories(top_Categories.data)
            top_CategoriesPsc()
        } else {
            config.Constant.showLoader.hideLoader();
            // Alert.alert('error', data.message);
        }
    }

    const top_CategoriesPsc = async () => {
        // config.Constant.showLoader.showLoader();
        var formData = {
            "catType": "psc"
        };
        var top_CategoriesPsc = await modules.APIServices.PostApiCall(
            config.ApiEndpoint.CATEGORY,
            formData,
        );
        if (top_CategoriesPsc.success == true) {
            // config.Constant.showLoader.hideLoader();
            props.setCategoriesPsc(top_CategoriesPsc, () => { })
            _CategoriesEae()
        } else {
            // config.Constant.showLoader.hideLoader();
            // Alert.alert('error', data.message);
        }
    }

    const _CategoriesEae = async () => {
        // config.Constant.showLoader.showLoader();
        var formData = {
            "catType": "EAE"
        };
        var var_CategoriesEae = await modules.APIServices.PostApiCall(
            config.ApiEndpoint.CATEGORY,
            formData,
        );
        if (var_CategoriesEae.success == true) {
            // config.Constant.showLoader.hideLoader();
            props.setCategoriesEae(var_CategoriesEae, () => { })
        } else {
            // config.Constant.showLoader.hideLoader();
            // Alert.alert('error', data.message);
        }
    }

    const RecommendedCoursesAPI = async () => {
        // config.Constant.showLoader.showLoader();
        var formData = {
            "type": "recommended",
            "categoryId": "",
            "page": 0,
            "limit": recommendedListCount
        }
        var _Courses = await modules.APIServices.PostApiCall(
            config.ApiEndpoint.RECOMMENDED_COURSES,
            formData,
        );
        if (_Courses.success == true) {
            config.Constant.showLoader.hideLoader();
            props.setRecommendedCourses(_Courses, () => { })
            setrecommendedList(_Courses.data.pscCourse)
        } else {
            config.Constant.showLoader.hideLoader();
            // Alert.alert('error', data.message);
        }
    }

    const CoutinueYourCoursesAPI = async () => {
        config.Constant.showLoader.showLoader();
        var formData = {
            "type": "ongoing",
            "categoryId": "",
            "page": 0,
            "limit": countinueCourseListCount,
        }
        var _Courses = await modules.APIServices.PostApiCall(
            config.ApiEndpoint.RECOMMENDED_COURSES,
            formData,
        );
        if (_Courses.success == true) {
            config.Constant.showLoader.hideLoader();
            props.setCoutinueYourCourses(_Courses, () => { })
            setcountinueCourseList(_Courses.data.pscCourse)
        } else {
            config.Constant.showLoader.hideLoader();
            // Alert.alert('error', data.message);
        }
    }
    const getCartDetails = async () => {
        var data = await modules.APIServices.GetApiCall(
            config.ApiEndpoint.GET_CART_DETAILS,
        );
        config.Constant.showLoader.hideLoader();
        if (data.success == true) {
            props.setSaveCarts(data.data?.cart_detail?.length != undefined ?
                data.data?.cart_detail?.length : 0, () => { })
        } else {
            //   Alert.alert('error', data.message);
        }
    };

    const Item = ({ item, index }) => {
        return (
            <Pressable onPress={() => {
                props.navigation.navigate('CoursesDetailScreen', {
                    EAETrue: false,
                    PSCid: item._id
                })
            }}>
                <Recommended_Courses props={props} item={item} index={index}
                    width={config.Constant.SCREEN_WIDTH * 0.9}
                    marginHorizontal={scale(16)}
                    ClickOnSave={async (item, data) => !data ?
                        await SaveAndUnsaveHandle.AddToSave(item._id, "1") :
                        await SaveAndUnsaveHandle.DeleteSave(item._id, "1")
                    } />
            </Pressable>
        )
    }

    const bannerCTAPressed = (index) => {
        if (props?.homeData && !!props?.homeData.banner[index] && !!props?.homeData.banner[index].cta) {
            console.log("11111Banner cta", props?.homeData.banner[index]);
            let bannerCta = props?.homeData.banner[index].cta;
            switch (props?.homeData.banner[index].cta?.cta_type.toLowerCase()) {
                case "web":
                    [setBannerWebView(true), setBannerWebViewCtaData({
                        title: bannerCta?.cta_title,
                        url: bannerCta?.cta_url
                    })]
                    break;
                case "upcoming":
                    props.navigation.navigate('BannerCtaScreen', { title: bannerCta?.cta_title, data: bannerCta })
                    break;
                case "detail":
                    let param = { EAETrue: bannerCta?.course_type == 'eae' ? true : false }
                    if (bannerCta?.course_type == 'eae') {
                        param['EAEid'] = bannerCta?.cta_id
                    }
                    else {
                        param['PSCid'] = bannerCta?.cta_id
                    }
                    props.navigation.navigate('CoursesDetailScreen', param)
                    break;
                case "listing":
                    props.navigation.navigate('courses', { course_type: bannerCta?.course_type })
                    break;

                default:
                    break;
            }
        }
    }

    return (
        <View style={style.container} >
            <Header PressCart={() => { props.navigation.navigate('CartScreen') }} PressDrawer={() => props.navigation.openDrawer()}
                CartCount={props?.homeData?.savecarts} />
            <FlatList
                showsVerticalScrollIndicator={false}
                data={recommendedList}
                ListHeaderComponent={(
                    <View >
                        <Search_Call PressSearch={() => setSearchModal(true)} props={props}
                            search={search} checkMicColor={checkMicColor}
                            PressOnMic={() => [voice.start('en-US'),
                            setCheckMicColor(true), setSearch('')]}
                            _onSpeechResults={(e) => [setCheckMicColor(false),
                            setSearch(e.value[0]),
                            SearchApi('', e.value[0], '', [], '', '', '', "")]}
                            _onSpeechEnd={() => setCheckMicColor(false)}
                        />
                        <SliderBox
                            // ImageComponent={FastImage}
                            images={Banner?.length != 0 ? Banner : imagearr}
                            sliderBoxHeight={scale(170)}
                            onCurrentImagePressed={index => bannerCTAPressed(index)}
                            dotColor={config.Constant.COLOR_DRAWER_LIGHT}
                            inactiveDotColor="#90A4AE"
                            paginationBoxVerticalPadding={10}
                            autoplay
                            circleLoop
                            resizeMethod={'resize'}
                            resizeMode={'cover'}
                            paginationBoxStyle={style.dotBoxSty}
                            dotStyle={style.dotSty}
                            ImageComponentStyle={style.boxSliderSty}
                            imageLoadingColor="#2196F3"
                        />
                        <Text style={style.yourCoursesText}>
                            {config.I18N.t('Home_Continue_with_your_course')}
                        </Text>
                        <Home_Your_Course Arr={countinueCourseList} props={props}
                            onEndReached={() => {
                                setcountinueCourseListCount(countinueCourseListCount + 20)
                                config.Constant.showLoader.showLoader();
                                CoutinueYourCoursesAPI()
                                config.Constant.showLoader.hideLoader();
                            }} />
                        <LinearGradient
                            start={{ x: 0, y: 0 }}
                            end={{ x: 2.2, y: 0 }}
                            style={style.linearView}
                            colors={[config.Constant.COLOR_LINEAR__LIGHT,
                            config.Constant.COLOR_LINEAR__DARK,]} >
                            <Pressable onPress={() => props.navigation.navigate('MyCoursesScreen')}
                                style={{ flex: 1 }}>
                                <ImageBackground style={style.linearBackgroundView}
                                    source={images.MyCoursesBackground}
                                    resizeMode={'contain'}>
                                    <Image style={style.bookImg}
                                        source={images.Book}
                                        resizeMode={'contain'} />
                                    <Text style={style.mybooksText}
                                    >{config.I18N.t('Home_My_Courses')}</Text>
                                    <View style={style.rightArrowView}>
                                        <Image style={style.rightArrowImg}
                                            source={images.Right_arrow_home} />
                                    </View>
                                </ImageBackground>
                            </Pressable>
                        </LinearGradient>
                        <Text style={style.staticText}>
                            {config.I18N.t('Home_Top_Categories')}
                        </Text>
                        <Top_Categories Arr={Categories} props={props} onItemPress={(data) =>
                            props.navigation.navigate('SalesScreen', {
                                title: data.title,
                                subCategory: data.subCategory,
                                TopCateId: data.id,
                                EAEBtn: false,
                                searchCateId: data.subCategory[0]?.category_id,
                                searchId: data.subCategory[0]?.id,
                            })
                        } />
                        {recommendedList && <Text style={style.staticText}>
                            {config.I18N.t('Home_Recommended_Courses')}
                        </Text>}
                    </View>
                )}
                renderItem={(item, index) => Item(item, index)}
                keyExtractor={(item, index) => index.toString()}
                onEndReached={() => {
                    setrecommendedListCount(recommendedListCount + 20)
                    RecommendedCoursesAPI()
                }}
                onEndReachedThreshold={0.5} />

            {searchModel ? <Search_Modal props={props} Back={() => setSearchModal(false)}
                FullClose={(Value) => setSearchModal(!Value)} checkMicColor={checkMicColor}
                PressMic={() => [voice.start('en-US'),
                setCheckMicColor(true)]}
                searchText={search} /> : null}

            {/* {howToUseBada ? <How_to_use_Bada props={props} Close={() => setHowToUseBada(false)} /> : null} */}

            {bannerWebView ?
                <ReadingMaterial Close={() => setBannerWebView(false)} Data={bannerWebCtaData.url}
                    Title={bannerWebCtaData.title} /> : null}

        </View>
    )
}

//---- Connect to props functions and values -----//
function mapStateToProps({ userData, homeData }) {
    return { userData, homeData };
}

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({
        setBanner,
        setCategoriesPsc6,
        setCategoriesPsc,
        setCategoriesEae,
        setRecommendedCourses,
        setCoutinueYourCourses,
        setKeywordSearch,
        setSaveGetList,
        setSaveCarts
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home)