import React from 'react';
import { TouchableOpacity, Text, Image, TouchableOpacityProps, StyleSheet, StyleProp, ViewStyle, ImageSourcePropType } from 'react-native';
import { Colors } from '../../constants';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  bgColor?: string;
  icon?: ImageSourcePropType;
  containerStyle?: StyleProp<ViewStyle>;
}

const Button: React.FC<ButtonProps> = ({ title, bgColor = Colors.primary, icon, containerStyle, ...props }) => {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: bgColor }, containerStyle as ViewStyle]} {...props}>
      <Text style={styles.buttonText}>{title}</Text>
      {icon && <Image source={icon} style={styles.icon} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    minWidth:"100%", 
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20, 
    borderRadius: 8,
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom:10,
    height:64
  },
  buttonText: {
    color: Colors.white,
    fontWeight: "normal",
    textAlign: "center",
    fontSize: 22,
  },
  icon: {
    width: 30,
    height: 30,
    marginLeft: 8,
  },
});

export default Button;
