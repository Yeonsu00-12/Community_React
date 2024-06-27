import styled from "styled-components";
import React, { forwardRef } from "react";

const InputBox = styled.input`
    padding: 0.5rem;
    border: 1px solid #000000; /* 입력 필드의 테두리를 설정 */
    border-radius: 0.3rem; 
    margin-top : 0.5rem;
    width: ${(props) => (props.size === 'large' ? '100%' : props.size === 'small' ? '150px' : '200px')};
`;

const Input = forwardRef(({ placeholder, type, size, ...rest }, ref) => {
    return <InputBox ref={ref} placeholder={placeholder} type={type} size={size} {...rest} />
});

export default Input;