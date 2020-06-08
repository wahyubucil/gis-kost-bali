import * as React from "react";
import GoogleMapReact from "google-map-react";
import { Marker } from "./Marker";
import { Kost } from "../interfaces/Kost";
import axios from "axios";
import { useKost } from "../context/kost";

const center = {
  lat: -8.670458,
  lng: 115.212529,
};

export const Map = React.memo(() => {
  const [kosts, setKosts] = React.useState<Kost[]>([]);
  const { setKost } = useKost();

  React.useEffect(() => {
    axios
      .get<Kost[]>("/kosts")
      .then(({ data }) => setKosts(data))
      .catch((e) => console.error(e));
  }, []);

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY ?? "",
        }}
        defaultCenter={center}
        defaultZoom={12}
      >
        {kosts.map((kost) => (
          <Marker
            key={kost.id}
            lat={kost.locations[0].latitude}
            lng={kost.locations[0].longitude}
            onClick={() => setKost(kost)}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
});
