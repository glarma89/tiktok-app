import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import { firebase } from '@react-native-firebase/auth';

const OrgAthentication = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [organizationName, setOrganizationName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [organizationEmail, setOrganizationEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCompanySignUp = () => {
    firebase.auth().createUserWithEmailAndPassword(organizationEmail, password)
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
        placeholder="Organization Name"
        onChangeText={(text) => setOrganizationName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Job Title"
        onChangeText={(text) => setJobTitle(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Organization Email"
        onChangeText={(text) => setOrganizationEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
      />
      <Button title="Sign Up" onPress={handleCompanySignUp} />
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

export default OrgAthentication;