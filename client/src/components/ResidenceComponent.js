import React, { useEffect, useState } from 'react';
import ResidenceService from '../services/ResidenceService';

const ResidenceComponent = () => {
    const [residences, setResidences] = useState([]);

    useEffect(() => {
        ResidenceService.getResidences().then((response) => {
            console.log('response', response);
            setResidences(response.data);
        })
    }, []);

    return (
        <div>
            <h1 className="text-center">Residences List</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <td>Residence Id</td>
                        <td>Residence CEP</td>
                        <td>Residence Number</td>
                        <td>Residence Latitude</td>
                        <td>Residence Longitude</td>
                        <td>Residents Number</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        residences.map((residence) => (
                            <tr key={residence.id}>
                                <td>{residence.id}</td>
                                <td>{residence.cep}</td>
                                <td>{residence.houseNumber}</td>
                                <td>{residence.latitude}</td>
                                <td>{residence.longitude}</td>
                                <td>{residence.residentsNumber}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default ResidenceComponent;