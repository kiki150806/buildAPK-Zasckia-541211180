import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';


const CustomButton = (props) => {

 const handleLogin = () => {
    console.log('Login button pressed');
 };

 return (
      <Button title= {props.title} color= {props.color}  onPress={props.onPress}  />
 );
};

export default CustomButton;