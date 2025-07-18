import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.homeContainer}>
      <Text style={styles.homeTitle}>Selamat Datang di Aplikasi Kuis React Native!</Text>
      <Text style={styles.homeSubtitle}>
        Silakan jelajahi setiap soal melalui tab navigasi di bawah.
      </Text>

      <TouchableOpacity
        style={styles.homeButton}
        onPress={() => navigation.navigate('Profile')}
      >
        <Text style={styles.homeButtonText}>Lihat Profil (Soal 5)</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;