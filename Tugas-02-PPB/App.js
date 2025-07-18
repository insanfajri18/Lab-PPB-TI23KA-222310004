import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FormRCC from './components/FormRCC';
import FormRFC from './components/FormRFC';
import Latihan2 from './components/Latihan2';
import Soal3 from './components/Soal3';
import Soal4RFC from './components/Soal4RFC';
import Soal4RCC from './components/Soal4RCC';

export default function App() {
  return (
    <Soal4RCC />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
