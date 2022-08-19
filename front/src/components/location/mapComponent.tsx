import MarkerClusterer from "@googlemaps/markerclustererplus";

const locations = [
  { lat: 12.12, lng: 76.68 },
  { lat: 24.879999, lng: 74.629997 },
  { lat: 16.994444, lng: 73.300003 },
  { lat: 19.155001, lng: 72.849998 },
  { lat: 24.7945, lng: 73.055 },
  { lat: 21.25, lng: 81.629997 },
  { lat: 16.1667, lng: 74.833298 },
  { lat: 26.85, lng: 80.949997 },
  { lat: 28.679079, lng: 77.06971 },
  { lat: 19.07609, lng: 72.877426 },
  { lat: 14.16704, lng: 75.040298 },
  { lat: 26.540457, lng: 88.719391 },
  { lat: 24.633568, lng: 87.849251 },
  { lat: 28.440554, lng: 74.493011 },
  { lat: 24.882618, lng: 72.858894 },
  { lat: 16.779877, lng: 74.556374 },
  { lat: 12.715035, lng: 77.281296 },
  { lat: 13.432515, lng: 77.727478 },
  { lat: 12.651805, lng: 77.208946 },
  { lat: 22.728392, lng: 71.637077 },
  { lat: 9.383452, lng: 76.574059 },
  { lat: 14.623801, lng: 75.621788 },
  { lat: 10.92544, lng: 79.838005 },
  { lat: 15.852792, lng: 74.498703 },
  { lat: 19.354979, lng: 84.986732 },
  { lat: 23.905445, lng: 87.52462 },
  { lat: 20.296059, lng: 85.824539 },
  { lat: 21.105001, lng: 71.771645 },
  { lat: 30.172716, lng: 77.299492 },
  { lat: 25.477585, lng: 85.709091 },
  { lat: 21.045521, lng: 75.801094 },
  { lat: 26.49189, lng: 89.5271 },
  { lat: 8.893212, lng: 76.614143 },
  { lat: 22.430889, lng: 87.321487 },
  { lat: 23.849325, lng: 72.126625 },
  { lat: 11.786253, lng: 77.800781 },
  { lat: 13.583274, lng: 76.540154 },
  { lat: 14.530457, lng: 75.801094 },
  { lat: 18.901457, lng: 73.176132 },
  { lat: 22.96051, lng: 88.567406 },
  { lat: 15.756595, lng: 76.192696 },
  { lat: 22.656015, lng: 86.352882 },
  { lat: 25.989836, lng: 79.450035 },
  { lat: 23.223047, lng: 82.87056 },
  { lat: 19.186354, lng: 73.191948 },
  { lat: 30.525005, lng: 75.890121 },
  { lat: 22.422455, lng: 85.760651 },
  { lat: 18.106659, lng: 83.395554 },
  { lat: 21.190449, lng: 81.28492 },
  { lat: 23.597969, lng: 72.969818 },
  { lat: 28.590361, lng: 78.571762 },
  { lat: 25.369179, lng: 85.53006 },
  { lat: 11.623377, lng: 92.726486 },
  { lat: 24.618393, lng: 88.024338 },
  { lat: 23.546757, lng: 74.43383 },
  { lat: 41.643414, lng: 41.6399 },
  { lat: 25.077787, lng: 87.900375 },
  { lat: 29.854263, lng: 77.888 },
  { lat: 14.913181, lng: 79.992981 },
  { lat: 14.413745, lng: 77.712616 },
  { lat: 18.101904, lng: 78.852074 },
  { lat: 23.173939, lng: 81.565125 },
  { lat: 15.812074, lng: 80.355377 },
  { lat: 15.764501, lng: 79.259491 },
  { lat: 10.311879, lng: 76.331978 },
  { lat: 21.961946, lng: 70.792297 },
  { lat: 16.544893, lng: 81.52124 },
  { lat: 21.04954, lng: 76.532028 },
  { lat: 26.182245, lng: 91.754723 },
  { lat: 27.897551, lng: 77.384117 },
  { lat: 18.245655, lng: 76.505356 },
  { lat: 23.486839, lng: 75.659157 },
  { lat: 32.041943, lng: 75.405334 },
  { lat: 24.47438, lng: 85.688744 },
  { lat: 23.427221, lng: 87.287018 },
  { lat: 19.487707, lng: 75.380768 },
  { lat: 19.85306, lng: 74.000633 },
  { lat: 15.167409, lng: 77.373627 },
  { lat: 24.417534, lng: 88.250343 },
  { lat: 22.744108, lng: 77.736969 },
  { lat: 14.752805, lng: 78.552757 },
  { lat: 23.520399, lng: 87.311897 },
  { lat: 25.771315, lng: 73.323685 },
  { lat: 28.148735, lng: 77.332024 },
  { lat: 29.138407, lng: 76.693245 },
  { lat: 25.37571, lng: 86.474373 },
  { lat: 20.388794, lng: 78.120407 },
  { lat: 23.669296, lng: 86.151115 },
  { lat: 21.761524, lng: 70.627625 },
  { lat: 22.657402, lng: 88.86718 },
  { lat: 22.700474, lng: 88.319069 },
  { lat: 23.344315, lng: 85.296013 },
  { lat: 14.146319, lng: 79.850388 },
  { lat: 28.078636, lng: 80.471588 },
  { lat: 27.108416, lng: 78.584602 },
  { lat: 9.823619, lng: 77.986565 },
  { lat: 12.946366, lng: 79.959244 },
  { lat: 17.143908, lng: 79.623924 },
  { lat: 13.340881, lng: 74.742142 },
  { lat: 15.478569, lng: 78.483093 },
];

const MapComponent = () => {
  const mapElement = document.getElementById("map")!;
  const map = new google.maps.Map(mapElement, {
    center: { lat: 28.6139, lng: 77.209 },
    zoom: 6,
  });

  // Create an array of alphabetical characters used to label the markers.
  const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // Add some markers to the map.
  // Note: The code uses the JavaScript Array.prototype.map() method to
  // create an array of markers based on a given "locations" array.
  // The map() method here has nothing to do with the Google Maps API.
  const markers = locations.map((location, i) => {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length],
    });
  });

  // Add a marker clusterer to manage the markers.
  new MarkerClusterer(map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });

  return null;
};

export default MapComponent;
