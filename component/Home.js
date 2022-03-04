import { Pressable,ImageBackground,TouchableOpacity,Image,StyleSheet,TextInput, Button, View,Text, Alert ,Platform} from 'react-native';
import firebase from 'firebase';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useState,useEffect } from 'react';
import DatePicker from 'react-native-datepicker';
import Nav from './Views/Nav';
export default function Home() {
  const [startDate, setStartDate] = useState('');
 


  return (
    <View style={styles.container}>
<Nav text={'Home'}></Nav>
 <View style ={styles.ButtomView}>
 <Text style={styles.Label}>Where Are Your Going</Text>
<TextInput
        style={styles.input}
        keyboardType="default"

      
      />
       <Text style={styles.Label}>Check In Date</Text>
      <DatePicker
      style={styles.inputDate}
        date={startDate}
        mode="date"
        // placeholder="check in"
        format="YYYY-MM-DD"
        // minDate="0"
        // maxDate="0"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
  
        onDateChange={(startDate) => {setStartDate(startDate)}}
      />
      
      <Text style={styles.Label}>How Many Nights Are You Planning On Staying </Text>
<TextInput
        style={styles.input}
        keyboardType="numeric"
        maxLength={2}
      
      />
       <Text style={styles.Label}>Adults</Text>
<TextInput
        style={styles.input}
        keyboardType="numeric"
        maxLength={1}
      />
       <Text style={styles.Label}>Children Age: 0 to 15</Text>
<TextInput
        style={styles.input}
        keyboardType="numeric"
        maxLength={1}
      />
<TouchableOpacity  style={styles.Button} >
     <Text style={styles.ButtonText}>Get Available Hotels</Text>
  </TouchableOpacity>


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
