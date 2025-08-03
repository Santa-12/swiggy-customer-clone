import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Background from '../../components/Background';
export default function SignupScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = () => {
        // Navigate to HomeTab after sign up
        navigation.replace('HomeTab');
    };

    return (
        <Background>
            <View style={styles.container}>
                <Text style={styles.title}>Sign Up</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
                <Button title="Sign Up" onPress={handleSignup} />
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.link}>Already have an account? Log In</Text>
                </TouchableOpacity>
            </View>
        </Background>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: 'center', padding: 20
    },
    title: {
        fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center'
    },
    input: {
        borderWidth: 1, padding: 10, marginVertical: 10, borderRadius: 5
    },
    link: {
        marginTop: 10, textAlign: 'center', color: 'blue'
    }
});
