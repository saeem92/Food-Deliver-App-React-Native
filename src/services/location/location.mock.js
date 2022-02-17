// This file is going to export a certain amount of information from every single city that we want to get information from
export const locations = {
    antwerp: {
      results: [
        {
          geometry: {
            location: {
              lng: 4.402464,
              lat: 51.219448,
              /* location: {
              lng: 4.402464,
              lat: 51.219448, This will allow us to find the city that we are trying to get restaurants for.*/
            },
            viewport: {
              northeast: {
                lat: 51.2145994302915,
                lng: 4.418074130291502,
              },
              southwest: {
                lat: 51.2119014697085,
                lng: 4.415376169708497,
                /* viewport: {
              northeast: {
                lat: 51.2145994302915,
                lng: 4.418074130291502,
              },
              southwest: {
                lat: 51.2119014697085,
                lng: 4.415376169708497, THIS IS HELPING US TO CONFIGURE OUR MAP VIEW IN ORDER TO RENDER OUT THE LOCATION CORRECTLY.*/
              },
            },
          },
        },
      ],
    },
    "san francisco": {
      results: [
        {
          geometry: {
            location: { lat: 37.7749295, lng: -122.4194155 },
            viewport: {
              northeast: { lat: 37.812, lng: -122.3482 },
              southwest: { lat: 37.70339999999999, lng: -122.527 },
            },
          },
        },
      ],
      status: "OK",
    },
    chicago: {
      results: [
        {
          geometry: {
            location: {
              lng: -87.629799,
              lat: 41.878113,
            },
            viewport: {
              northeast: {
                lat: 41.88758823029149,
                lng: -87.6194830697085,
              },
              southwest: {
                lat: 41.88489026970849,
                lng: -87.6221810302915,
              },
            },
          },
        },
      ],
    },
    toronto: {
      results: [
        {
          geometry: {
            location: {
              lng: -79.383186,
              lat: 43.653225,
            },
            viewport: {
              northeast: {
                lat: 43.64794098029149,
                lng: -79.37325551970848,
              },
              southwest: {
                lat: 43.6452430197085,
                lng: -79.37595348029149,
              },
            },
          },
        },
      ],
    },
  };