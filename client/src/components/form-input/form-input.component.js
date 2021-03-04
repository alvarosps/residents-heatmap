import React from 'react';
import {
    ErrorContainer,
    FormInputContainer,
    GroupContainer,
    LabelContainer
} from './form-input.styles';

const FormInput = ({ handleChange, label, errorMessage, ...otherProps }) => (
    <GroupContainer>
        <FormInputContainer onChange={handleChange} {...otherProps} />
        {label ? (
            <LabelContainer className={otherProps.value.length ? 'shrink' : ''}>
                {label}
            </LabelContainer>
        ) : null}
        {
            errorMessage !== '' && <ErrorContainer>{errorMessage}</ErrorContainer>
        }
    </GroupContainer>
);

export default FormInput;
