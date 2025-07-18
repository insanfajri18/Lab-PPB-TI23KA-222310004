// MyFriends.js

import React, { Component } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native';
import SearchBarUI from './widgets/SearchBarUI';
import ExpScrollView from './modules/ExpScrollView';
import ExpSectionList from './modules/ExpSectionList';
import { Users } from '../const-data/User';
import { Users2 } from '../const-data/User2';

class MyFriends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    };
  }

  // Fungsi untuk menangani input pencarian
  handleSearch = (text) => {
    this.setState({ searchText: text });
  };

  render() {
    const { searchText } = this.state;

    // Filter data berdasarkan pencarian (bagian Suggested / Users)
    const filteredUsers = Users.filter(user =>
      user.name.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar hidden={false} />
        <View style={styles.header}>
          <SearchBarUI onChangeText={this.handleSearch} />
        </View>

        <View style={styles.body}>
          <ExpScrollView Data={filteredUsers} />
        </View>

        <View style={styles.section2}>
          <ExpSectionList Users={filteredUsers} />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  },
  header: {
    justifyContent: "center",
    paddingHorizontal: 10,
    marginBottom: 10
  },
  body: {
    flex: 9
  },
  section2: {
    flex: 5,
  }
});

export default MyFriends;
