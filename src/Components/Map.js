import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './Styles/map.css'
import 'leaflet/dist/leaflet.css'
import L from "leaflet";
import { useContext } from 'react';
import { GarbageContext } from '../Providers/GarbageProvider';
import { useEffect, useState } from 'react/cjs/react.development';
import ReactLeafletDriftMarker from "react-leaflet-drift-marker"

const customMarker = new L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [13, 0]
});


export default function Map() {

    const { positions } = useContext(GarbageContext)

    let [close, setClose] = useState(true)


    useEffect(() => {
        // console.log(positions)
    },[positions])

    return (
        
        <div id={close ? "map-closed" : "map-showed"}>
            <div className='close'> 
                { close ? 
                    <div onClick={() => setClose(false)}> OPEN </div> :  <div onClick={() => setClose(true)}> CLOSE </div>
                }
            </div>
            <MapContainer center={[48.86628, 2.37361]} zoom={11} scrollWheelZoom={false} >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            
            { positions ? Object.entries(positions).map(([key,data]) => {
                return (
                <Marker key={key} position={[data.location.latitude, data.location.longitude]} icon={customMarker}>
                    <Popup>
                        <p>this is someone</p>
                    </Popup>
                </Marker> )
            }) : <p>yo</p> }
            </MapContainer>
        </div>
    )
}



// 48.86628, 2.37361