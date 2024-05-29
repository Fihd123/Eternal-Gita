import {View, Text, Image, StyleSheet, ImageBackground} from 'react-native';
import React from 'react';
import img1 from '../assets/splash.jpg';

const Splash = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: 'https://th.bing.com/th/id/R.d5090c9b5187c32c66c7fb4547ec9ca2?rik=BuYPzZOzpGXmQg&riu=http%3a%2f%2fwww.bhagavad-gita.us%2fwp-content%2fuploads%2f2012%2f09%2fgita-104.jpg&ehk=xIgp5JOBufzbVhDn%2fkzOWv0cjWBt8ZC9Zm0WyUzm5Zw%3d&risl=&pid=ImgRaw&r=0',
        }}
        style={styles.backgroundImage}
        resizeMode="cover"></ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.9,
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    padding: 20,
    borderRadius: 10,
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Splash;
