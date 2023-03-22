import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const OTPTimer = ({ timeInMinutes }) => {
  const [secondsRemaining, setSecondsRemaining] = useState(timeInMinutes * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsRemaining(secondsRemaining => {
        if (secondsRemaining <= 0) {
          clearInterval(interval);
          return 0;
        }
        return secondsRemaining - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const minutesRemaining = Math.floor(secondsRemaining / 60);
  const secondsDisplayed = secondsRemaining % 60;

  return (
    <View>
      <Text>Time remaining: {minutesRemaining} minutes {secondsDisplayed} seconds</Text>
    </View>
  );
};

export default OTPTimer;
