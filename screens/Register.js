import { StyleSheet, Text, View,TextInput,TouchableOpacity,ImageBackground } from 'react-native'
import React, { useState } from 'react'
import auth from '@react-native-firebase/auth';

const Register = (Props) => {
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")

  const {navigation} = Props;
  const Signup=async()=>{
     try {
      const data = await auth().createUserWithEmailAndPassword(email,password);
      console.log(data)
     } catch (error) {
      console.log("error")
     }
  }
  const Reg=()=>{
     navigation.navigate("Login")
  }
  return (
    <ImageBackground  source={require('../screens/image/img16.jpg')}  style={{flex:1,opacity:0.7}}> 
    <View style={styles.view}>
      <Text style={styles.txt2}>X Com</Text>
      <TextInput value={email} onChangeText={(e)=>setEmail(e)} placeholderTextColor={"black"} placeholder='Write E-mail' style={styles.input}/>
      <TextInput value={password}  onChangeText={(e)=>setPassword(e)} placeholderTextColor={"black"} placeholder='Write Password' secureTextEntry style={styles.input}/>
      <TouchableOpacity style={styles.Btn} onPress={()=>Signup()}>
                         <Text style={styles.txt1}>New Register</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>Reg()}>
                        <Text style={styles.txt3}>Login ?</Text>
      </TouchableOpacity>
    </View>
    </ImageBackground>

  )
}

export default Register

const styles = StyleSheet.create({
  view:{
    flex:1,
  
    
},
input:{
       borderRadius:10,
       borderColor:"red",
       margin:10,
       borderWidth:1,
       backgroundColor:"white"
},
Btn:{
     width:200,
     alignSelf:"center",
    justifyContent:"center",
     backgroundColor:"red",
     borderRadius:10,
     margin:10
},
txt1:{
 textAlign:"center",
 fontWeight:"300",
   fontSize:30,
   color:"white"
},
txt2:{
  marginTop:200,
  fontFamily:"cursive",
  color:"black",
  fontSize:50,
  alignSelf:"center",
  margin:10

},
txt3:{
     alignSelf:"center",
     color:"black"
}
})