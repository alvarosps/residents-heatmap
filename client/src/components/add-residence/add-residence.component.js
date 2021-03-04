import React, { useState } from 'react';
import ResidenceDataService from '../../services/residences.service';
import FormInput from '../form-input/form-input.component';

import { AddResidenceContainer, TitleContainer} from './add-residence.styles';

const AddResidence = () => {
    const initialResidenceState = {
        id: null,
        cep: '',
        houseNumber: '',
        latitude: '',
        longitude: '',
        residentsNumber: ''
    };

    const [residence, setResidence] = useState(initialResidenceState);
    const [submitted, setSubmitted] = useState(false);

    const { cep, houseNumber, latitude, longitude, residentsNumber } = residence;

    const handleChange = (event) => {
        const { name, value } = event.target;

        setResidence({ ...residence, [name]: value });
    }

    const handleSubmit = () => {
        const data = {
            cep: residence.cep,
            houseNumber: residence.houseNumber,
            latitude: residence.latitude,
            longitude: residence.longitude,
            residentsNumber: residence.residentsNumber
        };

        ResidenceDataService.create(data).then((response) => {
            setResidence({
                id: response.data.id,
                cep: response.data.cep,
                houseNumber: response.data.houseNumber,
                latitude: response.data.latitude,
                longitude: response.data.longitude,
                residentsNumber: response.data.residentsNumber
            });
            setSubmitted(true);
            console.log('response from add-residence', response.data);
        }).catch ((error) => {
            console.log('Error adding new residence: ' + error);
        });
    }

    const newResidence = () => {
        setResidence(initialResidenceState);
        setSubmitted(false);
    }

    return (
        <AddResidenceContainer>
            {submitted && <h4>Residence submitted with success!</h4>}
            <TitleContainer>
                Add a new Residence
            </TitleContainer>
            <form className='add-residence-form' onSubmit={handleSubmit}>
                <FormInput 
                    type='text'
                    name='cep'
                    value={cep}
                    onChange={handleChange}
                    label='CEP'
                    required
                />
                <FormInput 
                    type='text'
                    name='houseNumber'
                    value={houseNumber}
                    onChange={handleChange}
                    label='House Number'
                    required
                />
                <FormInput 
                    type='text'
                    name='latitude'
                    value={latitude}
                    onChange={handleChange}
                    label='Latitude'
                    required
                />
                <FormInput 
                    type='text'
                    name='longitude'
                    value={longitude}
                    onChange={handleChange}
                    label='Longitude'
                    required
                />
                <FormInput 
                    type='text'
                    name='residentsNumber'
                    value={residentsNumber}
                    onChange={handleChange}
                    label='Number of Residents'
                    required
                />
                <button className='btn btn-success' onClick={newResidence}>
                    Submit
                </button>
            </form>

        </AddResidenceContainer>
    )
}

export default AddResidence;