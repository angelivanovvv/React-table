import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
    }
    body {
        background-color: #e8e6df;
        margin: 0;
        padding: 0;
        font-family: Helvetica;
        -webkit-font-smoothing: antialiased;
    }
`;

export default GlobalStyle;
