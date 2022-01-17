// We have created this restaurants screen component to show main display screen of our app consists of all the restaurants names and everything
// This component show us our restaurant app screen UI by importing it from restaurant info component it has all the components thats helping us to build our restaurant screen.
// This component is responsible for displaying our app on the screen.
import { StatusBar, StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";
import React from "react";
import { RestaurantInfo } from "../components/ restaurant-info.component";

export const RestaurantsScreen = () => (
  <SafeAreaView style={styles.statusbarfix}>
    {/* Safeareaview is used to make sure UI is according to iOS and do not overlap with the statusbar in iOS we are using */}
    <View style={styles.search}>
      <Searchbar />
      {/* The search bar is imported from react native paper and is helping us to add a searchbox in our app. */}
    </View>
    <View style={styles.list}>
      {/* IN the above code we have given flex:1 in this view so that it will fill the screen completely and fill stick to the constraints of the screen.*/}
      <RestaurantInfo />
      {/* The above component is imported from restaurant-info.component.js file and will display us the list of restaurants in our app with their names. */}
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  statusbarfix: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    //  flex:1 in the above is to make sure you always fill the parent
    // In the above code StatusBar.currentHeight is a android only function which takes care of the height of the status bar across all android devices.
  },

  search: {
    padding: 16,
    backgroundColor: "white",
  },

  list: { flex: 1, padding: 16, backgroundColor: "blue" },
});
