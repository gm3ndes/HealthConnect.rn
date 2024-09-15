import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ title="" }) => {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}><Text style={{color:'#59c959'}}>Health</Text>{"Connect"}</Text>
      </View>
    );
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      backgroundColor: '#f8f8f8',
      padding: 15,
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
    },
    headerText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'blue'
    },
  });
  export default Header