import {FlatList, StyleSheet, Text, View, RefreshControl} from 'react-native';
import React, {useEffect, useState} from 'react';

import Btn from '../components/buttons/Btn';
import axios from 'axios';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const FetchApiRequest = () => {
  const [data, setData] = useState([]);
  const [dataBYID , setDataBYID] = useState([]);
  console.log(data);
  const baseURL = 'https://jsonplaceholder.typicode.com';
  const getAPI = () => {
    axios({
      method: 'GET',
      url: `${baseURL}/posts`,
    })
      .then(res => setData(res.data))
      .catch(err => console.log(err));
    // res.data
    // res.status
    //
  };

  const get_By_Id = () =>{
    axios({
      method:'GET',
      url:`${baseURL}/posts/1`,
    }).then(res => console.log(res.data)).catch(err => console.log(err))
  }

  const postApi = () =>{
    axios({
      method:'POST',
      url:`${baseURL}/posts`,
      body : JSON.stringify({
        id: 101,
        title: "Hello Akash Kumar",
        body: 'Hello Body'
      })
    }).then(res => console.log(res)).catch(err => console.log(err));
  }

  const patchApi = () =>{
    axios({
      method:'PATCH',
      url:`${baseURL}/posts/16`,
      body: JSON.stringify({
        title:'UpDated DaaTa'
      })
    }).then(res => console.log(res)).catch(err => console.log(err));
  }

  const deleteApi = () =>{
    axios({
      method:'DELETE' ,
      url:`${baseURL}/posts/16`,
       
    }).then(res => console.log(res)).catch(err => console.log(err));
  }
  return (
    <View style={{flex: 1}}>
 

        <Text style={{fontSize: 40, fontWeight: 'bold', textAlign: 'center'}}>
          Hello Api
        </Text>

        <Btn title={'GET'} Press={getAPI} BgColor={'#000fff'} />
        <Btn title={'GET_BY_ID'} Press={get_By_Id} BgColor={'#000fff'} />
        <Btn title={'POST'} Press={postApi} BgColor={'#000fff'} />
        <Btn title={'PATCH'} Press={patchApi} BgColor={'#000fff'} />
        <Btn title={'DELETE'} Press={deleteApi} BgColor={'#000fff'} />

 

        {/* <FlatList
          data={data}
          ListEmptyComponent={() => (
            <Text
              style={{
                textAlign: 'center',
                fontSize: 40,
                color: 'black',
              }}>
              No data
            </Text>
          )}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <View>
              <Text style={{fontSize: 22, color: 'black'}} numberOfLines={1}>
                Id: {item.id}
              </Text>
              <Text style={{fontSize: 22, color: 'black'}} numberOfLines={1}>
                Title: {item.title}
              </Text>
              <Text style={{fontSize: 22, color: 'black'}} numberOfLines={1}>
                Body: {item.body}
              </Text>

              <Text style ={{fontSize:22 , color:'black'}}>{item}</Text>
            </View> 
          )}
        /> */}
     
      </View>
  );
};

export default FetchApiRequest;

const styles = StyleSheet.create({});
