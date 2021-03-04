import React, { useState, useEffect } from 'react';
import ResidenceDataService from '../../services/residences.service';
import { ResidenceContainer, TitleContainer } from './residence.styles';
import FormInput from '../form-input/form-input.component';
import validateInput from '../../utils/form-validation.utils';

const Residence = (props) => {
    const initialResidenceState = {
        id: null,
        cep: '',
        houseNumber: '',
        latitude: '',
        longitude: '',
        residentsNumber: ''
    };

    const [currentResidence, setCurrentResidence] = useState(initialResidenceState);
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

    const getResidence = (id) => {
        ResidenceDataService.get(id).then((response) => {
            setCurrentResidence(response.data);
        }).catch((error) => {
            setCanSubmit(false);
        });
    }

    useEffect(() => {
        getResidence(props.match.params.id);
    }, [props.match.params.id]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        const isInputValid = validateInput(name, value);
        if (!isInputValid) setInputErrors({ ...inputErrors, [name]: errorMessages[name]});
        else setInputErrors({ ...inputErrors, [name]: ''});

        setCurrentResidence({ ...currentResidence, [name] : value});
    };

    const updateResidence = () => {
        ResidenceDataService.update(currentResidence.id, currentResidence).then((response) => {
            setMessage('The residence has been updated successfully!');
        }).catch((error) => {
            console.log('response error update', error);
        })
    }

    const deleteResidence = () => {
        ResidenceDataService.remove(currentResidence.id).then((response) => {
            props.history.push('/residences');
        }).catch((error) => {
            console.log('error on delete residence', error);
        });
    }

    useEffect(() => {
        const checkIfInputsCanBeSubmitted = () => {
            const zeroErrors = Object.keys(inputErrors).filter((key) => inputErrors[key] === '').length === 5;
            const residenceDataOk = !Object.values(currentResidence).includes('');
            return zeroErrors && residenceDataOk;
        }

        setCanSubmit(checkIfInputsCanBeSubmitted());
    }, [inputErrors, currentResidence]);

    return (
        <div>
            {currentResidence && (
                <ResidenceContainer>
                    <TitleContainer>
                        Residence
                    </TitleContainer>
                    <form>
                        <FormInput 
                            type='text'
                            name='cep'
                            value={currentResidence.cep}
                            onChange={handleInputChange}
                            label='CEP'
                            errorMessage={inputErrors.cep}
                            required
                        />
                        <FormInput 
                            type='text'
                            name='houseNumber'
                            value={currentResidence.houseNumber}
                            onChange={handleInputChange}
                            label='House Number'
                            errorMessage={inputErrors.houseNumber}
                            required
                        />
                        <FormInput 
                            type='text'
                            name='latitude'
                            value={currentResidence.latitude}
                            onChange={handleInputChange}
                            label='Latitude'
                            errorMessage={inputErrors.latitude}
                            required
                        />
                        <FormInput 
                            type='text'
                            name='longitude'
                            value={currentResidence.longitude}
                            onChange={handleInputChange}
                            label='Longitude'
                            errorMessage={inputErrors.longitude}
                            required
                        />
                        <FormInput 
                            type='text'
                            name='residentsNumber'
                            value={currentResidence.residentsNumber}
                            onChange={handleInputChange}
                            label='Number of Residents'
                            errorMessage={inputErrors.residentsNumber}
                            required
                        />
                    </form>

                    <button
                        className='badge badge-danger mr-2'
                        onClick={deleteResidence}
                    >
                        Delete
                    </button>
                    <button
                        className='badge badge-success mr-2'
                        onClick={updateResidence}
                        disabled={!canSubmit}
                    >
                        Update
                    </button>
                    <p>{message}</p>
                </ResidenceContainer>
            )}
        </div>
    );
}

export default Residence;