import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

const CustomTextInput = (props) => {

  const [email, setEmail] = useState('')

 return (
    
      <TextInput
        style={styles.input}
        placeholder= {props.placeholder}
        value={email}
        onChangeText={setEmail}
      />

 );
};

const styles = StyleSheet.create({
 input: {
    height: 40,
    borderColor: 'grey',
    borderWidth: 1,
    marginBottom: 10,
    width: '80%',
    paddingLeft: 10,
    borderRadius: 15,
 },
});

export default CustomTextInput;