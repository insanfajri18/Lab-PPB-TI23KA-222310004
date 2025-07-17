import { View, Text, Image, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../images/profile.jpg')} style={styles.image} />
      <Text style={styles.name}>Muhammad Insan Fajri Hermawan</Text>
      <Text style={styles.bio}>
        Hallo nama saya Insan. Saya seorang mahasiswa di Institut Bisnis dan Informatika Kesatuan,
        jurusan Teknologi Informasi dan sekarang sedang berada di semester 4.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bio: {
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 20,
  },
});

export default ProfileScreen;
