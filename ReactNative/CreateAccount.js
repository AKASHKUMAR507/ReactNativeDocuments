import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import CheckBox from 'react-native-check-box';

const CreateAccount = () => {
  const [isEmail, setIsEmail] = useState(true);
  const [isChecked, setIsCkecked] = useState(false);

  const handleEmailClick = () => {
    setIsEmail(true);
  };

  const handlePhoneClick = () => {
    setIsEmail(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.headingText}>Account Login</Text>
        <View style={styles.switchContainer}>
          <TouchableOpacity
            style={[
              styles.switchButton,
              styles.btn1,
              isEmail && styles.activeSwitchButton,
            ]}
            onPress={handleEmailClick}
            
            >
            <Text
              style={[
                styles.switchButtonText,
                isEmail && styles.activeSwitchButtonText,
              ]}>
              Email
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.switchButton,
              styles.btn2,
              !isEmail && styles.activeSwitchButton,
            ]}
            onPress={handlePhoneClick}>
            <Text
              style={[
                styles.switchButtonText,
                !isEmail && styles.activeSwitchButtonText,
              ]}>
              Phone Number
            </Text>
          </TouchableOpacity>
        </View>

        <Formik
          initialValues={{email: '', password: '', phone: ''}}
          onSubmit={values => console.log(values)}
          validationSchema={
            isEmail
              ? Yup.object().shape({
                  email: Yup.string()
                    .email('Invalid email')
                    .required('Required'),
                  password: Yup.string()
                    .min(6, 'Too short')
                    .required('Required'),
                })
              : Yup.object().shape({
                  phone: Yup.string()
                    .matches(/^[0-9]+$/, 'Invalid phone number')
                    .min(10, 'Too short')
                    .max(10, 'Too long')
                    .required('Required'),
                  password: Yup.string()
                    .min(6, 'Too short')
                    .required('Required'),
                })
          }>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View style={styles.inputFieldSet}>
              {isEmail ? (
                <>
                  <View>
                    <Text style={styles.lableText}>Email</Text>
                  </View>
                  <View
                    style={{
                      position: 'absolute',
                      flexDirection: 'row',
                      zIndex: 1,
                      columnGap: 15,
                      marginHorizontal: 15,
                      marginVertical: 45,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image source={require('../images/email.png')} />
                    <Image source={require('../images/Line62.png')} />
                  </View>
                  <TextInput
                    style={[styles.input, styles.email]}
                    placeholder="Enter your email"
                    placeholderTextColor={'#6C757D'}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                  />
                  {errors.email && touched.email && (
                    <Text style={styles.errorText}>{errors.email}</Text>
                  )}
                </>
              ) : (
                <>
                  <Text style={styles.lableText}>Phone number</Text>
                  <View
                    style={{
                      position: 'absolute',
                      flexDirection: 'row',
                      zIndex: 1,
                      columnGap: 15,
                      marginHorizontal: 15,
                      marginVertical: 45,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image source={require('../images/email.png')} />
                    <Image source={require('../images/Line62.png')} />
                  </View>
                  <TextInput
                    style={[styles.input, styles.phone]}
                    placeholder="Enter your number"
                    placeholderTextColor={'#6C757D'}
                    onChangeText={handleChange('phone')}
                    onBlur={handleBlur('phone')}
                    value={values.phone}
                    maxLength={10}
                    keyboardType="numeric"
                  />
                  {errors.phone && touched.phone && (
                    <Text style={styles.errorText}>{errors.phone}</Text>
                  )}
                </>
              )}
              <>
                <Text style={[styles.lableText, styles.password]}>
                  Password
                </Text>
                <View
                  style={{
                    position: 'absolute',
                    flexDirection: 'row',
                    zIndex: 1,
                    columnGap: 15,
                    marginHorizontal: 15,
                    marginVertical: 165,
                    justifyContent: 'center',
                    alignItems: 'center',
                    // borderWidth:1,
                  }}>
                  <Image source={require('../images/GroupLock.png')} />
                  <Image source={require('../images/Line62.png')} />
                </View>
              
                <TextInput
                  style={styles.input}
                  placeholder="Enter your password"
                  placeholderTextColor={'#6C757D'}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry
                />
                  <TouchableOpacity style ={{
                      position:'absolute',
                      zIndex:1,
                      marginVertical: 190,
                      marginHorizontal:'95%',
                      justifyContent:'flex-end',
                      alignItems:'flex-end',
                    }}>
                  <Image source={require('../images/GroupEye.png')} />
                </TouchableOpacity>

              </>
              {errors.password && touched.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}
              <View style={{rowGap: 40, marginTop: '12%'}}>
                <View style={styles.checkboxContainer}>
                  <CheckBox
                    isChecked={isChecked}
                    onClick={() => setIsCkecked(!isChecked)}
                    rightTextStyle={{
                      fontSize: 19,
                      color: 'black',
                      fontWeight: 'bold',
                    }}
                    checkedCheckBoxColor="#286FDB"
                    uncheckedCheckBoxColor="#343A40"
                  />
                  <Text style={styles.remember}>Remember me</Text>
                </View>

                <TouchableOpacity
                  style={styles.loginButton}
                  onPress={handleSubmit}>
                  <Text style={styles.buttonText}>Log In</Text>
                </TouchableOpacity>
              </View>
              <View style={{rowGap: 22, marginVertical: 33}}>
                {/* create account  */}
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View>
                    <Text
                      style={styles.create}
                      onPress={() => navigation.navigate(CreateAccount)}>
                      Create your Almazx Account
                    </Text>
                  </View>
                </View>

                {/* forgot password */}
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View>
                    <Text
                      style={styles.forget}
                      onPress={() => navigation.navigate(ForgotPassword)}>
                      Forgot password?
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  main: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    // borderWidth: 1,
    // borderColor: 'red',
    marginLeft: 32,
    marginRight: 27,
    rowGap: 25,
  },
  headingText: {
    color: '#092147',
    fontSize: 32,
    paddingTop: 80,
  },

  switchContainer: {
    flexDirection: 'row',
    columnGap: 10,
    justifyContent: 'flex-end',
  },
  switchButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 7,
    width: 94,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn2: {
    borderRadius: 7,
    width: 122,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: 1,
      height: -5,
    },
    shadowRadius: 20,
    elevation: 5,
  },
  btn1: {
    borderRadius: 7,
    width: 94,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: 1,
      height: -5,
    },
    shadowRadius: 20,
    elevation: 5,
  },
  activeSwitchButton: {
    backgroundColor: '#286FDB',
  },
  switchButtonText: {
    color: '#343A40',
    fontSize: 16,
  },
  activeSwitchButtonText: {
    color: '#FFFFFF',
  },
  input: {
    borderRadius: 10,
    shadowColor: '#fff',
    shadowOffset: {width: 100, height: 60},
    shadowOpacity: 3.2,
    shadowRadius: 0,
    paddingLeft: 10,
    backgroundColor: '#fff',
    color: '#000',
    height: 60,
    shadowColor: '#000000',
    shadowOffset: {
      width: 1,
      height: -5,
    },
    shadowRadius: 20,
    elevation: 5,
    paddingLeft: 60,
  },
  errorText: {
    color: 'red',
    marginHorizontal: 10,
    marginBottom: 5,
  },
  loginButton: {
    backgroundColor: '#286FDB',
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: 1,
      height: -5,
    },
    shadowRadius: 20,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    display: 'flex',
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 700,
  },
  lableText: {
    color: '#343A40',
    fontSize: 18,
    marginBottom: '2%',
    shadowColor: '#000000',
    shadowOffset: {
      width: 1,
      height: -5,
    },
    shadowRadius: 20,
    elevation: 20,
  },
  inputFieldSet: {},
  email: {
    marginBottom: '8%',
  },
  phone: {
    marginBottom: '8%',
  },
  password: {},
  checkboxContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 5,
  },
  remember: {
    color: '#343A40',
    fontSize: 16,
    fontWeight: 500,
  },
  create: {
    color: '#286FDB',
    textDecorationLine: 'underline',
  },
  forget: {
    color: '#343A40',
    textDecorationLine: 'underline',
  },
});

export default CreateAccount;
