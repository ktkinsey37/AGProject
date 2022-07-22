import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, Text, View, SafeAreaView, Button, Pressable, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default EditImageForm = ({ navigation, route }) => {


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

    <Text style={styles.formTitleText}>Upload a photo of yourself:</Text>
    



    <Image
    source={require("../assets/selfie2.jpg")}
    style={styles.uploadPicture}
    />




    <Pressable onPress={() => { navigation.navigate('EditProfilePage')}}
    style={styles.updateButton}>
        <Text style={styles.updateButtonText}>Update</Text>
    </Pressable>



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
  uploadPicture: {
    width: 320,
    height: 320
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
    marginTop: 20,
    height: 70,
    width: 320,
    color: 'white',
    backgroundColor: 'black',
    justifyContent: 'center',
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
    width: 370,
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