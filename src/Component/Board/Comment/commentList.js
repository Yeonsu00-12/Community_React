import axios from 'axios';
import React, { useState } from 'react'
import Button from '../../Button';
import Comment from './comment';
import * as D from '../../../Styles/detailPostStyle';

const CommnetList = ({comments, userInfo, postId, onUpdateComments}) => {
    const [commentText, setCommentsText] = useState('');
    const [editingCommentId, setEditingCommentId] = useState(null);

    const handleCommentSubmit = async() => {
        if(editingCommentId){
            await updateComment(editingCommentId, commentText);
        } else {
            await addComment(postId, userInfo.userId, commentText);
        }
        setEditingCommentId(null);
        setCommentsText('');

        const res = await axios.get(`http://localhost:4000/posts/${postId}`);
        onUpdateComments(res.data.data.comments);
    };

    const addComment = async(postId, userId, comment) => {
        try {
            await axios.post('http://localhost:4000/posts/comment', {postId, userId, comment});
        } catch(error) {
            console.error('failed to add comment: ', error);
        }
    };

    const updateComment = async (commentId, commentText) => {
        try {
            console.log('Sending update comment request:', { commentId, comment: commentText });
            await axios.put('http://localhost:4000/posts/comment/edit', { commentId: Number(commentId), comment: String(commentText) });
        } catch (error) {
            console.error('failed to update comment:', error);
        }
    };

    return (
        <D.CommentBox>
            <D.Textarea
                placeholder='댓글을 남겨주세요!'
                value={commentText}
                onChange={(e) => setCommentsText(e.target.value)}/>
            <D.RegisterBox>
                <D.SubmitBtn type='submit' onClick={handleCommentSubmit}>
                    {editingCommentId ? '댓글 수정' : '대화 등록'}
                </D.SubmitBtn>
            </D.RegisterBox>
            <D.CommentListBox>
                <D.InnerBox>
                    {comments.map(comment => (
                        <Comment
                            key={comment.commentId}
                            comment={comment}
                            userInfo={userInfo}
                            postId={postId}
                            onUpdateComments={onUpdateComments}
                            onEdit={() => {
                                setEditingCommentId(comment.commentId);
                                setCommentsText(comment.comment);
                            }}
                        />
                    ))}
                </D.InnerBox>
            </D.CommentListBox>
        </D.CommentBox>
    );
};

export default CommnetList;