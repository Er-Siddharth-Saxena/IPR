import MapWrapper from "../../components/location/mapWrapper"

const LocationPage = () => {
  return (
    <div className="xl:pt-12 pt-24">
      <MapWrapper />
      <div className="h-[60vh]" id="map"></div>
    </div>
  )
}

export default LocationPage