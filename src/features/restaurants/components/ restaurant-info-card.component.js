// This component is responsible for showing all restaurant names and details and is exported in restaurant.screen.js
// Comment to add more details about this component.
// In the below code we have created a RestaurantInfo component which is taking a specific restaurant as an object, Then we have created a const which has all the properties that our restaurant going to have it consist name,icon,photos,address,open,rating,close then we have set this const = restaurant

import React from "react";
// Here we are importing styled-components that we installed from terminal.
import { SvgXml } from "react-native-svg";
// In the above code we are importing svgXml to use svg in our app.
import star from "../../../../assets/star";
import { View } from "react-native";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { Favourite } from "../../../components/favourites/favourite.component";
// The above import is from text.component.js file where we have created our typography component.

import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Section,
  SectionEnd,
  Rating,
  Icon,
  Address,
} from "./restaurant-info-card.styles";
// The above imports are helping us to style our restaurantcardcomponent and all of the styling is built with styled-components present in restaurant-info-card.styles.js
// All these imports are styled-components present inside restaurant-info-card.styles.js

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  // Here our RestaurantInfo will take an object {restaurant}. We have to set restaurant to be an empty object else its going to be UNDEFINED and if its undefined our code will break.
  // Below code is building some mock information for us to set the scene and start building out our card component.
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true, // All of this information is going to map to information that we are going to be able to get back from our google API once we integrate that later.
    placeId
    // We are trying to determine the shape of the object we are trying to get
  } = restaurant; // This is de structuring Here our restaurant is an object that contains properties that we are taking properties off of restaurant restaurant is the object that contains properties. this is the object that we have mentioned above in export const restaurantInfo

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  // This component is pulling out rating from our const above and is helping us display stars as per restaurant rating.
  // Math.floor is helping us to make sure when we have fraction we will deal that fraction in a whole number we will round of that fraction for example if its 3.2 we will call it 3.

  return (
    <RestaurantCard elevation={5}>
      {/* RestaurantCard is a styled-component we created above to style our card component.*/}
      {/* Here we are using our card component which we have imported from react native paper
        Card component has an elevation of 5 elevations give some shadow area to our card component and make it visible
        styles.card is the styles we have created in our stylesheet */}
        <View>
         <Favourite restaurant={restaurant}/>
         <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
       </View>
      
      {/* Card cover is mainly used to add Image in the card Here key is the restaurant name which will be display on the bottom. Above we have created card cover which is an image added to the card component on the top of it its the top side of our card component which is the large one 
            we can add image in this cover to display it we have give it a source which will display our image in the card component and we gave it a styles.cover 
            styles.cover has padding of 20 we can give more padding depending on how much space you need.
            we have give photos [0] as this is above we have added an image in an array an the url is the 0th element of that array. */}
      <Info>
        <Text variant="label">{name}</Text>
        {/* In the above code we have used text as we have created it's component in text.component.js and we are importing it from there and using it to style the name of the restaurant like its color size etc.*/}
        {/* In the above code name is the prop we have picked from const created above we have added styling to give more space to the restaurant image and pushed away our restaurant name 
            little further than the image and making it look more good you can adjust it accordingly. */}
        <Section>
          {/* We have a section here which is wrapping the entirety of the rating and everything around it
    it contains rating and it contains sectionend which is a special type of component
    To sumup this is acting as a view that has some style which is helping us to put our opennow svg at the corner of the card component.*/}
          <Rating>
            {ratingArray.map((_, i) => (
              <SvgXml 
              key={`star-${placeId}-${i}`} 
              xml={star} 
              width={20} 
              height={20} />
            ))}
            {/* In the above code SvgXml is helping us to use star.js which is a svg file to use it in our app.
    xmo={star} we are using it from star.js file which we have imported above in this file
    We have set the width to 20 and height to 20 to get it fit inside our restaurant card component.
    This is helping us in rating the restaurant by displaying stars.*/}
          </Rating>
          {/* The Rating styled-component is used as a view component here for our stars we have placed our ratingarray.map inside it so our stars get aligned in a row and not column which is default before this our stars were aligning underneath each other. */}
          <SectionEnd>
            {/* SectionEnd is a special type of component we have created here to move our opennow svg in the corner of the card component*/}
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            {/* This is a conditonal if you restaurant is closed its going to show closedrestaurant text */}
            <Spacer position="left" size="large">
              {/* Spacer position is giving padding between CLOSED TEMPORARILY text and icon. */}

              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
              {/* This is a conditonal if you are open now its going to show you an opennow svg */}
            </Spacer>
            <Spacer position="left" size="large">
              {/* Spacer position is giving padding between opennow svg and icon. we have created this inside
            spacer component to help us give some margin to our component inside card. */}
              <Icon source={{ uri: icon }} />
              {/* Here our image style is taking image from our icon and display when closed temporarily condition is true.
          icon image is fetched from the url we have assigned in the icon.*/}
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
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
