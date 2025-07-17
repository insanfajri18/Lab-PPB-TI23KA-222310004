import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, StyleSheet } from 'react-native';
import ProfileScreen from './components/ProfileScreen';

export default function App() {
return (
  <View style={{ flex: 1 }}>
    <ProfileScreen />
    <StatusBar style="auto" />
  </View>
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
