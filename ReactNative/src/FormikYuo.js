import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
  phone: Yup.string()
    .required('Please enter your phone number')
    .matches(/^[0-9]{10}$/, 'Please enter a valid 10-digit phone number')
});

const LoginForm = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ phone: '' }}
        validationSchema={loginSchema}
        onSubmit={values => {
          navigation.navigate('NextPage');
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <>
            <TextInput
              style={styles.input}
              onChangeText={handleChange('phone')}
              onBlur={handleBlur('phone')}
              value={values.phone}
              placeholder="Phone number"
              keyboardType="phone-pad"
            />
            {errors.phone && touched.phone && <Text style={styles.error}>{errors.phone}</Text>}
            <Button title="Login" onPress={handleSubmit} disabled={!values.phone || Object.keys(errors).length > 0} />
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  input: {
    height: 50,
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    marginBottom: 10
  },
  error: {
    color: 'red',
    marginBottom: 10
  }
});

export default LoginForm;
