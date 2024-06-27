import React from "react";
import { ModalStyles } from "../../../Styles/modalStyle";
import Button from "../../Button";

const ModalOpen = ({message, isOpen, onRequestClose, onConfirm}) => {
    return(
        <ModalStyles
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            ariaHideApp={false}
            contentLabel="삭제"
            shouldCloseOnOverlayClick={false}
        >
            <h2>{message}</h2>
            <Button onClick={onConfirm} variant={'submitBtn'}>확인</Button>
            <Button onClick={onRequestClose} variant={'submitBtn'}>취소</Button>
        </ModalStyles>
    )
}

export default ModalOpen;