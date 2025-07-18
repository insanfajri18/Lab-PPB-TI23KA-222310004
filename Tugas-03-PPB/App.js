import { SafeAreaView, StyleSheet } from 'react-native';
import MyFriends from './components/friends/MyFriend';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MyFriends/>
    </SafeAreaView>
  );
}