import React, {useState, useEffect} from 'react';
import {  StyleSheet, SafeAreaView } from 'react-native';
import ResponseView from './layout/FullScreenLayout';
import LoadingPage from './screens/LoadingScreen';
import AppNavigator from './components/Navigator';
import LoginPage from './screens/auth/Login';
import RegisterPage from './screens/auth/Register';
import HelloScreen from './screens/HelloScreen';


const App = () => {

  const [isMounted, setIsMounted] = useState(true);
  useEffect(() => {
    setIsMounted(true);

    // return () => {
    //   setIsMounted(false);
    // };
  }, []);


  if (!isMounted) {
    return <LoadingPage />
  }

  return (
    <SafeAreaView style={styles.container}>
        <ResponseView>
          {/* <LoginPage/> */}
          {/* <RegisterPage/> */}
          {/* <LoadingPage/> */}
          <HelloScreen/>
        </ResponseView>
          {/* <AppNavigator/> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop:30,
    alignItems: 'flex-start',
},
});

export default App;
