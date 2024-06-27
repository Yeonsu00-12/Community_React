import React from "react";
import * as M from "../../Styles/mainStyle";

const ListPosts = ({posts,loading}) => {

    return (
        <>
            {loading && <div>Loading...</div>}
            <M.Container>
                {posts.map((post) => {
                    // const isAuthor = user && user.userId === post.userId;
                    const profileImageSrc = post.profile ? `http://localhost:4000/${post.profile}` : 'default-profile.png';
                    const titleCheck = post.title.length > 26 ? post.title.substring(0,23) + '...' : post.title;

                    return (
                        <M.List to={`/posts/${post.postId}`}  key={post.postId}>
                            <M.H1>{titleCheck}</M.H1>
                            <M.Info>
                                <M.Description>좋아요 {post.likes} 댓글 {post.commentCount} 조회 수 {post.views}</M.Description>
                                <M.Description>{new Date(post.created_At).toLocaleString()}</M.Description>
                            </M.Info>
                            <M.Div>
                                <M.SubTitleImg src = {profileImageSrc} alt="profile"/>
                                <M.Tag>{post.nickname}</M.Tag>
                            </M.Div>
                        </M.List>
                    )
                })}
            </M.Container>
        </>
    );
};

export default ListPosts;