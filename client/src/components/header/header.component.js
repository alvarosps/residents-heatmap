import React from 'react';
import { HeaderContainer, TitleContainer, OptionLink, OptionsContainer } from './header.styles';

const Header = () => (
    <HeaderContainer>
        <TitleContainer>
            Residences Heatmap
        </TitleContainer>
        <OptionsContainer>
            <OptionLink to='/'>
                LIST
            </OptionLink>
            <OptionLink to='/'>
                HEATMAP
            </OptionLink>
            <OptionLink to='/'>
                EDIT
            </OptionLink>
        </OptionsContainer>
    </HeaderContainer>
);

export default Header;