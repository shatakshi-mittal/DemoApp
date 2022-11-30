import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Header = () => {
  return (
    // ? ok
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}>
      {/* <TouchableOpacity>
        <Image
          style={{
            marginLeft: 330,
            marginTop: 20,
            width: 25,
            height: 25,
          }}
          source={require('../assests/s.png')}
        />
      </TouchableOpacity> */}
      <TouchableOpacity>
        <Ionicons name="search" size={30} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={{
            marginLeft: 10,
            // marginTop: 20,
            width: 25,
            height: 25,
          }}
          source={require('../assests/tr.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
