import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import CustomTextInput from './CustomTextInput';
import CustomButton from './CustomButton';
import { NavigationContainer } from '@react-navigation/native';

const App = ({navigation}) => {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');

 const handleLogin = () => {
    console.log('Login button pressed');
 };

 return (
    <View style={styles.container}>
      <Image 
      style={styles.logo}
      source={require('./assets/logo.jpg')} />  
      <CustomTextInput placeholder="Email"/>  
      <CustomTextInput placeholder="Username"/>  
      <CustomTextInput placeholder="Password"/>  
      <Text style={{ textAlign: 'right', marginTop: 15, marginBottom: 15, color: '#2196F3' }}>Forget Password?</Text>
      <CustomButton title="Register" color="#442717"
      onPress={() => navigation.navigate('Porto')}/>
      <View style={{ height: 10 }} />
      <CustomButton title="Login" color="#442717" style={{ marginBottom: 10 }} 
      onPress={() => navigation.navigate('Login')}/>
    </View>
 );
};

const styles = StyleSheet.create({
 logo: {
    width: 200,
    height: 200,
    borderRadius: 300,
    alignItems: 'center',
    justifyContent: 'center',
 },
 container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F0EA',
 },
});

export default App;