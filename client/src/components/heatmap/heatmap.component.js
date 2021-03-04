import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import getCenterGeolocation from '../../utils/geocoordinates';

const HeatMap = ({ residencesList }) => {
    const [centerCoordinates, setCenterCoordinates] = useState({
        lat: -30.048991667296335,
        lng: -51.20086444004856
    });
    const defaultZoom = 15;

    console.log('residencesList', residencesList)
    useEffect(() => {
        const centerCoord = getCenterGeolocation(residencesList);
        console.log('centerCoord', centerCoord)
        if (!isNaN(centerCoord.lat) && !isNaN(centerCoord.lng))
            setCenterCoordinates(centerCoord);
    }, [residencesList])

    return (
        <div style={{height: '80vh', width: '100%'}}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyA1coUCzk6ViSdhQ1jO2dZ-TfhLooool20' }}
                defaultCenter={centerCoordinates}
                defaultZoom={defaultZoom}
            >
                <div>test</div>
            </GoogleMapReact>
        </div>
    );
};

export default HeatMap;
