import { StatusBar as ExpoStatusBar } from "expo-status-bar";
{
  /* Above we have renamed status bar as expostatusbar this is know as rename action in an import*/
}
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme/";

import {useFonts as useOswald, Oswald_400Regular,} from '@expo-google-fonts/oswald';
// The above and below code is importing google fonts that we are using in our app.
import { useFonts as useLato, Lato_400Regular,} from '@expo-google-fonts/lato';

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
      <RestaurantsScreen />
      {/* The above component is imported from restaurant screen file created in screens folder and is responsible for displaying our app. if we removed this nothing will display on our app it will go blank.*/}
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
