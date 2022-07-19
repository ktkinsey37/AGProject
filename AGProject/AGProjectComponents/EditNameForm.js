import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, Text, View, SafeAreaView, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Formik } from 'formik'

function handleChange(event) {
    this.setState({value: event.target.value});
  }

export default EditNameForm = ({ navigation, route }) => {

    let firstName = route.params.firstName
    let lastName = route.params.lastName
    const setFirstName = route.params.setFirstName
    const setLastName = route.params.setLastName

  return (
    <SafeAreaView style={styles.container}>

      <Text>This is the name form!</Text>

        <Text>Name: {firstName} {lastName}</Text>
        
        <Formik
        initialValues={{ firstName: firstName, lastName: lastName }}
        onSubmit={values => {console.log(values)
               setFirstName(values.firstName)
               setLastName(values.lastName)
               navigation.navigate('EditProfilePage')
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <TextInput
              onChangeText={handleChange('firstName')}
              onBlur={handleBlur('firstName')}
              value={values.firstName}
            />
            <TextInput
            onChangeText={handleChange('lastName')}
            onBlur={handleBlur('lastName')}
            value={values.lastName}
          />
            <Button onPress={handleSubmit} title="Submit" />
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