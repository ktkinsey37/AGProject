import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function renderNameForm(){
  console.log("render name form")
}

export default function EditEmailForm() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Edit Profile</Text>
      <Button
      onPress={() => navigation.navigate('EditProfilePage')}
      title="Learn More"
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
