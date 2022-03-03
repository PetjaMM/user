import { Pressable,ImageBackground,TouchableOpacity,Image,StyleSheet,TextInput, Button, View,Text, Alert ,Platform} from 'react-native';
import firebase from 'firebase';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useState } from 'react';
import DatePicker from 'react-native-datepicker';
export default function Home() {
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  const [Location,setLocation] = useState('');
  const [days,setDays]= useState('1');
  
  function onCalenderChange(value){
    setDate(date);
  }
function onLocationChange(value){
  setLocation(value);
}
function onDaysChange (value){
  setDays(value);
}
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
      
      />
       <Text style={styles.Label}>Check In Date</Text>
<DatePicker  style={styles.inputDate}   
mode = 'date'
date={date}
onDateChange = {onCalenderChange(date)}
></DatePicker>
       <Text style={styles.Label}>How Many Days Are You Planing To Stay</Text>
       <TextInput
        style={styles.input}
        keyboardType="numeric"
        maxLength={2}
   
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
  },inputDate:{
    width:'90%',
    color:'#000',
    marginBottom:10,
    height:50,
    backgroundColor:'#fff',
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
