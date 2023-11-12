import { Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import StackNavigator from "./navigation/StackNavigator";
import { FitnessContext } from "./Context";

export default function App() {
  return (
    <FitnessContext>
      <StackNavigator />
    </FitnessContext>
  );
}
