import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, Text, View, SafeAreaView, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Formik } from 'formik'

function handleChange(event) {
    this.setState({value: event.target.value});
  }

export default EditPhoneForm = ({ navigation, route }) => {

    let phoneNumber = route.params.phoneNumber
    const setPhoneNumber = route.params.setPhoneNumber

  return (
    <SafeAreaView style={styles.container}>

        <Text>Phone: {phoneNumber}</Text>
        
        <Formik
        initialValues={{ phoneNumber: phoneNumber }}
        onSubmit={values => {console.log(values)
               setPhoneNumber(values.phoneNumber)
               navigation.navigate('EditProfilePage')
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <TextInput
              onChangeText={handleChange('phoneNumber')}
              onBlur={handleBlur('phoneNumber')}
              value={values.phoneNumber}
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