import {
  Alert,
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Textinput from '../../components/textInput';

import {auth, GoogleSignin} from '../../firebase/Firebase';
import RoundedButton from '../../components/buttons/RoundedButton';

const LoginScreen = ({navigation}: any) => {
  useEffect(() => {
    const unsubcribe = auth().onAuthStateChanged(user => {
      if (user) {
        navigation.replace('main');
      }
    });
    return unsubcribe;
  }, []);

  async function GoogleAuth() {
    try {
      await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      }).catch(error => {
        Alert.alert('Error', error.message);
      });
      const {idToken} = await GoogleSignin.signIn();

      const googleCreds = auth.GoogleAuthProvider.credential(idToken);
      return auth()
        .signInWithCredential(googleCreds)
        .catch(error => {
          Alert.alert('Login failed. Please try again', error.message);
        });
    } catch (error) {}
  }

  function signIn() {
    if (email != '' && password != '') {
      auth()
        .signInWithEmailAndPassword(email, password)
        .catch(error => {
          Alert.alert(
            'Login failed. Please try again.',
            error.message.replace(/\[.*?\]/g, ''),
          );
        });
    } else {
      Alert.alert(
        'Fields are empty.',
        'Username or password feild is Empty. Please provide values to proceed',
      );
    }
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.Image}
        />
        <Textinput
          placeholder="Enter your E-mail"
          value={email}
          onChangeText={(text: string) => setEmail(text)}
        />
        <View style={{marginVertical: 6}} />
        <Textinput
          placeholder="Enter your Password"
          autoFocu
          value={password}
          secureTextEntry
          onChangeText={(text: string) => setPassword(text)}
        />
        <View style={{marginVertical: 6}} />
        <RoundedButton title={'Login'} onPress={signIn} />
        <View style={{marginVertical: 20}}>
          <View style={styles.ViewInner}>
            <View style={styles.ViewLine} />
            <Text
              style={{
                fontSize: 15,
                fontWeight: '900',
                color: '#000',
                marginHorizontal: 10,
              }}>
              OR
            </Text>
            <View style={styles.ViewLine} />
          </View>
        </View>
        <RoundedButton title={'Continue with Google'} onPress={GoogleAuth} />
      </KeyboardAvoidingView>
      <View style={styles.ViewFooter}>
        <Text>
          Don't have and account?{' '}
          <Text
            style={styles.Textf}
            onPress={() => navigation.navigate('register')}>
            Sign up
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

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
