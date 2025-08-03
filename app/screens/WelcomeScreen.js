import { Button, StyleSheet, Text, View } from 'react-native';
import Background from '../../components/Background';
export default function WelcomeScreen({ navigation }) {
    return (
        <Background>
            <View style={styles.overlay}>
                <Text style={styles.title}>Welcome to Foodie App</Text>
                <Text style={styles.quote}>“Delivering deliciousness at your doorstep.”</Text>
                <Button title="Get Started" onPress={() => navigation.navigate('Login')} />
            </View>
        </Background>
    );
}

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'cover',
    },
    overlay: {
        flex: 1,
        
        justifyContent: 'center',
        alignItems: 'center',
        padding: 100
    },
    title: {
        fontSize: 28,
        color: 'white',
        marginBottom: 20
    },
    quote: {
        fontSize: 28,
        color: 'white',
        marginBottom: 100,
        textAlign: 'center'
    }
});
