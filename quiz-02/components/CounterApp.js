import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { styles } from './styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const CounterApp = () => {
  const [count, setCount] = useState(0); 

  const increment = () => {
    if (count < 10) {
      setCount(count + 1);
    } else {
      Alert.alert('Peringatan', 'Nilai maksimal tercapai.');
    }
  };

  const decrement = () => {
    if (count > 0) { 
      setCount(count - 1);
    }
  };

  return (
    <View style={styles.counterContainer}>
      <Text style={styles.counterTitle}>Counter App</Text>
      <Text style={styles.counterCountText}>{count}</Text>

      <View style={styles.counterButtonContainer}>
        <TouchableOpacity style={styles.counterButton} onPress={decrement}>
          <FontAwesome5 name="minus" size={24} color="white" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.counterButton} onPress={increment}>
          <FontAwesome5 name="plus" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CounterApp;