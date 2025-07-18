import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'; 

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.profileContainer}>
      <TouchableOpacity
        style={styles.profileBackButton}
        onPress={() => navigation.goBack()}
      >
        <FontAwesome5 name="arrow-left" size={24} color="#90cdf4" />
      </TouchableOpacity>

      <View style={styles.profileCard}>
        <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDSM9pR0TsI5AZwmOEkGV42kiRIhtEW2lYSw&s' }} 
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Insan Fajri</Text>
        <Text style={styles.profileEmail}>222310004@student.ibik.ac.id</Text>
        <Text style={styles.profileBio}>Mahasiswa Teknik Informatika dengan NPM 222310004, antusias dalam pengembangan aplikasi mobile.</Text>
      </View>
    </View>
  );
};

export default ProfileScreen;