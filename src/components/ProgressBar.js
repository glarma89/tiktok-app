import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import useStorage from '../hooks/useStorage'
//import { motion } from 'framer-motion'
import * as Animatable from 'react-native-animatable';


const ProgressBar = ({ file, setFile }) => {
    const { url, progress } = useStorage(file)
    console.log(progress, url);

    useEffect(() => {
      if (url) {
        setFile(null);
      }
    }, [url, setFile])
    
    return (
      <Animatable.View style={styles.progressBar} 
        //style={{ width: progress + '%' }}
        initial={{ width: 0 }}
        animate={{ width: progress + '%'  }}
      ></Animatable.View>
    )
  }

  const styles = StyleSheet.create({
    progressBar: {
      height: 5,
      backgroundColor: 'red',
      marginTop: 20
    },
  });

  export default ProgressBar;