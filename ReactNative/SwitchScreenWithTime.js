//write a program to press on button to navigate to another screen after 2 second in react native
import React, { useState } from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  const [hasPressedButton, setHasPressedButton] = useState(false);

  const handleButtonPress = () => {
    setHasPressedButton(true);
    setTimeout(() => {
      navigation.navigate('OtherScreen');
    }, 2000);
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      {!hasPressedButton && <Button title="Press me!" onPress={handleButtonPress} />}
      {hasPressedButton && <Text>Wait for 2 seconds...</Text>}
    </View>
  );
}

function OtherScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Other Screen</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="OtherScreen" component={OtherScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
