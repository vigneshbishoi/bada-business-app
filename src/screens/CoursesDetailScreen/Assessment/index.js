import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Image, Pressable, Text, Modal, FlatList, Platform, SafeAreaView, ScrollView, } from 'react-native';
import { color, set } from 'react-native-reanimated';
import { scale } from 'react-native-size-matters';
import config from '../../../config';
import images from '../../../config/Images'
import styles from './style'

const Data = [
    {
        details: 'What are the Account policies which you should know before creating a balance sheet? 1',
        q1: 'Ut venenatis 1 tellus',
        q2: 'Ut venenatis tellus',
        q3: 'Ut venenatis tellus',
        q4: 'Ut venenatis tellus',
    }
];

const Assessment = ({ props, Close, Result, Arr, EAE, Details }) => {

    const myList = useRef();
    const [questionsClick, setQuestionClick] = useState(0)
    const [questionsList, setQuestionList] = useState(Data)
    const [answerList, setAnswerList] = useState([])
    const [count, setCount] = useState(0)
    const [intervalId, setIntervalId] = useState();
    const [countmin, setCountMin] = useState(1);
    const [countSec, setCountSec] = useState(60);
    const [HandleMinSec0, setHandleMinSec0] = useState(true);

    useEffect(async () => {
        // console.log('ArrArr-+-------');
        Arr.length != 0 ? [setQuestionList([]),
        Arr.map((mapdata) => {
            setQuestionList(questionsList => [...questionsList, {
                answer: mapdata.answer,
                options: mapdata.options,
                questionText: mapdata.questionText,
                _id: mapdata._id,
                timeMin: 0,
                timeSec: 0,
                PressableValue: true
            }])
        })] : null

        for (let index = 0; index < Arr.length; index++) {
            setAnswerList(answerList => [...answerList, {
                answer: '',
                // answer1: ''
            }])
        }

        const interval = setInterval(() => {
            // console.log("ArrArr", new Date(), moment().format('ss'), moment().format('mm'), countSec,)
            setCountSec((countSec) => countSec - 1)
        });
        setIntervalId(interval);
        return () => clearInterval(interval);
    }, [])

    const CountDownFun = () => {
        // console.log('ArrArr', countSec.toString().length, "checkOnly");
        if (countSec == 0 && countmin != 0) {
            // clearInterval(intervalId)
            setCountSec(60)
            setCountMin((countmin) => countmin - 1)
        } else if (countSec == 0 && countmin == 0 && HandleMinSec0 == true
            && questionsList[questionsClick].PressableValue == true) {
            // clearInterval(intervalId)
            questionsList[questionsClick].PressableValue = false
            HandleTimeOut()
        }
    }

    const HandleTimeOut = () => {
        questionsClick == questionsList.length - 1 ? null :
            [myList.current.scrollToIndex({ animated: true, index: questionsClick + 1, viewPosition: 0 }),
            setQuestionClick(questionsClick + 1)]
        setHandleMinSec0(false)
        setTimeout(() => {
            setHandleMinSec0(true)
        }, 3000);
        // console.log('ArrArrquestionsClick', questionsClick);
        if (questionsClick == questionsList.length - 1) {
            clearInterval(intervalId)
        }
        else if (questionsList[questionsClick + 1]?.timeSec != 0) {
            setCountMin(questionsList[questionsClick + 1].timeMin)
            setCountSec(questionsList[questionsClick + 1].timeSec)
        } else {
            setCountMin(1)
            setCountSec(60)
        }
    }

    const HandleBtnOption = (index, oldClick) => {
        // console.log('ArrArrquestionsClick', index, oldClick, questionsList);
        setHandleMinSec0(true)
        questionsList[oldClick].timeMin = countmin
        questionsList[oldClick].timeSec = countSec
        if (questionsList[index].timeSec != 0) {
            setCountMin(questionsList[index].timeMin)
            setCountSec(questionsList[index].timeSec)
        } else if (questionsList[index].timeSec == 0) {
            setCountMin(1)
            setCountSec(60)
        }
        setQuestionClick(index)
        // console.log('ArrArr--*-*-*-*-*-**-*-*-*-*-*--*-*-**', countSec, countmin);
    }

    const HandleNextBtn = () => {
        if (questionsList[questionsClick + 1].PressableValue == true && questionsList[questionsClick + 1].timeSec == 0) {
            myList.current.scrollToIndex({ animated: true, index: questionsClick + 1, viewPosition: 0 })
            setQuestionClick(questionsClick + 1)
            setHandleMinSec0(true)
            setCountMin(1)
            setCountSec(60)
            questionsList[questionsClick].timeMin = countmin
            questionsList[questionsClick].timeSec = countSec
        } else if (questionsList[questionsClick + 1].timeSec != 0 && questionsList[questionsClick + 1].PressableValue == true) {
            myList.current.scrollToIndex({ animated: true, index: questionsClick + 1, viewPosition: 0 })
            setQuestionClick(questionsClick + 1)
            setHandleMinSec0(true)
            setCountMin(questionsList[questionsClick + 1].timeMin)
            setCountSec(questionsList[questionsClick + 1].timeSec)
            questionsList[questionsClick].timeMin = countmin
            questionsList[questionsClick].timeSec = countSec
        }
    }

    const AssessmentSubmitApi = async () => {
        let QuationAnswerList = []
        Arr.map((mapdata, index) => {
            QuationAnswerList.push({
                "assessmentId": mapdata?._id,
                "question": mapdata?.questionText,
                "answer": mapdata?.answer,
                "answerByUser": answerList[index].answer
            })
        })

        // console.log('EAEEAE', EAE, Details._id, Details, QuationAnswerList);
        var formData = {
            "topicId": Details._id,
            "assessmentLog": QuationAnswerList

        };
        var Assess = await modules.APIServices.PostApiCall(
            config.ApiEndpoint.ASSESSMENT_SUBMIT,
            formData,
        );
        if (Assess.success == true) {
            config.Constant.showLoader.hideLoader();
            // console.log('EAEEAE', Assess);
        } else {
            config.Constant.showLoader.hideLoader();
        }
    }

    return (
        CountDownFun(),
        <Modal transparent={true} visible={true} statusBarTranslucent={false}>
            <SafeAreaView style={styles.Contact}>
                <View style={styles.Contact}>
                    <View style={[styles.LinearSty,
                    styles.semiView]}>
                        <Pressable onPress={() => Close(intervalId)}
                            style={styles.backImgBtn}>
                            <Image style={styles.backImg}
                                source={images.BackIcon} resizeMode={'cover'} />
                        </Pressable>
                        <Text style={styles.titleText}>
                            {config.I18N.t('CoursesDetail_Assessment')}</Text>
                    </View>
                    <View style={styles.mainTextView}>
                        {Arr == undefined ?
                            <View style={[styles.mainView, {
                                justifyContent: 'center'
                            }]}>
                                <Text style={[styles.numberText, {
                                    opacity: 1, paddingHorizontal: 0,
                                    marginBottom: scale(25)
                                }]}>No assesment available </Text>
                            </View> :
                            <View>
                                <FlatList
                                    showsHorizontalScrollIndicator={false}
                                    data={questionsList}
                                    horizontal
                                    ref={myList}
                                    style={{ flexGrow: 0 }}
                                    renderItem={({ item, index }) => (
                                        <Pressable onPress={() => item.PressableValue ?
                                            HandleBtnOption(index, questionsClick) : null}
                                            // questionsList[index].time]}
                                            style={[styles.numberMainView, {
                                                borderColor: questionsClick == index ?
                                                    config.Constant.COLOR_BLUE :
                                                    config.Constant.COLOR_WHITE
                                            }]}>
                                            <Text style={[styles.numberText, {
                                                opacity: questionsClick == index ? 1 : 0.6,
                                                color: questionsClick == index ?
                                                    config.Constant.COLOR_BLUE :
                                                    config.Constant.COLOR_DARK_GREY,
                                                fontFamily: questionsClick == index ?
                                                    config.Constant.Font_Semi_Bold :
                                                    config.Constant.Font_Regular,
                                            }]}>
                                                {index + 1}</Text>
                                        </Pressable>
                                    )}
                                    keyExtractor={(item, index) => index.toString()}
                                />
                                <View style={styles.line} />
                                <ScrollView style={{ marginBottom: scale(60) }} showsVerticalScrollIndicator={false}>
                                    <View style={styles.timeView}>
                                        <Text style={styles.timeQuestionText}>
                                            Q{questionsClick + 1}</Text>
                                        <View style={styles.timeView}>
                                            <Text style={[styles.numberText,
                                            { paddingHorizontal: 0 }]}>
                                                {'0'}{countmin}:{countSec.toString().length == 1 ? '0' : null}{countSec}</Text>
                                            <Image source={images.Time}
                                                style={styles.timeImg}
                                                resizeMode={'contain'} />
                                        </View>
                                    </View>
                                    <Text style={[styles.numberText, {
                                        opacity: 1, paddingHorizontal: 0,
                                        marginBottom: scale(25)
                                    }]}>{Arr?.length != 0 ? questionsList[questionsClick].questionText :
                                        Data[0].details}</Text>
                                    {questionsList[questionsClick].options != undefined ?
                                        questionsList[questionsClick].options.map((data, key) => {
                                            return (
                                                <Pressable key={key}
                                                    onPress={() => [
                                                        // questionsList[questionsClick].PressableValue == false ?
                                                        // null :
                                                        answerList[questionsClick].answer != data ?
                                                            // answerList[questionsClick].answer1 != data &&
                                                            // answerList[questionsClick].answer == '' ?
                                                            answerList[questionsClick].answer = data :
                                                            // answerList[questionsClick].answer != data &&
                                                            //     answerList[questionsClick].answer1 != data ?
                                                            //     answerList[questionsClick].answer1 = data :
                                                            answerList[questionsClick].answer == data ?
                                                                answerList[questionsClick].answer = '' :
                                                                // answerList[questionsClick].answer1 == data ?
                                                                //     answerList[questionsClick].answer1 = '' : 
                                                                null,
                                                        setCount(count + 1)]}
                                                    style={[styles.opationPress, {
                                                        marginBottom: scale(10),
                                                        borderColor: answerList[questionsClick].answer == data
                                                            || answerList[questionsClick].answer1 == data
                                                            ? config.Constant.COLOR_BLUE
                                                            : '#dfdfe0',
                                                    }]}>
                                                    <View style={styles.optionTextView}>
                                                        <Text style={[styles.optionText, {
                                                            marginRight: scale(10),
                                                            color: answerList[questionsClick].answer == data ||
                                                                answerList[questionsClick].answer1 == data ?
                                                                config.Constant.COLOR_BLUE :
                                                                config.Constant.COLOR_DARK_GREY
                                                        }]}>{key + 1}.</Text>
                                                        <Text style={[styles.optionText, {
                                                            color: answerList[questionsClick].answer == data
                                                                || answerList[questionsClick].answer1 == data ?
                                                                config.Constant.COLOR_BLUE :
                                                                config.Constant.COLOR_DARK_GREY
                                                        }]}>{data}</Text>
                                                    </View>
                                                    <View style={[styles.optionRightTickView, {
                                                        opacity: answerList[questionsClick].answer == data
                                                            || answerList[questionsClick].answer1 == data ? 1 : 0.3,
                                                        borderWidth: answerList[questionsClick].answer == data
                                                            || answerList[questionsClick].answer1 == data ? 0 : 1,
                                                        backgroundColor: answerList[questionsClick].answer == data
                                                            || answerList[questionsClick].answer1 == data ?
                                                            config.Constant.COLOR_BLUE :
                                                            config.Constant.COLOR_WHITE
                                                    }]}>
                                                        <Image source={images.TickIcon}
                                                            style={styles.optionRightTickimg}
                                                            resizeMode={'cover'} />
                                                    </View>
                                                </Pressable>
                                            )
                                        }) : null}
                                </ScrollView>
                            </View>}
                    </View>
                    {Arr == undefined ? null : <View>
                        <Pressable onPress={() => questionsClick == questionsList.length - 1
                            && [answerList[questionsClick].answer != '' || answerList[questionsClick].answer1 != ''] ?
                            [Result(questionsClick == questionsList.length - 1, answerList, intervalId), AssessmentSubmitApi()] :
                            answerList[questionsClick].answer != '' || answerList[questionsClick].answer1 != '' ?
                                [HandleNextBtn(), questionsList[questionsClick].PressableValue = false] : null}
                            style={[styles.nextBtnView, {
                                backgroundColor: answerList.length == 0 ? 'rgba(41,40,48, 0.25)' :
                                    answerList[questionsClick].answer != '' ?
                                        config.Constant.COLOR_RED :
                                        answerList[questionsClick].answer1 != '' ?
                                            config.Constant.COLOR_RED :
                                            'rgba(41,40,48, 0.25)'
                            }]}>
                            <Text style={[styles.optionText, {
                                color: config.Constant.COLOR_WHITE
                            }]}>{questionsClick == questionsList.length - 1 ?
                                "SUBMIT" : "NEXT"}</Text>
                        </Pressable>
                        <Pressable onPress={() => questionsClick == questionsList.length - 1 ?
                            [Result(questionsClick == questionsList.length - 1, answerList, intervalId), AssessmentSubmitApi()] :
                            HandleNextBtn()}
                            style={styles.donnotKnowBtn}>
                            <Image source={images.Skip}
                                style={[styles.skipImg, { marginRight: scale(4) }]}
                                resizeMode={'cover'} />
                            <Text style={[styles.optionText, {
                                color: config.Constant.COLOR_BLUE
                            }]}>Don’t know the answer</Text>
                            <Image source={images.Skip}
                                style={[styles.skipImg, { marginLeft: scale(4) }]}
                                resizeMode={'cover'} />
                        </Pressable>
                    </View>}
                </View>
            </SafeAreaView>
        </Modal>

    )
};

export default Assessment

