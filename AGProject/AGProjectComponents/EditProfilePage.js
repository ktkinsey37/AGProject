import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, ImageBackground, View, SafeAreaView, Button, LogBox, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import ImageOverlay from 'react-native-image-overlay';

LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
    "ViewPropTypes will be removed",
  ]);

function renderNameForm(){
    navigation.navigate('EditNameForm')
}

export default EditProfilePage = ({ navigation }) => {

    const [firstName, setFirstName] = useState("Micah");
    const [lastName, setLastName] = useState("Smith");
    const [phoneNumber, setPhoneNumber] = useState("2082065039")
    const [email, setEmail] = useState("micahsmith@gmail.com")
    const [bio, setBio] = useState("Hi, my name is Mica Smith. I am from Mesa but go to school in Salt Lake City. I make this drive all the time and have plenty...")

  return (
    <SafeAreaView style={styles.container}>
    <Text style={styles.pageTitleText}>Edit Profile</Text>



    <Pressable
    onPress={() => { navigation.navigate('EditImageForm', {})}}>
    <Image style={styles.profilePictureEditIcon}
    source={require('../assets/edit.png')}
    />
        <Image
        source={require('../assets/selfie.jpg')}
        style={styles.profilePicture}
        />
    </Pressable>


    <Pressable
        style={styles.profileItemTextContainer}
        onPress={() => { navigation.navigate('EditNameForm', {firstName, lastName, setFirstName, setLastName})}}>
        <View>
            <Text style={styles.titleText}>Name</Text>
            <Text style={styles.profileItemText}>{firstName} {lastName}</Text>
        </View>
        <Image
        style={styles.editProfileChevron}
        source={require('../assets/chevron.png')}
      />
    </Pressable>

    <View style={styles.profileBorderView}>
    </View>

    <Pressable
        style={styles.profileItemTextContainer}
        onPress={() => { navigation.navigate('EditPhoneForm', {phoneNumber, setPhoneNumber})}}>
        <View>
            <Text style={styles.titleText}>Phone</Text>
            <Text style={styles.profileItemText}>{phoneNumber}</Text>
        </View>
        <Image
        style={styles.editProfileChevron}
        source={require('../assets/chevron.png')}
    />
    </Pressable>

    <View style={styles.profileBorderView}>
    </View>

    <Pressable
        style={styles.profileItemTextContainer}
        onPress={() => { navigation.navigate('EditEmailForm', {email, setEmail})}}>
        <View>
            <Text style={styles.titleText}>Email</Text>
            <Text style={styles.profileItemText}>{email}</Text>
        </View>
        <Image
        style={styles.editProfileChevron}
        source={require('../assets/chevron.png')}
    />
    </Pressable>

    <View style={styles.profileBorderView}>
    </View>

    <Pressable
        style={styles.profileBioTextContainer}
        onPress={() => { navigation.navigate('EditBioForm', {bio, setBio})}}>
        <View>
            <Text style={styles.titleText}>Tell us about yourself</Text>
            <Text style={styles.profileItemText}>{bio}</Text>
        </View>
        <Image
        style={styles.editProfileChevron}
        source={require('../assets/chevron.png')}
    />
    </Pressable>

    <View style={styles.profileBorderView}>
    </View>


      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  pageTitleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: "cornflowerblue",
    marginBottom: 20
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    color: "silver",
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    width: 250,
    paddingBottom: 5
  },
  profileItemText: {
    color: "black",
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    paddingBottom: 15,
    width: 250
  },
  profileItemTextContainer: {
    width: 350,
    flexDirection: "row",
    height: 50,
    justifyContent: 'space-between',
  },
  profileBioTextContainer: {
    width: 350,
    flexDirection: "row",
    height: 75,
    justifyContent: 'space-between',
    marginBottom: 15
  },
  profileBorderView:{
    width: 350,
    flexDirection: "row",
    height: 20,
    borderBottomWidth: 2,
    borderBottomColor: "silver",
    marginBottom: 20
  },
  editProfileChevron: {
    width: 40,
    height: 40,
    alignSelf: 'flex-end',
    padding: 5
  },
  profilePicture: {
    height: 170,
    width: 170,
    borderRadius: 90,
    borderWidth: 7,
    borderColor: "cornflowerblue"
  },
  profilePictureEditIcon: {
    width: 50,
    height: 50,
    borderRadius: 90,
    position: 'absolute',
    top: 5,
    right: 5,
    zIndex: 1
  }
});
