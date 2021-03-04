// Convert angle from Radians to Degrees
const rad2degr = (rad) => {
    return (rad * 180) / Math.PI;
}

// Convert angle from Degrees to Radians
const degr2rad = (degr) => {
    return (degr * Math.PI) / 180;
}

/*
    Get Center location
    @param latLngInDegr: Array of objects in format [{latitude: '0', longitude: '0'}, ...]
*/
const getCenterGeolocation = (latLngInDegr) => {
    let lat, lng, sumX = 0, sumY = 0, sumZ = 0;

    for (let i = 0; i < latLngInDegr.length; i++) {
        lat = degr2rad(parseFloat(latLngInDegr[i].latitude));
        lng = degr2rad(parseFloat(latLngInDegr[i].longitude));

        sumX += Math.cos(lat) * Math.cos(lng);
        sumY += Math.cos(lat) * Math.sin(lng);
        sumZ += Math.sin(lat);
    }

    const avgX = sumX / latLngInDegr.length;
    const avgY = sumY / latLngInDegr.length;
    const avgZ = sumZ / latLngInDegr.length;

    //Convert average coordinates to latitude and longitude
    lng = Math.atan2(avgY, avgX);
    const hyp = Math.sqrt(avgX * avgX + avgY * avgY);
    lat = Math.atan2(avgZ, hyp);

    return {
        lat: rad2degr(lat),
        lng: rad2degr(lng)
    };
}

export default getCenterGeolocation;