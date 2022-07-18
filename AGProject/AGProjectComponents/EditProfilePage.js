import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';

// const [firstName, setFirstName] = useState("Micah");

function renderNameForm(){
    navigation.navigate('EditNameForm')
}

export default EditProfilePage = ({ navigation }) => {

    const [firstName, setFirstName] = useState("Micah");
    const [lastName, setLastName] = useState("Smith");

  return (
    <SafeAreaView style={styles.container}>
      <Text>{firstName}</Text>
      <Text>Edit Profile Page</Text>
      <Button
      onPress={() => {console.log("navigating>"); navigation.navigate('EditNameForm', {firstName: {firstName}, lastName: {lastName}})}}
      title="Edit Name"
      color="#841584"
      accessibilityLabel="Learn more about this purple button"/>
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
});
