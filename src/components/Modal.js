import React from 'react';
//import { motion } from 'framer-motion'
import * as Animatable from 'react-native-animatable'; // N
import { StyleSheet, Text, View } from 'react-native'; // N

const Modal = ({ selectedImg, setSelectedImg }) => {

    const handleClick = (e) => {
        if (e.target.classList.contains('backdrop')) {
            setSelectedImg(null)
        }
         
    };

  return (
    <Animatable.View style={styles.backdrop} onClick={handleClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
    >
      <Animatable.Image style={styles.backdropImage} src={selectedImg} alt='enlarged pic' 
        // initial={{ y: "-100vh" }}
        // animate={{ y: 0 }}
      />
    </Animatable.View>
  )
}

const styles = StyleSheet.create({
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  backdropImage: {
    alignSelf: 'center',
    maxWidth: '60%',
    maxHeight: '80%',
    marginVertical: 60,
    shadowColor: '#000',
    shadowOffset: {
      width: 3,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 7,
    borderWidth: 3,
    borderColor: 'white',
  },
});

// .backdrop{
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: rgba(0, 0, 0, 0.5);
// }
// .backdrop img{
//   display: block;
//   max-width: 60%;
//   max-height: 80%;
//   margin: 60px auto;
//   box-shadow: 3px 5px 7px rgba(0, 0, 0, 0.5);
//   border: 3px solid white;
// }

export default Modal;