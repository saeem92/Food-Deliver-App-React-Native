// This component is responsible for showing all restaurant names and details and is exported in restaurant.screen.js
// Comment for further details
// Comment to add more details about this component.
// In the below code we have created a RestaurantInfo component which is taking a specific restaurant as an object, Then we have created a const which has all the properties that our restaurant going to have it consist name,icon,photos,address,open,rating,close then we have set this const = restaurant

import React from "react";
import styled from "styled-components/native"
// Here we are importing styled-components that we installed from terminal.
import { Text, StyleSheet } from "react-native";
import { Card, TextInput } from "react-native-paper";



const RestaurantCard = styled(Card)`
background-color: white;
`;
// RestaurantCard is a styled-component we created above to style our card component.


const RestaurantCardCover = styled(Card.Cover)`
padding: ${(props) => props.theme.space[3]};
{/* In the above and below code we are using props from infrastructure folder and we are doing theming here. */}
background-color: ${(props) => props.theme.colors.bg.primary};
`;

// RestaurantCardCover is a styled-component we created above to style our cardcover component.

const Title = styled.Text`
padding: 16px;
color: ${(props) => props.theme.colors.ui.primary};
`;
// ${props => props.theme.color.ui.primary we have created it using theming that we have created inside infrastructure through theming.}
// In the above code const Title we have created a styled componenet to style our title component
// We were able to create this component using styled-components and it has a special type of string (``)

export const RestaurantInfo = ({ restaurant = {} }) => {
  // Here our RestaurantInfo will take an object {restaurant}. We have to set restaurant to be an empty object else its going to be UNDEFINED and if its undefined our code will break.
  // Below code is building some mock information for us to set the scene and start building out our card component.
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily, // All of this information is going to map to information that we are going to be able to get back from our google API once we integrate that later.
    // We are trying to determine the shape of the object we are trying to get
  } = restaurant; // This is de structuring Here our restaurant is an object that contains properties that we are taking properties off of restaurant restaurant is the object that contains properties. this is the object that we have mentioned above in export const restaurantInfo

  return (
    <RestaurantCard elevation={5}>
    {/* RestaurantCard is a styled-component we created above to style our card component.*/}
      {/* Here we are using our card component which we have imported from react native paper
        Card component has an elevation of 5 elevations give some shadow area to our card component and make it visible
        styles.card is the styles we have created in our stylesheet */}
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      {/* Card cover is mainly used to add Image in the card Here key is the restaurant name which will be display on the bottom. Above we have created card cover which is an image added to the card component on the top of it its the top side of our card component which is the large one 
            we can add image in this cover to display it we have give it a source which will display our image in the card component and we gave it a styles.cover 
            styles.cover has padding of 20 we can give more padding depending on how much space you need.
            we have give photos [0] as this is above we have added an image in an array an the url is the 0th element of that array. */}
      <Title>{name}</Title>
      {/* In the above code we have used title as we have created it's component above as a styled-component and using it to style the name of the restaurant like its color size etc.*/}
      {/* In the above code name is the prop we have picked from const created above we have added styling to give more space to the restaurant image and pushed away our restaurant name 
            little further than the image and making it look more good you can adjust it accordingly. */}
    </RestaurantCard>
  );
};

// Commented stylesheet as we are using styled-components.

// const styles = StyleSheet.create({
//   card: { backgroundColor: "white" },
//   cover: { padding: 20, backgroundColor: "white" },
//   // We can increase the size of the restaurant name by using Fontsize:
// });
// // Add a comment here if needed.