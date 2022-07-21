import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, Pressable, Text, View, SafeAreaView, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Formik } from 'formik'
// import './EditNameForm.css'

export default EditNameForm = ({ navigation, route }) => {

    let firstName = route.params.firstName
    let lastName = route.params.lastName
    const setFirstName = route.params.setFirstName
    const setLastName = route.params.setLastName

  return (
    <SafeAreaView style={styles.container}>
        <SafeAreaView style={styles.formContainer}>
                <Text>What's your name?</Text>
                
                <Formik
                initialValues={{ firstName: firstName, lastName: lastName }}
                onSubmit={values => {console.log(values)
                    setFirstName(values.firstName)
                    setLastName(values.lastName)
                    navigation.navigate('EditProfilePage')
                }}>

                {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View>
                    <TextInput
                    onChangeText={handleChange('firstName')}
                    onBlur={handleBlur('firstName')}
                    value={values.firstName}
                    style={styles.firstNameBox}
                    />
                    <TextInput
                    onChangeText={handleChange('lastName')}
                    onBlur={handleBlur('lastName')}
                    value={values.lastName}
                />

                        <Pressable onPress={handleSubmit}
                        style={styles.updateButton}>
                            <Text style={styles.updateButtonText}>Update</Text>
                        </Pressable>

                </View>
                )}
            </Formik>


            <StatusBar style="auto" />
        </SafeAreaView>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    flex: .5,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  updateButton: {
    height: 50,
    width: 300,
    color: 'white',
    backgroundColor: 'black',
    justifyContent: 'center',
    alignSelf: 'flex-end'
  },
  updateButtonText: {
    color: 'white',
    fontSize: 16,
    alignSelf: 'center'
  },
  firstNameBox: {
    width: 100,
    borderWidth: 2,
    height: 35
  },
  lastNameBox: {
    width: 100,
    borderWidth: 2,
    height: 35
  },
  nameBoxesContainer: {
    
  }
});