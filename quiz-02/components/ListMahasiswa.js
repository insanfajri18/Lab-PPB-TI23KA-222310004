import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { styles } from './styles';

const ListMahasiswa = () => {
  const [mahasiswaList, setMahasiswaList] = useState([
    { id: '0', nama: 'Insan Fajri', npm: '222310004' },
    { id: '1', nama: 'Dandi Hendika', npm: '222310005' },
    { id: '2', nama: 'Chandradinata', npm: '222310016' },
    { id: '3', nama: 'Syahid muhammad', npm: '222310036' },
    { id: '4', nama: 'Carlos imanuel', npm: '222310012' },
    { id: '5', nama: 'Yefta Julio', npm: '222310002' },
  ]);

  const renderItem = ({ item }) => (
    <View style={styles.listCard}>
      <Text style={styles.listCardName}>{item.nama}</Text>
      <Text style={styles.listCardNPM}>{item.npm}</Text>
    </View>
  );

  return (
    <View style={styles.listContainer}>
      <Text style={styles.listTitle}>Daftar Mahasiswa</Text>
      <FlatList
        data={mahasiswaList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

export default ListMahasiswa;