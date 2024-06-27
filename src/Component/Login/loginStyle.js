import styled from "styled-components";
import { fontSize, fontWeight } from "../../Styles/fonts";

export const InputBox = styled.form`
    display: flex;
    flex-direction: column;
    width : 100%;
`

export const Content = styled.p`
    font-weight: ${fontWeight.middle};
    margin-top: 0;
    margin-bottom: 0.3rem;
    margin-top: 1rem;
`

export const Wrap = styled.section`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    width: 600px;
    margin-top: 10rem;
`

export const Title = styled.h1`
    margin : 0;
    font-size: ${fontSize.big};
`

export const ProfileUploadWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
`

export const ProfiledUpload = styled.div`
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background-color: #e0e0e0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: relative;
    overflow: hidden;

    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`