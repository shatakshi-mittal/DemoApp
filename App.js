import * as React from 'react';
import {FlatList, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Header from './Screens/Header';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';

function NotesScreen() {
  const DATA = [
    {
      id: '1',
      title: 'Capture what is in your mind\nSunday 1:27 PM',
    },
    {
      id: '2',
      title: 'Write your important note\nSunday 1:27 PM',
    },
    {
      id: '1',
      title: 'Share as picture\nSunday 1:27 PM',
    },
  ];
  const renderItem = ({item}) => {
    return (
      <View>
        <TouchableOpacity>
          <Text
            style={{
              padding: 40,
              backgroundColor: 'white',
              elevation: 30,
              marginBottom: 4,
              marginTop: 4,
            }}>
            {item.title}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={{backgroundColor: 'white'}}>
      <Header />
      <View style={{flexDirection: 'row'}}>
        <Text style={{fontSize: 50, marginLeft: 30}}>All notes</Text>
        <AntDesign
          name="caretdown"
          size={16}
          style={{marginTop: 30, marginLeft: 15}}
          color={'black'}
        />
      </View>
      <Text style={{fontSize: 20, marginLeft: 40, marginBottom: 30}}>
        20 notes
      </Text>
      <FlatList data={DATA} renderItem={renderItem} />
    </View>
  );
}
function TodosScreen() {
  const DATA = [
    {
      id: '1',
      title: 'Capture what is in your mind\nSunday 1:27 PM',
    },
    {
      id: '2',
      title: 'Write your important note\nSunday 1:27 PM',
    },
    {
      id: '1',
      title: 'Share as picture\nSunday 1:27 PM',
    },
  ];
  const renderItem = ({item}) => {
    return (
      <View>
        <Text
          style={{
            padding: 40,
            backgroundColor: 'white',
            marginBottom: 2,
            elevation: 30,
            marginTop: 4,
          }}>
          {item.title}
        </Text>
      </View>
    );
  };
  return (
    <View style={{backgroundColor: 'white'}}>
      <Header />
      <View style={{flexDirection: 'row'}}>
        <Text style={{fontSize: 50, marginLeft: 30}}>All notes</Text>
        <AntDesign
          name="caretdown"
          size={16}
          style={{marginTop: 30, marginLeft: 15}}
          color={'black'}
        />
      </View>
      <Text style={{fontSize: 20, marginLeft: 40, marginBottom: 30}}>
        20 notes
      </Text>
      <FlatList data={DATA} renderItem={renderItem} />
    </View>
  );
}
const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Notes"
        component={NotesScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Foundation name="clipboard-notes" size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="To-do"
        component={TodosScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="notes" size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
