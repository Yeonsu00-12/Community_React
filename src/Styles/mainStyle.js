import styled from "styled-components";
import { fontSize } from './fonts';
import { Link } from "react-router-dom";

export const H1 = styled.h1`
    font-size : ${fontSize.big};
    padding: 0.1rem;
    margin: 0;
`

export const Wrap = styled.div`
    margin: 0 auto;
    width: 600px;
`

export const Div = styled.div`
    display: inline-flex;
    align-items: center;
    margin-top: 0.5rem;
`

export const SubTitleImg = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50rem;
`

export const List = styled(Link)`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    margin: 1rem;
    padding: 1rem;
    border-radius: 1rem;
    box-shadow: 3px 4px 4px rgba(204, 204, 204, 0.25);
    color : black;
    text-decoration: none;
`

export const Description = styled.p`
    font-size: 0.5rem;
    margin-right: 2.5rem;
`

export const Tag = styled.p`
    font-size: 10px;
    font-weight: 900;
    margin-left: 0.5rem;
    margin-top: 1rem;
`

export const Info = styled.div`
    display: inline-flex;
    justify-content: space-between;
`

export const Container = styled.div`
    height: 500px;
    margin-top: 1rem;
`

export const RedirectPage = styled.div`
    display: flex;
    height: 20px;
    width: 100%;
    justify-content: end;
    height: 100%;
`

export const Button = styled.button`
    display: flex;
    border-radius: 0.5rem;
    width: 20px;
    background-color: #ACA0EB;
    border : none;
    color: #ffffff;
    justify-content: center;
    font-weight: 600;
    width: 147PX;
    height: 30PX;
    align-items: center;
`

export const Section = styled.section`
    margin: 0 auto;
    width: 600px;
`

export const MainTitleDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem;
`

export const Title = styled.p`
    margin: 0;
    font-size: ${fontSize.meidium};
`