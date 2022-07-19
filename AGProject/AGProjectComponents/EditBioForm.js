import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, Text, View, SafeAreaView, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Formik } from 'formik'

function handleChange(event) {
    this.setState({value: event.target.value});
  }

export default EditBioForm = ({ navigation, route }) => {

    let bio = route.params.bio
    const setBio = route.params.setBio

  return (
    <SafeAreaView style={styles.container}>

      <Text>This is the bio form!</Text>

        <Text>What type of passenger are you?</Text>
        
        <Formik
        initialValues={{ bio: bio }}
        onSubmit={values => {console.log(values)
               setBio(values.bio)
               navigation.navigate('EditProfilePage')
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <TextInput
              onChangeText={handleChange('bio')}
              onBlur={handleBlur('bio')}
              value={values.bio}
            />
            <Button onPress={handleSubmit} title="Update" />
          </View>
        )}
      </Formik>


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

// <input type="text" value={route.params.firstName} onChange={handleChange} />
// <input type="submit" value="Submit" />



<Button
onPress={() => {
  setFirstName(e.target.firstName)
  setLastName()
  navigation.navigate('EditProfilePage')}}
title="Update Name!"
color="#841584"
accessibilityLabel="Learn more about this purple button"/>