import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';
import CustomButton from './CustomButton';
import CustomImage from './CustomImage';
import CustomText from './CustomText';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const [jumlah, setJumlah] = useState(0);

  const handleLike = () => {
    setJumlah(jumlah + 1);
  };

  const handleDislike = () => {
    setJumlah(jumlah - 1);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <CustomImage
          style={styles.avatar}
          source={require('./assets/profile.jpg')}
        />
        <Text style={styles.title}>Zasckia Nayla Sahara</Text>
        <Text style={styles.subTitle}>
          Saya lahir di Jakarta.
          Saya sekolah di SMK Telkom Purwokerto jurusan RPL.
          Saya anak pertama dari dua bersaudara.
        </Text>
        <CustomButton title="Contact Me" color="#8E713F" />
        <Text style={styles.projectTitle}>My Recent Project</Text>
        <CustomImage
          style={styles.projectPic}
          source={require('./assets/porto1.jpg')}
        />
        <CustomText project1="Photoshop Project 1" />
        <CustomImage
          style={styles.projecfoto2}
          source={require('./assets/porto2.jpg')}
        />
        <CustomText project2="Photoshop Project 2" />
        <View style={styles.buttonRow}>
          <CustomButton
            title="Likes"
            color={"#8E713F"}
            onPress={handleLike}
          />
          <View style={styles.buttonMargin} />
          <CustomButton
            title="Dislikes"
            color={"#8E713F"}
            onPress={handleDislike}
          />
        </View>
        <Text style={styles.likesText}>Likes: {jumlah}</Text>
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
});
