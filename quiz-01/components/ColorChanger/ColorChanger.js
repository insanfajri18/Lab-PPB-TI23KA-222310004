import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { colorChangerStyles } from './ColorChangerStyles';

const ColorChanger = () => {
  const [boxColor, setBoxColor] = useState('blue');

  const toggleColor = () => {
    if (boxColor === 'blue') {
      setBoxColor('red');
    } else {
      setBoxColor('blue');
    }
  };

  return (
    <View style={colorChangerStyles.container}>
      <View style={[colorChangerStyles.colorBox, { backgroundColor: boxColor }]} />

      <TouchableOpacity style={colorChangerStyles.button} onPress={toggleColor}>
        <Text style={colorChangerStyles.buttonText}>Ubah Warna</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ColorChanger;
