import { Pressable,ImageBackground,TouchableOpacity,Image,StyleSheet,TextInput, Button, View,Text, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function Search() {
  return (
    <View style={styles.container}>
    < View style ={styles.TopView}>
    
         <Text style={styles.ButtonHome} >Hotel Search </Text>  
    </View> 

    <View style= {styles.Search}> 
      <TextInput style ={styles.SearchInput} placeholder='Search Hotel By Town'></TextInput>

      <Ionicons name='search' style={styles.icon} color={'#000'} size={25}></Ionicons>
      </View>
    <View style ={styles.ButtomView}>
      
    
    
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
