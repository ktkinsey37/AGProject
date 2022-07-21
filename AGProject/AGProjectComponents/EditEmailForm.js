import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, Text, View, SafeAreaView, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Formik } from 'formik'

export default EditEmailForm = ({ navigation, route }) => {

    let email = route.params.email
    const setEmail = route.params.setEmail

  return (
    <SafeAreaView style={styles.container}>

        <Text>Email:</Text>
        
        <Formik
        initialValues={{ email: email }}
        onSubmit={values => {console.log(values)
               setEmail(values.email)
               navigation.navigate('EditProfilePage')
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <TextInput
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
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


<Button
onPress={() => {
  setFirstName(e.target.firstName)
  setLastName()
  navigation.navigate('EditProfilePage')}}
title="Update Name!"
color="#841584"
accessibilityLabel="Learn more about this purple button"/>