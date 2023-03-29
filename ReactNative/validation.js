import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(5, 'Too Short!')
    .max(50, 'Too Long!')
    .required('username must be unique'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required')
    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, 'Invalid email'),
  password: Yup.string()
    .min(8, 'Minimum 8 Character!')
    .required('Required')
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      'Must contain 8 Characters, at least one upper case, one lower case, one digit and one special character',
    ),
  phone: Yup.string()
    .min(10, 'Minimum 10 digits')
    .max(10, 'Maximum 10 digits')
    .matches(/^[0-9]+$/, 'Phone number must be digits')
    .required('Required'),
  conformPassword: Yup.string()
    .required('required')
    .min(8 , "minimum 8 character")
    .oneOf([Yup.ref('password')] , 'Your password not match')
});

export default function Validation() {
  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
        email: '',
        phone: '',
        conformPassword : '',
      }}
      validationSchema={SignupSchema}
      onSubmit= {values => Alert.alert(JSON.stringify(values))}
      >
      {({
        values,
        errors,
        touched,
        isValid,
        handleChange,
        handleBlur,
        setFieldTouched,
        handleSubmit,
      }) => (
        <View style={styles.container}>
          <View style={{}}>
            <Text style={styles.label}>Username</Text>
            <TextInput
              style={{
                paddingLeft: 10,
                color: '000',
                backgroundColor: '#fff',
                borderRadius: 20,
              }}
              placeholderTextColor={'#000'}
              placeholder={'Username'}
              value={values.username}
              onChangeText={handleChange('username')}
              onBlur={() => setFieldTouched('username')}
            />
            {touched.username && errors.username && (
              <Text style={styles.errorsTxt}>{errors.username}</Text>
            )}
          </View>
          <View style={{}}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={{
                paddingLeft: 10,
                color: '000',
                backgroundColor: '#fff',
                borderRadius: 20,
              }}
              placeholderTextColor={'#000'}
              placeholder={'Email'}
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={() => setFieldTouched('email')}
            />
            {touched.email && errors.email && (
              <Text style={styles.errorsTxt}>{errors.email}</Text>
            )}
          </View>

          <View>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={{
                backgroundColor: '#fff',
                paddingLeft: 10,
                color: '000',
                backgroundColor: '#fff',
                borderRadius: 20,
              }}
              value={values.password}
              secureTextEntry={true}
              placeholder={'Password'}
              placeholderTextColor={'#000'}
              onChangeText={handleChange('password')}
              onBlur={() => setFieldTouched('password')}
            />
            {touched.password && errors.password && (
              <Text style={styles.errorsTxt}>{errors.password}</Text>
            )}
          </View>
          <View>
            <Text style={styles.label}>Phone</Text>
            <TextInput
              style={{
                backgroundColor: '#fff',
                paddingLeft: 10,
                color: '000',
                backgroundColor: '#fff',
                borderRadius: 20,
              }}
              value={values.phone}
              onChangeText={handleChange('phone')}
              keyboardType="numeric"
              maxLength={10}
              placeholder={'Phone'}
              placeholderTextColor={'#000'}
              onBlur={() => setFieldTouched('phone')}
            />
            {touched.phone && errors.phone && (
              <Text style={styles.errorsTxt}>{errors.phone}</Text>
            )}
          </View>

          <View>
            <TouchableOpacity
              onPress={handleSubmit}
              disabled={!isValid}
              style={[styles.btn ,{ backgroundColor : isValid ? 'darkgreen': 'lightgreen'} ]}
              >
              <Text
                style={{
                  color: '#000',
                  fontSize: 20,
                }}>
                Log In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  btn: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  container: {
    flex: 1,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    rowGap: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 10,
    color: '#000',
  },
  input: {
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    fontSize: 10,
  },
  errorsTxt: {
    color: 'red',
  },
});
