import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { profileStyles } from './ProfileStyles';

class ClassProfile extends Component {
  render() {
    return (
      <View style={profileStyles.profileCard}>
        <Image
          source={{ uri: 'https://placehold.co/100x100/FFD1DC/FFFFFF?text=CL' }} 
          style={profileStyles.avatar}
        />
        <Text style={profileStyles.name}>M insan fajri H(RCC)</Text>
        <Text style={profileStyles.detail}>NPM: 222310004</Text>
        <Text style={profileStyles.detail}>Jurusan: Teknik Informatika</Text>
        <Text style={profileStyles.detail}>Hobi: Bermain Game</Text>
      </View>
    );
  }
}

export default ClassProfile;
