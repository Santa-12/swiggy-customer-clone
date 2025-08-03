import { StyleSheet, Text, View } from 'react-native';
import Background from '../../components/Background';
export default function NotificationScreen() {
    return (
        <Background>
            <View style={styles.container}>
                <Text style={styles.title}>🔔 No New Notifications</Text>
            </View>
        </Background>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    title: { fontSize: 18 },
});
