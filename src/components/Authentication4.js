import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { auth } from '../firebase/config'
import { createUserWithEmailAndPassword } from 'firebase/auth'


const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

const Authentication4 = () => {
    const [fullName, setFullName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signUp = () => {
        console.log(fullName); // handleFullName
        console.log(userName); // handleUserName
        createUserWithEmailAndPassword(auth, email, password).then((userCredetial) => {
            console.log(userCredetial);
        }).catch((error) => {
            console.log(error);
        })
    };

    // const handleFullName = (e) => {
    //     console.log(e.target.value);
    // };

    // const handleUserName = (e) => {
    //     console.log(e.target.value);
    // };

  return (
    <View style={styles.container}>
        <Button title='Personal'
            onPress={() => navigation.navigate("Personal", { accaunt: 'personal' })}
        />
        <Button title='Organization'
            onPress={() => navigation.navigate("Organization", { accaunt: 'organization' })}
        />
        <TextInput
            placeholder='My Full Name' 
            style={styles.email}
            value={fullName}
            onChangeText={setFullName}
        />
        <TextInput
            placeholder='My Username' 
            style={styles.password} 
            value={userName}
            onChangeText={setUserName}
        />
        <TextInput
            placeholder='My Email' 
            style={styles.email}
            value={email}
            onChangeText={txt => setEmail(txt)}
        />
        <TextInput
            placeholder='My Password' 
            style={styles.password} 
            value={password}
            onChangeText={txt => setPassword(txt)}
        />
        <TouchableOpacity style={styles.createaccount} onPress={signUp}>
            <Text style={styles.createaccountText}>
                Save
            </Text>
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
    fullName: {
        width: '90%',
      height: 50,
      borderWidth: 0.5,
      //marginTop: 30,
      borderRadius: 20,
      paddingLeft: 20,
    },
    userName: {
        width: '90%',
      height: 50,
      borderWidth: 0.5,
      marginTop: 30,
      borderRadius: 20,
      paddingLeft: 20,
    },
    email: {
      width: '90%',
      height: 50,
      borderWidth: 0.5,
      marginTop: 30,
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

export default Authentication4
