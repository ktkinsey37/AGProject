import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function handleChange(event) {
    this.setState({value: event.target.value});
  }

export default EditNameForm = ({ navigation, route }) => {

    let firstName = route.params.firstName

  return (
    <SafeAreaView style={styles.container}>
      <Text>This is the name form!</Text>
      <form onSubmit={() => console.log("hw")}>
      <label>
        <Text>Name: {firstName}</Text>
        
      </label>

    </form>
      <Button
      onPress={() => navigation.navigate('EditProfilePage')}
      title="Update Name!"
      color="#841584"
      accessibilityLabel="Learn more about this purple button"/>
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