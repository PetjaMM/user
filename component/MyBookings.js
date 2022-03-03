import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,ScrollView} from 'react-native';
import HotelCard from './Views/HotelCard'
import Nav from './Views/Nav';
export default function MyBookings() {
  return (
    <View style={styles.container}>
      
      <ScrollView>
        <Nav text={'My Bookings'}></Nav>
      <HotelCard></HotelCard>
      <HotelCard></HotelCard>
      <HotelCard></HotelCard>
      </ScrollView>
 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:40,
    backgroundColor: '#fff',
  
  },
});
