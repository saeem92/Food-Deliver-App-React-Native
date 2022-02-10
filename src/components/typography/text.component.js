import styled from "styled-components/native";

 const defaultTextStyles = (theme) => `
   font-family: ${theme.fonts.body};
   font-weight: ${theme.fontWeights.regular};
   color: ${theme.colors.text.primary};
   flex-wrap: wrap;
   margin-top: 0px;
   margin-bottom: 0px;
 `;
// if In case our text dont have a variant at all it will use these deafaults.
 const body = (theme) => `
     font-size: ${theme.fontSizes.body};
 `;

 const hint = (theme) => `
     font-size: ${theme.fontSizes.body};
 `;

 const error = (theme) => `
     color: ${theme.colors.text.error};
 `;

 const caption = (theme) => `
     font-size: ${theme.fontSizes.caption};
     font-weight: ${theme.fontWeights.bold};
 `;

 const label = (theme) => `
     font-family: ${theme.fonts.heading};
     font-size: ${theme.fontSizes.body};
     font-weight: ${theme.fontWeights.medium};
 `;

 const variants = {
   body, // These are all keys
   label, // These are all keys
   caption, // These are all keys
   error, // These are all keys
   hint, // These are all keys, variants is the object and these are its keys.
 };
// We have created functions that are named the same way as the keys all of the objects present in const variants are created above as styled-components which have their own styling.
// We are putting keys on the objects of variance


 export const Text = styled.Text`
   ${({ theme }) => defaultTextStyles(theme)}
   ${({ variant, theme }) => variants[variant](theme)}
 `;
// In the first line of the component theme is our object inside defaulttextstyles this line is making sure our default properties are applied when variant is not present. this line is guranteed that we have a default amount of styles.
// The second line variant, theme here we are grabbing the variant and the theme and saying we have a variant here now in const variant we will check the key whether it be body,label,caption etc all mentioned in the const variant component where variant is an object.

 // In the above code we have two dynamic properties written, and we are using the dollar sign with a bracket in order for us to reference the properties of text.
// The property here meaning that we would reference if text had , for instance a <Text variant="something"
// {} the bracket between theme is a shorthand syntax to take the properties off the props object directly basically we are destructuing here. 



Text.defaultProps = {
   variant: "body",
 };