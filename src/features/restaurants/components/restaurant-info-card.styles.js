// This file will contain all the styles for our restaurant-info-card component we are basically shifting styles from there to here in this file.
import styled from "styled-components/native"
import { Card } from "react-native-paper";

export const Icon = styled.Image`
width: 15px;
height: 15px;
`;
// Styled-component for our icon present in restaurantcardcomponent.

export const RestaurantCard = styled(Card)`
  background-color: white;
`;
// RestaurantCard is a styled-component we created above to style our card component.

export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]}; ;
`;
// Const info is used here to add spacing between restaurant name and the card component or image.

export const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]}; ;
`;
// Our stars were aligning underneath each other because flex is default to column so,
// We have created a styled-component above and changed flex to row from column.
// Here padding is adding decent amount of space between the rating and the address and the name of the restaurant..

export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
   {
    /* In the above and below code we are using props from infrastructure folder and we are doing theming here. */
  }
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
// RestaurantCardCover is a styled-component we created above to style our cardcover component.

export const Address = styled.Text`
   font-family: ${(props) => props.theme.fonts.body};
   font-size: ${(props) => props.theme.fontSizes.caption};
 `;
// The above component is a styled-component used to style address of the restaurant.

export const Section = styled.View`
  flex-direction: row; {/* Here this flex direction is helping us to arrange our stars and open now in a row style else they will appear at center 
  and both our stars and opennow svg will lie beneath each other in column style.*/}
  align-items: center;
`; 
// The above is a Section styled-component this is helping us to center our opennow svg.
// Here row means that its going to put content inside in a row style syntax
// And align-items to the center of the card cover which has name rating and address of the restaurant,.


export const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;
// The above is a SectionEnd styled-component this is helping us to center our opennow svg.
// Here our SectionEnd is doing the same thing its going to put content inside in a row style syntax
// The end outcome of this is that its going to push our opennow svg to the side
// Flex:1 is helping us to push our opennow svg to the side.



