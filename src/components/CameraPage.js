import { StatusBar } from 'expo-status-bar';
//import { Button, StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
//import Video from 'react-native-video';
//import Title from './comps/Title';
//import PlayVideo from './comps/PlayVideo';
//import VideoScreen from './comps/VideoScreen/index';
//import Dog from './videofile/dogvideo'
import Constants from 'expo-constants';
//import VideoPlayer from 'react-native-video-player';
import { Platform } from 'react-native';
//import { Video } from 'expo-av';
import React from 'react';
//import { Camera } from 'expo-camera';
//import { shareAsync } from 'expo-sharing';
//import * as MediaLibrary from 'expo-media-library';

import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import { useEffect, useState, useRef } from 'react';
import { Camera } from 'expo-camera';
import { Video } from 'expo-av';
import { shareAsync } from 'expo-sharing';
import * as MediaLibrary from 'expo-media-library';


export default function App() {
  // const video = React.useRef(null)
  // const [statusVideo, setStatusVideo] = React.useState({})
  // let cameraRef = React.useRef();
  // const [hasCameraPermission, setHasCameraPermission] = React.useState()
  // const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = React.useState()
  // const [photo, setPhoto] = React.useState()

  // React.useEffect(() => {
  //   (async () => {
  //     const cameraPermission = await Camera.requestCameraPermissionsAsync();
  //     const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
  //     setHasCameraPermission(cameraPermission.status === "granted")
  //     setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted")
  //   })();
  // }, [])

  // if (hasCameraPermission === undefined) {
  //   return <Text>Requesting permissions...</Text>
  // } else if (!hasCameraPermission){
  //   return <Text>Permission for camera not granted. Please change this in settings.</Text>
  // }

  // let takePic = async () => {
  //   let options = {
  //     quality: 1,
  //     base64: true,
  //     exif: false,
  //   };

  //   let newPhoto = await cameraRef.current.takePictureAsync(options);
  //   setPhoto(newPhoto);
  // };

  // if (photo) {
  //   let sharePic = () => {
  //     shareAsync(photo.uri).then(() => {
  //       setPhoto(undefined)
  //     })
  //   };

  //   let savePhoto = () => {
  //     MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
  //       savePhoto(undefined)
  //     })
  //   };

  //   return (
  //     <SafeAreaView style={styles.container}>
  //       <Image style={styles.preview} source={{ uri: "data:image/jpg;base64," + photo.base64 }}/>
  //       <Button title='Share' onPress={sharePic}/>
  //       {hasMediaLibraryPermission ? <Button title='Save' onPress={savePhoto}/> : undefined}
  //       <Button title='Discard' onPress={() => setPhoto(undefined)}/>
  //     </SafeAreaView>
  //   );
  // }

  let cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [hasMicrophonePermission, setHasMicrophonePermission] = useState();
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [isRecording, setIsRecording] = useState(false);
  const [video, setVideo] = useState();

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const microphonePermission = await Camera.requestMicrophonePermissionsAsync();
      const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();

      setHasCameraPermission(cameraPermission.status === "granted");
      setHasMicrophonePermission(microphonePermission.status === "granted");
      setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
    })();
  }, []);

  if (hasCameraPermission === undefined || hasMicrophonePermission === undefined) {
    return <Text>Requestion permissions...</Text>
  } else if (!hasCameraPermission) {
    return <Text>Permission for camera not granted.</Text>
  }

  let recordVideo = () => {
    setIsRecording(true);
    let options = {
      quality: "1080p",
      maxDuration: 60,
      mute: false
    };

    cameraRef.current.recordAsync(options).then((recordedVideo) => {
      setVideo(recordedVideo);
      setIsRecording(false);
    });
  };

  let stopRecording = () => {
    setIsRecording(false);
    cameraRef.current.stopRecording();
  };

  if (video) {
    let shareVideo = () => {
      shareAsync(video.uri).then(() => {
        setVideo(undefined);
      });
    };

    let saveVideo = () => {
      MediaLibrary.saveToLibraryAsync(video.uri).then(() => {
        setVideo(undefined);
      });
    };

    return (
      <SafeAreaView style={styles.container}>
        <Video
          style={styles.video}
          source={{uri: video.uri}}
          useNativeControls
          resizeMode='contain'
          isLooping
        />
        <Button title="Share" onPress={shareVideo} />
          {hasMediaLibraryPermission ? <Button title="Save" onPress={saveVideo} /> : undefined}
        <Button title="Discard" onPress={() => setVideo(undefined)} />
      </SafeAreaView>
    );
  }

  return (
    <Camera style={styles.container} ref={cameraRef}>
      <View style={styles.buttonContainer}>
        <Button title={isRecording ? "Stop Recording" : "Record Video"} onPress={isRecording ? stopRecording : recordVideo} />
      </View>
    </Camera>

    // <Camera style={styles.container} ref={cameraRef}>
    //   {/* <Title/> */}
    //   {/* <PlayVideo/> */}
    //   {/* <TakePhoto/> */}

    //   {/* <View style={styles.buttonContainer}>
    //     <Button title='Take Pic' onPress={takePic}/>
    //   </View> */}

    //   {/* <Video
    //     ref={video}
    //     style={styles.video}
    //     source={require("./videofile/dogvideo.mp4")}
    //     useNativeControls
    //     resizeMode='contain'
    //     isLooping
    //     onPlaybackStatusUpdate={setStatusVideo}
    //   />
    //   <View style={styles.buttons}>
    //     <Button title='play from 5s' onPress={() => video.current.playFromPositionAsync(5000)}/>
    //     <Button title={statusVideo.isLooping ? "Set to not loop" : "Set to loop"} onPress={() => video.current.setIsLoopingAsync(!statusVideo.isLooping)}/>
    //   </View> */}
    //   <StatusBar style='auto'/>
    // </Camera>    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    backgroundColor: '#fff',
    alignSelf: 'flex-end',
  },
  preview: {
    flex: 1,
    alignSelf: 'stretch'
  },
  video: {
    flex:1,
    alignSelf: 'stretch'
  },
  // buttons: {
  //   margin: 16
  // }
});
