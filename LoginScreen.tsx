import { useNavigation } from '@react-navigation/native';
import React from 'react';
import axios from 'axios';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function LoginScreen() {

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigation = useNavigation();


    const handleLogin = async() => {
        if (!username || !password) {
            Alert.alert('Error', 'Tolong isi form secara lengkap');
        }

        try {
            const response = await axios.post('https://asset.miegacoan.co.id/api/login', {
                username,
                password,
            });

            if (response.data.success) {
                Alert.alert('Success', 'Login successful');
                navigation.navigate('Dashboard');
            } else {
                Alert.alert('Error', response.data.message || 'Username atau password salah');
            }
        } catch (error) {
            console.error(error);
            Alert.alert('Error', 'An error occurred. Please try again later.');
        }
    }

    return(
        <>
        <View style={styles.container}>
            <Text> Username :  </Text>
            <TextInput
            style={styles.textInput}
            onChangeText={setUsername}
            value={username}
            />
             <Text> Password :  </Text>
             <TextInput
             style={styles.textInput}
             onChangeText={setPassword}
             value={password}
             secureTextEntry={true}
             />
        </View>
        <Button title="Login" onPress={handleLogin} />
        </>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    textInput:{
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
    },
});
