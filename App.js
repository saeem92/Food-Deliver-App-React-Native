import { StatusBar as ExpoStatusBar } from "expo-status-bar";
{
  /* Above we have renamed status bar as expostatusbar this is know as rename action in an import*/
}
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme/";


import {LocationContextProvider} from "./src/services/location/location.context";
import {useFonts as useOswald, Oswald_400Regular,} from '@expo-google-fonts/oswald';
// The above and below code is importing google fonts that we are using in our app.
import { useFonts as useLato, Lato_400Regular,} from '@expo-google-fonts/lato';
import { Navigation } from "./src/infrastructure/navigation";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";


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
    <LocationContextProvider>
    <RestaurantsContextProvider>
    {/* We are putting the restaurantContextProvider here to give all access of mock data of restaurants here to diplay them.*/}
     <Navigation />
      {/* The above component is created to create bottom navigation in our screen and to also specific component inside our app.
      The NavigationContainer is responsible for managing your app state and linking your top-level navigator to the app environment.
      Tab navigation is Possibly the most common style of navigation in mobile apps is tab-based navigation. This can be tabs on the bottom of the screen or on the top below the header (or even instead of a header basically it is helping us to create botton navigation).
      Tab.screen is used to actuallu display the things in our app and bottom navigation RestaurantScreen is used to display all of our restaurantsscnreen.
 */}
 </RestaurantsContextProvider>
 </LocationContextProvider> 
 {/* LocationContextProvider is helping us with our search context*/}
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
