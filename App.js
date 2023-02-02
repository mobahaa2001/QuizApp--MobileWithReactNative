import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Screen/Home';
import Quiz from './Screen/Quiz';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Home/> */}
      <Quiz/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
});
