// This file is going to do 

import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";

import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
   {
    /* In the above code we are using props to set padding from infrastructure folder and we are doing theming here. */
  }
`;
// IN the above SerachContainer we have created a const component SearchContainer which is a view that holds our searchbar and we have give it some padding to give it some space.
  export const Search = ({ isFavouritesToggled, onFavouritesToggle }) => {
    const { keyword, search } = useContext(LocationContext);
    const [searchKeyword, setSearchKeyword] = useState(keyword);
    useEffect(() => {
      setSearchKeyword(keyword);
    }, [keyword]);
    // The above useeffect will change the keyword in retaurants with the same keyword we did in maps
    return (
      <SearchContainer>
      {/* The searchcontainer is a view we have created where our searchbar lies we have created a styled-component of this view component above and named it search container. */}
        <Searchbar
       icon={isFavouritesToggled ? "heart" : "heart-outline"}
         onIconPress={onFavouritesToggle}
          placeholder="Search for a location"
          value={searchKeyword}
          // onSubmitEditing is a function that is going to allow the program to trigger the search.
          onSubmitEditing={() => {
            search(searchKeyword);
          }}
          // Below onChangeText is going to be a lifecyle method that is going to trigger every time the text changes we are going to set the searchkeyword to text.
          onChangeText={(text) => {
            setSearchKeyword(text);
          }}
        />
        {/* The search bar is imported from react native paper and is helping us to add a searchbox in our app. */}
      </SearchContainer>
    );
  };