import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Animated, Image,  Easing } from 'react-native';
const image = require('../assets/language.png')

const LoadingPage: React.FC = () => {

  const rotationValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const rotateAnimation = Animated.loop(
      Animated.timing(rotationValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true, 
      })
    );

    rotateAnimation.start();

    return () => {
      rotateAnimation.stop();
    };
  }, [rotationValue]);

  const rotateInterpolate = rotationValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const animatedStyle = {
    transform: [{ rotate: rotateInterpolate }],
  };

  return (
    <View style={styles.container}>
      <View style={styles.middleContainer}>
        <Image
          source={image}
          style={styles.middleImage}
          resizeMode="contain"
        />
      </View>
      <View style={styles.bottomContainer}>
        <Animated.Image
          source={require('../assets/loaderIcon.png')}
          style={[styles.bottomImage, animatedStyle]}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minWidth: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleImage: {
    width: 180,
    height: 180,
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomImage: {
    width: 60,
    height: 60,
  },
});

export default LoadingPage;
