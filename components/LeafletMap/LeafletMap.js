import React from 'react'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import style from '../../styles/Home.module.css'

export default function LeafletMap() {
    const icon = L.icon({ iconUrl: "/images/marker-icon-flip.png" })

    // 1050 W Beech St, Long Beach, NY 11561
    const lattidudeAndLongitude = [40.5859092, -73.7007764]

    return (
        <div>
            <MapContainer
                className={style.map} 
                center={lattidudeAndLongitude}
                zoom={14}
                scrollWheelZoom={true}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                    <Marker position={lattidudeAndLongitude} icon={icon}>
                        <Popup>
                            The Ivy
                        </Popup>
                    </Marker>
            </MapContainer>
        </div>
    )
}
