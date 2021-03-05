import styled from 'styled-components';

export const TableContainer = styled.table`
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;

    td, th {
        border: 1px slid #ddd;
        padding: 8px;
    }

    tr:nth-child(even) {
        background-color: #f2f2f2;
    }

    tr:hover {
        background-color: #ddd;
    }

    th {
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: left;
        background-color: #000033;
        color: white;
    }

    td:nth-child(3), td:nth-child(6) {
        text-align: center;
    }
`;

export const AddButton = styled.button`
    margin: 10px;
`;

export const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
`;