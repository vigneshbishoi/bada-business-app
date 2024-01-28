import React, { useState, useEffect } from 'react';
import { View, Image, Pressable, Text, Modal, ScrollView, Dimensions, SafeAreaView, Share } from 'react-native';
import { scale } from 'react-native-size-matters';
import config from '../../../../config';
import images from '../../../../config/Images'
import styles from './style'
import modules from '../../../../modules'
import AutoHeightWebView from 'react-native-autoheight-webview'

const ArticleDetail = ({ props, Close, Details }) => {

    const [ArticleDetails, setArticleDetails] = useState('')

    useEffect(async () => {
        Articles_Details()
    }, [])

    const Articles_Details = async () => {
        config.Constant.showLoader.showLoader();
        var formData = {
            "_id": Details._id
        }
        var Data = await modules.APIServices.PostApiCall(
            config.ApiEndpoint.Article_Details,
            formData
        );
        if (Data.success == true) {
            config.Constant.showLoader.hideLoader();
            setArticleDetails(Data.data)
        } else {
            config.Constant.showLoader.hideLoader();
            // Alert.alert('error', data.message);
        }
    }

    return (
        <Modal transparent={true} visible={true} statusBarTranslucent={false}>
            <SafeAreaView style={styles.Contact}>
                <View style={styles.Contact}>
                    <View style={[styles.LinearSty,
                    styles.semiView]}>
                        <Pressable onPress={Close}
                            style={styles.backImgBtn}>
                            <Image style={styles.backImg}
                                source={images.BackIcon} resizeMode={'cover'} />
                        </Pressable>
                    </View>
                    <ScrollView style={{ flex: 1 }}
                        contentContainerStyle={{ flexGrow: 1 }}
                        showsVerticalScrollIndicator={false}>
                        <View style={styles.mainTextView}>
                            <Image style={styles.mainImg}
                                source={{
                                    uri: ArticleDetails != '' ?
                                        ArticleDetails.image : null
                                }}
                                resizeMode={'cover'} />
                            <Text style={styles.titleText}>
                                {ArticleDetails != '' ?
                                    ArticleDetails.title : " "}</Text>
                            <Text style={styles.saleText}>
                                {ArticleDetails != '' ?
                                    ArticleDetails.categoryName : " "}
                            </Text>
                            <View style={styles.ShareAndtimeMainView}>
                                <View style={styles.timeSemiView}>
                                    {ArticleDetails?.createdAt && <Image style={styles.clockImg}
                                        source={images.Time} resizeMode={'cover'} />}
                                    {ArticleDetails?.createdAt && <Text style={styles.timeText}>
                                        {"Posted "}{ArticleDetails != '' ?
                                            ArticleDetails.createdAt.substr(0, 7) : ''}</Text>}
                                    {ArticleDetails?.viewCount && <Image style={styles.eyeImg}
                                        source={images.Eye} resizeMode={'cover'} />}
                                    {ArticleDetails?.viewCount &&
                                        <Text style={styles.ViewText}>{ArticleDetails != '' ?
                                            `${ArticleDetails.viewCount} View` : '0 View'}</Text>}
                                </View>
                                <View style={styles.filterBtnView}>
                                    <Pressable onPress={() =>
                                        ArticleDetails != '' ?
                                            Share.share({
                                                url: ArticleDetails.shareShortUrl,
                                                message: `Hey, I recommend you reading this interesting article: 
                                                ${ArticleDetails.shareShortUrl}`
                                            }) :
                                            null}
                                        style={styles.filterBtn}>
                                        <Image source={images.ShareIcon}
                                            resizeMode={'cover'}
                                            style={styles.filterImg} />
                                    </Pressable>
                                </View>
                            </View>
                            <Text style={styles.introductionText}>
                                {config.I18N.t('Articles_Introduction')}</Text>
                            <AutoHeightWebView
                                style={{ width: '100%', }}
                                // customScript={`document.body.style.background = 'lightyellow';`}
                                onSizeUpdated={size => console.log(size.height)}
                                files={[{
                                    href: 'cssfileaddress',
                                    type: 'text/css',
                                    rel: 'stylesheet'
                                }]}
                                source={{
                                    html: `<html><head><meta name="viewport" 
                            content="width=device-width, initial-scale=1.0">
                            </head><body>${ArticleDetails.description}</body></html>`
                                }}
                                scalesPageToFit={true}
                                originWhitelist={['*']}
                                viewportContent={'width=device-width, user-scalable=no'}
                            />
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        </Modal>
    )
};

export default ArticleDetail