import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Synopsis from '../screens/Synopsis';
import {NavigationContainer} from '@react-navigation/native';
import Chapter from '../screens/Chapter';

const Index = () => {
  const stack = createStackNavigator();

  return (
    <stack.Navigator>
      <stack.Screen name="About" component={Synopsis} />
      <stack.Screen name="details" component={Chapter} />
    </stack.Navigator>
  );
};

export default Index;

const styles = StyleSheet.create({});
