import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import getCenterGeolocation from '../../utils/geocoordinates';

const HeatMap = ({ residencesList }) => {
    const [centerCoordinates, setCenterCoordinates] = useState({
        lat: -30.048991667296335,
        lng: -51.20086444004856
    });
    const defaultZoom = 15;
    const [heatmapData, setHeatmapData] = useState({
        positions: [],
        options: {}
    });

    useEffect(() => {
        const convertResidencesListToPositions = () => {
            const positions = residencesList.map((residence) => {
                const lat = parseFloat(residence.latitude);
                const lng = parseFloat(residence.longitude);
                const weight = parseInt(residence.residentsNumber);
    
                return {lat, lng, weight};
            });
    
            return positions;
        }
        
        const centerCoord = getCenterGeolocation(residencesList);
        
        if (!isNaN(centerCoord.lat) && !isNaN(centerCoord.lng))
            setCenterCoordinates(centerCoord);

        if (residencesList.length > 0) {
            const positions = convertResidencesListToPositions();
            const defaultOptions = {
                radius: 20,
                opacity: 0.6,
                gradient: [
                    "rgba(0, 255, 255, 0)",
                    "rgba(0, 255, 255, 1)",
                    "rgba(0, 191, 255, 1)",
                    "rgba(0, 127, 255, 1)",
                    "rgba(0, 63, 255, 1)",
                    "rgba(0, 0, 255, 1)",
                    "rgba(0, 0, 223, 1)",
                    "rgba(0, 0, 191, 1)",
                    "rgba(0, 0, 159, 1)",
                    "rgba(0, 0, 127, 1)",
                    "rgba(63, 0, 91, 1)",
                    "rgba(127, 0, 63, 1)",
                    "rgba(191, 0, 31, 1)",
                    "rgba(255, 0, 0, 1)",
                ]
            };
            
            setHeatmapData({
                positions,
                options: defaultOptions
            });
        }
        
    }, [residencesList]);

    return (
        <div style={{height: '80vh', width: '100%'}}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY  }}
                defaultCenter={centerCoordinates}
                defaultZoom={defaultZoom}
                heatmapLibrary={true}
                heatmap={heatmapData}
            />
        </div>
    );
};

export default HeatMap;
