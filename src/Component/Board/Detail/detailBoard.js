import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../Button";
import ModalOpen from "../Modal/modal";
import CommnetList from "../Comment/commentList";
import * as D from '../../../Styles/detailPostStyle';
import Header from "../../Header";

const PostDetail = () => {
    const {id} = useParams();
    const [post, setPost] = useState(null);
    const [userInfo, setUserInfo] = useState(null);
    const navigate = useNavigate();
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        const fetchUserInfo = async() => {
            const res = await axios.get('http://localhost:4000/user', {withCredentials: true});
            setUserInfo(res.data.user);
        };
        const fetchPost = async () => {
            try{
                const res = await axios.get(`http://localhost:4000/posts/${id}`);
                setPost(res.data.data);
                console.log(res.data.data);
            } catch(error) {
                console.error('Failed to fetch post : ', error);
            }
        };
        fetchUserInfo();
        fetchPost();
    },[id]);

    function editPostHandler()  {
        navigate(`/posts/edit/${id}`)
    }

    const handleDeletePost = async() => {
        try {
            await axios.delete(`http://localhost:4000/posts/${id}`);
            navigate('/')
        } catch(error){
            console.error("delete post error : ",error);
        }
    }

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    }

    const handleCommentUpdate = (newComments) => {
        setPost((prevPost) => ({
            ...prevPost,
            comments: newComments,
        }));
    };

    const isAuthor = userInfo?.userId === post?.userId;

    return (
        <>
        <Header/>
        <D.Container>
            <D.Title>{post?.title}</D.Title>
            <D.Info>
                <D.Info_div>
                    <D.AuthorImg src={`http://localhost:4000/${post?.authorProfile}`} alt="userProfile"/>
                    <D.AuthorName>{post?.authorNickname}</D.AuthorName>
                    <D.Description>{new Date(post?.created_At).toLocaleString()}</D.Description>
                </D.Info_div>
                {isAuthor && (
                    <div>
                        <D.Edit onClick={editPostHandler} type="click">수정</D.Edit>
                        <D.Edit onClick={toggleModal} type="submit">삭제</D.Edit>
                    </div>
                )}
            </D.Info>
            <D.Hr/>
        </D.Container>
        <D.Content>
            <div><D.ContentImg src={`http://localhost:4000/${post?.image}`}/></div>
            <D.Text>{post?.content}</D.Text>
        </D.Content>
        <D.ViewBox>
            <D.Views><p style={{ margin : '0' }}>{post?.views}</p><p style={{ margin : '0' }}>조회수</p></D.Views>
            <D.Views><p style={{ margin : '0' }}>{post?.commentCount}</p><p style={{ margin : '0' }}>댓글</p></D.Views>
        </D.ViewBox>
        <D.Hr/>
        <ModalOpen
                    message="삭제하시겠습니까?"
                    isOpen={modalOpen}
                    onRequestClose={toggleModal}
                    onConfirm={handleDeletePost}
                />
                {post && userInfo && (
                    <CommnetList 
                        comments={post.comments} 
                        userInfo={userInfo}
                        postId={post.postId}
                        onUpdateComments={handleCommentUpdate}
                    />
                )}
        </>
    )
}

export default PostDetail;