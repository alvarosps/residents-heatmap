import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
    background-color: #f1f1f1;
    overflow: hidden;
    padding: 0 10px;
`;

export const TitleContainer = styled.div`
    height: 100%;
    padding: 15px;
    font-size: 25px;
    font-weight: bold;
`;

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
    text-decoration: none;
    text-align: center;
    color: black;
    font-size: 18px;
`;
