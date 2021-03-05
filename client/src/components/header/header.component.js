import React from 'react';
import { HeaderContainer, TitleContainer, OptionLink, OptionsContainer } from './header.styles';

const Header = () => (
    <HeaderContainer>
        <TitleContainer to='/'>
            Residences Heatmap
        </TitleContainer>
        <OptionsContainer>
            <OptionLink to='/residences'>
                List of Residences
            </OptionLink>
            <OptionLink to='/heatmap'>
                HeatMap
            </OptionLink>
        </OptionsContainer>
    </HeaderContainer>
);

export default Header;