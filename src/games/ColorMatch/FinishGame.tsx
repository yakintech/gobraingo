import React, {useEffect, memo} from 'react';
import {Button, Text, View} from 'react-native';

import {styles} from './ColorMatch.style';

type FinishGameTypes = {
  totalPoints: number;
  points: number;
  resetGame: () => void;
  goHome: () => void;
  setTotalPoints: (value: number) => void;
};

const FinishGame: React.FC<FinishGameTypes> = props => {
  const {totalPoints, points, resetGame, goHome, setTotalPoints} = props;
  useEffect(() => {
    setTotalPoints(totalPoints + points);
  }, []);

  return (
    <View style={styles.finishContainer}>
      <Text style={styles.finishText}>Game Over!</Text>
      <Text style={styles.finishText}>Points: {points}</Text>
      <Text style={styles.finishText}>Total Points: {totalPoints}</Text>
      <Button title="Play again" onPress={resetGame} />
      <Button title="Go home" onPress={goHome} />
    </View>
  );
};

export default memo(FinishGame);
