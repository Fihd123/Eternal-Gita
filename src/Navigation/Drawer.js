import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  TouchableOpacity,
  Modal,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  createDrawerNavigator,
  DrawerToggleButton,
} from '@react-navigation/drawer';
import Preface from '../screens/Preface';
import About from '../screens/About';
import Synopsis from '../screens/Synopsis';
import {langContext} from '../context/LangContext';
import Chapter from '../screens/Chapter';
import {createStackNavigator} from '@react-navigation/stack';

const drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const Drawer = () => {
  const [active, setActive] = useState('en');
  const {language, setLanguage} = useContext(langContext);
  const [modalVisible, setModalVisible] = useState(false);

  const storeLanguagePreference = async lang => {
    try {
      await AsyncStorage.setItem('language', lang);
      setLanguage(lang);
      setActive(lang);
      setModalVisible(false);
    } catch (error) {
      console.error('Error saving language preference:', error);
    }
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const SynopsisStack = () => (
    <Stack.Navigator initialRouteName="Tikka">
      <Stack.Screen
        options={{headerShown: false}}
        name="syno"
        component={Synopsis}></Stack.Screen>
      <Stack.Screen
        options={{headerShown: false}}
        name="details"
        component={Chapter}></Stack.Screen>
    </Stack.Navigator>
  );

  return (
    <View style={{flex: 1}}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity onPress={() => storeLanguagePreference('en')}>
              <Text
                style={
                  active === 'en'
                    ? styles.activeLanguageText
                    : styles.languageText
                }>
                English
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.b1}
              onPress={() => storeLanguagePreference('bg')}>
              <Text
                style={[
                  styles.languageText,
                  active === 'bg'
                    ? styles.activeLanguageText
                    : styles.languageText,
                ]}>
                Bengali
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <drawer.Navigator
        screenOptions={{
          drawerActiveBackgroundColor: '#fff',
          drawerActiveTintColor: '#9E0804',
          drawerInactiveTintColor: '#DFD2b8',
          drawerStyle: {
            padding: 30,
          },
          DrawerItemList: 'none',
          headerTitleAlign: 'center',
          drawerPosition: 'right',
          headerLeft: () => (
            <View style={styles.headerLeft}>
              <Image
                style={{
                  height: 34,
                  width: 34,
                  borderRadius: 30,
                  marginRight: 20,
                }}
                source={require('../assets/logo.png')}
              />
            </View>
          ),
          headerRight: () => (
            <View style={styles.headerRight}>
              <TouchableOpacity style={{marginRight: 10}} onPress={openModal}>
                <Image
                  style={{
                    height: 30,
                    width: '150%',
                    borderRadius: 30,
                    marginRight: 20,
                  }}
                  source={require('../assets/language.jpg')}
                />
              </TouchableOpacity>
              <DrawerToggleButton />
            </View>
          ),
        }}>
        <drawer.Screen name="Preface" component={Preface}></drawer.Screen>
        <drawer.Screen
          name="About"
          language={language}
          component={About}></drawer.Screen>
        <drawer.Screen
          name="Synopsis"
          component={SynopsisStack}></drawer.Screen>
      </drawer.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  headerLeft: {
    marginLeft: 15,
  },
  headerRight: {
    flexDirection: 'row',
    marginRight: 0,
  },
  languageText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 14,
    textTransform: 'capitalize',
    letterSpacing: 0.6,
    fontWeight: '500',
  },
  activeLanguageText: {
    color: '#e36f3f',
    fontWeight: '700',
    fontSize: 14,
    textTransform: 'capitalize',
    letterSpacing: 0.6,
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  b1: {
    width: 80,
    padding: 5,
    backgroundColor: '#',
    borderRadius: 10,
    margin: 5,
  },
  modalView: {
    margin: 20,
    backgroundColor: '#DFD2B8',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
export default Drawer;
