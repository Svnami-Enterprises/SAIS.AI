import React, { useState } from "react";
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
import Checkbox from "../../components/reusable/checkbox";
const GoogleIcon = require("../../assets/googleIcon.png");
const AppleIcon = require("../../assets/appleIcon.png");
const image = require("../../assets/language.png");

const RegisterPage: React.FC = () => {

  const [rememberMe, setRememberMe] =  useState<String>('checked')

  const handleCheckboxToggle = (isChecked: boolean) =>  {
    setRememberMe(isChecked ? 'checked' : 'unchecked')
  };

  const handleGoogleRegister = () => {
    console.log("Google Register pressed");
  };

  const handleAppleRegister = () => {
    console.log("Apple Register pressed");
  };

  const handleLocalRegister = () => {
    console.log("Local Register pressed");
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
            <InputText 
              placeholder="Password" 
              name="password"  
              containerStyle={styles.inputTextStyle}
             />
                <InputText 
              placeholder="Re-type Password" 
              name="confirmPassword"  
              containerStyle={styles.inputTextStyle}
             />
            <Text style={[styles.agree, {textAlign:"right"}]}>
              <Checkbox onToggle={handleCheckboxToggle} title="Remember me"/>
            </Text>
            <Text style={[styles.agree, {textAlign:"center", fontSize:18, paddingBottom:18}]}>
              <Checkbox onToggle={handleCheckboxToggle} title="I accept terms and conditions"/> 
            </Text>
          </View>

          <View style={styles.btnContainer}>
            <Button
              title={"Submit"}
              bgColor="#000"
              onPress={handleLocalRegister}
            />
            <Button
              title="Continue with Google"
              bgColor="#4285F4"
              icon={GoogleIcon}
              onPress={handleGoogleRegister}
            />
            <Button
              title="Continue with Apple"
              bgColor="#211F1F"
              icon={AppleIcon}
              onPress={handleAppleRegister}
            />
          </View>
          <Text style={[styles.agree, {marginVertical:20 }]}>
            Already have an account ?{" "}
            <Link style={{ fontWeight: "400", }} to={"Register"}>
              Login
            </Link>
          </Text>
        </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 45,
    margin: 0,
    width:"100%",
    height:"100%"
  },

  inputTextStyle: {
    backgroundColor: "rgba(0,0,0,0.5)",
    height:50,
    fontSize:20
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
    height:100,
    width:1
  },
  middleImage: {
    width: 24,
    height: "auto",
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
    paddingVertical:10
  },
});

export default RegisterPage;
