
import { Text,StyleSheet, ScrollView, View,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import Drawers from './Drawer'

const Dashboard = (Props) => {
  const {navigation} = Props
  const Press=()=>{
    navigation.navigate("Shoes")
    }
    const Press2=()=>{
      navigation.navigate("Fashion")
      }
      const Press3=()=>{
        navigation.navigate("Electronics")
        }
        const Press4=()=>{
          navigation.navigate("Luggage")
          }
          const Carts=()=>{
            navigation.navigate("Carts")
            }
  return (
    <View style={{flex:1}}>
        <Drawers/>
        <View style={{height: 600,}}>
          <View style={{flexDirection:"row",margin:10}}>
          <TouchableOpacity style={styles.Btn}>
               <Text style={styles.txt1}>Wallet</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Btn} onPress={()=>Carts()}>
               <Text style={styles.txt1}>Cart</Text>
          </TouchableOpacity>
          </View>
                        <ScrollView>
                      <TouchableOpacity onPress={()=>Press()}>
                      <Image  source={require('../screens/image/img11.jpg')}  style={{width: 350,height:150,margin:20,borderRadius:20,borderColor:"black",borderWidth:5}}/> 
                      </TouchableOpacity>

                      <TouchableOpacity onPress={()=>Press2()}>
                          <Image source={require('../screens/image/img12.jpg')}  style={{width: 350,height:150,margin:20,borderRadius:20,borderColor:"black",borderWidth:5}}/> 
                      </TouchableOpacity>

                      <TouchableOpacity onPress={()=>Press3()}>
                      <Image source={require('../screens/image/img13.jpg')}  style={{width: 350,height:150,margin:20,borderRadius:20,borderColor:"black",borderWidth:5}}/> 
                      </TouchableOpacity>

                      <TouchableOpacity onPress={()=>Press4()}>
                      <Image source={require('../screens/image/img14.jpg')}  style={{width: 350,height:150,margin:20,borderRadius:20,borderColor:"black",borderWidth:5}}/> 
                      </TouchableOpacity>
                      
                                    </ScrollView>          
                    </View>    
    </View>
  )
}

export default Dashboard

const styles = StyleSheet.create({
  Btn:{
    width:100,
    backgroundColor:"yellow",
    borderRadius:10,
    margin:10,
    marginLeft:50,
    borderColor:"black",
    borderWidth:2
},
txt1:{
textAlign:"center",
fontWeight:"300",
  fontSize:30,
  color:"black"
},
})