import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import React from 'react';
import Textinput from '../../components/textInput';
import {user} from '../../firebase/Firebase';
const Home = () => {
  return (
    <SafeAreaView style={styles.SafeareaView}>
      <ScrollView style={styles.View1}>
        <View style={styles.View2}>
          <Text style={styles.Text1}>
            Hi{' '}
            <Text style={{color: '#000', fontWeight: 'bold'}}>
              {user?.displayName}
            </Text>
            ,
          </Text>
          <Image source={{uri: user?.photoURL!}} style={styles.Image} />
        </View>
        <Textinput placeholder="Where to go next ?" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  SafeareaView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  View1: {
    marginHorizontal: 10,
  },
  View2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  Image: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderRadius: 100,
    borderColor: '#000',
    backgroundColor: '#f4f4f4',
  },

  Text1: {
    fontSize: 20,
  },
});
