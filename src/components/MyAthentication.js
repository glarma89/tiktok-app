import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import { firebase } from '@react-native-firebase/auth';
import { StackActions } from '@react-navigation/native';

const MyAthentication = ({ navigation, route }) => {
  const [fullName, setFullName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let accaunt = route.params.accaunt;

  const handleSignUp = () => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Успешная регистрация
        const user = userCredential.user;
        console.log('User registered successfully:', user);
      })
      .catch((error) => {
        // Ошибка регистрации
        const errorMessage = error.message;
        console.log('Registration error:', errorMessage);
      });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        onChangeText={(text) => setFullName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="User Name"
        onChangeText={(text) => setUserName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
      />
      <Button title="Sign Up" onPress={handleSignUp} />
      <Button 
          title='Go to Home Page 1'
          onPress={() => navigation.navigate('Authentication')}
      >Button</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    width: '80%',
    padding: 10,
    marginBottom: 10,
  },
});

export default MyAthentication;