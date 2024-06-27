import React from "react";
import styled, {css} from "styled-components"
import Color from "../../Styles/color"
import { fontWeight, fontSize } from "../../Styles/fonts"

const Btn = styled.button`
    display: flex;
    height: 33px;
    width: 100%;
    border: none;
    color : #ffffff;
    font-weight : ${fontWeight.bold};
    font-size : ${fontSize.small};
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    border-radius: 5px;
    cursor : pointer;
    ${props =>
        props.variant === 'submitBtn' &&
        css`
            background: ${Color.btn};
        `
    }
    ${props =>
        props.variant === 'buttonBtn' &&
        css`
            background: none;
            color : #000000;
            font-weight : ${fontWeight.normal};
            margin-top : 0.5rem;
        `
    }
    & :hover{
        background : ${Color.hoverBtn}
    }
    & :disabled {
        background : ${Color.btn}
    }
`

const Button = ({onClick, children, type = "button",variant, ...props}) => {
    return (
        <>
            <Btn type={type} onClick={onClick} variant={variant} {...props}>
                {children}
            </Btn>
        </>
    )
}

export default Button;