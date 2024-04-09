import { StyleSheet, Text, View,FlatList,Image,TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import firestore from '@react-native-firebase/firestore'


const Carts = () => {
    const[idata,setData]=useState([]);
    
    const Del= async ()=>{
        try {
            const data = await firestore().collection('item').doc('f8egJIKGOiS2sSEYnGmQ').delete();
            console.log(data)
        } catch (error) {
            console.log("error")
        }
    }
    useEffect(() => {
        Getdata();
        }, [])
        
        const Getdata = async ()=>{
            try {
                const data = await firestore().collection('item').doc('f8egJIKGOiS2sSEYnGmQ').get()
                console.log(data._data.value);
              setData([data._data.value])
            } catch (error) {
                console.log("error")
            }
        }
    
  return (
    <View style={{flex:1}}>
       <FlatList
       data={idata}
       renderItem={({item,index})=>{
       return(
       <View style={{flexDirection:"row",alignItems:"center",margin:10,backgroundColor:"silver",opacity: 0.9,borderRadius:20}}>
        <Image source={{uri:item.images1}}  style={{width: 100,height:100,margin:10}}/>
        <View>
        <Text style={styles.txt1} >ID : {item.id}</Text>
        <Text style={styles.txt1}>Name : {item.name}</Text>
        <Text style={styles.txt1}>M.R.P : {item.Price}</Text>
        <Text style={styles.txt1}>Color : {item.color}</Text>
        <TouchableOpacity onPress={()=>Del()}>
            <Text style={{color:"red",fontSize:20}}>Delete</Text>
        </TouchableOpacity>
        </View>
       </View>
  )}}
  /> 
  
      </View>
  )
}

export default Carts

const styles = StyleSheet.create({
    txt1:{
        color:"black",
        fontSize:15,
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