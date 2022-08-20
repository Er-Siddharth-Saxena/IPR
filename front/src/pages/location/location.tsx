import MapWrapper from "../../components/location/mapWrapper"

const LocationPage = () => {
  return (
    <div className="">
      <MapWrapper />
      <div className="h-[60vh]" id="map"></div>
    </div>
  )
}

export default LocationPage