import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import popperLogo from '../images/popper-logo.svg';
import stripes from '../images/stripes.svg';

import { media } from './Framework';

const HeaderStyled = styled.header`
  background-image: url(${stripes}),
    radial-gradient(400px, #fff, #fff1e1 20%, #ffa0b1);
  text-align: center;
  padding: 50px 25px;
  background-size: cover;
  background-position: center 60%;
`;

const Logo = styled.img`
  height: 200px;
  user-select: none;
  margin-bottom: 25px;
`;

const Slogan = styled.h2`
  margin: 0 auto;
  max-width: 100%;
  font-family: 'Luckiest Guy', sans-serif;
  -webkit-font-smoothing: antialiased;
  color: #c83b50;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  height: 25px;
  font-size: 6vw;

  ${media.sm} {
    font-size: 36px;
  }
`;

const SubSlogan = styled.p`
  color: #642f45;
  font-size: 22px;
  font-weight: bold;
  font-style: italic;
  margin-bottom: 0;
`;

const Button = styled(Link)`
  position: absolute;
  top: 0;
  right: 0;
  margin: 20px;
  padding: 10px 20px;
  border-radius: 10px;
  text-decoration: none;
  color: #c73a50;
  text-transform: uppercase;
  font-weight: bold;
  background: white;
  border: 1px solid transparent;
  transition: all 0.2s ease-in-out;

  &:hover,
  &:focus {
    border: 1px solid #c73a50;
  }
`;

const Header = () => (
  <HeaderStyled>
    <Button to="/docs">Documentation</Button>
    <Logo src={popperLogo} alt="Popper logo" draggable="false" />
    <Slogan>Tooltip Positioning Engine</Slogan>
    <SubSlogan>Includes popovers, drop-downs, and more</SubSlogan>
  </HeaderStyled>
);

export default Header;