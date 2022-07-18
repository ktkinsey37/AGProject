import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EditProfilePage from './AGProjectComponents/EditProfilePage';
import EditNameForm from './AGProjectComponents/EditNameForm';

const Stack = createNativeStackNavigator();

function renderNameForm(){
  console.log("render name form")
}

function returnToEditProfilePage(){
  console.log("return to profile page")
}

export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="EditProfilePage"
            component={EditProfilePage}
            options={{ title: 'Edit Profile Page' }}
          />
          <Stack.Screen name="EditNameForm" component={EditNameForm} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// <Stack.Screen name="EditNameForm" component={EditNameForm} />