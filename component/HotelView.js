import { Pressable,ImageBackground,TouchableOpacity,Image,StyleSheet,TextInput, Button, View,Text, Alert ,Platform} from 'react-native';
import Lodge from './../assets/lodge3.jpg'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function HotelView() {
  return (
    <View style ={styles.container} > 
    <Image style={styles.logo} source={Lodge}></Image>
    <View style={styles.buttomView}>
    <Text style = {styles.Hotelname}>Hotel name</Text>
    <View style={styles.HotelLocationView} >
    <Ionicons name='location' color={'grey'} size={15}></Ionicons>
    <Text style= {styles.HotelLocation}>Location</Text>
    </View>
    <View style={styles.HotelLocationView} >

        <View style={styles.InfoView} >
        <Ionicons name='cash-outline' color={'grey'} size={15}></Ionicons>
        <Text style={styles.Info } >Price</Text>
        </View>
        <View style={styles.InfoView}>
        <Ionicons name='star' color={'grey'} size={15}></Ionicons>
        <Text style={styles.Info}>Star Rating</Text>
        </View>
        <View style={styles.InfoView}>
        
        </View>
    </View>
    <View>
    <Text style = {styles.Hotelname}>Details</Text>
    

    <View>

    </View>
    <Text style = {styles.Hotelname}>About</Text>
    <Text style={styles.Info}>info</Text>
    </View>
    
   

    
    </View>
    <View style={styles.buttonViewLayout}>
 <TouchableOpacity style={styles.Button} >
<Text style={styles.ButtonText}>Book Now</Text>
</TouchableOpacity>
    </View>
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff'
  },
  logo:{
      width:'100%',
      height:"60%",
      borderTopLeftRadius:10,
      borderTopRightRadius:10,
  
      resizeMode:'cover'
  },
  Hotelname:{
      marginTop:5,
   color:'black',
   marginLeft:5,
   fontWeight:'bold',
   fontSize:25,
  },HotelLocationView:{
    
      flexDirection:'row',
      marginLeft:5,
      paddingBottom:5,
  }
  ,
  HotelLocation:{
      marginLeft:2,
   color:'grey'
  },Info:{
      paddingLeft:3,
  },
  InfoView:{
    
      width:'20%',
      alignItems:'center',
      justifyContent:'center',
      flexDirection:'row',
  },
  Button:{

      width:'85%',
      color:'#000',
      height:50,
      backgroundColor:'green',
      borderRadius:30,
      justifyContent:'center',
      alignItems:'center',
    
        },
        ButtonText:{
          color:"#fff",
          fontWeight:'bold',
          fontSize:17
       },buttomView:{
        width:'100%',
        height:'40%',
        display:'flex',
        flex:1,
        backgroundColor:'#fff'
    


       },buttonViewLayout:{
        alignItems:'center',
        display:'flex',
        backgroundColor:'#fff',
        marginBottom:10,
        justifyContent:'flex-end',
        alignItems:'center'
        
       }
});