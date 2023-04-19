import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

// Инициализируем Firebase App
const firebaseConfig = {
    apiKey: "AIzaSyAJODQi4aHBrjPr56x3HQ5wCg5sca_JbKY",
    authDomain: "ninja-firegram-3f348.firebaseapp.com",
    projectId: "ninja-firegram-3f348",
    storageBucket: "ninja-firegram-3f348.appspot.com",
    messagingSenderId: "880878962145",
    appId: "1:880878962145:web:3ac0b24d2ada9530fa7ea0"
};
const app = initializeApp(firebaseConfig);

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator();


const Authentication = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const auth = getAuth(app);
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log(userCredential.user);
      // дополнительная логика, которую вы хотите выполнить после успешной регистрации
    } catch (error) {
      console.log(error);
      // дополнительная логика, которую вы хотите выполнить при возникновении ошибки
    }
  };

  return (
    <View style={styles.container}>
    
    <Button title='Personal'
        onPress={() => navigation.navigate("Personal", { accaunt: 'personal' })}
    />
    <Button title='Organization'
        onPress={() => navigation.navigate("Organization", { accaunt: 'organization' })}
    />
    {/* <Button title={accessTokken ? "Get User Data" : "Login"} onPress={accessToken ? getUserData : signInWithGoogleAsync}/> */}

    <TextInput placeholder='Enter Email' style={styles.email} value={email} onChangeText={txt => setEmail(txt)}/>
    <TextInput placeholder='Enter Password' style={styles.password} value={password} onChangeText={txt => setPassword(txt)}/>

    <TouchableOpacity style={styles.createaccount} onPress={handleRegister}>
      <Text style={styles.createaccountText}>Create Account</Text>
    </TouchableOpacity>

    
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
  email: {
    width: '90%',
    height: 50,
    borderWidth: 0.5,
    borderRadius: 20,
    paddingLeft: 20,
  },
  password: {
    width: '90%',
    height: 50,
    borderWidth: 0.5,
    marginTop: 30,
    borderRadius: 20,
    paddingLeft: 20,
  },
  createaccount: {
    width: '90%',
    height: 50,
    borderRadius: 20,
    backgroundColor: '#000',
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  createaccountText: {
    color: '#fff'
  }
});

export default Authentication;