import React from "react";
import * as S from "./style";

const ErrorMessage = (props) => {
    return (
        <>
        <S.Error>{props.children}</S.Error>
        </>
    );
};

export default ErrorMessage;