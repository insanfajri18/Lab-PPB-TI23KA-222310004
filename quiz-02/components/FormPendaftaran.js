import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import { styles } from './styles';

const FormPendaftaran = () => {
  const [namaLengkap, setNamaLengkap] = useState('');
  const [email, setEmail] = useState('');
  const [nomorHP, setNomorHP] = useState('');

  const handleSubmit = () => {
    if (!namaLengkap || !email || !nomorHP) {
      Alert.alert('Peringatan', 'Semua kolom harus diisi!');
      return;
    }
    const ringkasan = `
      Nama Lengkap: ${namaLengkap}
      Email: ${email}
      Nomor HP: ${nomorHP}
    `;
    Alert.alert('Data Pendaftaran', ringkasan);
    setNamaLengkap('');
    setEmail('');
    setNomorHP('');
  };

  return (
    <View style={styles.formContainer}>
      <Text style={styles.formTitle}>Formulir Pendaftaran</Text>

      <View style={styles.formInputGroup}>
        <Text style={styles.formLabel}>Nama Lengkap</Text>
        <TextInput
          style={styles.formInput}
          placeholder="Masukkan nama lengkap"
          placeholderTextColor="#cbd5e0" 
          value={namaLengkap}
          onChangeText={setNamaLengkap}
        />
      </View>

      <View style={styles.formInputGroup}>
        <Text style={styles.formLabel}>Email</Text>
        <TextInput
          style={styles.formInput}
          placeholder="Masukkan email"
          placeholderTextColor="#cbd5e0"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.formInputGroup}>
        <Text style={styles.formLabel}>Nomor HP</Text>
        <TextInput
          style={styles.formInput}
          placeholder="Masukkan nomor HP"
          placeholderTextColor="#cbd5e0" 
          keyboardType="phone-pad"
          value={nomorHP}
          onChangeText={setNomorHP}
        />
      </View>

      <TouchableOpacity style={styles.formButton} onPress={handleSubmit}>
        <Text style={styles.formButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FormPendaftaran;