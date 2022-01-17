// This component is responsible for showing all restaurant names and details and is exported in restaurant.screen.js
// Comment for further details
// Comment to add more details about this component.
// In the below code we have created a RestaurantInfo component which is taking a specific restaurant as an object, Then we have created a const which has all the properties that our restaurant going to have it consist name,icon,photos,address,open,rating,close then we have set this const = restaurant
import React from "react";
import {Text} from "react-native" 

export const RestaurantInfo = ({ restaurant = {} }) => { // Here our RestaurantInfo will take an object {restaurant}. We have to set restaurant to be an empty object else its going to be UNDEFINED and if its undefined our code will break.
    // Below code is building some mock information for us to set the scene and start building out our card component.
    const {
        name = 'Some Restaurant',
        icon,
        photos = [
            "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-bugers-home-made-600x899.jpg"
        ],
        address = "100 some random street",
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily, // All of this information is going to map to information that we are going to be able to get back from our google API once we integrate that later.
        // We are trying to determine the shape of the object we are trying to get 
    } = restaurant; // This is de structuring Here our restaurant is an object that contains properties that we are taking properties off of restaurant restaurant is the object that contains properties. this is the object that we have mentioned above in export const restaurantInfo
    return<Text>{name}</Text>
}