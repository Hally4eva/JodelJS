import { divIcon, Map as LeafletMap, marker, Marker } from 'leaflet';
import React from 'react';

import { IGeoCoordinates } from '../../interfaces/ILocation';
import { withLeafletMap } from './map-utils';
import './MapMarker.scss';

interface IMapMarkerProps {
    map: LeafletMap;
    location: IGeoCoordinates;
    onMarkerMoved: (location: IGeoCoordinates) => void;
}

class MapMarkerComponent extends React.PureComponent<IMapMarkerProps> {
    private locationMarker: Marker | undefined;

    public componentDidMount() {
        this.locationMarker = marker({
            lat: this.props.location.latitude,
            lng: this.props.location.longitude,
        }, {
                draggable: true,
                icon: divIcon({
                    className: 'map-marker-icon',
                    iconAnchor: [12, 41],
                    iconSize: [25, 41],
                    popupAnchor: [1, -34],
                    shadowSize: [41, 41],
                    tooltipAnchor: [16, -28],
                }),
            });
        this.locationMarker.on('dragend', () => {
            const loc = this.locationMarker!.getLatLng();
            this.props.onMarkerMoved({ latitude: loc.lat, longitude: loc.lng });
        });
        this.locationMarker.addTo(this.props.map);
    }

    public componentDidUpdate() {
        this.locationMarker!.setLatLng({
            lat: this.props.location.latitude,
            lng: this.props.location.longitude,
        });
    }

    public componentWillUnmount() {
        this.locationMarker!.remove();
    }

    public render() {
        return null;
    }
}

export default withLeafletMap()(MapMarkerComponent);
