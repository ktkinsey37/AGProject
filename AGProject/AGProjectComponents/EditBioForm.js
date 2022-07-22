import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, Pressable, Text, View, SafeAreaView, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Formik } from 'formik'

export default EditBioForm = ({ navigation, route }) => {

    let bio = route.params.bio
    const setBio = route.params.setBio

  return (
    <SafeAreaView style={styles.container}>


    <Text style={styles.formTitleText}>What type of passenger are you?</Text>
    
    <Formik style={styles.form}
    initialValues={{ bio: bio }}
    onSubmit={values => {console.log(values)
        setBio(values.bio)
        navigation.navigate('EditProfilePage')
    }}>

    {({ handleChange, handleBlur, handleSubmit, values }) => (
    <View>

        <View style={styles.bioBoxContainer}>

            <TextInput
            multiline={true}
            placeholder='Write a little bit about yourself. Do you like chatting? Are you a smoker? Do you bring pets with you? Etc.'
            onChangeText={handleChange('bio')}
            onBlur={handleBlur('bio')}
            style={styles.bioBox}
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
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
    bioBox: {
      textAlignVertical: 'top',
      paddingHorizontal: 10,
      fontSize: 20,
      fontWeight: 'bold',
      width: 320,
      borderWidth: 2,
      height: 240,
      borderColor: 'silver',
    },
    bioBoxContainer: {
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
    bioTitleContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignSelf: 'flex-start',
    },
});