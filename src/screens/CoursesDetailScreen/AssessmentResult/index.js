import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, Pressable, Text, Modal, FlatList, Platform, SafeAreaView, ScrollView, } from 'react-native';
import { color } from 'react-native-reanimated';
import { scale } from 'react-native-size-matters';
import config from '../../../config';
import images from '../../../config/Images'
import styles from './style'
import ProgressCircle from 'react-native-progress-circle'

const AssessmentResult = ({ props, Close, QuationList, AnswerList, UserSavedAnswer, UserSavedScore }) => {

    const [percentage, setPercentage] = useState(0)
    const [answerView, setAnswerView] = useState(null)
    const [rightanswer, setRightAnswer] = useState(0)

    useEffect(async () => {
        let check = 0
        UserSavedScore == 0 ? QuationList && QuationList.map((data, key) => {
            if (AnswerList[key].answer == data.answer
                || AnswerList[key].answer1 == data.answer) {
                check = check + 1
            }
        }) : null
        let final = check / QuationList?.length;
        UserSavedScore != 0 ? setPercentage((UserSavedScore / QuationList?.length) * 100) :
            setPercentage(final * 100)
        setRightAnswer(check)
    }, [])

    return (
        <Modal transparent={true} visible={true}
            statusBarTranslucent={false}>
            <SafeAreaView style={styles.Contact}>
                <View style={styles.Contact}>
                    <View style={[styles.LinearSty,
                    styles.semiView]}>
                        <Pressable onPress={Close}
                            style={styles.backImgBtn}>
                            <Image style={styles.backImg}
                                source={images.BackIcon}
                                resizeMode={'cover'} />
                        </Pressable>
                        <Text style={styles.titleText}>
                            Assessment</Text>
                    </View>
                    <View style={styles.mainTextView}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={styles.resultView}>
                                <ProgressCircle
                                    percent={percentage}
                                    radius={50}
                                    borderWidth={5}
                                    color={config.Constant.COLOR_BLUE}
                                    shadowColor="#999"
                                    bgColor="#fff">
                                    <Text style={styles.percetageText}>
                                        {percentage}%</Text>
                                </ProgressCircle>
                                <View style={styles.yourResultTextView}>
                                    <Text style={styles.yourResultText}>
                                        Your Result</Text>
                                    <Text style={styles.yourResultInnumber}>
                                        {UserSavedScore != 0 ? UserSavedScore : rightanswer}/{QuationList.length} </Text>
                                </View>
                                <Text style={styles.congratulationText}>
                                    Congratulations!</Text>
                                <Text style={styles.passText}>
                                    You have passed the assessment</Text>
                            </View>
                            <View style={styles.line} />
                            <Text style={styles.solutionText}>
                                Solutions</Text>
                            {QuationList.map((data, index) => {
                                return (
                                    <View key={index}
                                        style={[styles.flatView, {
                                            marginBottom: QuationList.length - 1 == index ?
                                                scale(25) : 0
                                        }]}>
                                        <Pressable onPress={() =>
                                            setAnswerView(answerView == index ? null : index)}
                                            style={{ flexDirection: "row" }}>
                                            <Text style={styles.listquation}>
                                                {index + 1}.</Text>
                                            <Text style={[styles.listquation, {
                                                marginLeft: scale(10),
                                                width: '90%',
                                                fontFamily: config.Constant.Font_Medium,
                                            }]}>
                                                {data.questionText}</Text>
                                            {answerView == index ?
                                                <Image source={images.up_arrow}
                                                    style={styles.downArrowImg}
                                                    resizeMode={'cover'} /> :
                                                <Image source={images.down_bold_arrow}
                                                    style={styles.downArrowImg}
                                                    resizeMode={'cover'} />}
                                        </Pressable>
                                        {answerView == index ?
                                            <View style={styles.yourAnswerView}>
                                                <Text style={styles.youAnswerText}>
                                                    Your Answer</Text>
                                                {AnswerList?.length != 0 ? <Text style={styles.realAnswerText}>
                                                    {AnswerList[index].answer}
                                                    {AnswerList[index].answer1 != ''
                                                        && AnswerList[index].answer != '' ?
                                                        ", " : ""}
                                                    {AnswerList[index].answer1}</Text> :
                                                    UserSavedAnswer.length != 0 ?
                                                        <Text style={styles.realAnswerText}>
                                                            {UserSavedAnswer[index]?.answerByUser}</Text> : null}
                                                <Text style={[styles.youAnswerText, {
                                                    marginTop: scale(10), marginBottom: 0
                                                }]}>Correct Answer</Text>
                                                <Text style={[styles.realAnswerText, {
                                                    color: config.Constant.COLOR_BLUE
                                                }]}>{data.answer}</Text>
                                            </View> : null}
                                    </View>
                                )
                            })}
                        </ScrollView>
                    </View>
                </View>
            </SafeAreaView>
        </Modal>

    )
};

export default AssessmentResult
