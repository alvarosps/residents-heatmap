import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';

const HeatMap = ({residencesList}) => {
    const [centerCoordinates, setCenterCoordinates] = useState({
        lat: -30.054608920660066,
        lng: -51.19945043386625
    });
    const defaultZoom = 11;

    return (
        <div style={{height: '100vh', width: '100%'}}>
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
