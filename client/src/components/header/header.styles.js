import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
    overflow: hidden;
    background-color: #f1f1f1;
    padding: 20px 10px;

    a {
        float: left;
        color: black;
        text-align: center;
        padding: 12px;
        text-decoration: none;
        font-size: 18px; 
        line-height: 25px;
        border-radius: 4px;
    }
`;

export const TitleContainer = styled(Link)`
    font-size: 25px;
    font-weight: bold;
`;

export const OptionsContainer = styled.div`
    float: right;

    @media (max-width: 500px) {
        float: none;
    }
`;

export const OptionLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
    text-decoration: none;
    text-align: center;
    color: black;
    font-size: 18px;

    &:hover {
        background-color: #ddd;
        color: black;
    }

    @media (max-width: 500px) {
        float: none;
        display: block;
        text-align: left;
    }
`;
