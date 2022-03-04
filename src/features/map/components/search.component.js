import React, { useContext, useState, useEffect } from "react";
 import styled from "styled-components/native";
 import { Searchbar } from "react-native-paper";

 import { LocationContext } from "../../../services/location/location.context";

 const SearchContainer = styled.View`
   padding: ${(props) => props.theme.space[3]};
   position: absolute;
   z-index: 999;
   top: 1px;
   width: 100%;
 `;

 export const Search = ({ isFavouritesToggled, onFavouritesToggle }) => {
   const { keyword, search } = useContext(LocationContext);
   const [searchKeyword, setSearchKeyword] = useState(keyword);
   useEffect(() => {
     setSearchKeyword(keyword);
   }, [keyword]); // This will set the map keyword to the search result we did in restaurants.
   return (
     <SearchContainer>
       <Searchbar
        icon={isFavouritesToggled ? "heart" : "heart-outline"}
         onIconPress={onFavouritesToggle}
         placeholder="Search for a location"
         value={searchKeyword}
         onSubmitEditing={() => {
           search(searchKeyword);
         }}
         onChangeText={(text) => {
           setSearchKeyword(text);
         }}
       />
     </SearchContainer>
   );
 };