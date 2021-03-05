import React, { useEffect, useState } from 'react';
import HeatMap from '../../components/heatmap/heatmap.component';
import ResidenceDataService from '../../services/residences.service';
import { HeatmapContainer } from './heatmap-page.styles';

const HeatmapPage = () => {  
    const [residences, setResidences] = useState([]);

    const getResidences = () => {
        ResidenceDataService.getAll().then((response) => {
            if (response.status === 204) {
                setResidences([]);
            } else setResidences(response.data);
        }).catch((error) => {
            console.log('error getResidences', error);
        });
    }

    useEffect(() => {
        getResidences();
    }, []);
    
     return (
        <HeatmapContainer>
            <HeatMap residencesList={residences} />
        </HeatmapContainer>
    );
}

export default HeatmapPage;