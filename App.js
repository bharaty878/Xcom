
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import welcome from './screens/welcome'
import Login from './screens/Login'
import Register from './screens/Register'
import Dashboard from './screens/Dashboard'
import Shoes from './screens/components/Shoes'
import Electronics from './screens/components/Electronics'
import Fashion from './screens/components/Fashion'
import Pay from './screens/Payment'
import Cart from './screens/Cart'
import Carts from './screens/components/Carts'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Luggage from './screens/components/Luggage'

const stack = createNativeStackNavigator();

const App = (Props) => {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name='Welcome' component={welcome} options={{headerShown:false}}/>
        <stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
        <stack.Screen name='Register' component={Register}  options={{headerShown:false}}/>
        <stack.Screen name='Dashboard' component={Dashboard} options={{headerShown:false}}/>
        <stack.Screen name='Shoes' component={Shoes} options={{headerShown:true}}/>
        <stack.Screen name='Electronics' component={Electronics} options={{headerShown:true}}/>
        <stack.Screen name='Fashion' component={Fashion} options={{headerShown:true}}/>
        <stack.Screen name='Luggage' component={Luggage} options={{headerShown:true}}/>
        <stack.Screen name='Pay' component={Pay} options={{headerShown:true,headerTitle:"Payments"}}/>
        <stack.Screen name='Cart' component={Cart} options={{headerShown:true}}/>
        <stack.Screen name='Carts' component={Carts} options={{headerShown:true}}/>      

      </stack.Navigator>
    </NavigationContainer>
    
  )
}

export default App

const styles = StyleSheet.create({})
