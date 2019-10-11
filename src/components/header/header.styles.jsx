import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  background-color: #314666;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 12.5px;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  padding: 10px 0px 5px 0px;
  margin: 0px 15px;
  cursor: pointer;
  text-decoration: none;
  font-family: 'Futura';
  font-weight: light;
  color: #eee;

  :after {
    content: "";
    display: block;
    border-bottom: 5px solid #f99e1a;
    transform: scaleX(0);
    transition: 250ms ease-in-out;
    padding-bottom: 5px;
  }

  :hover:after {
    transform: scaleX(1);
  }
`;
