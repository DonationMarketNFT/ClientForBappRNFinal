import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import HomeScreen from './HomeScreen';
import SettingScreen from './SettingScreen';

export default function BottomTabs() {
  const Tab = createBottomTabNavigator()
  const renderTabBarHome = ({ focused,}) => (
    <View 
      style={{
          alignItems:'center',
          justifyContent:'center',
          width : 60,
          height : 60,
        }}>
        <Feather  
          name='home'
          color={focused ? 'black' : 'grey'}
          size={24}
          />
    </View>
  )
  const renderTabAddCampaign = ({ focused,}) => (
    <View 
      style={{
          alignItems:'center',
          justifyContent:'center',
          width : 60,
          height : 60,
        }}>
        <Ionicons  
          name='add-circle'
          color={focused ? 'black' : 'grey'}
          size={24}
          />
    </View>
  )
  const renderTabBarSetting = ({ focused,}) => (
    <View 
      style={{
          alignItems:'center',
          justifyContent:'center',
          width : 60,
          height : 60,
        }}>
        <Feather  
          name='user'
          color={focused ? 'black' : 'grey'}
          size={24}
          />
        {/* <Text>설정</Text> */}
    </View>
  )
  return (
      <Tab.Navigator
        initialRouteName='홈'
        screenOptions={{
          tabBarStyle: { 
            borderTopWidth:1,
          },
          headerShown:false
        }}
        tabBarOptions={{
            showLabel:false,
            labelStyle :{
                alignItems:'center',
            }
          }}>
          <Tab.Screen
              name="홈"
              component={HomeScreen}
              options={{
                  tabBarIcon:renderTabBarHome,
              }}/>
          <Tab.Screen
              name="캠페인"
              component={HomeScreen}
              options={{
                  tabBarIcon:renderTabAddCampaign,
              }}/>
          <Tab.Screen
              name="세팅"
              component={SettingScreen}
              options={{
                  tabBarIcon:renderTabBarSetting,
              }}/>
        </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
