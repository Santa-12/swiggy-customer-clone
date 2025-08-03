import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Background from '../../components/Background';
// ✅ Local image imports (adjusted path)
const foodItems = [
  { name: 'Pizza', img: require('../../assets/images/pizza.jpeg') },
  { name: 'Burger', img: require('../../assets/images/burger.jpeg') },
  { name: 'Desserts', img: require('../../assets/images/desserts.jpeg') },
  { name: 'Juice', img: require('../../assets/images/juice.jpeg') },
];

export default function FoodSlideScreen() {
  return (
    <Background>
    <ScrollView horizontal pagingEnabled style={styles.scroll}>
      {foodItems.map((item, index) => (
        <View key={index} style={styles.item}>
          <Image source={item.img} style={styles.image} />
          <Text style={styles.name}>{item.name}</Text>
        </View>
      ))}
    </ScrollView>
    </Background>
  );
}

const styles = StyleSheet.create({
  scroll: { flex: 1 },
  item: { width: 300, alignItems: 'center', margin: 20 },
  image: { width: 200, height: 150, borderRadius: 10 },
  name: { fontSize: 18, marginTop: 10 },
});
