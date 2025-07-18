import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { registrationFormStyles } from './RegistrationFormStyles'; 

const RegistrationForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submittedData, setSubmittedData] = useState(null); 

  const handleSubmit = () => {
    if (!fullName || !email || !phone) {
      Alert.alert('Error', 'Semua kolom harus diisi!');
      return;
    }


    setSubmittedData({
      fullName: fullName,
      email: email,
      phone: phone,
    });

  
    setFullName('');
    setEmail('');
    setPhone('');

    Alert.alert('Sukses', 'Data pendaftaran berhasil disimpan!');
  };

  return (
    <View style={registrationFormStyles.container}>
      <View style={registrationFormStyles.inputGroup}>
        <Text style={registrationFormStyles.label}>Nama Lengkap</Text>
        <TextInput
          style={registrationFormStyles.input}
          placeholder="Masukkan nama lengkap"
          value={fullName}
          onChangeText={setFullName}
        />
      </View>

      <View style={registrationFormStyles.inputGroup}>
        <Text style={registrationFormStyles.label}>Email</Text>
        <TextInput
          style={registrationFormStyles.input}
          placeholder="Masukkan email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={registrationFormStyles.inputGroup}>
        <Text style={registrationFormStyles.label}>No. Telepon</Text>
        <TextInput
          style={registrationFormStyles.input}
          placeholder="Masukkan nomor telepon"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
        />
      </View>

      <TouchableOpacity style={registrationFormStyles.button} onPress={handleSubmit}>
        <Text style={registrationFormStyles.buttonText}>Submit</Text>
      </TouchableOpacity>

      
      {submittedData && (
        <View style={registrationFormStyles.submittedDataContainer}>
          <Text style={registrationFormStyles.submittedDataTitle}>Data yang Disubmit:</Text>
          <Text style={registrationFormStyles.submittedDataItem}>Nama: {submittedData.fullName}</Text>
          <Text style={registrationFormStyles.submittedDataItem}>Email: {submittedData.email}</Text>
          <Text style={registrationFormStyles.submittedDataItem}>No. Telp: {submittedData.phone}</Text>
        </View>
      )}
    </View>
  );
};

export default RegistrationForm;
