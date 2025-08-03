// screens/CategoryScreen.js
import { StyleSheet, Text, View } from 'react-native';
import Background from '../../components/Background';
export default function CategoryScreen({ route }) {
    const { category } = route.params;

    return (
        <Background>
            <View style={styles.container}>
                <Text style={styles.text}>You selected: {category}</Text>
                <Text style={styles.subText}>🛒 More items coming soon...</Text>
            </View>
        </Background>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff', // ✅ White text for GIF background
        marginBottom: 10,
    },
    subText: {
        fontSize: 16,
        color: '#f0f0f0', // ✅ Light color for visibility
    },
});
