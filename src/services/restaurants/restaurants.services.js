// THE SERVICES FOLDER IS WHERE WE ARE GOING TO CREATE ALL OF OUR LOGIC AROUND
// TALKING TO EXTERNAL SERVICES HAPPEN, WHETHER IT BE GOOGLE FIREABASE OR WHAT NOT
// SERVICES IS WHERE WE ARE GOING TO TALK TO THE SERVERS 
// the service file operate as a layer in between the context, the react native application and the external service provider like google.
// what we are doing is we are not taking API from google API called we aren't implmenting right now.
// There's way more that needs to go into that so what we are doing is we are faking it we are not integrating against google
// BUT WE ARE HAVING LOCAL FILES THAT HAVE THE INFORMATION THAT'S STRUCTURES IN THE SAME WAY THAT GOOGLE WOULD SEND THIS BACK INFORMATION BUT WHAT WE DOING IS WE ARE STORING THEM LOCALLY ON THE PHONE.
// AND THAT WAY WE CAN BUILD OUR IMPLEMENTATION AS IF WE ARE TALKING TO GOOGLE AND LATER ON 
// WHEN WE ACTUALLY DO TALK TO GOOGLE IT'S GOING TO BE A QUESTION OF JUST SWITCHING SOME THINGS AROUND, BECAUSE THE WAY THAT OUR APP UNDERSTAND THE INFORMATION IS ALREADY THERE.

// SINCE WE ARE USING REACT NATIVE WE ARE GOING TO BE USING THE REACT CONTEXT WE ARE GOING TO HAVE A SERVICE FILE THAT'S GOING TO OPERATE AS AN INTERMEDIATE BETWEEN OUR APP AND THE EXTERNAL SERVICE.
// WE ARE GOING TO MOCK THE EXTERNAL SERVICE WE AREN'T GOING TO MAKE IT AS IF THE EXTERNAL SERVICE IS REAL. AND TO DO THAT WE NEED TO BUILD OUT THIS SERVICE ORIENTED ARCHITECTURE SERVICE LAYER. AND FOR EVERY SUBSEQUEST FEATURE WE WILL BE USING SOMETHING SIMILAR RELATIVELY SIMILAR ALTHOUGH WE MIGHT CHANGED THINGS A BIT BASED ON THE SITUTATION.
import { mocks, mockImages } from "./mock";
import  camelize  from "camelize";

export const restaurantsRequest = (location = "37.7749295,-122.4194155") => {
      return new Promise((resolve, reject) => {
          const mock = mocks[location];
          if(!mock){
              reject("not found");
          }
          resolve(mock);
      });
};
// ((resolve, reject) THIS WILL RETURN A NEW FUNCTION INTERNALLY THAT HAS A RESOLVE AND REJECT FUNCTION
// The above component will help us to make a request to get restaurants.
// Here first you have to think what is my restaurant request need in order to get the information for the restaurants.
// Here we used a location prop and default location is sanfrancisco which we are taking from the mock folder.


export const restaurantsTransform = ({results = [] }) => {
    const mappedResults = results.map((restaurant) => {
        restaurant.photos = restaurant.photos.map((p) => {
            return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
          });
        // The above code is helping us take photos from the mock data of the restaurants and display in the app.
        // I have used Math.random so we can get images display randomly to different restaurants.
        return {
           ...restaurant,
           isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
           isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
        };
});
return camelize(mappedResults);
};
// results.map((restaurant) it taking the restaurant prop from the restaurantinfocard component to display the restaurants.
// The above component is helping to camelize result ahead of time.
// map is a function that will iterate over every individual restaurant and will return us restaurants in the mock data.
// We have create isOpenNOw and isClosedTemporarily above as they are not mentioned in the mock data or we dont' know how mock data appears so we have created a property to make sure it works. 

// THIS FILE IS CREATING AN END TO END FLOW SET UP TO GET THE INFORMATION FROM THE JSON FILES RENDERING ON THE SCREEN,
// AND DYNAMICALLY RENDERING WE CAN SEE HOW POWERFUL THE ENTIRE SETUP WE WENT THROUGH.









//  WE DONT NEED THE BELOW CODE I WILL USE IT SOMEWHERE ELSE.
// restaurantsRequest()
// .then(restaurantsTransform)
// .then(transformedResponse => {
//     console.log(transformedResponse);
// })
// .catch((err) => {
//     console.log("error")
// });
// WE are wrapping our result here (camelize(result)); with camelize to wrap our result to be camelized
// Anytime you create a promise it is now .then() able basically it means it is waiting for something in the future.
// This is a way of saying restaurant request is not going to return immediately is going to return sometime in the future.
// .then is giving us a result in as an inner function by doing the above syntax we will be resolving the inner function and will have the result.
// We have used .catch((err) above so we could see what would happen if we got error.
// restaurantsRequest().then((result) this will give us the promised result to get back at a later phase 

// WITH ALL OF THE ABOVE THINGS WE ARE MIMICKING AN API IN A VERY SIMPLE WAY.
// We are using camelize here because we don't know how you api is returning new data on the backend they may have different principles and they may use underscores or dot something different we dont't really know but WE WANT TO CREATE CONSISTENCY FOR THE APPLICATION.
// SO IN CASE IF AN API RETURNING IN A DIFFERENT WAY WE WILL STILL HAVE CONSISTENCY THAT'S WHY WE USE CAMELIZE
// This is an optimization that allows us to create consistency for the information coming in.