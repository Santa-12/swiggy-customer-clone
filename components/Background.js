// components/Background.js
import { Dimensions, ImageBackground, StyleSheet, View } from 'react-native';
import bgImage from '../assets/images/foodie.jpg'; // or wherever your image is

const { height, width } = Dimensions.get('window');

export default function Background({ children }) {
    return (
        <ImageBackground
            source={bgImage}
            style={styles.background}
            resizeMode="cover"
        >
            <View style={styles.overlay}>
                {children}
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: width,
        height: height,
    },
    overlay: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
    },
});
