console.disableYellowBox =true;
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabs from './screens/BottomTabs';
import LoginScreen from './screens/LoginScreen';
import ViewCampaignDetail from './screens/ViewCampaignDetail';
import GlobalProvider from './context/GlobalState';


const AppStack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <AppStack.Navigator initialRouteName ={"LoginScreen"}  
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          cardOverlayEnabled: true,
        }}>
        <AppStack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options ={{headerShow:false}}
        />
        <AppStack.Screen
          name="ViewCampaignDetail"
          component={ViewCampaignDetail}
          options ={{headerShow:false}}
        />
        <AppStack.Screen
          name="BottomTabs"
          component={BottomTabs}
          options ={{headerShow:false}}
        />
      </AppStack.Navigator>
    </NavigationContainer>
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
