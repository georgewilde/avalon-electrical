import React, { FC, useContext } from 'react';

import {
  StyledHeader,
  StyledInner,
  StyledLink,
  StyledLogoText,
} from './header.styled';
import { SiteMetadataContext } from '@context/site-metadata';

export const Header: FC = () => {
  const siteMetadata = useContext(SiteMetadataContext);

  return (
    <StyledHeader>
      <StyledInner className="container">
        <StyledLogoText>
          <StyledLink to="/" data-testid="siteTitle">
            {siteMetadata.companyName}
          </StyledLink>
        </StyledLogoText>
      </StyledInner>
    </StyledHeader>
  );
};
