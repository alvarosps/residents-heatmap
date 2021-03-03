import axios from 'axios';

const RESIDENCES_REST_API_URL = 'http://localhost:8080/api/residences';

class ResidenceService {
    getResidences() {
        return axios.get(RESIDENCES_REST_API_URL);
    }
}

export default new ResidenceService();
