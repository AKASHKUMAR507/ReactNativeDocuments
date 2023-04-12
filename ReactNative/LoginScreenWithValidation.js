import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Test = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const handleEmailChange = (text) => {
    setEmail(text);
    setEmailError('');
  };

  const handlePhoneChange = (text) => {
    setPhone(text);
    setPhoneError('');
  };

  const handleSubmit = () => {
    let isValid = true;

    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError('Please enter a valid email');
      isValid = false;
    }

    if (!phone) {
      setPhoneError('Phone is required');
      isValid = false;
    } else if (!validatePhone(phone)) {
      setPhoneError('Please enter a valid phone number');
      isValid = false;
    }

    if (isValid) {
      console.log('Email:', email);
      console.log('Phone:', phone);
      // You can add your own logic for handling the form submission here
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={[styles.input, emailError && styles.error]}
        onChangeText={handleEmailChange}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCompleteType="email"
        placeholder="Enter your email"
      />
      {emailError ? <Text style={styles.errorMessage}>{emailError}</Text> : null}

      <Text style={styles.label}>Phone:</Text>
      <TextInput
        style={[styles.input, phoneError && styles.error]}
        onChangeText={handlePhoneChange}
        value={phone}
        keyboardType="phone-pad"
        placeholder="Enter your phone number"
      />
      {phoneError ? <Text style={styles.errorMessage}>{phoneError}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  label: {
    alignSelf: 'flex-start',
    marginBottom: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 5,
    width: '100%',
    fontSize: 16,
  },
  error: {
    borderColor: 'red',
  },
  errorMessage: {
    color: 'red',
    fontSize: 14,
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 5,
    padding: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Test

