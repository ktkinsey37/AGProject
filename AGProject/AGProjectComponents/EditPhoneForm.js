import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, Pressable, Text, View, SafeAreaView, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Formik } from 'formik'

export default EditPhoneForm = ({ navigation, route }) => {

    let phoneNumber = route.params.phoneNumber
    const setPhoneNumber = route.params.setPhoneNumber

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

    <Text style={styles.formTitleText}>What's your phone number?</Text>
    
    <Formik style={styles.form}
    initialValues={{ phoneNumber: phoneNumber }}
    onSubmit={values => {console.log(values)
        setPhoneNumber(values.phoneNumber)
        navigation.navigate('EditProfilePage')
    }}>

    {({ handleChange, handleBlur, handleSubmit, values }) => (
    <View>

        <View style={styles.phoneBoxContainer}>
            <Text style={styles.phonelabel}>Your phone number</Text>
        </View>
        <View style={styles.phoneBoxContainer}>

            <TextInput
            onChangeText={handleChange('phoneNumber')}
            onBlur={handleBlur('phoneNumber')}
            value={values.phoneNumber}
            style={styles.phoneBox}
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
  backArrow: {
    position: 'absolute',
    top: 5,
    right: 185,
    width: 30,
    height: 30
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
  phoneBox: {
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
  phoneBoxContainer: {
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
  phonelabel: {
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
  phoneTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'flex-start',
  },
});