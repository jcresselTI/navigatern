import Page1 from './src/Page1';
import Page2 from './src/Page2';
import Page3 from './src/Page3';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Task">
          <Stack.Screen name="Pagina 1" component={Pagina1}/>
          <Stack.Screen name="Pagina 2" component={Pagina2}/>
          <Stack.Screen name="Pagina 3" component={Pagina3}/>
        </Stack.Navigator>
      </NavigationContainer>

  );
}