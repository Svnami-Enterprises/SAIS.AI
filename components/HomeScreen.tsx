import React, { useEffect, useState } from 'react';
import { View, StyleSheet,Text } from 'react-native';
import Button from './reusable/Button';


type HomeScreenProps = {
    navigation: any
  };
  
const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {

  return (
    <View style={styles.container}>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum blanditiis quo exercitationem numquam ea illo? Itaque cupiditate praesentium maiores culpa.</Text>
        <Button onPress={() => navigation.navigate("Login")} title={'Login'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minWidth:"100%",
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  middleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleImage: {
    width: 50,
    height: 50,
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomImage: {
    width: 40,
    height: 40,
  },
});

export default HomeScreen;
