import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, Pressable, Text, View, SafeAreaView, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Formik } from 'formik'

export default EditEmailForm = ({ navigation, route }) => {

    let email = route.params.email
    const setEmail = route.params.setEmail

  return (
    <SafeAreaView style={styles.container}>

    <Pressable
        style={styles.backArrow}
        onPress={() => { navigation.navigate('EditProfilePage')}}>
        <Image
        style={styles.backArrow}
        source={require('../assets/backArrow.png')}
    />
    </Pressable>

    <Text style={styles.formTitleText}>What's your email?</Text>
    
    <Formik style={styles.form}
    initialValues={{ email: email }}
    onSubmit={values => {console.log(values)
        setEmail(values.email)
        navigation.navigate('EditProfilePage')
    }}>

    {({ handleChange, handleBlur, handleSubmit, values }) => (
    <View>

        <View style={styles.emailBoxContainer}>
            <Text style={styles.emaillabel}>Your email address</Text>
        </View>
        <View style={styles.emailBoxContainer}>

            <TextInput
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            style={styles.emailBox}
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
    backArrow: {
        position: 'absolute',
        top: 5,
        right: 185,
        width: 30,
        height: 30
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
    emailBox: {
      paddingBottom: 10,
      paddingHorizontal: 10,
      fontSize: 20,
      fontWeight: 'bold',
      width: 320,
      borderBottomWidth: 2,
      borderLeftWidth: 2,
      borderRightWidth: 2,
      height: 40,
      borderColor: 'silver',
    },
    emailBoxContainer: {
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
    emaillabel: {
      paddingTop: 15,
      paddingHorizontal: 10,
      color: 'silver',
      fontSize: 16,
      fontWeight: 'bold',
      width: 320,
      borderTopWidth: 2,
      borderLeftWidth: 2,
      borderRightWidth: 2,
      height: 40,
      borderColor: 'silver'
    },
    emailTitleContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignSelf: 'flex-start',
    },
});