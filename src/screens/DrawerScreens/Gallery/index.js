import React, { useState, useEffect, useRef } from 'react';
import { View, Image, Pressable, Text, Modal, FlatList, TextInput, SafeAreaView, Dimensions } from 'react-native';
import { scale } from 'react-native-size-matters';
import config from '../../../config';
import images from '../../../config/Images'
import styles from './style'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import modules from '../../../modules'
import { setAuthorList } from '../../../Redux/actions'
import Carousel from 'react-native-snap-carousel';

function Gallery(props) {

    const ScrolltoIndexCarousel = useRef()
    const [galleryList, setGalleryList] = useState([]);
    const [galleryListPageCount, setGalleryListPageCount] = useState(0);
    const [galleryListBtn, setGalleryListBtn] = useState('');
    const [fullImgModal, setFullImgModal] = useState(false);

    useEffect(async () => {
        GalleryListApi()
    }, [])

    const GalleryListApi = async () => {
        config.Constant.showLoader.showLoader();
        var formData = {
            "page": galleryListPageCount
        };
        var GalleryData = await modules.APIServices.PostApiCall(
            config.ApiEndpoint.GALLERY_LIST,
            formData,
        );
        if (GalleryData.success == true) {
            config.Constant.showLoader.hideLoader();
            // props.setAuthorList(AuthorData, () => { })
            galleryListPageCount == 0 ?
                setGalleryList(GalleryData.data) :
                GalleryData.data.map((mapData) => {
                    setGalleryList(galleryList => [...galleryList, mapData]);
                })
            setGalleryListPageCount(galleryListPageCount + 1)
        } else {
            config.Constant.showLoader.hideLoader();
            // Alert.alert('error', data.message);
        }
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
                        {config.I18N.t('drawer_Gallery')}</Text>
                </View>
                <View style={styles.mainTextView}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={galleryList}
                        style={{ paddingVertical: scale(10) }}
                        numColumns={2}
                        renderItem={({ item, index }) => {
                            return (
                                <Pressable onPress={() => [setGalleryListBtn(index),
                                setFullImgModal(true),
                                // console.log('ScrolltoIndexCarousel',ScrolltoIndexCarousel, index),
                                ScrolltoIndexCarousel.current.snapToItem(index)
                                ]}
                                    style={styles.mainFlatView}>
                                    <Image style={[styles.mianImgView, {
                                        height: scale(item.title !== '' ? 100 : 127),
                                        borderRadius: item.title == '' ? scale(4) : null
                                    }]}
                                        source={{ uri: item.mainImage }}
                                        resizeMode={'cover'} />
                                    {item.title !== '' && <View style={styles.flatTextView}>
                                        <Text numberOfLines={2}
                                            style={styles.flatText}>{item.title}</Text>
                                    </View>}
                                </Pressable>
                            )
                        }}
                        keyExtractor={(item, index) => index.toString()}
                        onEndReached={() => {
                            GalleryListApi()
                        }}
                        onEndReachedThreshold={0.5}
                    />
                </View>
            </View>
            {/* <Modal transparent={true} visible={fullImgModal}
                statusBarTranslucent={false}> */}
            {/* {fullImgModal ? */}
            <View style={[styles.modalMainView, { position: 'absolute', height: fullImgModal ? Dimensions.get("window").height : scale(0.5) }]}>
                <Carousel
                    ref={ScrolltoIndexCarousel}
                    data={galleryList}
                    // snapToStart={14}
                    renderItem={({ item, index }) => {
                        return (
                            <View>
                                <Image source={{
                                    uri: item?.mainImage
                                }}
                                    style={{
                                        height: scale(300),
                                    }} />
                                <View style={[styles.CloseMainView, {}]}>
                                    <Pressable onPress={() => setFullImgModal(false)}
                                        style={styles.CloseBtn}>
                                        <View style={styles.CloseSemiView}>
                                            <Image source={images.CloseIcon} style={styles.CloseImg}
                                                resizeMode={'cover'} />
                                        </View>
                                    </Pressable>
                                </View>
                            </View>
                        )
                    }}
                    containerCustomStyle={{
                        flexGrow: 0,
                    }}
                    layout={'default'}
                    windowSize={1}
                    sliderWidth={Dimensions.get("window").width}
                    itemWidth={Dimensions.get("window").width - scale(50)}
                    sliderHeight={300}
                />
            </View>
            {/* </Modal> */}
        </SafeAreaView>
    )
};

//---- Connect to props functions and values -----//
function mapStateToProps({ authorData }) {
    return { authorData };
}

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({
        setAuthorList
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Gallery)
