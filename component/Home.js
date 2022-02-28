import { StatusBar } from 'expo-status-bar';
import {useNavigation} from '@react-navigation/native'
import { Pressable,ImageBackground,TouchableOpacity,Image,StyleSheet,TextInput, Button, View,Text, Alert } from 'react-native';
import firebase from 'firebase';

export default function Home() {
  const navigation = useNavigation();
  const Logout = () => {
    navigation.navigate('Login')
    firebase.auth().signOut();
  }
   

  return (
    <View style={styles.container}>
 <View style ={styles.TopView}>
  <View>
      <Text > Welcome To Hotel Finder </Text> 
  </View>
 </View> 
 <View style ={styles.ButtomView}>
 <TouchableOpacity onPress={Logout}  style={styles.Button} >
     <Text style={styles.ButtonText}>Logout</Text>
  </TouchableOpacity>
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
    height:'40%',
    display:'flex',
  },
  ButtomView:{
    width:'100%',
    height:'60%',
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
  ButtonText:{
    color:"#fff",
    fontWeight:'bold',
    fontSize:16  }
});
