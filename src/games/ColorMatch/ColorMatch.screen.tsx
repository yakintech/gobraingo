import React, {useEffect, useState, useRef, useContext} from 'react';
import {View, Text, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import FinishGame from './FinishGame';

import {styles} from './ColorMatch.style';
import {UserContext, UserContextType} from '../../context/UserContext';

const GAME_COLORS: string[] = ['red', 'blue', 'orange', 'black'];
const GAME_DURATION: number = 30;
const ANSWER_LIMIT: number = 10;

const ColorMatch = () => {
  const navigation = useNavigation();
  const [points, setPoints] = useState<number>(0);
  const [random1, setRandom1] = useState<string>('');
  const [random2, setRandom2] = useState<string>('');
  const [random3, setRandom3] = useState<string>('');
  const [count, setCount] = useState<number>(0);
  const [timer, setTimer] = useState<number>(GAME_DURATION);
  const intervalRef = useRef<null | NodeJS.Timeout>(null);
  const {totalPoints, setTotalPoints} = useContext(
    UserContext,
  ) as UserContextType;

  useEffect(() => {
    randomGenerator();
    startTimer();
    return () => {
      intervalRef.current && clearInterval(intervalRef.current);
    };
  }, []);

  const randomGenerator = () => {
    let r1 = Math.floor(Math.random() * GAME_COLORS.length);
    let r2 = Math.floor(Math.random() * GAME_COLORS.length);
    let r3 = Math.floor(Math.random() * GAME_COLORS.length);
    setRandom1(GAME_COLORS[r1]);
    setRandom2(GAME_COLORS[r2]);
    setRandom3(GAME_COLORS[r3]);
  };

  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      setTimer(prev => {
        if (prev === 1) {
          intervalRef.current && clearInterval(intervalRef.current);
        }
        return prev - 1;
      });
    }, 1000);
  };

  const resetGame = () => {
    intervalRef.current && clearInterval(intervalRef.current);
    setTimer(GAME_DURATION);
    setPoints(0);
    randomGenerator();
    startTimer();
    setCount(0);
  };

  const trueButton = () => {
    if (random3 === random1) {
      setPoints(points + 1);
    }
    setCount(count + 1);
    randomGenerator();
  };

  const falseButton = () => {
    if (random3 !== random1) {
      setPoints(points + 1);
    }
    setCount(count + 1);
    randomGenerator();
  };

  const ProgressBarStyle = Object.freeze({
    width: `${(timer / GAME_DURATION) * 100}%`,
    height: 8,
    backgroundColor:
      timer <= GAME_DURATION / 3 && timer > GAME_DURATION / 5
        ? 'orange'
        : timer <= GAME_DURATION / 5
        ? 'red'
        : 'green',
    borderRadius: 4,
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 20,
  });

  return timer && count < ANSWER_LIMIT ? (
    <View style={styles.container}>
      <Text style={styles.points}>Total score: {totalPoints}</Text>
      <Text style={styles.points}>Score: {points}</Text>
      <View style={styles.boxContainer}>
        <View style={styles.box}>
          <Text style={styles.colorText}>{random1.toUpperCase()}</Text>
          <View style={styles.boxMeaning}>
            <Text style={styles.boxMeaningText}>meaning</Text>
          </View>
        </View>
        <View style={styles.box}>
          <Text style={[styles.colorText, {color: random3 || 'black'}]}>
            {random2.toUpperCase()}
          </Text>
          <View style={styles.boxMeaning}>
            <Text style={styles.boxMeaningText}>text color</Text>
          </View>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={falseButton}>
          <Text style={styles.buttonText}>NO</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={trueButton}>
          <Text style={styles.buttonText}>YES</Text>
        </Pressable>
      </View>
      <View style={styles.timerContainer}>
        <Text style={styles.timerText}>{timer}</Text>
      </View>
      <View style={ProgressBarStyle} />
    </View>
  ) : (
    <FinishGame
      points={points}
      resetGame={resetGame}
      goHome={navigation.goBack}
      totalPoints={totalPoints}
      setTotalPoints={setTotalPoints}
    />
  );
};

export default ColorMatch;
