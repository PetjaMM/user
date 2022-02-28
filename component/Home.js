import { StatusBar } from 'expo-status-bar';

import { Pressable,ImageBackground,TouchableOpacity,Image,StyleSheet,TextInput, Button, View,Text, Alert } from 'react-native';
import firebase from 'firebase';
import Ionicons from 'react-native-vector-icons/Ionicons'
export default function Home() {

  return (
    <View style={styles.container}>
 < View style ={styles.TopView}>
 
      <Text style={styles.ButtonHome} >Home </Text> 
      <Ionicons name='notifications' color={'#fff'} size={25}></Ionicons>
  
 </View> 
 <View style ={styles.ButtomView}>

 
 </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
  },
  TopView: {
    width:'100%',
    height:'10%',
    flex:1,
    alignItems:'center',
    flexDirection:'row',
    backgroundColor:'green',
    marginTop:40,
  },
  ButtomView:{
    width:'100%',
    height:'87%',
    display:'flex',
justifyContent:'flex-end',
alignItems:'center'
  },
  logo:{
    width:'70%',
    resizeMode:'contain',
  },
  Button:{
width:'90%',
color:'#000',
height:50,
borderRadius:5,
backgroundColor:'#378CE8',
display:'flex',
margin:20,
justifyContent:'center',
alignItems:'center'
  },
  ButtonHome:{
     color:'#fff',
     fontWeight:'bold',
    fontSize:25,
    width:'90%',
    paddingLeft:10
  },
  ButtonText:{
    color:"#fff",
    fontWeight:'bold',
    fontSize:16  },

});
