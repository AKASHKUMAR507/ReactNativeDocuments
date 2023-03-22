import React,{Component} from 'react';
import {View, StyleSheet,Text, Image} from 'react-native';

export default class SplashScreen extends Component {
    constructor(props) {
        super(props);
        setTimeout(() =>{
            this.props.navigation.navigate('LoginScreen')
        },2000)
    }

    render() {
        return (
            <View style={styles.container}>
               <View style={styles.wrap_container}>
                    <View style = {styles.image1}>
                        <Image source={require('../images/Group.png')}/>
                    </View>
                    <View style = {styles.image2}>
                        <Image source={require('../images/GroupName.png')}/>
                    </View>
               </View>
               
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#f5f5f5"
    },

    wrap_container:{
        flex:1,
        backgroundColor:'#f5f5f5',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        rowGap:25,
    },
    image1:{
        backgroundColor:"#f5f5f5"
    },
    image2:{
        backgroundColor:"#f5f5f5"
    },

})

