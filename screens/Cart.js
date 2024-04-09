import { StyleSheet, Text, View,FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import database from '@react-native-firebase/database';

const Cart = () => {
    const[idata,setData]=useState(null);

    useEffect(() => {
        Getdata();
        }, [])
        
        const Getdata = async ()=>{
            try {
                const data = await database().ref('item').once("value");
                console.log(data);
              setData(data.val())
            } catch (error) {
                console.log("error")
            }
        }
    
  return (
    <View style={{flex:1}}>
      {/* <Text>{idata ? idata.name : "error"}</Text> */}
      <FlatList 
               data={idata}
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
                  </View>)}} />
                  <Text>aaa</Text>
   </View>
  )
}

export default Cart

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