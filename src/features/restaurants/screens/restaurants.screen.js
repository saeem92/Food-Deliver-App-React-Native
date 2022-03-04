// We have created this restaurants screen component to show main display screen of our app consists of all the restaurants names and everything
// This component show us our restaurant app screen UI by importing it from restaurant info component it has all the components thats helping us to build our restaurant screen.
// This component is responsible for displaying our app on the screen.
import { FlatList, Pressable, TouchableOpacity } from "react-native";
import { Search } from "../components/search.component";
import React, { useContext, useState } from "react";
import styled from "styled-components/native";
import { RestaurantInfoCard } from "../components/ restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { FavouritesBar } from "../../../components/favourites/favourites-bar.component";

import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { SafeArea } from "../../../components/safe-area.component";
import { ActivityIndicator, Colors } from "react-native-paper";

// NOTE: We do not have to stylesheet when we style our components using styled-components.

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;
// The above component is a styled component for activity indicator to display before our API gets load.

// NOTE: We do not have to stylesheet when we style our components using styled-components.

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

// NOTE: We do not have to stylesheet when we style our components using styled-components.

export const RestaurantsScreen = ({ navigation }) => {
  const { isLoading, restaurants } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);
  // In the context we are going to do our service, call and store the restaurants that we get back and have that pass down and eventually we will be able to load up,
  // All of Sanfrancisco's data and you will see all of these restaurants change

  return (
    <SafeArea>
      {/* Safeareaview is used to make sure UI is according to iOS and do not overlap with the statusbar in iOS we are using */}
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}
      {/* The above code is gonna display activity indicator just before our API loads.*/}
      <Search
         isFavouritesToggled={isToggled}
         onFavouritesToggle={() => setIsToggled(!isToggled)}
       />
       {isToggled && (
         <FavouritesBar favourites={favourites} onNavigate={navigation.navigate} />
       )}
      <RestaurantList
        data={restaurants}
        // IN the above data= {restaurants} is using the property from restaurantinfocardcomponent  */
        renderItem={({ item }) => {
          
          return (
            <TouchableOpacity
               onPress={() =>
                 navigation.navigate("RestaurantDetail", {
                   restaurant: item,
                 })
               }
             >
             {/* In the above code we opened up an object and said the restaurant was equal to item because item is our restaurant 
             So we are passing restaurant en route to restaurantdetail as we go over there */}
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
            </TouchableOpacity>
          );
        }}
        // Spacer is placed here between restaurantinfo so that cards dont stick to each other when moving from top to bottom in flatlist.
        keyExtractor={(item) => item.name}
      />
      {/* FlatList is renamed as restaurantlist using styled-component it is used to create scrolling functionality in our app here data is number of restaurantscreen we want to display and we using name: 1 here because it is the name of our restaurant in restaurantinfocardcomponent we have mentioned it there.
    renderitem is what this component is going to display or render which is RestaurantInfo here
    contentContainerStyle is used to add styling in the flatlist
    When we add data to our FlatList one thing to note is in our app we haven't add any default property or so in our restaurantinfo component so if we want to display restaurantinfo we can add any property like name,icon etc to display our restaurantinfo component.  */}
      {/* The above component <RestaurantInfo /> is imported from restaurant-info-card.component.js file and will display us the list of restaurants in our app with their names. 
      The RestaurantInfo is displaying our card component here.*/}
    </SafeArea>
  );
};
