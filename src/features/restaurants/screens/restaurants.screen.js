// We have created this restaurants screen component to show main display screen of our app consists of all the restaurants names and everything
// This component show us our restaurant app screen UI by importing it from restaurant info component it has all the components thats helping us to build our restaurant screen.
// This component is responsible for displaying our app on the screen.
import { StatusBar, StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";
import React from "react";
import styled from "styled-components/native";
import { RestaurantInfo } from "../components/ restaurant-info-card.component";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;
// IN the above SafeArea we have created a const component SafeArea to style our SafeArea we are doing by using styled-components that we have imported and installed.

// We have used reference variable here for statusbar.currentHeight as we cannot write it normally because we are writing it in a weird template.
// NOTE: We do not have to stylesheet when we style our components using styled-components.

const SearchContainer = styled.View`
  padding: 16px;
`;
// IN the above SerachContainer we have created a const component SearchContainer which is a view that holds our searchbar and we have give it some padding to give it some space.
// NOTE: We do not have to stylesheet when we style our components using styled-components.

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: 16px;
  background-color: white;
`;
// IN the above code we have given flex:1 in this view so that it will fill the screen completely and fill stick to the constraints of the screen.
// IN the above RestaurantListContainer we have created a const component RestaurantListContainer to style our SafeArea we are doing by using styled-components that we have imported and installed.
// NOTE: We do not have to stylesheet when we style our components using styled-components.

export const RestaurantsScreen = () => (
  <SafeArea>
    {/* Safeareaview is used to make sure UI is according to iOS and do not overlap with the statusbar in iOS we are using */}
    <SearchContainer>
      {/* The searchcontainer is a view we have created where our searchbar lies we have created a styled-component of this view component above and named it search container. */}
      <Searchbar />
      {/* The search bar is imported from react native paper and is helping us to add a searchbox in our app. */}
    </SearchContainer>
    <RestaurantListContainer>
      {/* This RestaurantListContainer is our View component which we have styled using styled-component created with a name RestaurantListContainer */}
      <RestaurantInfo />
      {/* The above component is imported from restaurant-info-card.component.js file and will display us the list of restaurants in our app with their names. 
      The RestaurantInfo is displaying our card component here.*/}
    </RestaurantListContainer>
  </SafeArea>
);