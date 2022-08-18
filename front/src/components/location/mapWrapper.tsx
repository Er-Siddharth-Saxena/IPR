import Wrapper, { Status } from "./wrapper";
import MapComponent from "./mapComponent";

const render = (status:any) => {
  if (status === Status.LOADING) return <p>Loading...</p>;
  if (status === Status.FAILURE) return <p>Error...</p>;
  return null;
};

const MapWrapper = () => (
  <Wrapper apiKey="AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo" render={render}>
    <MapComponent />
  </Wrapper>
);

export default MapWrapper;
