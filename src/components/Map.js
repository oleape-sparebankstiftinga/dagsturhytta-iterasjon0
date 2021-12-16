import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "../App.css";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
// import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';

class Map extends React.Component {
    constructor(props) {
        super(props);
        this.mapRef = React.createRef();
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
                    description: "Dagsturhytta Sjøbua - Alver",
                    link: "https://www.vestlandfylke.no/idrett-og-friluftsliv/dagsturhytta/sjobua/"
                },
                {
                    coordinate1: 60.75437,
                    coordinate2: 5.15661,
                    description: "Dagsturhytta Vardebu - Alver",
                    link: "https://www.vestlandfylke.no/idrett-og-friluftsliv/dagsturhytta/vardebu/"
                },
                {
                    coordinate1: 60.90787,
                    coordinate2: 7.19998,
                    description: "Dagsturhytta Vinjaåsenhytta - Aurland",
                    link: "https://www.vestlandfylke.no/idrett-og-friluftsliv/dagsturhytta/aurland-vinjaasenhytta/"
                },
                {
                    coordinate1: 60.04907,
                    coordinate2: 5.27754,
                    description: "Dagsturhytta Adlesi - Austevoll",
                    link: "https://www.vestlandfylke.no/idrett-og-friluftsliv/dagsturhytta/adlesi/"
                },
                {
                    coordinate1: 60.80998,
                    coordinate2: 4.94586,
                    description: "Dagsturhytta Vardetangen - Austrheim",
                    link: "https://www.vestlandfylke.no/idrett-og-friluftsliv/dagsturhytta/vardetangen/"
                },
                {
                    coordinate1: 61.38467,
                    coordinate2: 5.16101,
                    description: "Dagsturhytta Nykshytta - Askvoll",
                    link: "https://www.vestlandfylke.no/idrett-og-friluftsliv/dagsturhytta/askvoll-nykshytta/"
                },
                {
                    coordinate1: 61.86022,
                    coordinate2: 4.85267,
                    description: "Dagsturhytta Vetehytta - Bremanger",
                    link: "https://www.vestlandfylke.no/idrett-og-friluftsliv/dagsturhytta/bremanger-vetehytta/"
                },
                {
                    coordinate1: 59.84011,
                    coordinate2: 5.13438,
                    description: "Dagsturhytta Kurebu - Bømlo",
                    link: "https://www.vestlandfylke.no/idrett-og-friluftsliv/dagsturhytta/kurebu/"
                },
                {
                    coordinate1: 60.76045,
                    coordinate2: 4.71326,
                    description: "Dagsturhytta Aurihophytta - Fedje",
                    link: "https://www.vestlandfylke.no/idrett-og-friluftsliv/dagsturhytta/aurihophytta/"
                },
                {
                    coordinate1: 61.27237,
                    coordinate2: 5.04403,
                    description: "Dagsturhytta Vidsyn - Fjaler",
                    link: "https://www.vestlandfylke.no/idrett-og-friluftsliv/dagsturhytta/vidsyn-fjaler/"
                },
                {
                    coordinate1: 61.78022,
                    coordinate2: 6.22713,
                    description: "Dagsturhytta Draumekvila - Gloppen",
                    link: "https://www.vestlandfylke.no/idrett-og-friluftsliv/dagsturhytta/draumekvila-gloppen-kommune/"
                },
                {
                    coordinate1: 60.98364,
                    coordinate2: 5.0673,
                    description: "Dagsturhytta Gulakvila - Gulen",
                    link: "https://www.vestlandfylke.no/idrett-og-friluftsliv/dagsturhytta/gulakvila-gulen/"
                },
                {
                    coordinate1: 61.216,
                    coordinate2: 5.96568,
                    description: "Dagsturhytta Synkenhytta - Høyanger",
                    link: "https://www.vestlandfylke.no/idrett-og-friluftsliv/dagsturhytta/synkenhytta-hoyanger/"
                },
                {
                    coordinate1: 61.18431,
                    coordinate2: 5.34277,
                    description: "Dagsturhytta Sørefjordhytta - Hyllestad",
                    link: "https://www.vestlandfylke.no/idrett-og-friluftsliv/dagsturhytta/sorefjordhytta-hyllestad/"
                },
                {
                    coordinate1: 61.62098,
                    coordinate2: 5.32846,
                    description: "Dagsturhytta Fløgjen - Kinn Florø",
                    link: "https://www.vestlandfylke.no/idrett-og-friluftsliv/dagsturhytta/flogjen/"
                },
                {
                    coordinate1: 61.9247,
                    coordinate2: 5.12965,
                    description: "Dagsturhytta Kletten - Kinn Vågsøy",
                    link: "https://www.vestlandfylke.no/idrett-og-friluftsliv/dagsturhytta/kletten/"
                },
                {
                    coordinate1: 60.34879,
                    coordinate2: 6.12156,
                    description: "Dagsturhytta Kvilekroken - Kvam",
                    link: "https://www.vestlandfylke.no/idrett-og-friluftsliv/dagsturhytta/kvilekroken/"
                },
                {
                    coordinate1: 61.33445,
                    coordinate2: 7.33443,
                    description: "Dagsturhytta Eikjabu - Luster",
                    link: "https://www.vestlandfylke.no/idrett-og-friluftsliv/dagsturhytta/eikjabu-luster-kommune/"
                },
                {
                    coordinate1: 61.10219,
                    coordinate2: 7.48564,
                    description: "Dagsturhytta Mjølkeflathytta - Lærdal",
                    link: "https://www.vestlandfylke.no/idrett-og-friluftsliv/dagsturhytta/mjolkeflathytta-lardal-kommune/"
                },
                {
                    coordinate1: 60.74878,
                    coordinate2: 5.34821,
                    description: "Dagsturhytta Fjordblikk - Masfjorden",
                    link: "https://www.vestlandfylke.no/idrett-og-friluftsliv/dagsturhytta/fjordblikk/"
                },
                {
                    coordinate1: 60.38285,
                    coordinate2: 5.71062,
                    description: "Dagsturhytta Prestakvilet - Samnanger",
                    link: "https://www.vestlandfylke.no/idrett-og-friluftsliv/dagsturhytta/prestakvilet/"
                },
                {
                    coordinate1: 61.20569,
                    coordinate2: 6.51237,
                    description: "Dagsturhytta Balabu - Sogndal Balestrand",
                    link: "https://www.vestlandfylke.no/idrett-og-friluftsliv/dagsturhytta/balestrand-balabu/"
                },
                {
                    coordinate1: 61.19915,
                    coordinate2: 6.8216,
                    description: "Dagsturhytta Orrabu - Sogndal",
                    link: "https://www.vestlandfylke.no/idrett-og-friluftsliv/dagsturhytta/orrabu/"
                },
                {
                    coordinate1: 61.22083,
                    coordinate2: 7.09221,
                    description: "Dagsturhytta Stedjeåsen - Sogndal",
                    link: "https://www.vestlandfylke.no/idrett-og-friluftsliv/dagsturhytta/stedjestova/"
                },
                {
                    coordinate1: 61.05069,
                    coordinate2: 4.8604,
                    description: "Dagsturhytta Sognesjøhytta - Solund",
                    link: "https://www.vestlandfylke.no/idrett-og-friluftsliv/dagsturhytta/sognesjohytta/"
                },
                {
                    coordinate1: 61.92026,
                    coordinate2: 5.8357,
                    description: "Dagsturhytta Naustdalskamben - Stad Eid",
                    link: "https://www.vestlandfylke.no/idrett-og-friluftsliv/dagsturhytta/naustdalskamben-stad/"
                },
                {
                    coordinate1: 62.04484,
                    coordinate2: 5.35661,
                    description: "Dagsturhytta Sjøglytt - Stad Selje",
                    link: "https://www.vestlandfylke.no/idrett-og-friluftsliv/dagsturhytta/sjoglytt/"
                },
                {
                    coordinate1: 61.57307,
                    coordinate2: 6.46113,
                    description: "Dagsturhytta Fjellro - Sunnfjord",
                    link: "https://www.vestlandfylke.no/idrett-og-friluftsliv/dagsturhytta/fjellro-sunnfjord-kommune/"
                },
                {
                    coordinate1: 61.45569,
                    coordinate2: 5.91461,
                    description: "Dagsturhytta Gytta - Sunnfjord",
                    link: "https://www.vestlandfylke.no/idrett-og-friluftsliv/dagsturhytta/forde-gytta/"
                },
                {
                    coordinate1: 61.40597,
                    coordinate2: 5.6539,
                    description: "Dagsturhytta Skaraly - Sunnfjord",
                    link: "https://www.vestlandfylke.no/idrett-og-friluftsliv/dagsturhytta/skaraly-sunnfjord-kommune/"
                },
                {
                    coordinate1: 61.51234,
                    coordinate2: 5.64063,
                    description: "Dagsturhytta Steinkorshytta - Sunnfjord Naustdal",
                    link: "https://www.vestlandfylke.no/idrett-og-friluftsliv/dagsturhytta/steinkorshytta/"
                },
                {
                    coordinate1: 61.91284,
                    coordinate2: 6.69594,
                    description: "Dagsturhytta Kloppemyrhytta - Stryn",
                    link: "https://www.vestlandfylke.no/idrett-og-friluftsliv/dagsturhytta/kloppemyrhytta-stryn-kommune/"
                },
                {
                    coordinate1: 59.6183,
                    coordinate2: 5.39147,
                    description: "Dagsturhytta Nipaståvo - Sveio",
                    link: "https://www.vestlandfylke.no/idrett-og-friluftsliv/dagsturhytta/nipastaavo/"
                },
                {
                    coordinate1: 60.56141,
                    coordinate2: 6.93489,
                    description: "Dagsturhytta Solhaug - Ulvik",
                    link: "https://www.vestlandfylke.no/idrett-og-friluftsliv/dagsturhytta/solhaug/"
                },
                {
                    coordinate1: 60.55743,
                    coordinate2: 5.72201,
                    description: "Dagsturhytta Fjordsyn Vaksdal",
                    link: "https://www.vestlandfylke.no/idrett-og-friluftsliv/dagsturhytta/fjordsyn/"
                },
                {
                    coordinate1: 61.03435,
                    coordinate2: 6.5108,
                    description: "Dagsturhytta Liabu - Vik",
                    link: "https://www.vestlandfylke.no/idrett-og-friluftsliv/dagsturhytta/liabu-vik/"
                },
                {
                    coordinate1: 61.976,
                    coordinate2: 6.50555,
                    description: "Dagsturhytta Nakkebruna - Volda Hornindal",
                    link: "https://www.vestlandfylke.no/idrett-og-friluftsliv/dagsturhytta/nakkebruna/"
                },
                {
                    coordinate1: 60.37249,
                    coordinate2: 5.13391,
                    description: "Dagsturhytta Larslibua - Øygarden",
                    link: "https://www.vestlandfylke.no/idrett-og-friluftsliv/dagsturhytta/larslibua/"
                },
                {
                    coordinate1: 61.31726,
                    coordinate2: 7.82476,
                    description: "Dagsturhytta Moakamben - Årdal",
                    link: "https://www.vestlandfylke.no/idrett-og-friluftsliv/dagsturhytta/moakamben-ardal/"
                }
            ]
        };
    }

    componentDidMount() {
        delete L.Icon.Default.prototype._getIconUrl;

        L.Icon.Default.mergeOptions({
            iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png').default,
            iconUrl: require('leaflet/dist/images/marker-icon.png').default,
            shadowUrl: require('leaflet/dist/images/marker-shadow.png').default
        });


        // const map = this.mapRef.current.leafletElement;
        // const provider = new OpenStreetMapProvider();

        // const searchControl = new GeoSearchControl({
        //     provider: provider,
        // });

        // map.addControl(searchControl);
    }

    render() {
        return (
            <div id="map">
                <MapContainer center={[60.812, 7.610]} zoom={7} scrollWheelZoom={false} ref={this.mapRef}>
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
