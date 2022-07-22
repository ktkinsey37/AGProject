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
        <View>
                <Text style={styles.formTitleText}>What's your name?</Text>
                
                <Formik style={styles.form}
                initialValues={{ firstName: firstName, lastName: lastName }}
                onSubmit={values => {console.log(values)
                    setFirstName(values.firstName)
                    setLastName(values.lastName)
                    navigation.navigate('EditProfilePage')
                }}>

                {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View>

                    <View style={styles.nameBoxesContainer}>
                        <Text style={styles.firstNamelabel}>First Name</Text>
                        <Text style={styles.lastNamelabel}>Last Name</Text>
                    </View>
                    <View style={styles.nameBoxesContainer}>

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
                        style={styles.lastNameBox}
                        />
                    </View>


                        <Pressable onPress={handleSubmit}
                        style={styles.updateButton}>
                            <Text style={styles.updateButtonText}>Update</Text>
                        </Pressable>

                </View>
                )}
            </Formik>


            <StatusBar style="auto" />
        </View>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  formContainer: {
    flex: .6,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  updateButton: {
    marginTop: 200,
    height: 70,
    width: 320,
    color: 'white',
    backgroundColor: 'black',
    justifyContent: 'center',
    alignSelf: 'flex-end'
  },
  updateButtonText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16,
    alignSelf: 'center',
  },
  firstNameBox: {
    paddingBottom: 10,
    paddingHorizontal: 10,
    fontSize: 20,
    fontWeight: 'bold',
    width: 150,
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    height: 40,
    borderColor: 'silver',
  },
  lastNameBox: {
    paddingBottom: 10,
    paddingHorizontal: 10,
    fontSize: 20,
    fontWeight: 'bold',
    width: 150,
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    height: 40,
    borderColor: 'silver'
  },
  nameBoxesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  formTitleText: {
    width: 320,
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 75,
    marginBottom: 50
  },
  firstNamelabel: {
    paddingTop: 15,
    paddingHorizontal: 10,
    color: 'silver',
    fontSize: 16,
    fontWeight: 'bold',
    width: 150,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    height: 40,
    borderColor: 'silver'
  },
  lastNamelabel: {
    paddingTop: 15,
    paddingHorizontal: 10,
    color: 'silver',
    fontSize: 16,
    fontWeight: 'bold',
    width: 150,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    height: 40,
    borderColor: 'silver'
  },
  nameTitlesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'flex-start',
  },
});