import { Pressable,ImageBackground,TouchableOpacity,Image,StyleSheet,TextInput, Button, View,Text, Alert ,Platform} from 'react-native';
import Lodge from './../../assets/lodge3.jpg'
import Ionicons from 'react-native-vector-icons/Ionicons'
const Home = (props) => {
    return (
    <View style ={styles.container} > 
         <Image style={styles.logo} source={Lodge}></Image>
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
             <TouchableOpacity style={styles.Button} >
     <Text style={styles.ButtonText}>Book Now</Text>
  </TouchableOpacity>
             </View>
         </View>
        
    
    

    </View>
    
    );
}
 
export default Home;
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ecf0f1',
      margin:5,
  
      borderRadius:10,
    },
    logo:{
        width:'100%',
        height:150,
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
      
        width:'32%',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
    },
    Button:{
        width:'80%',
        color:'#000',
        height:35,
        backgroundColor:'green',
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center'
        
          },
          ButtonText:{
            color:"#fff",
            fontWeight:'bold',
         }
});