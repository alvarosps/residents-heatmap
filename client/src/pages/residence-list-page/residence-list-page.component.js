import React from 'react';
import ResidenceList from '../../components/residence-list/residence-list.component';

import { HomePageContainer } from './residence-list-page.styles';

const HomePage = ({history}) => (
    <HomePageContainer>
        <ResidenceList history={history} />
    </HomePageContainer>
);

export default HomePage;