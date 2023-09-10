import React, { useState } from "react";
import GoogleMapReact from 'google-map-react';
import Marker from "./Maker";
import useFetch from "../../hooks/useFetch";
import { useEffect } from "react";


const MapContainer = (props) => {
  const { data } = useFetch("/api/nestingSites");
  const [location, setLocation] = useState([]);

  useEffect(() => {
    if (Array.isArray(data)) { // Check if data is an array
      const locationData = data.map((resItem, index) => {
        const latitude = resItem.latitude;
        const longitude = resItem.longitude;
        const name = resItem.location;
        return {
          lat: latitude,
          lng: longitude,
          text: name,
        };
      });

      setLocation(locationData); // Update location state
    }
  }, [data]);


  const initialCenter = { lat: 7.8731, lng: 80.7718 };
  return (
    <div style={{ height: '800px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyB8BbO_t_LXJLuBuHLnRMvXBJH8_S7q2IM' }} // Replace with your API key
        defaultCenter={initialCenter}
        defaultZoom={8}
      >
        {location.map((location, index) => (
          <Marker key={index} lat={location.lat} lng={location.lng} text={location.text} />
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default (MapContainer);
