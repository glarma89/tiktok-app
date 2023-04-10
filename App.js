import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import Title from './src/components/Title';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons'
//import HomePage from './src/components/visualDesign/HomePage';
import CameraPage from './CameraPage'
import { Video } from 'expo-av';
import PlayVideo from '../tiktok-app/src/components/PlayVideo';
import TakePhoto from './src/components/TakePhoto';
import Authentication from './src/components/Authentication';

//const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

export default function App() {
  return (
    
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
        component={TakePhoto} // ProfilePage
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
          headerShown: false
      }}
      />
      <Tab.Screen
        name='Notifications'
        //component={NotificationPage}
        component={PlayVideo}
        options={{
          tabBarIcon: ({ color }) => (
              <Feather name='bell' size={24} color={color}/>
          ),
          headerShown: false
      }}
      />
      <Tab.Screen
        name='Search'
        //component={SearchPage}
        component={Authentication}
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

const CameraPagePlug = ({ navigation }) => {
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

const PlayVideo1 = () => {
  const video = React.useRef(null)
  const [statusVideo, setStatusVideo] = React.useState({})

  return (
      <View style={styles.containerVideo}>
          <Video
              ref={video}
              style={styles.video}
              //source={require("./videofile/dogvideo.mp4")}
              source={{uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"}}
              useNativeControls
              resizeMode='contain'
              isLooping
              onPlaybackStatusUpdate={setStatusVideo}
          />
          <View style={styles.buttons}>
              <Button title='play from 5s' onPress={() => video.current.playFromPositionAsync(5000)}/>
              <Button title={statusVideo.isLooping ? "Set to not loopp" : "Set to loop"} onPress={() => video.current.setIsLoopingAsync(!statusVideo.isLooping)}/>
          </View>
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
  containerVideo: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
},
video: {
    //flex: 1,
    alignSelf: 'stretch',
    //marginTop: 8
  },
  buttons: {
    margin: 16
}
});
