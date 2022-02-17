/* THIS FILE WILL DO SOMETHING SIMILAR TO WHAT RESTAURANT SERVICE FILE DID BUT IT'S GOING TO WORK A LITTLE DIFFRENTLY THAN THAT.*/
import camelize from "camelize";
import { locations } from "./location.mock";

export const locationRequest = (searchTerm) => {
   return new Promise((resolve, reject) => {
       const locationMock = locations[searchTerm];
       if(!locationMock){
           reject("not found")
       }
       resolve(locationMock);
   });
};

export const locationTransform = (result) => {
    const formattedResponse = camelize(result);
      const {geometry = {} } = formattedResponse.results[0];
      // I have use results[0]; zero is because our value is available in location.mock in an array and we are getting it from the first element of the array so hence its zero
      const {lat, lng} = geometry.location;
      return {lat, lng};
    };
