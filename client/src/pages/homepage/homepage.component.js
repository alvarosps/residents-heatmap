import React from 'react';
import ResidenceList from '../../components/residence-list/residence-list.component';

import { HomePageContainer } from './homepage.styles';

const HomePage = () => (
    <HomePageContainer>
        <ResidenceList />
    </HomePageContainer>
);

export default HomePage;