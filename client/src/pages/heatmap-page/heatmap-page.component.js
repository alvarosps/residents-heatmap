import React, { useEffect, useState } from 'react';
import HeatMap from '../../components/heatmap/heatmap.component';
import ResidenceDataService from '../../services/residences.service';

const HeatmapPage = () => {  
    const [residences, setResidences] = useState([]);

    const getResidences = () => {
        ResidenceDataService.getAll().then((response) => {
            if (response.status === 204) {
                setResidences([]);
            } else setResidences(response.data);
            console.log('response in getResidences', response);
        }).catch((error) => {
            console.log('error getResidences', error);
        });
    }

    useEffect(() => {
        getResidences();
    }, []);
    
     return (
        <div>
            <HeatMap residencesList={residences} />
        </div>
    );
}

export default HeatmapPage;