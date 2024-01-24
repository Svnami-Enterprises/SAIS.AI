import React, { useState } from 'react';
import { TextInput, TextInputProps, StyleSheet, Text } from 'react-native';

interface InputProps extends TextInputProps {
  name: string;
  placeholder?: string;
  containerStyle?:any
}

const InputText: React.FC<InputProps> = ({ name, placeholder, containerStyle, ...props }) => {
  const [value, setValue] = useState('');
  const [touched, setTouched] = useState(false);
  const [focus, setFocus] = useState(false)

  const showError = touched && !value; // Customize this condition based on your validation logic

  const handleChange = (text: string) => {
    setValue(text);
  };

  const handleBlur = () => {
    setTouched(true);
  };
const handleFocus=()=>{
  setFocus(true)
}
  return (
    <>
      <TextInput
        style={
          [styles.input, 
          showError ? styles.errorInput : styles.doNothing,
          focus ? {borderWidth:3, borderColor:"#000"}: {borderWidth:0}
        ]}
        placeholder={placeholder}
        onChangeText={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        value={value}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{name} is Required</Text>}
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    minWidth:"100%",
    height: 64,
    paddingHorizontal: 10,
    borderRadius: 17,
    backgroundColor:"rgba(217, 217, 217, 0.37)",
    fontSize:24,
    marginVertical:10
  },

  errorInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
  },
  doNothing: { padding: 1 },
});

export default InputText;
