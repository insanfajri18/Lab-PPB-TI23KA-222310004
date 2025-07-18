import React from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { styles } from './styles';

const HelloScreen = () => {
  const handlePress = () => {
    Alert.alert('Notifikasi', 'Tombol berhasil ditekan!');
  };

  return (
    <View style={styles.helloContainer}>
      <Text style={styles.helloTitle}>Halo, Selamat Datang di Kuis React Native!</Text>
      <Image
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/5/59/Alexander_and_Bucephalus_-_Battle_of_Issus_mosaic_-_Museo_Archeologico_Nazionale_-_Naples_BW.jpg' }} // URL gambar uji
        style={styles.helloImage}
      />                             
      <TouchableOpacity
        style={styles.helloButton}
        onPress={handlePress}
      >
        <Text style={styles.helloButtonText}>Klik Saya</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HelloScreen;