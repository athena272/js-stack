import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    /* background: #222; */
    background: ${props => props.theme};
    color: #fff;
    font-family: sans-serif;
  }
`;
