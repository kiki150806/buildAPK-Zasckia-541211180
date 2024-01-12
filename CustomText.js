import React from 'react';
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';

const CustomText = (props) => {
  const { container, projectText, projectContainer } = styles; // Destructure styles

  return (
    <ScrollView>
      <View style={container}>
        <View style={projectContainer}>
          <Text style={projectText}>{props.project1}</Text>
          <Text style={projectText}>{props.project2}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#b39a66",
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 7
  },
  subTitle: {
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
    textAlign: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 300,
    height: 400,
    borderRadius: 300,
  },
  projectTitle: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 20,
  },
  projectPic: {
    width: 300,
    height: 300,
    rectangle: 300,
    marginTop: 20,
    borderRadius: 20,
  },
  projecfoto2: {
    width: 300,
    height: 300,
    rectangle: 300,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  buttonMargin: {
    width: 20,
  },
  likesText: {
    color: 'white',
    marginTop: 20,
  },
  projectText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  projectContainer: {
    width: '100%', // Menambahkan lebar 100%
    flexDirection: 'row', // Mengatur agar teks sejajar
    justifyContent: 'space-between', // Mengatur jarak antara teks
  },
});

export default CustomText;
