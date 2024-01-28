import React, { useState, useEffect, useRef } from 'react';
import { View, Image, Pressable, Text, Modal, FlatList, TextInput, SafeAreaView, } from 'react-native';
import { scale } from 'react-native-size-matters';
import config from '../../../config';
import images from '../../../config/Images'
import styles from './style'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import modules from '../../../modules'
import { setAuthorList, setSaveGetList } from '../../../Redux/actions/index'
import Save_Courses_List from '../../SavedScreen/Save_Courses_List/index'
import HTML from "react-native-render-html";
import { SaveAndUnsaveHandle } from '../../../component/index'

function Speakers(props) {

    const myAuthoeList = useRef();
    const [selectAuthorListIndex, setSelectAuthorListIndex] = useState(null);
    const [detailOfAuthor, setDetailOfAuthor] = useState(null);
    const [speakerItemBtn, setSpeakerItemBtn] = useState(false);
    const [authorList, setAuthorList] = useState([]);
    const [authorListPageCount, setAuthorListPageCount] = useState(0);
    const [authorDataList, setAutherDataList] = useState([])
    const [authorDataListCount, setAutherDataListCount] = useState(0)
    const [authorDataEmptyList, setAutherDataEmptyList] = useState(false)

    useEffect(async () => {
        console.log('papipapi', props.route.params?.authorId);
        if (props.route.params?.authorId != undefined) {
            setSpeakerItemBtn(true)
            EAEListFun(props.route.params?.authorId)
        } else {
            AutherListApi()
        }
    }, [])

    const AutherListApi = async () => {
        authorListPageCount == 0 ?
            config.Constant.showLoader.showLoader() : null
        var formData = {
            "page": authorListPageCount
        };
        var AuthorData = await modules.APIServices.PostApiCall(
            config.ApiEndpoint.AUTHOR_LIST,
            formData,
        );
        if (AuthorData.success == true) {
            config.Constant.showLoader.hideLoader();
            props.setAuthorList(AuthorData, () => { })
            authorListPageCount == 0 ?
                setAuthorList(AuthorData.data) :
                AuthorData.data.map((mapData) => {
                    setAuthorList(authorList => [...authorList, mapData]);
                })
        } else {
            config.Constant.showLoader.hideLoader();
            // Alert.alert('error', data.message);
        }
    }

    const EAEListFun = async (id) => {
        authorDataListCount == 0 ?
            config.Constant.showLoader.showLoader() : null
        var formData = {
            "progress": "related",
            "page": authorDataListCount,
            "categoryId": "",
            "subCategoryId": "",
            "authorId": id,
            "sort": "asc"
        }
        var EAE = await modules.APIServices.PostApiCall(
            config.ApiEndpoint.EAELIST_COURSE_TAB,
            formData
        );
        if (EAE.success == true) {
            config.Constant.showLoader.hideLoader()
            authorDataListCount == 0 ?
                setAutherDataList(EAE.data) :
                EAE.data.map((mapData) => {
                    setAutherDataList(authorDataList => [...authorDataList, mapData]);
                })
            setAutherDataEmptyList(true)
            setAutherDataListCount(authorDataListCount + 1)
        } else {
            config.Constant.showLoader.hideLoader()
            // Alert.alert('error', data.message);
        }
    };

    const Item = ({ item, index }) => {
        return (
            <Pressable
                style={[styles.flatMainBtn,
                {
                    marginTop: index == 0 ? 0 : scale(15),
                    marginBottom: authorList.length - 1 == index ?
                        scale(40) : 0,
                    height: detailOfAuthor == index ? null : scale(110)
                }]}>
                <View style={styles.FlatSemiView}>
                    <View style={styles.FlatMainImg}>
                        <Image source={item.authorImage != '' ?
                            { uri: item.authorImage } : null}
                            style={[styles.FlatMainImg,
                            { marginRight: 0 }]}
                            resizeMode={'cover'} />
                    </View>
                    <View style={{ flex: 1, }}>
                        <Text numberOfLines={1} style={styles.flatTitleText}>
                            {item.authorTitle}{item.authorName}</Text>
                        <Text numberOfLines={3} style={styles.FlatDetailsText}>
                            {item.authorDesignation}</Text>
                    </View>
                    <Pressable onPress={() => setDetailOfAuthor(
                        detailOfAuthor == index ? null : index)
                    }
                        style={{ padding: scale(5) }}>
                        {detailOfAuthor == index ?
                            <Image source={images.up_arrow}
                                style={styles.downArrowimg}
                                resizeMode={'cover'} /> :
                            <Image source={images.down_bold_arrow}
                                style={styles.downArrowimg}
                                resizeMode={'cover'} />}
                    </Pressable>
                </View>
                {detailOfAuthor == index ?
                    <View>
                        {/* <Text style={styles.line}> </Text> */}
                        <View style={styles.borderView} />
                        {/* <Text style={[styles.FlatDetailsText,
                        { opacity: 1 }]}>
                           {item.authorDescription}
                            </Text> */}
                        <HTML source={{ html: item.authorDescription }} ignoredStyles={['font-family']} />
                        <Pressable onPress={() => [setSpeakerItemBtn(true),
                        setAutherDataEmptyList(false),
                        setSelectAuthorListIndex(index),
                        setAutherDataList([]), EAEListFun(item._id)]}
                            style={styles.viewCoursesBtn}>
                            <Text style={[styles.FlatDetailsText,
                            {
                                color: config.Constant.COLOR_BLUE,
                                opacity: 1,
                            }]}>
                                {config.I18N.t('Speakers_View_courses')}</Text>
                        </Pressable>
                    </View> : null}
            </Pressable>
        )
    }

    return (
        <SafeAreaView style={styles.Contact}>
            <View style={styles.Contact}>
                <View style={[styles.LinearSty,
                styles.semiView]}>
                    <Pressable onPress={() => speakerItemBtn && props.route.params?.authorId == undefined ?
                        [setAutherDataListCount(0), setSpeakerItemBtn(false),
                            // setTimeout(() => {
                            //     myAuthoeList.current.scrollToIndex({
                            //         animated: true, index: selectAuthorListIndex,
                            //         viewPosition: 0
                            //     })
                            // }, 1000)
                        ] :
                        props.navigation.goBack()}
                        style={styles.backImgBtn}>
                        <Image style={styles.backImg}
                            source={images.BackIcon} resizeMode={'cover'} />
                    </Pressable>
                    <Text style={styles.titleText}>
                        {speakerItemBtn && props.route.params?.authorId == undefined ?
                            [authorList[selectAuthorListIndex]?.authorTitle,
                            authorList[selectAuthorListIndex]?.authorName] :
                            speakerItemBtn && props.route.params?.authorId != undefined ?
                            [props.route.params?.authorTitle,
                            props.route.params?.authorName] :
                                config.I18N.t('drawer_Speakers')}</Text>
                </View>
                <View style={styles.mainTextView}>
                    {!speakerItemBtn ? <FlatList
                        showsVerticalScrollIndicator={false}
                        data={authorList}
                        ref={myAuthoeList}
                        style={styles.authorListFlat}
                        renderItem={(item, index) => Item(item, index)}
                        keyExtractor={(item, index) => index.toString()}
                        onEndReached={() => {
                            setAuthorListPageCount(authorListPageCount + 1)
                            AutherListApi()
                        }}
                        onEndReachedThreshold={0.5}
                    /> : authorDataList.length == 0 && speakerItemBtn
                        && authorDataEmptyList ?
                        <View style={styles.emptyListView}>
                            <Text style={[styles.flatTitleText, {
                                marginTop: 0,
                                fontWeight: 'normal'
                            }]}>No data available</Text></View> :
                        <Save_Courses_List
                            Arr={authorDataList} props={props}
                            selectedList={(index) => { }}
                            ItemBtn={(item, index) => props.navigation.navigate('CoursesDetailScreen', {
                                EAETrue: true,
                                EAEid: item._id,
                                GoBack: (data, check) => {
                                    if (item?.isSaved != check) {
                                        authorDataList[index].isSaved = check
                                    }
                                }
                            })}
                            marginTop={Platform.OS == 'android' ? scale(0) : scale(5)}
                            marginBottom={scale(30)}
                            marginTop={scale(30)}
                            hiddenAddToCart={true}
                            deleteViewShow={false}
                            ClickOnSave={async (item, data) => !data ?
                                [item?.course_type == "eae" ? await SaveAndUnsaveHandle.AddToSave(item._id, "2") : await SaveAndUnsaveHandle.AddToSave(item._id, "1")] :
                                [item?.course_type == "eae" ? await SaveAndUnsaveHandle.DeleteSave(item._id, "2") : await SaveAndUnsaveHandle.DeleteSave(item._id, "1")]
                            }
                            onEndReached={() => {
                                props.route.params?.authorId != undefined ?
                                    EAEListFun(props.route.params?.authorId) :
                                    EAEListFun(authorList[selectAuthorListIndex]._id)
                            }}
                            onEndReachedThreshold={0.5}
                        />}
                </View>
            </View>

        </SafeAreaView>
    )
};

//---- Connect to props functions and values -----//
function mapStateToProps({ authorData, homeData }) {
    return { authorData, homeData };
}

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({
        setAuthorList,
        setSaveGetList
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Speakers)
