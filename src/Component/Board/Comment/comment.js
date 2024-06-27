import React, { useState } from "react";
import ModalOpen from '../Modal/modal';
import axios from "axios";
import * as D from '../../../Styles/detailPostStyle';

const Comment = ({ comment, userInfo, onEdit, onUpdateComments, postId }) => {
    const isAuthor = userInfo.userId === comment.userId;
    const [modalOpen, setModalOpen] = useState(false);

    function toggleModal(){
        setModalOpen(!modalOpen);
    }

    const deleteComment = async(commentId) => {
        try {
            await axios.delete(`http://localhost:4000/posts/comment/${commentId}`);
            const res = await axios.get(`http://localhost:4000/posts/${postId}`);
            onUpdateComments(res.data.data.comments);
        } catch(error){
            console.error('failed to delete comment : ', error);
        }
    };

    function handleDelete() {
        deleteComment(comment.commentId);
        toggleModal();
    }

    return (
        <div>
            <D.PersonalList>
                <D.AuthorImg src={`http://localhost:4000/${comment.userProfile}`}/>
                <D.AuthorName>{comment.nickname}</D.AuthorName>
                <D.Description>{new Date(comment.created_At).toLocaleString()}</D.Description>
            </D.PersonalList>
            <D.PersonalText>
                <p>{comment.comment}</p>
                <div style={{display : "flex"}}>
                    {isAuthor && (
                        <div>
                            <D.Edit onClick={onEdit}>수정</D.Edit>
                            <D.Edit onClick={toggleModal}>삭제</D.Edit>
                        </div>
                    )}
                    <ModalOpen
                    message="댓글을 삭제하시겠습니까?"
                    isOpen={modalOpen}
                    onRequestClose={toggleModal}
                    onConfirm={handleDelete}
                />
                </div>
            </D.PersonalText>
        </div>
    );
};

export default Comment;