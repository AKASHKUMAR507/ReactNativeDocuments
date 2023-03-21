// write a program to display two components in same page in react native

import React from 'react';
import { View } from 'react-native';

const Component1 = () => {
  return (
    <View>
      // component 1 JSX
    </View>
  );
};

const Component2 = () => {
  return (
    <View>
      // component 2 JSX
    </View>
  );
};

const Button = () => {
  return (
    <View>
      <Component1 />
      <Component2 />
    </View>
  );
};

export default Button;


// write a program to display two components with button in same place react native

import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const Component1 = () => {
  return (
    <View>
      <Text>This is component 1</Text>
    </View>
  );
};

const Component2 = () => {
  return (
    <View>
      <Text>This is component 2</Text>
    </View>
  );
};

const Button = () => {
  const [showComponent2, setShowComponent2] = useState(false);

  const handleButtonPress = () => {
    setShowComponent2(!showComponent2);
  };

  return (
    <View>
      <Component1 />
      {showComponent2 && <Component2 />}
      <Button title={showComponent2 ? "Hide Component 2" : "Show Component 2"} onPress={handleButtonPress} />
    </View>
  );
};

export default Button;



// write a program to display two components with button if button is press then replace first components with second components in react native

import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const Component1 = () => {
  return (
    <View>
      <Text>This is component 1</Text>
    </View>
  );
};

const Component2 = () => {
  return (
    <View>
      <Text>This is component 2</Text>
    </View>
  );
};

const Button = () => {
  const [showComponent2, setShowComponent2] = useState(false);

  const handleButtonPress = () => {
    setShowComponent2(!showComponent2);
  };

  return (
    <View>
      {showComponent2 ? <Component2 /> : <Component1 />}
      <Button title={showComponent2 ? "Show Component 1" : "Show Component 2"} onPress={handleButtonPress} />
    </View>
  );
};

export default Button;

