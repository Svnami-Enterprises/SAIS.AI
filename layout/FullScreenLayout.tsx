import React, { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';
import { Screen } from '../constants';

interface ResponseViewProps {
  children?: ReactNode;
}



const ResponseView: React.FC<ResponseViewProps> = ({  children }) => {
  return (
    <View style={styles.container}>
        {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    width:"100%",
    height:"100%",
  },
  header: {
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  content: {},
  message: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
});

export default ResponseView;
