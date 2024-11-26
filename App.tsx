/* eslint-disable react/react-in-jsx-scope */
import { Text, View, StyleSheet } from "react-native";

const App = () => {
  return(
    <View style={style.container}>
      <Text style={style.red}>Just Red</Text>
      <Text style={style.bigBlue}>Just BigBlue</Text>
      <Text style={[style.bigBlue, style.red]}>BigBlue, then red</Text>
      <Text style={[style.red, style.bigBlue]}>BigBlue, then red</Text>
      <Text>red, then BigBlue</Text>
    </View>
  );
};


const style = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  bigBlue:{
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

export default App;