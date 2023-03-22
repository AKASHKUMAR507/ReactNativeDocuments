import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const App = () => {
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [showPhoneInput, setShowPhoneInput] = useState(false);
  const [emailButtonColor, setEmailButtonColor] = useState('#007AFF');
  const [phoneButtonColor, setPhoneButtonColor] = useState('#007AFF');

  const handleEmailButtonPress = () => {
    setShowEmailInput(true);
    setShowPhoneInput(false);
    setEmailButtonColor('#FF9500');
    setPhoneButtonColor('#007AFF');
  };

  const handlePhoneButtonPress = () => {
    setShowEmailInput(false);
    setShowPhoneInput(true);
    setEmailButtonColor('#007AFF');
    setPhoneButtonColor('#FF9500');
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Email" color={emailButtonColor} onPress={handleEmailButtonPress} />
        <Button title="Phone" color={phoneButtonColor} onPress={handlePhoneButtonPress} />
      </View>
      {showEmailInput && (
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Enter email" />
        </View>
      )}
      {showPhoneInput && (
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Enter phone number" keyboardType="phone-pad" />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  inputContainer: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    padding: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
});

export default App;
