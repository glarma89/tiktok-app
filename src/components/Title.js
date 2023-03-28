import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Title = () => {
  return (
    <View 
    style={styles.title}
    >
      <Text>FireGram</Text>
      <Text>Your Pictures</Text>
      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginTop: '50%'
  },
});

export default Title;