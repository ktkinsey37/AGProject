import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EditProfilePage from './AGProjectComponents/EditProfilePage';
import EditNameForm from './AGProjectComponents/EditNameForm';
import EditPhoneForm from './AGProjectComponents/EditPhoneForm';
import EditEmailForm from './AGProjectComponents/EditEmailForm';
import EditBioForm from './AGProjectComponents/EditBioForm';
import EditImageForm from './AGProjectComponents/EditImageForm'

const Stack = createNativeStackNavigator();

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
          <Stack.Screen name="EditPhoneForm" component={EditPhoneForm} />
          <Stack.Screen name="EditEmailForm" component={EditEmailForm} />
          <Stack.Screen name="EditBioForm" component={EditBioForm} />
          <Stack.Screen name="EditImageForm" component={EditImageForm} />
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