import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View, SafeAreaView, Button, LogBox, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';

LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
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
    <Text>Edit Profile Page</Text>

    <Pressable
        style={styles.profileItemTextContainer}
        onPress={() => {console.log("navigating>"); navigation.navigate('EditNameForm', {firstName, lastName, setFirstName, setLastName})}}>
        <View>
            <Text style={styles.titleText}>Name</Text>
            <Text style={styles.profileItemText}>{firstName} {lastName}</Text>
        </View>
        <Image
        style={styles.editProfileChevron}
        source={require('../assets/chevron.png')}
      />
    </Pressable>

    <Pressable
        style={styles.profileItemTextContainer}
        onPress={() => {console.log("navigating>"); navigation.navigate('EditPhoneForm', {phoneNumber, setPhoneNumber})}}>
        <View>
            <Text style={styles.titleText}>Phone</Text>
            <Text style={styles.profileItemText}>{phoneNumber}</Text>
        </View>
        <Image
        style={styles.editProfileChevron}
        source={require('../assets/chevron.png')}
    />
    </Pressable>

    <Pressable
        style={styles.profileItemTextContainer}
        onPress={() => {console.log("navigating>"); navigation.navigate('EditEmailForm', {email, setEmail})}}>
        <View>
            <Text style={styles.titleText}>Email</Text>
            <Text style={styles.profileItemText}>{email}</Text>
        </View>
        <Image
        style={styles.editProfileChevron}
        source={require('../assets/chevron.png')}
    />
    </Pressable>

    <Pressable
        style={styles.profileItemTextContainer}
        onPress={() => {console.log("navigating>"); navigation.navigate('EditBioForm', {bio, setBio})}}>
        <View>
            <Text style={styles.titleText}>Tell us about yourself</Text>
            <Text style={styles.profileItemText}>{bio}</Text>
        </View>
        <Image
        style={styles.editProfileChevron}
        source={require('../assets/chevron.png')}
    />
    </Pressable>


      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
    padding: 5
  },
  profileItemText: {
    color: "black",
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    padding: 5,
    width: 250
  },
  profileItemTextContainer: {
    width: 350,
    flexDirection: "row",
    height: 50,
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    borderBottomColor: "silver",
    marginBottom: 30
  },
  editProfileChevron: {
    width: 40,
    height: 40,
    alignSelf: 'flex-end',
    padding: 5
  }
});
