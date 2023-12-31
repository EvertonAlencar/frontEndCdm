import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ItemComponent from './components/ItemComponent';
import ChooseTapioca from './screens/ChooseTapioca';
import { NavigationContainer } from '@react-navigation/native';
const Tab = createBottomTabNavigator();

export default function TabNavigatior(){
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={ItemComponent} />
                <Tab.Screen name="Tapioca" component={ChooseTapioca} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}