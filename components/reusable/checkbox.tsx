 import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface RememberMeCheckboxProps {
  onToggle: (isChecked: boolean) => void;
  title:string
}

const Checkbox: React.FC<RememberMeCheckboxProps> = ({ onToggle, title }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggleCheckbox = () => {
    setIsChecked(!isChecked);
    onToggle(!isChecked);
  };

  return (
    <TouchableOpacity
      style={styles.checkboxContainer}
      onPress={handleToggleCheckbox}
    >
      <View style={styles.checkbox}>
        {isChecked && <View style={styles.checkedIndicator} />}
      </View>
      <Text style={styles.label}>{title}</Text>
    </TouchableOpacity>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#3498db',
    borderRadius: 5,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkedIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#3498db',
  },
  label: {
    fontSize: 16,
  },
});

export default Checkbox;
