import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
const user = auth().currentUser;

GoogleSignin.configure({
  webClientId:
    '118608922388-dim2om8u5kglc9tnokvftlafl51f81s0.apps.googleusercontent.com',
});

export {auth, user, GoogleSignin};
