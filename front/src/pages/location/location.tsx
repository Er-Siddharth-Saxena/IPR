import React, { useEffect, useRef, ReactElement } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper"

const GOOGLE_MAPS_API="AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo"

const render = (status: Status) => {
  return <h1>{status}</h1>;
};

<Wrapper apiKey={"YOUR_API_KEY"} render={render}>
  {/* <YourComponent/> */}
</Wrapper>



// const render = (status: Status): ReactElement => {
//   if (status === Status.LOADING) return <h3>{status} ..</h3>;
//   if (status === Status.FAILURE) return <h3>{status} ...</h3>;
//   return <></>;
// };

// function MyMapComponent({
//   center,
//   zoom,
// }: {
//   center: google.maps.LatLngLiteral;
//   zoom: number;
// }) {
//   const ref = useRef(null);

//   useEffect(() => {
//     new window.google.maps.Map(ref.current, {
//       center,
//       zoom,
//     });
//   });

//   return <div ref={ref} id="map" />;
// }

function Location() {
  const center = { lat: -34.397, lng: 150.644 };
  const zoom = 4;

  return (
    <div className="xl:pt-12 pt-24 flex flex-row justify-evenly items-center">
    <Wrapper apiKey={GOOGLE_MAPS_API} render={render}>
      {/* <MyMapComponent center={center} zoom={zoom} /> */}
    </Wrapper>
    </div>
  );
}

export default Location;