import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "../App.css";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            markers: [
                {
                    coordinate1: 60.58567,
                    coordinate2: 5.05376,
                    description: "Dagsturhytta Eldsbu - Alver",
                    link: "https://www.vestlandfylke.no/idrett-og-friluftsliv/dagsturhytta/eldsbu/"
                },
                {
                    coordinate1: 60.68766,
                    coordinate2: 4.91929,
                    description: "Dagsturhytta Sjøbua - Alver"
                },
                {
                    coordinate1: 60.75437,
                    coordinate2: 5.15661,
                    description: "Dagsturhytta Vardebu - Alver"
                },
                {
                    coordinate1: 60.90787,
                    coordinate2: 7.19998,
                    description: "Dagsturhytta Vinjaåsenhytta - Aurland"
                },
                {
                    coordinate1: 60.04907,
                    coordinate2: 5.27754,
                    description: "Dagsturhytta Adlesi - Austevoll"
                },
                {
                    coordinate1: 60.80998,
                    coordinate2: 4.94586,
                    description: "Dagsturhytta Vardetangen - Austrheim"
                },
                {
                    coordinate1: 61.38467,
                    coordinate2: 5.16101,
                    description: "Dagsturhytta Nykshytta - Askvoll"
                },
                {
                    coordinate1: 61.86022,
                    coordinate2: 4.85267,
                    description: "Dagsturhytta Vetehytta - Bremanger"
                },
                {
                    coordinate1: 59.84011,
                    coordinate2: 5.13438,
                    description: "Dagsturhytta Kurebu - Bømlo"
                },
                {
                    coordinate1: 60.76045,
                    coordinate2: 4.71326,
                    description: "Dagsturhytta Aurihophytta - Fedje"
                },
                {
                    coordinate1: 61.27237,
                    coordinate2: 5.04403,
                    description: "Dagsturhytta Vidsyn - Fjaler"
                },
                {
                    coordinate1: 61.78022,
                    coordinate2: 6.22713,
                    description: "Dagsturhytta Draumekvila - Gloppen"
                },
                {
                    coordinate1: 60.98364,
                    coordinate2: 5.0673,
                    description: "Dagsturhytta Gulakvila - Gulen"
                },
                {
                    coordinate1: 61.216,
                    coordinate2: 5.96568,
                    description: "Dagsturhytta Synkenhytta - Høyanger"
                },
                {
                    coordinate1: 61.18431,
                    coordinate2: 5.34277,
                    description: "DDagsturhytta Sørefjordhytta - Hyllestad"
                },
                {
                    coordinate1: 61.62098,
                    coordinate2: 5.32846,
                    description: "Dagsturhytta Fløgjen - Kinn Florø"
                },
                {
                    coordinate1: 61.9247,
                    coordinate2: 5.12965,
                    description: "Dagsturhytta Kletten - Kinn Vågsøy"
                },
                {
                    coordinate1: 60.34879,
                    coordinate2: 6.12156,
                    description: "Dagsturhytta Kvilekroken - Kvam"
                },
                {
                    coordinate1: 61.33445,
                    coordinate2: 7.33443,
                    description: "Dagsturhytta Eikjabu - Luster"
                },
                {
                    coordinate1: 61.10219,
                    coordinate2: 7.48564,
                    description: "Dagsturhytta Mjølkeflathytta - Lærdal"
                },
                {
                    coordinate1: 60.74878,
                    coordinate2: 5.34821,
                    description: "Dagsturhytta Fjordblikk - Masfjorden"
                },
                {
                    coordinate1: 60.38285,
                    coordinate2: 5.71062,
                    description: "Dagsturhytta Prestakvilet - Samnanger"
                },
                {
                    coordinate1: 61.20569,
                    coordinate2: 6.51237,
                    description: "Dagsturhytta Balabu - Sogndal Balestrand"
                },
                {
                    coordinate1: 61.19915,
                    coordinate2: 6.8216,
                    description: "Dagsturhytta Orrabu - Sogndal"
                },
                {
                    coordinate1: 61.22083,
                    coordinate2: 7.09221,
                    description: "Dagsturhytta Stedjeåsen - Sogndal"
                },
                {
                    coordinate1: 61.05069,
                    coordinate2: 4.8604,
                    description: "Dagsturhytta Sognesjøhytta - Solund"
                },
                {
                    coordinate1: 61.92026,
                    coordinate2: 5.8357,
                    description: "Dagsturhytta Naustdalskamben - Stad Eid"
                },
                {
                    coordinate1: 62.04484,
                    coordinate2: 5.35661,
                    description: "Dagsturhytta Sjøglytt - Stad Selje"
                },
                {
                    coordinate1: 61.57307,
                    coordinate2: 6.46113,
                    description: "Dagsturhytta Fjellro - Sunnfjord"
                },
                {
                    coordinate1: 61.45569,
                    coordinate2: 5.91461,
                    description: "Dagsturhytta Gytta - Sunnfjord"
                },
                {
                    coordinate1: 61.40597,
                    coordinate2: 5.6539,
                    description: "Dagsturhytta Skaraly - Sunnfjord"
                },
                {
                    coordinate1: 61.51234,
                    coordinate2: 5.64063,
                    description: "Dagsturhytta Steinkorshytta - Sunnfjord Naustdal"
                },
                {
                    coordinate1: 61.91284,
                    coordinate2: 6.69594,
                    description: "Dagsturhytta Kloppemyrhytta - Stryn"
                },
                {
                    coordinate1: 59.6183,
                    coordinate2: 5.39147,
                    description: "Dagsturhytta Nipaståvo - Sveio"
                },
                {
                    coordinate1: 60.56141,
                    coordinate2: 6.93489,
                    description: "Dagsturhytta Solhaug - Ulvik"
                },
                {
                    coordinate1: 60.55743,
                    coordinate2: 5.72201,
                    description: "Dagsturhytta Fjordsyn Vaksdal"
                },
                {
                    coordinate1: 61.03435,
                    coordinate2: 6.5108,
                    description: "Dagsturhytta Liabu - Vik"
                },
                {
                    coordinate1: 61.976,
                    coordinate2: 6.50555,
                    description: "Dagsturhytta Nakkebruna - Volda Hornindal"
                },
                {
                    coordinate1: 60.37249,
                    coordinate2: 5.13391,
                    description: "Dagsturhytta Larslibua - Øygarden"
                },
                {
                    coordinate1: 61.31726,
                    coordinate2: 7.82476,
                    description: "Dagsturhytta Moakamben - Årdal"
                }
            ]
        };
    }

    render() {
        delete L.Icon.Default.prototype._getIconUrl;

        L.Icon.Default.mergeOptions({
            iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png').default,
            iconUrl: require('leaflet/dist/images/marker-icon.png').default,
            shadowUrl: require('leaflet/dist/images/marker-shadow.png').default
        });
        return (
            <div id="map">
                <MapContainer center={[60.812, 7.610]} zoom={6} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    { this.state.markers.length > 0 && this.state.markers.map((marker) => (
                            <Marker 
                                position={[
                                    marker.coordinate1,
                                    marker.coordinate2
                            ]}
                            >
                            <Popup><a href={marker.link} target="_blank" rel="noreferrer">{marker.description}</a></Popup>
                            </Marker>
                    ))}
                </MapContainer>
            </div>
        )
    }
}

export default Map;
