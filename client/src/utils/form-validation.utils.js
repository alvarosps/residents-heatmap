const isStringNumber = (str) => {
    if (typeof str !== 'string') return false;
    return !isNaN(str) && !isNaN(parseFloat(str));
}

const validateCEP = (cep) => {
    let isValid = false;

    // CEP should be a number only, without any special characters on it
    if (isStringNumber(cep)) isValid = true;

    return isValid;
}

const validateHouseNumber = (houseNumber) => {
    let isValid = false;

    // House Number should be a number only, without any special characters on it    
    if (isStringNumber(houseNumber)) isValid = true;

    return isValid;
}

const validateLatitude = (latitude) => {
    let isValid = false;

    const isLatitudeValid = isFinite(latitude) && Math.abs(latitude) <= 90;

    if (isLatitudeValid) isValid = true;

    return isValid;
}

const validateLongitude = (longitude) => {
    let isValid = false;

    const isLongitudeValid = isFinite(longitude) && Math.abs(longitude) <= 180;

    if (isLongitudeValid) isValid = true;

    return isValid;
}

const validateResidentsNumber = (residentsNumber) => {
    let isValid = false;

    if (isStringNumber(residentsNumber)) isValid = true;

    return isValid;
}

const validateInput = (name, value) => {
    let isValid = false;
    console.log('name', name);
    console.log('value', value);

    if (name === 'cep') isValid = validateCEP(value);
    else if (name === 'houseNumber') isValid = validateHouseNumber(value);
    else if (name === 'latitude') isValid= validateLatitude(value);
    else if (name === 'longitude') isValid = validateLongitude(value);
    else if (name === 'residentsNumber') isValid = validateResidentsNumber(value);

    console.log('isValid', isValid)
    return isValid;
}

export default validateInput;
