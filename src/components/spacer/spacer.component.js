import React from "react";
import {View} from "react-native";
import styled, {useTheme} from "styled-components/native";
// usetheme is a hook that style system gives us.
// THIS IS OUR SPACER COMPONENT WE HAVE CREATED THIS TO ADD MARGIN INSIDE OUR CARD COMPONENT.
// WE ARE USING IT TO PUSH OUR ICON,OPENOW SVG AND CLOSED TEMPORARILY TEXT TO THE LEFT IN CARD COMPONENT WITHOUT USING ADDTIONAL INLINE STYLING WHICH WAS MAKING OUR CODE REDUNDANT.

 const sizeVariant = {
   small: 1,
   medium: 2,
   large: 3,
 };
// The sizeVariant component is taking sizes from sizes.js file. 1 2 3 are the index of the array that is created in sizes.js

 const positionVariant = {
   top: "marginTop",
   left: "marginLeft",
   right: "marginRight",
   bottom: "marginBottom",
 };
// WE have created this component position variant which is helping us defining our positioning inside restaurantinfocardcomponent it means,
// if we are saying top i.e marginTop if we are saying left i.e marginLeft etc.


 const getVariant = (position, size, theme) => {
   const sizeIndex = sizeVariant[size];
   const property = positionVariant[position];
   const value = theme.space[sizeIndex];

   return `${property}:${value}`;
 };
// The above component is helping us to take position and size specified in RestaurantCardComponent that we mentioned and use the size and positioning based upon it.
// All of this is done with the help of props.
// ${} is used in the above component to construct a String
const SpacerView = styled.View`
${({variant}) => variant};
`;

 export const Spacer = ({position, size, children}) => {
  const theme = useTheme();
  const variant = getVariant(position, size, theme);
  return <SpacerView variant= {variant}>{children}</SpacerView>
};
// Exporting the result inside the restaurantinfocard component or any other component using spacer. 
// ${({ position, size, theme }) => getVariant(position, size, theme)} This is a dynamic function we are running inside of the render body of the styled view
// This was causing an error while running in android so we removed it and created SpacerView Component to do the same thing.

 Spacer.defaultProps = {
   position: "top",
   size: "small",
 };
 // The above spacer.defaultoprops component is helping us to create a default size for the spacer component if we havent selected any size.