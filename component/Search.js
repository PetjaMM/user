import { Pressable,ImageBackground,TouchableOpacity,Image,StyleSheet,TextInput, Button, View,Text, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Nav from './Views/Nav';
import HomeSearch from './Views/HotelSearch';
import HotelCard from './Views/HotelCard';
import { useState,useEffect} from 'react';
export default function Search() {
const [Location,SetLocation]= useState("");
const [search,setSearch] = useState(false);
useEffect(()=>{
if(Location==""){
  return setSearch(false)
}
},[])
function OnLocationChange(value){
  SetLocation(value);
}
function searchLocation(){
  setSearch(true);
}
  return (
    <View style={styles.container}>
   <Nav text={'Hotel Search'}></Nav>

    <View style= {styles.Search}> 
      <TextInput style ={styles.SearchInput}  onChangeText={OnLocationChange} placeholder='Search Hotel By Location'></TextInput>

      <Ionicons  name='search' style={styles.icon} color={'#000'} size={25} onPress={searchLocation}></Ionicons>
      </View>
    <View style ={styles.ButtomView}>
    {search == true?
     <HomeSearch loc={Location} ></HomeSearch>
    :search==false?
    <HotelCard></HotelCard>
    :

    null
    }
   
    
    
    </View>
       </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    marginTop:40,
    backgroundColor:'#fff'
  },

  TopView: {
    width:'100%',
    height:'8%',
    flex:1,
    alignItems:'center',
    flexDirection:'row',
    backgroundColor:'green'
  },
  icon:{
alignItems:'center',
alignContent:'center',
padding: 5,
  },
  SearchInput: {
    width:'90%',
    color:'#000',
    borderRadius:20,
    height:45,
    backgroundColor:'#fff',
    borderWidth: 1,
    padding: 10,
  },
  ButtonHome:{
    color:'#fff',
    fontWeight:'bold',
   fontSize:25,
   width:'90%',
   paddingLeft:10
 },
  Search:{
   flex:1,
   flexDirection:'row',
   alignItems:'center',
   margin:10,
  },
  ButtomView:{
    width:'100%',
    height:'82%',
  },


});
