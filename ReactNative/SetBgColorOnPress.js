import React from 'react';
import {View, StyleSheet,TouchableOpacity,Text} from 'react-native';

const Test = () => {
  const [bgColor , setBgColor] = useState(false);
  
  const handleButtonClick = () => {
    setBgColor(!bgColor);
  };

  const styleBgButton = bgColor
    ? {
        backgroundColor: '#286FDB',
      }
    : {
        backgroundColor: 'rgba(40, 111, 219, 0.5)',
     };

  return (
    <View>
      <View style={styles.button}>
        <TouchableOpacity
          style={[styles.submitBUtton, styleBgButton]}
          onPress={handleButtonClick}>
          <Text
            style={{
              fontSize: 19,
              color: '#FFFFFF',
            }}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  submitBUtton:{
    height:60,
    borderRadius:7,
    justifyContent:'center',
    alignItems:'center',
    
},

});

export default Test;
