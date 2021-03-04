import React, { useState, useEffect } from 'react';
import ResidenceDataService from '../../services/residences.service';
import { ResidenceContainer, TitleContainer } from './residence.styles';
import FormInput from '../form-input/form-input.component';

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

    const getResidence = (id) => {
        ResidenceDataService.get(id).then((response) => {
            setCurrentResidence(response.data);
            console.log('response from getResidence(id)', response);
        }).catch((error) => {
            console.log('errro on getResidence(id)', error);
        });
    }

    useEffect(() => {
        getResidence(props.match.params.id);
    }, [props.match.params.id]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setCurrentResidence({ ...currentResidence, [name] : value});
    };

    const updateResidence = () => {
        ResidenceDataService.update(currentResidence.id, currentResidence).then((response) => {
            console.log('response on update residence', response);
            setMessage('The residence has been updated successfully!');
        }).catch((error) => {
            console.log('response error update', error);
        })
    }

    const deleteResidence = () => {
        ResidenceDataService.remove(currentResidence.id).then((response) => {
            console.log('response on delete residence', response);
            props.history.push('/residences');
        }).catch((error) => {
            console.log('error on delete residence', error);
        });
    }

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
                            required
                        />
                        <FormInput 
                            type='text'
                            name='houseNumber'
                            value={currentResidence.houseNumber}
                            onChange={handleInputChange}
                            label='House Number'
                            required
                        />
                        <FormInput 
                            type='text'
                            name='latitude'
                            value={currentResidence.latitude}
                            onChange={handleInputChange}
                            label='Latitude'
                            required
                        />
                        <FormInput 
                            type='text'
                            name='longitude'
                            value={currentResidence.longitude}
                            onChange={handleInputChange}
                            label='Longitude'
                            required
                        />
                        <FormInput 
                            type='text'
                            name='residentsNumber'
                            value={currentResidence.residentsNumber}
                            onChange={handleInputChange}
                            label='Number of Residents'
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