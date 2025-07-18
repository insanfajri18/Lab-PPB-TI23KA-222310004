import React from 'react';
import { SectionList, StyleSheet, Text } from 'react-native';
import FriendlistUI from '../widgets/FriendlistUI';
import { Users2 } from '../../const-data/User2';

const ExpSectionList = ({ Users }) => {
  const data = [
    { title: "Suggested", data: Users }, 
    { title: "Followers", data: Users2 }
  ];

  return (
    <SectionList
      sections={data}
      renderItem={({ item }) => <FriendlistUI items={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 16, marginVertical: 5 }}>
          {title}
        </Text>
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({});

export default ExpSectionList;
