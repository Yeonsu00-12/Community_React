import styled from "styled-components";
import { fontWeight, fontSize } from "./fonts";
import Color from "./color";

export const Container = styled.article`
    display: flex;
    justify-content: center;
    flex-direction: column;
`

export const Title = styled.h1`
    font-weight : ${fontWeight.extraBold};
    margin : 0;
`

export const Info = styled.div`
    display: inline-flex;
    justify-content: space-between;
`

export const Info_div = styled.div`
    display: inline-flex;
    align-items: center;
`

export const AuthorImg = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50rem;
    margin-right: 0.5rem;
`

export const AuthorName = styled.p`
    margin: 0;
    margin-top: 0.5rem;
    font-size: 10px;
    font-weight: ${fontWeight.bold};
`

export const Description = styled.p`
    font-size: 0.5rem;
    margin-top: 1rem;
    margin-right: 2.5rem;
    width: 100px;
    justify-content: right;
    display: flex;
`
export const Hr = styled.hr`
    width: 100%;
    background-color: #ccc;
    border: none;
    height: 1px;
    margin : 1rem 0;
    margin-bottom: 1rem;
`

export const Content = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ContentImg = styled.img`
    margin-left: 1rem;
    height: 306px;
    width: 544px;
    background-color: ${Color.dropBar};
`

export const Text = styled.p`
    width: 550px;
    margin-left: 1rem;
    font-size: ${fontSize.small_mid};
`

export const ViewBox = styled.article`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    height: 77px;
    margin-top: 0.5rem;
`

export const Views = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${Color.dropBar};
    margin-right: 0.5rem;
    margin-left: 0.5rem;
    font-size: ${fontSize.mid};
    width: 116px;
    border-radius: 1rem;
    font-weight: ${fontWeight.bold};
    align-items: center;
`

export const CommentBox = styled.article`
    display: flex;
    flex-direction: column;
`

export const Textarea = styled.textarea`
    height: 170px;
    border-radius: 10px;
    border: none;
    display: flex;
    padding: 1rem;
`

export const RegisterBox = styled.div`
    display: flex; 
    padding: 0.5rem; 
    justify-content: flex-end; 
    height: 30px; 
    top: 1000px;
`

export const MidHr = styled.hr`
    width: 600px; 
    top: 1040px; 
    margin:0;
`

export const CommentListBox = styled.article`
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 1rem;
    justify-content: space-between;
`

export const InnerBox = styled.div`
    display: flex; 
    flex-direction: column; 
    width: 100%;
`

export const PersonalList = styled.div`
    display: flex; 
    flex-direction: row; 
    align-items: center; 
    margin-top: 1rem;
`

export const PersonalText = styled.div`
    display: flex; 
    flex-direction: row; 
    justify-content: space-between; 
    align-items: center; 
    padding-left: 2.5rem;
`

export const Edit = styled.button`
    border-radius: 5px;
    border: 1px solid ${Color.btn};
    height: 25px;
    width: 50px;
    background: none;
    margin-right: 1rem;
    cursor : pointer;
`

export const SubmitBtn = styled.button`
    height: 30px;
    border: none;
    background-color: ${Color.btn};
    border-radius: 16px;
    font-size: ${fontSize.mid};
    width: 100px;
    font-weight: ${fontWeight.bold};
    color: #fff;
`