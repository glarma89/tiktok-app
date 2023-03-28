import React from 'react'
import useFirestore from '../hooks/useFirestore' 
//import { motion } from 'framer-motion'
import * as Animatable from 'react-native-animatable'; // N
import { StyleSheet, Text, View } from 'react-native'; // N


const ImageGrid = ({ setSelectedImg }) => {
    const { docs } = useFirestore('images');
    console.log(docs);

    return (
      <View style={styles.imgGrid}> 
        { docs && docs.map(doc => (
            <Animatable.View style={styles.imgWrap} key={doc.id}
                layout
                whileHover={{ opacity: 1 }}
                onClick={() => setSelectedImg(doc.url)}
            >
                <Animatable.Image style={styles.img} src={doc.url} 
                    //alt='uploaded pic'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                />
            </Animatable.View>
        )) }
      </View>
    )
  }

  const styles = StyleSheet.create({
    imgGrid: {
      margin: 20,
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    imgWrap: {
      overflow: 'hidden',
      height: 0,
      paddingTop: '50%',
      position: 'relative',
      opacity: 0.8,
    },
    img: {
      minWidth: '100%',
      minHeight: '100%',
      maxWidth: '150%',
      position: 'absolute',
      top: 0,
      left: 0,
    },
  });

  export default ImageGrid;

  // .img-grid{
  //   margin: 20px auto;
  //   display: grid;
  //   grid-template-columns: 1fr 1fr 1fr;
  //   grid-gap: 40px;
  // }
  // .img-wrap{
  //   overflow: hidden;
  //   height: 0;
  //   padding: 50% 0;
  //   position: relative;
  //   opacity: 0.8;
  // }
  // .img-wrap img{
  //   min-width: 100%;
  //   min-height: 100%;
  //   max-width: 150%;
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  // }