import { StatusBar as ExpoStatusBar } from "expo-status-bar";
{
  /* Above we have renamed status bar as expostatusbar this is know as rename action in an import*/
}
import { NavigationContainer } from "@react-navigation/native";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme/";
import { Text } from "react-native";

import {useFonts as useOswald, Oswald_400Regular,} from '@expo-google-fonts/oswald';
// The above and below code is importing google fonts that we are using in our app.
import { useFonts as useLato, Lato_400Regular,} from '@expo-google-fonts/lato';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeArea } from "./src/components/safe-area.component";
import { Ionicons } from "@expo/vector-icons";
// Ionicons are pre available icons that are came with expoinit that we can use are in our app we are using it to add icons in our bottom navigation of the app.
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";

const Tab = createBottomTabNavigator();
// tab component is used to create the bottom navigation of the app.

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings"

}
{/* In the above card key is the name of the root*/}


const Settings = () =>( 
    <SafeArea>
    <Text>Settings</Text>
    </SafeArea>
);
// We have created this settings component here so that we can add this in our bottom navigation inside the app.


const Map = () => (
<SafeArea>
    <Text>Map</Text>
    </SafeArea>
);
// We have created this Map settings component here so that we can add this in our bottom navigation inside the app

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name]
  return{
    tabBarIcon: ({size,color}) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
}; 


export default function App() {
  
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  }); 
  // We have created const component here to use oswald font from google font family which we have imported above.
  // These components will be used as props later in restaurantinfocard component inside const Title = styled.Text` with the help of fonts.js file.

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });
// We have created a const component here to use lato font from google font family which we have imported above
// These components will be used as props later in restaurantinfocard component inside const Title = styled.Text` with the help of fonts.js file.  

if(!oswaldLoaded || !latoLoaded){
    return null; // if font is not loading by anychance default font will be applied in the app.
  }
  return (
    <>
    {/* The above <> is called as a fragment they allow us to render two elements side by side without having to wrap it in a specific container or view */}
    <ThemeProvider theme={theme}> 
    {/* Here we are wrapping our Restaurant Screen with a theme provider
    theme={theme} is basically helping us to utilise theme in our app.*/}
    <RestaurantsContextProvider>
    {/* We are putting the restaurantContextProvider here to give all access of mock data of restaurants here to diplay them.*/}
      <NavigationContainer>
      <Tab.Navigator
            screenOptions={createScreenOptions}
            tabBarOptions={{
              activeTintColor: "tomato",
              inactiveTintColor: "gray",
            }}
          >
          {/* THE ABOVE CODE IS HELPING TO ADD ICONS IN OUR BOTTON NAVIGATION */}

      <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
            <Tab.Screen name="Map" component={Map} />
            <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
      </NavigationContainer>
      {/* The above component is created to create bottom navigation in our screen and to also specific component inside our app.
      The NavigationContainer is responsible for managing your app state and linking your top-level navigator to the app environment.
      Tab navigation is Possibly the most common style of navigation in mobile apps is tab-based navigation. This can be tabs on the bottom of the screen or on the top below the header (or even instead of a header basically it is helping us to create botton navigation).
      Tab.screen is used to actuallu display the things in our app and bottom navigation RestaurantScreen is used to display all of our restaurantsscnreen.
 */}
 </RestaurantsContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
