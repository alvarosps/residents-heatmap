import React, { useEffect, useState } from 'react';
import ResidenceDataService from '../../services/residences.service';
import FormInput from '../form-input/form-input.component';
import validateInput from '../../utils/form-validation.utils';

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
    const [message, setMessage] = useState('');
    const [inputErrors, setInputErrors] = useState({
        cep: '',
        houseNumber: '',
        latitude: '',
        longitude: '',
        residentsNumber: ''
    });
    const [canSubmit, setCanSubmit] = useState(false);
    
    const errorMessages = {
        cep: 'CEP provided is invalid, please use a valid CEP.',
        houseNumber: 'The House Number provided is invalid, please use a valid House Number',
        latitude: 'Latitude valid is invalid, please provid a valid Latitude',
        longitude: 'Longitude valid is invalid, please provide a valid Longitude',
        residentsNumber: 'The Residents Number is invalid, please provide a valid Residents Number'
    };

    const { cep, houseNumber, latitude, longitude, residentsNumber } = residence;

    const handleChange = (event) => {
        const { name, value } = event.target;

        const isInputValid = validateInput(name, value);
        if (!isInputValid) setInputErrors({ ...inputErrors, [name]: errorMessages[name]});
        else setInputErrors({ ...inputErrors, [name]: ''});

        setResidence({ ...residence, [name]: value });
    }

    const handleSubmit = () => {
        console.log('handleSubmit')
        const data = {
            cep: residence.cep,
            houseNumber: residence.houseNumber,
            latitude: residence.latitude,
            longitude: residence.longitude,
            residentsNumber: residence.residentsNumber
        };

        ResidenceDataService.create(data).then((response) => {
            console.log('response from add-residence', response.data);
            setResidence({
                id: response.data.id,
                cep: response.data.cep,
                houseNumber: response.data.houseNumber,
                latitude: response.data.latitude,
                longitude: response.data.longitude,
                residentsNumber: response.data.residentsNumber
            });
            setSubmitted(true);
            newResidence();
            setMessage('Successfully added!.');
        }).catch ((error) => {
            console.log('Error adding new residence: ' + error);
            setMessage('Error adding new residence.')
        });
    }

    const newResidence = () => {
        console.log('newResidence');
        setResidence(initialResidenceState);
        setSubmitted(false);
    }

    useEffect(() => {
        const checkIfInputsCanBeSubmitted = () => {
            const zeroErrors = Object.keys(inputErrors).filter((key) => inputErrors[key] === '').length === 5;
            const residenceDataOk = !Object.values(residence).includes('');
            
            return zeroErrors && residenceDataOk;
        }

        setCanSubmit(checkIfInputsCanBeSubmitted());
    }, [inputErrors, residence]);

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
                    errorMessage={inputErrors.cep}
                    required
                />
                <FormInput 
                    type='text'
                    name='houseNumber'
                    value={houseNumber}
                    onChange={handleChange}
                    label='House Number'
                    errorMessage={inputErrors.houseNumber}
                    required
                />
                <FormInput 
                    type='text'
                    name='latitude'
                    value={latitude}
                    onChange={handleChange}
                    label='Latitude'
                    errorMessage={inputErrors.latitude}
                    required
                />
                <FormInput 
                    type='text'
                    name='longitude'
                    value={longitude}
                    onChange={handleChange}
                    label='Longitude'
                    errorMessage={inputErrors.longitude}
                    required
                />
                <FormInput 
                    type='text'
                    name='residentsNumber'
                    value={residentsNumber}
                    onChange={handleChange}
                    label='Number of Residents'
                    errorMessage={inputErrors.residentsNumber}
                    required
                />
                <button
                    type='submit'
                    className='btn btn-success'
                    disabled={!canSubmit}
                >
                    Submit
                </button>
                <p>{message}</p>
            </form>

        </AddResidenceContainer>
    )
}

export default AddResidence;