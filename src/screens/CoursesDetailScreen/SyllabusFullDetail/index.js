import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Pressable,
  Text,
  Modal,
  FlatList,
  Platform,
  SafeAreaView,
  ScrollView,
  Share,
} from 'react-native';
import { color } from 'react-native-reanimated';
import { scale } from 'react-native-size-matters';
import config from '../../../config';
import images from '../../../config/Images';
import styles from './style';
import { msToHMS, VideoDownload } from '../../../Util/Utilities';
import {
  BrightcovePlayer,
  BrightcovePlayerUtil,
} from 'react-native-brightcove-player';

const Data = [
  {
    details:
      'What are the Account policies which you should know before creating a balance sheet? 1',
  },
  {
    details:
      'What are the Account policies which you should know before creating a balance sheet? 1',
  },
];

const Syll = [
  {
    title: 'Reading Material',
    name: 'what is accounts?',
  },
  {
    title: 'Assessment',
    name: 'what is accounts?',
  },
];

const SyllabusFullDetails = ({
  props,
  Close,
  Details,
  onPress,
  DetailsArr,
  ViewOfOptions,
  PressReview,
}) => {
  const [NextItemDetails, setNextItemDetails] = useState('');
  const [NextItemDetailsIndex, setNextItemDetailsIndex] = useState('');
  const [OfflineArr, setOfflineArr] = useState([]);
  const [videoPlayHandle, setVideoPlayHandle] = useState(true);

  useEffect(() => {
    let NextIndex = '';
    DetailsArr.map((item, index) => {
      if (item._id == Details._id) {
        NextIndex = index;
      }
    });
    setNextItemDetails(DetailsArr[NextIndex + 1]);
    setNextItemDetailsIndex(NextIndex + 1);

    BrightcovePlayerUtil.getOfflineVideoStatuses(
      config.Constant.BrightCoveKey,
      config.Constant.BrightCovePolicy,
    )
      .then(offlineVideos => {
        setOfflineArr([...offlineVideos]);
      })
      .catch(console.warn);

    let disposer = BrightcovePlayerUtil.addOfflineNotificationListener(
      offlineVideos => {
        setOfflineArr([...offlineVideos]);
      },
    );

    //return disposer && disposer()
  }, []);

  useEffect(() => {
    console.log('OfflineArr = ' + JSON.stringify(OfflineArr));
  }, [OfflineArr]);

  const requestDownload = videoId => {
    BrightcovePlayerUtil.requestDownloadVideoWithVideoId(
      config.Constant.BrightCoveKey,
      config.Constant.BrightCovePolicy,
      videoId,
    ).catch(() => { });
  };

  return (
    <Modal transparent={true} visible={true} statusBarTranslucent={false}>
      <SafeAreaView style={styles.Contact}>
        <View style={styles.Contact}>
          <View style={[styles.LinearSty, styles.semiView]}>
            <Pressable onPress={Close} style={styles.backImgBtn}>
              <Image
                style={styles.backImg}
                source={images.BackIcon}
                resizeMode={'cover'}
              />
            </Pressable>
            <Pressable
              onPress={() =>
                Details != ''
                  ? Share.share({
                    url: Details.shareShortUrl,
                    message: `Hey, I recommend you reading this interesting article: 
                                                                ${Details.shareShortUrl}`,
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
          </View>
          <BrightcovePlayer
            style={{
              width: '100%',
              height: scale(200),
            }}
            accountId={config.Constant.BrightCoveKey}
            videoId={Details.url}
            policyKey={config.Constant.BrightCovePolicy}
            onPause={() => { }}
            onProgress={() => { }}
          />
          <Text
            style={{
              position: 'absolute',
              top: scale(100),
              right: 50,
              zIndex: 10000,
              elevation: 10000,

              color: 'black',
              fontSize: 15,
            }}>{`${config.Constant.USER_DATA.country_code} ${config.Constant.USER_DATA.phone_no}`}</Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.mainTextView}>
              <View style={styles.mainItemView}></View>
              <Text style={styles.titleText}>{Details.title}</Text>
              <View style={styles.timeView}>
                <View style={styles.timesemiView}>
                  <Image source={images.Time} style={styles.timeImg} />
                  <Text style={styles.duration}>
                    {config.I18N.t('Duration')} -
                    <Text
                      style={[
                        styles.duration,
                        {
                          fontFamily: config.Constant.Font_Semi_Bold,
                        },
                      ]}>
                      {' '}
                      {msToHMS(Details.duration)}
                    </Text>
                  </Text>
                </View>
                <Pressable
                  onPress={() => {
                    requestDownload(Details.url);
                  }}
                  style={styles.downloadBtn}>
                  <Image
                    style={styles.downloadImg}
                    source={images.Download_Transparent}
                    resizeMode={'cover'}
                  />
                </Pressable>
              </View>
              {NextItemDetailsIndex > DetailsArr.length - 1 ? null : (
                <View style={styles.nextVideoView}>
                  <Text style={styles.titleText}>
                    {config.I18N.t('NextVideos')}
                  </Text>
                  {DetailsArr.map((data, index) => {
                    return NextItemDetailsIndex < index + 1 ? (
                      <View
                        key={index}
                        style={[
                          styles.nextviewSemiMainView,
                          {
                            marginBottom: 0,
                          },
                        ]}>
                        <View style={styles.nextMainImgView}>
                          <Image
                            source={{
                              uri: data.image != undefined ? data.image : null,
                            }}
                            style={styles.nextMainImgView}
                            resizeMode={'cover'}
                          />
                        </View>
                        <Text numberOfLines={2} style={styles.nexViewTitle}>
                          {data.title}
                        </Text>
                        <View style={styles.nextVideoTimeView}>
                          <View style={styles.timesemiView}>
                            <Image source={images.Time} style={styles.timeImg} />
                            <Text style={styles.duration}>
                              {msToHMS(data?.duration)}
                            </Text>
                          </View>
                          <Text style={styles.duration}></Text>
                        </View>
                      </View>
                    ) : null;
                  })}
                </View>
              )}
              {/* {!!DetailsArr && DetailsArr.length >= 2 ? (
                <Text style={styles.titleText}>
                  {config.I18N.t('CoursesDetail_Syllabus')}
                </Text>
              ) : null}
              {DetailsArr.map((data, index) => {
                return NextItemDetailsIndex < index + 1 ? (
                  <View
                    key={index}
                    style={[
                      styles.nextviewSemiMainView,
                      {
                        marginBottom: 0,
                      },
                    ]}>
                    <View style={styles.nextMainImgView}>
                      <Image
                        source={{
                          uri: data.image != undefined ? data.image : null,
                        }}
                        style={styles.nextMainImgView}
                        resizeMode={'cover'}
                      />
                    </View>
                    <Text numberOfLines={2} style={styles.nexViewTitle}>
                      {data.title}
                    </Text>
                    <View style={styles.nextVideoTimeView}>
                      <View style={styles.timesemiView}>
                        <Image source={images.Time} style={styles.timeImg} />
                        <Text style={styles.duration}>
                          {msToHMS(data?.duration)}
                        </Text>
                      </View>
                      <Text style={styles.duration}></Text>
                    </View>
                  </View>
                ) : null;
              })} */}
              <Text
                style={[
                  styles.titleText,
                  {
                    marginTop: scale(30),
                  },
                ]}>
                Extra Learning
              </Text>
              {Syll.map((learn, index) => {
                return (
                  <Pressable
                    onPress={() => [onPress(index), setVideoPlayHandle(false)]}
                    key={index}
                    style={[
                      styles.LearingListView,
                      {
                        marginBottom: index == Syll.length - 1 ? scale(30) : 0,
                      },
                    ]}>
                    <Text numberOfLines={1} style={styles.learnItemText}>
                      {index + 1}. {learn.title}
                    </Text>
                    <Image
                      source={images.Right_arrow_home}
                      style={styles.learnItemRightArrow}
                      resizeMode={'cover'}
                    />
                  </Pressable>
                );
              })}
            </View>
          </ScrollView>
          <Pressable onPress={PressReview} style={styles.writeReviewBtn}>
            <Text
              style={[
                styles.learnItemText,
                {
                  color: config.Constant.COLOR_BLUE,
                },
              ]}>
              {config.I18N.t('CoursesDetail_Write_A_Review')}
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default SyllabusFullDetails;
