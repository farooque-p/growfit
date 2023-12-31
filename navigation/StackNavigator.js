import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from '../screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WorkoutScreen from '../screens/WorkoutScreen';
import FitScreen from '../screens/FitScreen';
import RestScreen from '../screens/RestScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Workout" component={WorkoutScreen}/>
            <Stack.Screen name="Fit" component={FitScreen} />
            <Stack.Screen name="Rest" component={RestScreen}/>
        </Stack.Navigator>
    </NavigationContainer>

  )
}

export default StackNavigator