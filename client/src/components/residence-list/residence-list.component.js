import React, { useEffect, useState } from 'react';
import ResidenceDataService from '../../services/residences.service';
import { Link } from 'react-router-dom';

import { TableContainer, AddButton, ListContainer } from './residence-list.styles';

const ResidenceList = ({history}) => {
    const [residences, setResidences] = useState([]);
    const [zeroResidences, setZeroResidences] = useState(false);

    const getResidences = () => {
        ResidenceDataService.getAll().then((response) => {
            if (response.status === 204) {
                setResidences([]);
                setZeroResidences(true);
            } else setResidences(response.data);
        }).catch((error) => {
            console.log('error getResidences', error);
        });
    }

    const refreshList = () => {
        getResidences();
    }

    const removeAllResidences = () => {
        ResidenceDataService.removeAll().then((response) => {
            refreshList();
        })
    }

    const goToAddResidence = () => {
        history.push('/add-residence');
    }
    
    useEffect(() => {
        getResidences();
    }, []);

    return (
        <ListContainer>
            <h4>Residences List</h4>
            {
                zeroResidences && <div>
                    There isn't any residence saved, please add a new residence.
                </div>
            }
            <AddButton
                className='btn btn-success'
                onClick={goToAddResidence}
            >
                Add new Residence
            </AddButton>
            <div>
                {residences && residences.length > 0 &&
                    <TableContainer>
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
                    </TableContainer>
                }
            </div>

            <button
                className={"m-3 btn btn-sm btn-danger"}
                onClick={removeAllResidences}
                disabled={zeroResidences}
            >
                Remove All
            </button>
        </ListContainer>
    );
}

export default ResidenceList;