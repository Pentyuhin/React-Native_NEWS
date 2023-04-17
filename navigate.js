import Main from "./components/Main";
import FullInfo from "./components/FullInfo";
import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Navigate() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Main} options={
                    {
                        title: 'Главная',
                        headerStyle: {backgroundColor: "#fafafa", height: 110},
                        headerTitleStyle: {fontWeight: 500}
                    }} />
                <Stack.Screen name="FullInfo" component={FullInfo} options={{title: 'Статья'}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}