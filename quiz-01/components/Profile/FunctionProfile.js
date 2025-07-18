import React from 'react';
import { View, Text, Image } from 'react-native';
import { profileStyles } from './ProfileStyles';

const FunctionProfile = () => {
  return (
    <View style={profileStyles.profileCard}>
      <Image
        source={{ uri: 'https://placehold.co/100x100/A7C7E7/FFFFFF?text=FN' }} // Placeholder image
        style={profileStyles.avatar}
      />
      <Text style={profileStyles.name}>M Insan fajri H (RFC)</Text>
      <Text style={profileStyles.detail}>NPM: 222310004</Text>
      <Text style={profileStyles.detail}>Jurusan: Teknik Informatika</Text>
      <Text style={profileStyles.detail}>Hobi: bermain bola</Text>
    </View>
  );
};

export default FunctionProfile;
