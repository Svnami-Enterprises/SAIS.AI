import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  Dimensions,
  ImageBackground,
  Button,
} from "react-native";

import packageJson from "../package.json";
import { Screen } from "../constants";

const { width, height } = Dimensions.get("window");

const HelloScreen: React.FC = () => {
  console.log(Screen)
  return (
    <View style={styles.container}>
      <View  style={styles.headerContainer}>
        <View style={styles.skipText}>
          <Text style={{fontSize:20}}>Skip</Text>
          <Image
              style={{width:80, height:80}}
              source={require("../assets/language.png")}
              resizeMode="contain"
            />
          </View>
       <View  style={[styles.headerImageContainer, {position:"relative"}]}>
          <Image
              style={{width:340, height:350}}
              source={require("../assets/listen.png")}
              resizeMode="stretch"
            />
              <Image
              style={{width:80, height:80, position:"absolute", top:50, right:10}}
              source={require("../assets/play.png")}
              resizeMode="contain"/>
       </View>
        
       
      </View>

        <Text style={styles.hi}>Say! hello to the world in any language</Text>
      <View style={styles.middleContainer}>
        <Image
          source={require("../assets/helloImage.png")}
          style={styles.middleImage}
          resizeMode="contain"
        />
      </View>

      <View style={styles.bottomContainer}>
        <Text>
          AI powered converter listen in audio build your conversations where
          language isn't a boundary
        </Text>
        <Text>
          {packageJson.name} v{packageJson.version}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  headerContainer: {
    flex: 1,
    flexDirection:'row',
    justifyContent:"space-between",
    width: '100%',
    
  },
  headerImageContainer:{

  },

skipText:{
  flex:1,
  justifyContent:"space-between",
    textAlign:'center', 
    alignContent:"center", 
    paddingHorizontal:10, 
    paddingTop:40,
    fontSize:24
      
  },
  skipContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  listenContainer: {
    flex: 1,
    minWidth: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  listenImage: {
    width: 80,
    height: 80,
  },

  middleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop:30
  },
  middleImage: {

  },

  hi:{
    fontSize:20, 
    width:250, 
    fontWeight:"bold", 
    paddingHorizontal:20,
    marginTop:25
  },

  bottomContainer: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingHorizontal:20
  },
});

export default HelloScreen;
