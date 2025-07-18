import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import FunctionProfile from './components/Profile/FunctionProfile';
import ClassProfile from './components/Profile/ClassProfile';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import ColorChanger from './components/ColorChanger/ColorChanger';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.quizTitle}>Soal Quiz 1 Praktikum Pemrograman Perangkat Bergerak</Text>

        {/* Soal 1: Menampilkan Profil Sederhana (RFC vs RCC) */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Soal 1: Profil Sederhana (RFC vs RCC)</Text>
          <View style={styles.profileContainer}>
            <FunctionProfile />
            <ClassProfile />
          </View>
        </View>

        {/* Soal 2: Formulir Pendaftaran Sederhana */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Soal 2: Formulir Pendaftaran Sederhana</Text>
          <RegistrationForm />
        </View>

        {/* Soal 3: Komponen Tombol & Interaksi Warna */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Soal 3: Komponen Tombol & Interaksi Warna</Text>
          <ColorChanger />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0', 
  },
  scrollViewContent: {
    padding: 20,
    alignItems: 'center',
  },
  quizTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
    textAlign: 'center',
  },
  section: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#555',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 10,
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap', 
  },
});
