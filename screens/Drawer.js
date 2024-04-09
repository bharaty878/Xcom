
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import XCom from './XCom';
import Shoes from './components/Shoes';

const Drawer = createDrawerNavigator();

const Drawers = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Xcom" component={XCom} options={{headerShown:true,headerBackVisible:false,headerTitle:"X Com",headerTitleStyle:{fontFamily:"cursive",fontWeight:"900",fontSize:30}}}/>
      <Drawer.Screen name="Shoes" component={Shoes} options={{headerShown:true,headerBackVisible:false,headerTitle:"X Com",headerTitleStyle:{fontFamily:"cursive",fontWeight:"900",fontSize:30}}}/>

    </Drawer.Navigator>
  )
}

export default Drawers

const styles = StyleSheet.create({})