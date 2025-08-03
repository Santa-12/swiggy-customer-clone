import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ImageBackground, StyleSheet } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import HomeTab from './navigation/HomeTab'; // adjust path if needed

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <ImageBackground
            source={require('../assets/images/foodie.jpg')}
            style={styles.bg}
        >
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Welcome">
                    <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="Signup" component={SignupScreen} />
                    <Stack.Screen name="HomeTab" component={HomeTab} options={{ headerShown: false }} />

                </Stack.Navigator>
            </NavigationContainer>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    bg: {
        flex: 1,
    },
});