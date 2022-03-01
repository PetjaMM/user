import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function MyBookings() {
  return (
    <View style={styles.container}>
      <Text>Bookings</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:40,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
