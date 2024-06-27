import styled from "styled-components";

export const headerContainer = styled.header`
    width: 100%;
    padding: 20px 0;
`

export const header = styled.div `
    width: 600px;
    margin: 0 auto;
    text-align: center;
    position: relative;
`

export const h1 = styled.h1`
    font-size : 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin: 0 5rem;
`

export const HeaderImg = styled.img.attrs(props => ({
    src: props.src,
    alt: props.alt
}))`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    position: absolute; 
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
`

export const btn = styled.button`
    display: flex; 
    background: none;
    border : none;
    position: absolute;
    left: 100%; 
    top: 30%;
    cursor : pointer;
`

export const hr = styled.hr `
    margin-top: 20px;
    border: 1px solid;
`
