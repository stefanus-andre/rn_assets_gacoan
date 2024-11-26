/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import { Button } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';

export default function HomeScreen() {

    const navigation = useNavigation();
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button onPress={() => navigation.navigate("LoginScreen")}>
          Go to Login Screen
        </Button>
      </View>
    );
  }