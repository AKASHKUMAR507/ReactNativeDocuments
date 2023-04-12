import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

const countries = [
  { id: '1', name: 'USA' },
  { id: '2', name: 'Canada' },
  { id: '3', name: 'Mexico' },
  { id: '4', name: 'Brazil' },
  { id: '5', name: 'Argentina' },
  { id: '6', name: 'Peru' },
  { id: '7', name: 'Chile' },
  { id: '8', name: 'Colombia' },
];

const Test = () => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [showCountries, setShowCountries] = useState(false);

  console.log(selectCountry)

  const toggleCountries = () => {
    setShowCountries(!showCountries);
  };

  const selectCountry = (country) => {
    setSelectedCountry(country);
    setShowCountries(false);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => selectCountry(item)} style={{ padding: 10 }}>
      <Text style = {{backgroundColor:'red'}}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity onPress={toggleCountries}
        style = {{backgroundColor:'yellow',padding: 10 }}
      >
        <Text>{selectedCountry.name}</Text>
      </TouchableOpacity>
      {showCountries && (
        <FlatList
          data={countries}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          style={{ backgroundColor: '#f2f2f2' }}
        />
      )}
    </View>
  );
};
 
export default Test;

