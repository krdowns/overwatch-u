import styled, { css } from 'styled-components';

const buttonStyles = css`
  background-color: #405275;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: #405275;
    border: 1px solid #405275;
  }
`;

const invertedButtonStyles = css`
  background-color: #FA9C1D;
  color: black;
  border: 1px solid #405275;

  &:hover {
    background-color: #405275;
    color: white;
    border: none;
  }
`;

const googleSignInStyles = css`
  background-color: #FA9C1D;
  color: white;
  border: 1px solid #FA9C1D;

  &:hover {
    background-color: #4A4C4E;
    border: none;
  }
`;

const getButtonStyles = props => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }

  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;

  ${getButtonStyles}
`;
