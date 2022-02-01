import { StatusBar as ExpoStatusBar } from "expo-status-bar";
{
  /* Above we have renamed status bar as expostatusbar this is know as rename action in an import*/
}
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme/";


export default function App() {
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

