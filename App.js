import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import Title from './src/components/Title';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons'
//import HomePage from './src/components/visualDesign/HomePage';

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

export default function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //   <Stack.Screen name="Home Page" component={HomePage} 
    //       //options={{headerShown: false}}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <NavigationContainer>
    <Tab.Navigator
      barStyle={{ backgroundColor: 'white' }} //'black' bar
      initialRouteName="/"
    >
      <Tab.Screen
        name='Home'
        component={HomePage}
        options={{
          tabBarIcon: ({ color }) => (
              <Feather name='home' size={24} color={color}/>
          ),
          headerShown: false
      }}
      />
      <Tab.Screen
        name='Profile'
        component={ProfilePage}
        options={{
          tabBarIcon: ({ color }) => (
              <Feather name='user' size={24} color={color}/>
          ),
          headerShown: false
      }}
      />
      <Tab.Screen
        name='Camera'
        component={CameraPage}
        options={{
          tabBarIcon: ({ color }) => (
              <Feather name='plus-circle' size={24} color={color}/>
          ),
          headerShown: true
      }}
      />
      <Tab.Screen
        name='Notifications'
        component={NotificationPage}
        options={{
          tabBarIcon: ({ color }) => (
              <Feather name='bell' size={24} color={color}/>
          ),
          headerShown: false
      }}
      />
      <Tab.Screen
        name='Search'
        component={SearchPage}
        options={{
          tabBarIcon: ({ color }) => (
              <Feather name='search' size={24} color={color}/>
          ),
          headerShown: false
      }}
      />
    </Tab.Navigator>
    </NavigationContainer>
  );
}

const HomePage = ({ navigation }) => {
  return (
  <View>
              <Button
                title="Go back"
                onPress={() => navigation.goBack()}
              />
  </View>
  )
};

const ProfilePage = ({ navigation }) => {
  return (
  <View>
              <Button
                title="Go back"
                onPress={() => navigation.goBack()}
              />
  </View>
  )
};

const CameraPage = ({ navigation }) => {
  return (
  <View>
              <Button
                title="Go back"
                onPress={() => navigation.goBack()}
              />
  </View>
  )
};

const NotificationPage = ({ navigation }) => {
  return (
  <View>
              <Button
                title="Go back"
                onPress={() => navigation.goBack()}
              />
  </View>
  )
};

const SearchPage = ({ navigation }) => {
  return (
  <View>
              <Button
                title="Go back"
                onPress={() => navigation.goBack()}
              />
  </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
