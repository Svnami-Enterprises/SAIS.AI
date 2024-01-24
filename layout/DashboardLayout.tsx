import React, { ReactNode } from "react";
import { View, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

interface ResponseViewProps {
  children?: ReactNode;
}

const DashboardScreen: React.FC<ResponseViewProps> = ({ children }) => {
  return (
    <>
      {/* <View>Header</View> */}
      <ScrollView>
        <View style={styles.container}>{children}</View>
      </ScrollView>
      {/* <View>Footer</View> */}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minWidth: "100%",
    minHeight:"100%",
    justifyContent:"center",
    alignItems:"center"
  },
  header: {
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  content: {},
  message: {
    fontSize: 16,
    color: "#333",
    marginBottom: 8,
  },
});

export default DashboardScreen;
