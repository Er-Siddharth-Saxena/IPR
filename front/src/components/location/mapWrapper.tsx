import Wrapper, { Status } from "./wrapper";
import MapComponent from "./mapComponent";

const render = (status:any) => {
  if (status === Status.LOADING) return <p>Loading...</p>;
  if (status === Status.FAILURE) return <p>Error...</p>;
  return null;
};

const MapWrapper = () => (
  <Wrapper apiKey={process.env.REACT_APP_MAP_KEY} render={render}>
    <MapComponent />
  </Wrapper>
);

export default MapWrapper;
