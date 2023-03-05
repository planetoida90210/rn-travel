import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import Discover from "./screens/Discover";
import ItemScreen from "./screens/ItemScreen";

export type StackParamList = {
  Home: undefined;
  Discover: undefined;
  ItemScreen: { data?: string };
};

const Stack = createNativeStackNavigator<StackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Discover"
          component={Discover}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="ItemScreen"
          component={ItemScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
