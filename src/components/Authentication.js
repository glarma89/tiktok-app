import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import MyAthentication from './MyAthentication';
import OrgAthentication from './OrgAthentication';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import * as Google from 'expo-google-app-auth'
import auth from '@react-native-firebase/auth';

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator();


// const [accessToken, setAccessToken] = useState();
// const [userInfo, setUserInfo] = useState();

// async function signInWithGoogleAsync() {
//   try {
//     const result = await Google.logInAsync({
//       androidClientId: "",
//       iosClientId: "",
//       scopes: ["profile", "email"]
//     });

//     if (result.type === "success") {
//       setAccessToken(accessToken);
//     } else {
//       console.log('Permission denied');
//     }
//   } catch (e) {
//     console.log(e);
//   }
// }

// async function getUserData() {
  
// }

// function showUserInfo() {
  
// }

const Authentication = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const createUser = () => {
    firebase.auth()
  .createUserWithEmailAndPassword(email, password)
  .then(() => {
    console.log('User account created & signed in!');
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  });
  }

  return (
    <View style={styles.container}>
        {/* <Stack.Navigator initialRouteName="Authentication">
        
            <Stack.Screen
                name="MyAthentication" 
                component={MyAthentication} 
                options={{headerShown: false}}
            />
                
        
<Stack.Screen
    name="OrgAthentication" 
    component={OrgAthentication} 
    options={{headerShown: false}}
/>
        </Stack.Navigator> */}
      {/* <MyAthentication/> */}
      {/* <OrgAthentication/> */}
    
    <Button title='Personal'
        onPress={() => navigation.navigate("Personal", { accaunt: 'personal' })}
    />
    <Button title='Organization'
        onPress={() => navigation.navigate("Organization", { accaunt: 'organization' })}
    />
    {/* <Button title={accessTokken ? "Get User Data" : "Login"} onPress={accessToken ? getUserData : signInWithGoogleAsync}/> */}

    <TextInput placeholder='Enter Email' style={styles.email} value={email} onChangeText={txt => setEmail(txt)}/>
    <TextInput placeholder='Enter Password' style={styles.password} value={password} onChangeText={txt => setPassword(txt)}/>

    <TouchableOpacity style={styles.createaccount} onPress={() => {createUser()}}>
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