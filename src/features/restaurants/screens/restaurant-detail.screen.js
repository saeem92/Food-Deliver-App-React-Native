// This file will display a screen when we click on the restaurant card.
import React from "react";

 import { RestaurantInfoCard } from "../components/ restaurant-info-card.component";

 import { SafeArea } from "../../../components/safe-area.component";

 export const RestaurantDetailScreen = ({ route }) => {
    const { restaurant } = route.params; // route.params helps us to pass the information around
    return (
      <SafeArea>
        <RestaurantInfoCard restaurant={restaurant} />
      </SafeArea>
    );
  };