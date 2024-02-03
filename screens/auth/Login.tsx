import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import Button from "../../components/reusable/Button";
import InputText from "../../components/reusable/TextInput";
import { Link } from "@react-navigation/native";
const GoogleIcon = require("../../assets/googleIcon.png");
const AppleIcon = require("../../assets/appleIcon.png");
const image = require("../../assets/language.png");

const LoginPage: React.FC = () => {

  
  const handleGoogleLogin = () => {
    console.log("Google login pressed");
  };

  const handleAppleLogin = () => {
    console.log("Apple login pressed");
  };

  const handleLocalLogin = () => {
    console.log("Local login pressed");
  };

  return (
        <View style={styles.mainContainer}>
          <View style={styles.middleContainer}>
            <Image
              source={image}
              style={styles.logoContainer}
              resizeMode="contain"
            />
          </View>

          <View>
            <InputText
              placeholder="Email"
              name="email"
              containerStyle={styles.inputTextStyle}
            />
            <InputText placeholder="Password" name="password"  containerStyle={styles.inputTextStyle} />
            <Text style={[styles.agree, {textAlign:"right", fontSize:18, paddingTop:20}]}>Forgot password</Text>
          </View>

          <View style={styles.btnContainer}>
            <Button
              title={"Submit"}
              bgColor="#000"
              onPress={handleLocalLogin}
            />
            <Button
              title="Continue with Google"
              bgColor="#4285F4"
              icon={GoogleIcon}
              onPress={handleGoogleLogin}
            />
            <Button
              title="Continue with Apple"
              bgColor="#211F1F"
              icon={AppleIcon}
              onPress={handleAppleLogin}
            />
          </View>
          <Text style={[styles.agree, {marginVertical:15 }]}>
            Do you need to ?{" "}
            <Link style={{ fontWeight: "400", }} to={"Register"}>
              Sign up
            </Link>
          </Text>
        </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent:"center",
    alignItems:"center",
    paddingHorizontal:14,
  },

  mainContainer: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 45,
    margin: 0,
  },

  inputTextStyle: {
    backgroundColor: "rgba(0,0,0,0.5)",
    marginBottom:10
  },
  logoContainer: {
    flex: 1,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
  },

  btnContainer: {
    flex: 1,
    minWidth: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  middleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height:80,
    width:80
  },
  middleImage: {
    width: 24,
    height: 24,
  },
  bottomContainer: {
    position: "absolute",
    bottom: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomImage: {
    width: 40,
    height: 40,
  },
  agree: {
    color: "rgba(0, 0, 0, 0.50)",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "400",
  },
});

export default LoginPage;
