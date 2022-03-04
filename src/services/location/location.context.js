// This file is helping us build our search so when we search for restaurants in a specific area we can display them.
// This file will be able to interact with the service.
import React, { useState, useEffect } from "react";

import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = React.createContext();

export const LocationContextProvider = ({ children }) => { // This method is going to allows us to interact with the location service so as well we need to pass a value.
    const [keyword, setKeyword] = useState("san francisco"); // Here we are making sure that any time we do search it is defaulted to a current place.
    const [location, setLocation] = useState(null); // ALL OF THESE CONST ARE STATES OF THE VALUE WE HAVE CREATED BELOW.
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const onSearch = (searchKeyword) => { // WE have mentioned searchKeyword here to make sure when we trigger onsearch a keyword will be coming in
        setIsLoading(true)
        setKeyword(searchKeyword); // any time we trigger the searchfunction its going to bring us in a keyword.
    };
    useEffect(() => {
       // onSearch(keyword); // This is going to set the keyword to the current keyword on render 
       if(!keyword.length){
        // don't do anything
        return;
    }
    locationRequest(keyword.toLowerCase())
    .then(locationTransform)
    .then(result => {
        setIsLoading(false);
        setLocation(result);
    }).catch(error => {
        setIsLoading(false);
        setError(error);
    });
    }, [keyword]);

    return (
        <LocationContext.Provider
        value={{
            isLoading, // These are multiple states we have created just like we did with the restaurantcontext so our app gets updated based upon the response.
            error,
            location,
            search: onSearch, // this is the search function that is going to trigger the search for a location
            keyword,
        }}  
        >
            {children}
        </LocationContext.Provider>
    );
};