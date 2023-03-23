import React from 'react';
import {View, Text, Button} from 'react-native';

const App = () => {
  const firstFunction = () => {
    console.log("First function called.");
  };

  const secondFunction = () => {
    console.log("Second function called.");
  };

  const onPressHandler = () => {
    firstFunction();
    secondFunction();
  };

  return (
    <View>
      <Button title="Press me" onPress={onPressHandler} />
    </View>
  );
};

export default App;
