import { StyleSheet, Text, View,TextInput,FlatList,Image, Button,TouchableOpacity } from 'react-native'
import React, {   useEffect, useState } from 'react'
import Shoesdata from './Shoesdata.json'
import firestore from '@react-native-firebase/firestore'

const Shoes = (Props) => {
  const {navigation} = Props;
  const[val,setVal]=useState([])

  const Buy=()=>{
      navigation.navigate("Pay")
  }
  // const Cart=(item)=>{
  //   setVal([...val,item])
  //   console.log(val)
  // }
  // useEffect(() => {
  //   Getdata();
  //   }, [])
    
    const Cart = async (item)=>{
        try {
            const data = await firestore().collection(`item`).doc('f8egJIKGOiS2sSEYnGmQ').set({value:item});
            console.log(data);
        } catch (error) {
            console.log("error")
        }
    }
    
  return (
    <View style={{flex:1}}>
      <TextInput placeholder='Search' placeholderTextColor={"black"} style={styles.input}/>
      <FlatList 
               data={Shoesdata}
               keyExtractor={(index)=>index.id}
                renderItem={({item})=>{
        return(
                  <View style={{flexDirection:"row",alignItems:"center",margin:10,backgroundColor:"silver",opacity: 0.9,borderRadius:20}}>
                          <Image source={{uri:item.images1}}  style={{width: 100,height:100,margin:10}}/>
                          <View>
                          <Text  style={styles.txt1}>Id:{item.id}</Text>
                          <Text  style={styles.txt1}>{item.name}</Text>
                          <Text  style={styles.txt1}>Color:{item.color}</Text>
                          <Text style={styles.txt3}>M.R.P : {item.Price}</Text>
                          <TouchableOpacity style={styles.Btn} onPress={()=>Buy()}>
                             <Text style={styles.txt2}>Buy Now</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.Btn}  onPress={()=>Cart(item)}>
                             <Text style={styles.txt2}>Add To Cart</Text>
                          </TouchableOpacity>
                          
                        </View>
                  </View>

        )}} />
      
    </View>
  )
}

export default Shoes

const styles = StyleSheet.create({
  txt1:{
        color:"black",
        fontSize:25,
        fontFamily:"serif",
        fontWeight:"100",
        margin:2 
  },
  txt3:{
        fontSize:40,
        color:"red",
        fontFamily:"Times new Roman",
        fontWeight:"900",
        fontStyle:"italic"
  },
  input:{
    borderRadius:10,
    borderColor:"red",
    margin:10,
    borderWidth:1,
    backgroundColor:"white"
},
Btn:{
     backgroundColor:"black",
     borderRadius:10,
     margin:10
     
},
txt2:{
   color:"white",
   fontSize:30,
   fontWeight:"900",
   textAlign:"center"
}
})