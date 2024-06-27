import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0; 
    font-family: "Montserrat", sans-serif;
    box-sizing: border-box;
}
body{
    background-color: #F4F5F7;
    margin: 0;
    padding: 0;
}
`;

export const fontWeight = {
    normal : 400,
    middle : 600,
    bold : 700,
    extraBold : 900
}

export const fontSize = {
    small : '14px',
    small_mid : '15px',
    mid : '16px',
    meidium : '24px',
    modalSize : '20px',
    big : '32px'
}