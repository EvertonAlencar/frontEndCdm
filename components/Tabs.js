import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ItemComponent from './ItemComponent';
import { NavigationContainer } from '@react-navigation/native';
const Tab = createBottomTabNavigator();

export default function TabNavigatior(){
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={ItemComponent} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}