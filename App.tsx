import * as React from 'react';
// Importation de NavigationContainer et createNativeStackNavigator pour la navigation
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Homepage from './src/screens/homepage';
import Products from './src/screens/products';
import Details from './src/screens/details';

// STACK NAVIGATION
function App(): JSX.Element {

//Création de la navigation
  const Stack = createNativeStackNavigator();

  return (
    /* NavigationContainer permet de créer un la couche qui va contenir la navigation */
    <NavigationContainer>
      {/* Stack.Navigator permet de créer un conteneur de navigation sur le dessus de l'application*/}
      <Stack.Navigator initialRouteName="Home">
        {/* Stack.Screen permet de créer une route */}
        <Stack.Screen name="Home" component={Homepage} />
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

// STACK NAVIGATION
// function App(): JSX.Element {

//   // Création de la navigation
//   const Tab = createBottomTabNavigator();

//   return (
//     /* NavigationContainer permet de créer un la couche qui va contenir la navigation */
//     <NavigationContainer>
//       {/* Tab.Navigator permet de créer un conteneur de navigation sur le dessous de l'application*/}
//       <Tab.Navigator initialRouteName="Home">
//         {/* Tab.Screen permet de créer une route */}
//         <Tab.Screen name="Home" component={Homepage} />
//         <Tab.Screen name="Products" component={Products} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;