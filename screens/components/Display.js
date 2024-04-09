import { StyleSheet, View,FlatList, Image,  } from 'react-native'
import React from 'react'
import DataDisplay from './DataDisplay.json'


const Display = (Props) => {
     const {navigation} = Props;

     const Press=()=>{
     navigation.navigate("Shoes")
     }
  return (
    <View style={{flex:1}}>    
      <FlatList 
               data={DataDisplay}
                renderItem={({item,index})=>{
        return(
                  <View style={{height:0}}>
                    <View style={{flexDirection:"row",margin:1}}>
                          <Image source={{uri:item.image1}}  style={{width: 200,height:100,margin:20}}/>
                          <Image source={{uri:item.image2}}  style={{width: 200,height:100,margin:20}}/>
                          <Image source={{uri:item.image3}}  style={{width: 200,height:100,margin:20}}/>
                          <Image source={{uri:item.image4}}  style={{width: 200,height:100,margin:20}}/>
                          <Image source={{uri:item.image5}}  style={{width: 200,height:100,margin:20}}/> 
                     </View>
       
                  </View>                  
        )}} horizontal/>
                    
    
    </View>
    
  )
}

export default Display

const styles = StyleSheet.create({
  img1:{
       width: 100,
       height:100
  }
})