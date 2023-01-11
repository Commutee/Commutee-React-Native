import {
  Alert,
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Textinput from '../../components/textInput';
import RoundedButton from '../../components/buttons/RoundedButton';
import {auth} from '../../firebase/Firebase';

const RegisterScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');

  function checkFields() {
    if (
      email === '' ||
      username === '' ||
      password === '' ||
      repassword === ''
    ) {
      Alert.alert(
        'Cannot be left blank',
        "All those field's cannot be left blank",
      );
      return false;
    } else if (password !== repassword) {
      Alert.alert(
        'Passwords dont match',
        'Please make sure that you entered the correct password',
      );
      return false;
    }
    return true;
  }

  function registerUser() {
    if (checkFields()) {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => {
          if (user) {
            user.user.updateProfile({
              displayName: username,
              photoURL:
                'https://firebasestorage.googleapis.com/v0/b/commutee-app-32470.appspot.com/o/user.png?alt=media&token=84580bcc-e535-4e5b-a9b1-9e8acf19f2a6',
            });
          }
        })
        .catch(error => {
          Alert.alert('Registration Error', error.message);
        });
    }
  }

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.Image}
        />
        <Textinput
          placeholder="Enter your Username"
          autoFocus
          value={username}
          onChangeText={(t: string) => setUsername(t)}
        />
        <View style={{marginVertical: 6}} />
        <Textinput
          placeholder="Enter your E-mail"
          value={email}
          onChangeText={(t: string) => setEmail(t)}
        />
        <View style={{marginVertical: 6}} />
        <Textinput
          placeholder="Enter your Password"
          secureTextEntry
          value={password}
          onChangeText={(t: string) => setPassword(t)}
        />
        <View style={{marginVertical: 6}} />
        <Textinput
          placeholder="Re-type Your Password"
          secureTextEntry
          value={repassword}
          onChangeText={(t: string) => setRepassword(t)}
          onSubmitEditing={registerUser}
        />
        <View style={{marginVertical: 6}} />
        <RoundedButton title={'Register'} onSubmitEditing={registerUser} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
  },
  Image: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 13,
  },
  KeyboardAvoidingView: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 19,
  },
  ViewInner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  ViewLine: {
    width: 160,
    height: 2,
    borderWidth: 1,
  },
  Textf: {
    color: '#f3622e',
    fontWeight: '500',
  },
  ViewFooter: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    margin: 15,
  },
});
