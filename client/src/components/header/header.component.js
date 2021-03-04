import React from 'react';
import { HeaderContainer, TitleContainer, OptionLink, OptionsContainer } from './header.styles';

const Header = () => (
    <HeaderContainer>
        <TitleContainer>
            Residences Heatmap
        </TitleContainer>
        <OptionsContainer>
            <OptionLink to='/residences'>
                List of Residences
            </OptionLink>
            <OptionLink to='/heatmap'>
                HeatMap
            </OptionLink>
            <OptionLink to='/add-residence'>
                Add new Residence
            </OptionLink>
        </OptionsContainer>
    </HeaderContainer>
);

export default Header;