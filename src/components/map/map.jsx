import "leaflet/dist/leaflet.css";
import { useState } from "react";
import styles from "./map.module.css";
import { Link } from "react-router-dom";

import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
const Map = ({}) => {
  // eslint-disable-next-line no-undef
  const LeafIcon = L.Icon.extend({
    options: {},
  });

  const blueIcon = new LeafIcon({
    iconUrl: "./icons8-map-50.png",
  });
  const [icon, setIcon] = useState(blueIcon);
  const [show, setShow] = useState(false);
  const [t, sett] = useState("baba-taher");
  const [b, setb] = useState("bu-ali");

  return (
    <>
      <MapContainer
        className={styles.map}
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={[51.505, -0.09]} icon={icon}>
          <Popup className={styles.marker}>
            <div className={styles.box}>
              <div className={styles.buttonBox}>
                <Link to={`/locations/${t}`}>
                  <button className={styles.button}>نمایش محل های اسکان</button>
                </Link>

                <button className={styles.button}>
                  نمایش کسب و کارهای محلی
                </button>
              </div>
            </div>
          </Popup>
        </Marker>

        <Marker position={[51.505, -0.1]} icon={icon}>
          <Popup className={styles.marker}>
            <div className={styles.box}>
              <div className={styles.buttonBox}>
                <Link to={`/locations/${b}`}>
                  <button className={styles.button}>نمایش محل های اسکان</button>
                </Link>

                <button className={styles.button}>
                  نمایش کسب و کارهای محلی
                </button>
              </div>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
};

export default Map;
