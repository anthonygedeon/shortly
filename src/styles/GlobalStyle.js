import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`

    ${normalize}

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    ul {
        display: flex;
    }

    ul li {
        list-style: none;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: 'Poppins', sans-serif;
    }

    #root, .app {
        width: 100%;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    button {
        border: none;
        background-color: transparent;
        padding: 0;
        
    }

    img {
        max-width: 100%;
    }

    h1,h2,h3,h4,h5,h6, p {
        margin: 0;
    }

    input {
        border: none;
        
    }

`;

export default GlobalStyle;
