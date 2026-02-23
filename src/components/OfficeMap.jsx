import React from "react";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";

// Coordinates for Obum Plaza, Wuse 2, Abuja
const center = { lat: 9.064932, lng: 7.479576 };
const containerStyle = {
  width: "100%",
  height: "400px",
};

// Optional: Custom marker icon (green pin)
const markerIcon = {
  path: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z",
  fillColor: "#3D9346",
  fillOpacity: 1,
  strokeWeight: 0,
  scale: 2,
  anchor: { x: 12, y: 24 },
};

const OfficeMap = () => {
  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={17}>
        <Marker position={center} icon={markerIcon} />
      </GoogleMap>
    </LoadScript>
  );
};

export default OfficeMap;
