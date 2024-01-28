import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  Pressable,
  Image,
  ScrollView,
  FlatList,
  TextInput,
} from 'react-native';
import {BrightcovePlayer} from 'react-native-brightcove-player';
import Ripple from 'react-native-material-ripple';
import HTML from 'react-native-render-html';
import {scale} from 'react-native-size-matters';
import config from '../../config';
import images from '../../config/Images';
import styles from './style';
import {firebase} from '@react-native-firebase/database';
import {ProfileDrawer} from '../../assets/svg';
const database = firebase
  .app()
  .database('https://badabusiness-1548951525988-1283e-staging.firebaseio.com/');

export default function LiveSession(props) {
  const [LiveSession, setLiveSession] = useState(false);
  const [isCommentHide, setIsCommentHide] = useState(false);
  const [commentId, setCommentId] = useState('');
  const [commentTxt, setCommentTxt] = useState('');
  const [commentArr, setCommentArr] = useState([]);
  var useRefVal = useRef(null);

  const Header = () => {
    return (
      <View style={[styles.LinearSty]}>
        <Pressable
          onPress={() => props.navigation.goBack()}
          style={styles.backImgBtn}>
          <Image
            style={styles.backImg}
            source={images.BackIcon}
            resizeMode={'cover'}
          />
        </Pressable>
        <Text style={styles.cartTxt}>
          {config.I18N.t('drawer_Live_Sessions')}
        </Text>
        <Ripple style={styles.btnView}></Ripple>
      </View>
    );
  };

  const sendComment = () => {
    if (!!commentTxt && !!commentId) {
      const newReference = database.ref('/comments/' + commentId).push();
      debugger;
      newReference
        .set({
          commentId: newReference.key,
          message: commentTxt,
          name:
            config.Constant.USER_DATA.first_name +
            ' ' +
            config.Constant.USER_DATA.last_name,
          timeStamp: new Date().getTime(),
          userId: config.Constant.USER_DATA.user_id,
        })
        .then(() => {
          setCommentTxt('')
        });
    }
  };

  useEffect(() => {
    database.ref('/jobs').on('value', snapshot => {
      console.log(snapshot.val());
      let snapVal = snapshot.val();
      for (key in snapVal) {
        setLiveSession(snapVal[key]);
      }
    });
    database.ref('/event').on('value', snapshot => {
      let snapVal = snapshot.val();
      if (!!snapVal && !!snapVal.isCommentHide) {
        setIsCommentHide(snapVal.isCommentHide);
      }
    });
    database.ref('/comments').on('child_added', snapshot => {
      setCommentId(snapshot.key);
    });
  }, []);

  useEffect(() => {
    if (!!commentId) {
      setCommentArr([]);
      if (
        !!LiveSession.videoId &&
        LiveSession.state == 'processing'
      ) {
        database.ref('/comments/' + commentId).on('value', snapshot => {
          debugger
          let arrVar = [];
          var snapshotVal = snapshot.val();
          for (key in snapshotVal) {
            arrVar.push(snapshotVal[key]);
          }
          setCommentArr([...arrVar]);
        });
      }
    }
  }, [commentId]);

  useEffect(() => {
    // alert(JSON.stringify(LiveSession))
  }, [LiveSession]);

  return (
    <View style={styles.container}>
      {Header()}
      <View style={styles.innerView}>
      
          {!!LiveSession &&
            !!LiveSession.videoId &&
            LiveSession.state == 'processing' && (
              <BrightcovePlayer
              ref={videoPlayer => (useRefVal = videoPlayer)}

                style={{
                  width: '100%',
                  height: scale(200),
                }}
                accountId={config.Constant.BrightCoveKey}
                videoId={LiveSession.videoId}
                policyKey={config.Constant.BrightCovePolicy}
                onPause={() => {}}
                onProgress={() => {}}
              />
            )}

          {!!LiveSession &&
            !!LiveSession.speakerImage &&
            (LiveSession.state == 'upcoming' ||
              LiveSession.state == 'finished') && (
              <Image
                source={{uri: LiveSession.speakerImage}}
                resizeMode={'contain'}
                style={{
                  width: config.Constant.SCREEN_WIDTH - scale(30),
                  height: config.Constant.SCREEN_WIDTH,
                  alignSelf: 'center',
                }}
              />
            )}
              <View style={styles.mainItemView}>

          {!!LiveSession && !!LiveSession.speaker && (
            <Text style={styles.speakerTitle}>{LiveSession.speaker}</Text>
          )}

          {!!LiveSession &&
            (LiveSession.state == 'upcoming' ||
              LiveSession.state == 'finished') && (
              <Text style={styles.comingSoon}>
                {LiveSession.state == 'upcoming'
                  ? `Coming Soon`
                  : `Live Session Completed`}
              </Text>
            )}
        </View>

        {!isCommentHide &&
          !!LiveSession.videoId &&
          LiveSession.state == 'processing' && (
            <FlatList
              data={commentArr}
              inverted
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item, index}) => {
                return (
                  <View style={styles.commentRow}>
                    <ProfileDrawer />
                    <View style={{flex: 1, paddingLeft: scale(7)}}>
                      <Text style={styles.commenterName}>
                        {item.name}:{' '}
                        <Text style={styles.commentText}>{item.message}</Text>
                      </Text>
                    </View>
                  </View>
                );
              }}
            />
          )}
        {!isCommentHide &&
          !!LiveSession.videoId &&
          LiveSession.state == 'processing' && (
            <View
              style={{
                borderRadius: 4,
                borderColor: '#dfdfe0',
                borderWidth: 1,

                margin: scale(15),
                padding: scale(15),
              }}>
              <TextInput
                returnKeyLabel={'Send'}
                returnKeyType={'send'}
                onSubmitEditing={() => {
                  sendComment();
                }}
                placeholderTextColor={'rgba(40,40,47,0.6)'}
                placeholder={'COMMENT SOMETHING'}
                style={{
                  //textAlign: 'left',
                  //maxHeight: scale(100),
                  fontSize: scale(15),
                  flex: 1,
                  color: config.Constant.COLOR_DARK_GREY,
                }}
                value={commentTxt}
                onChangeText={txt => {
                  setCommentTxt(txt);
                }}
              />
            </View>
          )}
      </View>
    </View>
  );
}
