import React, { useState, createContext, useEffect, useMemo } from "react";
import { Children } from "react/cjs/react.production.min";
// In the context we are going to do our service, call and store the restaurants that we get back and have that pass down and eventually we will be able to load up,
// All of Sanfrancisco's data and you will see all of these restaurants change
import { restaurantsRequest, restaurantsTransform } from "./restaurants.services";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
    // The children in react refer to the generic box whose contents are unknown until they are passed from the parent component.
    // it simple means that the component will display whatever is included in between the opening and closing tags while invoking the component.
    
    const [restaurants, setRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const retrieveRestaurants = () => {
        setIsLoading(true);
        setTimeout(() => {
            restaurantsRequest()
            .then(restaurantsTransform)
            .then((results) => {
                setIsLoading(false);
                setRestaurants(results);
            })
            .catch((err => {
                setIsLoading(false);
                setError(err);
            }));
        }, 1500);
        // The above function is helping us create a loading time so that our mock API can act like a real API and will load after 2 seconds
    };
    useEffect(() => {
       retrieveRestaurants();
    }, []);
    // useEffect(() this is saying run the useEffect when the component mounts
    // When this component mounts when the restaurant context provider mounts we're going to do some 
    return (
        <RestaurantsContext.Provider 
        
        value ={{
            restaurants: restaurants,
            isLoading,
            error
            // Whatever name we give here will be used to display our restaurants for eg data= {restaurantContext.restaurants} we are using restaurantContext.restaurants in the data to display the restaurants.
        }}
        >
            {children}
        </RestaurantsContext.Provider>
    )
}
// The above component will wrap the app and provides it certain state
// ({ children }) we are grabbing this children out of the props 

// What we did here is went to app.js and we wrapped it with the restaurantContextProvider that we created here in the RestaurantContext.
// And it returns the restaurantContext.provider and gives it the initial value of 1,2,3
/* return (
        <RestaurantsContext.Provider value ={{
            restaurants: [1, 2, 3],
        }}
        >
            {children}
        </RestaurantsContext.Provider>
    ) this component is doing most of the heavy lifting and then telling the context what it\s going to contain as a value.
    and that value can be passed around along the tree below app.js
    
    */
