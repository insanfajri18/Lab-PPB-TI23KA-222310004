import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Platform } from 'react-native';
import HomeScreen from '../components/HomeScreen';
import ProfileScreen from '../components/ProfileScreen';
import HelloScreen from '../components/HelloScreen';
import CounterApp from '../components/CounterApp';
import ListMahasiswa from '../components/ListMahasiswa';
import FormPendaftaran from '../components/FormPendaftaran';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Hello') {
            iconName = 'hand-paper';
          } else if (route.name === 'Counter') {
            iconName = 'calculator'; 
          } else if (route.name === 'List') {
            iconName = 'list';
          } else if (route.name === 'Form') {
            iconName = 'wpforms'; 
          }
          return <FontAwesome5 name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#6200EE', 
        tabBarInactiveTintColor: 'gray', 
        tabBarStyle: {
          backgroundColor: '#2d3748', 
          borderTopWidth: 0,
          paddingBottom: Platform.OS === 'ios' ? 30 : 35, 
          height: Platform.OS === 'ios' ? 90 : 90, 
        },
        headerShown: false, 
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Hello" component={HelloScreen} />
      <Tab.Screen name="Counter" component={CounterApp} />
      <Tab.Screen name="List" component={ListMahasiswa} />
      <Tab.Screen name="Form" component={FormPendaftaran} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: '#1a202c' } 
        }}
      >
        <Stack.Screen name="MainTabs" component={MainTabNavigator} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}