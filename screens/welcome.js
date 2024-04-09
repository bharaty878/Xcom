import { StyleSheet, Text, View,TouchableOpacity, StatusBar, ImageBackground } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';

const Welcome = (props) => {
    const {navigation} = props;
    const Log =()=>{
        navigation.navigate("Login")
    }
  return (
    <ImageBackground  source={require('../screens/image/img16.jpg')}  style={{flex:1,opacity:0.7}}> 
    <View style={styles.view1}>
        <StatusBar hidden={true}/>
                         <LottieView style={{flex:1,width:200,marginTop:-100,marginBottom:-500,alignSelf:"center"  }} source={require('../images/ani2.json')} autoPlay loop />
                 <View style={styles.view2}>
                         <Text style={styles.txt1}>X Com</Text> 
                 </View>
      <View style={styles.view3}>
                <TouchableOpacity onPress={()=>Log()}>
                        <Text style={styles.txt2}>&gt;</Text>
                </TouchableOpacity>
      </View>
    </View>
    </ImageBackground>
  )
}

export default Welcome

const styles = StyleSheet.create({
    view1:{
           flex:1
    },
    view2:{
            alignSelf:"center",
            justifyContent:"center",
            flex:2
    },
    txt1:{
        color:"black",
        marginTop:80,
        fontSize:90,
        fontFamily:"cursive",
        fontWeight:"800"
    },
    view3:{
        position:"absolute",
        top:520,
         width:60,
         height:60,
         borderRadius:50,
         backgroundColor:"black",
         marginLeft:170,
        
},
txt2:{
    textAlign:"center",
    position:"absolute",
    top:-8,
    left:20,
    height:50,
    color:"white",
    fontSize:50,
    fontWeight:"300",
},
})