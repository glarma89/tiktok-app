import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import MyAthentication from './MyAthentication';
import OrgAthentication from './OrgAthentication';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator();

const Authentication = ({ navigation }) => {
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
    <Button title='Organization'>Hi</Button>
    <Button title='Go to Home Page 4'>Hi</Button>
    <Button title='Go to Home Page 5'>Hi</Button>
    <Button title='Go to Home Page 6'>Hi</Button>
    <Button title='Go to Home Page 7'>Hi</Button>
    <Button title='Go to Home Page 8'>Hi</Button>
    <Button title='Go to Home Page 9'>Hi</Button>
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

export default Authentication;