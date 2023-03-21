import React from 'react';
import {View, StyleSheet, Text, TextInput, Image} from 'react-native';

const Test = () => {
  return (
    <View>
      <Text>Hello </Text>

      <View style={styles.SectionStyle}>
        <Image
          source={require('../images/email.png')} //Change your icon image here
          style={styles.ImageStyle}
        />

        <TextInput
          style={{flex: 1}}
          placeholder="Enter Your Name Here"
          underlineColorAndroid="transparent"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 40,
    borderRadius: 5,
    margin: 10,
},
ImageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
}

});

export default Test;
