import React, { useEffect, useState } from 'react';
import ResidenceDataService from '../../services/residences.service';
import { Link } from 'react-router-dom';

const ResidenceList = () => {
    const [residences, setResidences] = useState([]);
    const [zeroResidences, setZeroResidences] = useState(false);

    const getResidences = () => {
        ResidenceDataService.getAll().then((response) => {
            if (response.status === 204) {
                setResidences([]);
                setZeroResidences(true);
            } else setResidences(response.data);
            console.log('response in getResidences', response);
        }).catch((error) => {
            console.log('error getResidences', error);
        });
    }

    const refreshList = () => {
        getResidences();
    }

    const removeAllResidences = () => {
        ResidenceDataService.removeAll().then((response) => {
            console.log('response from removeAll', response);
            refreshList();
        })
    }
    
    useEffect(() => {
        getResidences();
    }, []);
    // PASSAR PARA STYLED COMPONENT
    return (
        <div>
            <h4>Residences List</h4>

            <div>
                {
                    zeroResidences && <div>
                        There isn't any residence saved, please <Link
                                    to={"/add-residence"}
                                    className="badge badge-secondary"
                                >
                                Add a Residence
                            </Link>
                    </div>
                }
                {residences && residences.length > 0 &&
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>CEP</th>
                                <th>House Number</th>
                                <th>Latitude</th>
                                <th>Longitude</th>
                                <th>Number of Residents</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                residences.map((residence, index) => (
                                    <tr key={index}>
                                        <td>{residence.id}</td>
                                        <td>{residence.cep}</td>
                                        <td>{residence.houseNumber}</td>
                                        <td>{residence.latitude}</td>
                                        <td>{residence.longitude}</td>
                                        <td>{residence.residentsNumber}</td>
                                        <td>
                                        <Link
                                            to={"/residences/" + residence.id}
                                            className="badge badge-warning"
                                            >
                                            Edit
                                        </Link>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                }
            </div>

            <button
                className={"m-3 btn btn-sm btn-danger"}
                onClick={removeAllResidences}
                disabled={zeroResidences}
            >
                Remove All
            </button>
        </div>
    );
}

export default ResidenceList;