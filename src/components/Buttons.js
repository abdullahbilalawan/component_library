import styled from "styled-components";
import {defaultTheme, typeScale} from '../utils'
const primaryButton = styled.button`
  background-color: red;
  border: none;
  color: white;
  padding: 12px;
  font-size: ${typeScale.paragraph};
  transition: background-color 0.2 linear, color 0.2;

  &:hover {
    background-color: ${defaultTheme.primaryHoverColor};
    color: ${defaultTheme.primaryColor}

  }

  &:focus {
    outline: 3px solid ${defaultTheme.primaryHoverColor};
    outline-offset: 2px;

  }
  &:active {
    background-color: ${defaultTheme.primaryActiveColor};
    border-color: ${defaultTheme.primaryActiveColor};
    
  }
`;

export const secondaryButton = styled(primaryButton)`
  background: blue;
  border: 10px solid rgb(255, 255, 255);
  color: blue;
`;

export const tertiaryButton = styled(primaryButton)`
  background: red;
  border: 10px solid rgb(255, 255, 255);
  color: red;
`;
export default primaryButton;
