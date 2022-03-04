import React, { useContext, useState, useEffect } from "react";
import MapView from "react-native-maps";
import { MapCallout } from "../components/map-callout.component";
import styled from "styled-components/native";
import { LocationContext } from "../../../services/location/location.context.js";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context.js";
import { Search } from "../components/search.component.js";

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export const MapScreen = ({ navigation }) => {
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantsContext);

  const [latDelta, setLatDelta] = useState(0);

  const { lat, lng, viewport } = location;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);

  return (
    <>
      <Search />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02, // These coordinates are present inside the mock API we built.
        }}
      >
        {restaurants.map((restaurant) => {
            return (
             <MapView.Marker
               key={restaurant.name}
               title={restaurant.name}
               coordinate={{
                 latitude: restaurant.geometry.location.lat,
                 longitude: restaurant.geometry.location.lng,
               }}
               // The above code is pointing markers on the restaurants location inside map.
             >
              <MapView.Callout
                 onPress={() =>
                   navigation.navigate("RestaurantDetail", {
                     restaurant,
                   })
                 }
               >
               {/* The above onpress will navigate us to that restaurant which we click in our map. */}
                 <MapCallout restaurant={restaurant} />
               </MapView.Callout>
             </MapView.Marker>
             
           );
        })}
      </Map>
    </>
  );
};
