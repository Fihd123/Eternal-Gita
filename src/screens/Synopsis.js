import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const screenWidth = Dimensions.get('screen').width;

const Synopsis = ({navigation}) => {
  const array = Array.from({length: 35}, (_, index) => ({id: index + 1}));
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={{marginTop: 20}}
        onPress={() => navigation.navigate('details', {id: item.id})}>
        <View
          style={{
            justifyContent: 'center',
            backgroundColor: '#fff',
            width: screenWidth - 100,
            // borderRadius: 4,
            padding: 15,
          }}>
          <Text style={{textAlign: 'center', fontWeight: '600'}}>
            Chapter - {item.id}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={{marginBottom: 20}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={array}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={{alignItems: 'center'}}
        />
      </View>
    </View>
  );
};

export default Synopsis;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DFD2B8',
    flex: 1,
    alignItems: 'center',
  },
});
