import { StyleSheet, Text, View } from 'react-native';
import Background from '../../components/Background';
export default function CartScreen() {
    return (
        <Background>
            <View style={styles.container}>
                <Text style={styles.title}>🛒 Your Cart is Empty</Text>
            </View>
        </Background>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    title: { fontSize: 22, fontWeight: 'bold' },
});
