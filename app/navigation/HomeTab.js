import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CartScreen from '../screens/CartScreen';
import FoodSlideScreen from '../screens/FoodSlideScreen';
import NotificationScreen from '../screens/NotificationScreen';

const Tab = createBottomTabNavigator();

export default function HomeTab() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Food" component={FoodSlideScreen} />
            <Tab.Screen name="Cart" component={CartScreen} />
            <Tab.Screen name="Notifications" component={NotificationScreen} />
        </Tab.Navigator>
    );
}
