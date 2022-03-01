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
 <Text style={styles.Label}>Where Are Your Going</Text>
<TextInput
        style={styles.input}
        keyboardType="default"
        editable = {false}
   
      />

 </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
    marginTop:40

  },
  Label:{
    color: '#000',
    fontSize: 15,
    margin:5,
    width:'85%',
    fontWeight: "bold",
  },
  input: {
    width:'90%',
    color:'#000',
    borderRadius:5,
    height:50,
    backgroundColor:'#fff',
    marginBottom:10,
    borderWidth: 1,
    padding: 10,
  },
  TopView: {
    width:'100%',
    height:'8%',
    flex:1,
    alignItems:'center',
    flexDirection:'row',
    backgroundColor:'green',
  },
  ButtomView:{
    width:'100%',
    height:'92%',
    display:'flex',
alignItems:'center'
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
