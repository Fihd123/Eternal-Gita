import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';

const screenWidth = Dimensions.get('screen').width;

const Synopsis = ({navigation}) => {
  const array = Array.from({length: 18}, (_, index) => ({id: index + 1}));
  const colorScheme = useColorScheme();
  const lightMode = colorScheme === 'light';
  const lightModeColors = {
    background: '#FFFFFF',
    text: '#000000',
  };

  const darkModeColors = {
    background: '#FFFFFF',
    text: '#333333',
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 10,
      paddingBottom: 10,
      backgroundColor: '#DFD2B8',
    },
    itemContainer: {
      marginVertical: 15,
      marginHorizontal: 15,
      backgroundColor: lightMode
        ? lightModeColors.background
        : darkModeColors.background,
      padding: 20,
    },
    title: {
      fontSize: 14,
      textAlign: 'center',
      textTransform: 'uppercase',
      fontWeight: '600',
      color: lightMode ? lightModeColors.text : darkModeColors.text,
    },
    paragraph: {
      textAlign: 'center',
      marginVertical: 10,
      lineHeight: 28,
      letterSpacing: 0.12,
      fontSize: 12,
      color: lightMode ? lightModeColors.text : darkModeColors.text,
    },
  });

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={{marginTop: 20}}
        onPress={() => navigation.navigate('details', {id: item.id})}>
        <View
          style={{
            justifyContent: 'center',
            backgroundColor: lightMode
              ? lightModeColors.background
              : darkModeColors.background,
            width: screenWidth - 100,
            padding: 15,
          }}>
          <Text
            style={[styles.title, {textAlign: 'center', fontWeight: '600'}]}>
            Chapter - {item.id}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={array}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={{alignItems: 'center'}}
      />
    </View>
  );
};

export default Synopsis;
