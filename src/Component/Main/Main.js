import { useEffect, useState } from "react"
import ListPosts from "./posts";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Section,Button, RedirectPage, MainTitleDiv,Title } from "../../Styles/mainStyle";

const MainPage = () => {
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);

    const navigate = useNavigate();

    function writePage() {
        navigate('/write')
    }

    const fetchPosts = async() => {
        try{
            const res = await axios.get('http://localhost:4000/posts');
            setPosts(res.data);
            setLoading(false);
        } catch(error){
            console.error('failed to fetch psots: ', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPosts();
    },[]);

    return(
        <Section>
            <MainTitleDiv>
                <Title>안녕하세요,</Title>
                <Title>아무 말 대잔치 <strong>게시판</strong> 입니다.</Title>
            </MainTitleDiv>
            <RedirectPage>
                <Button onClick={writePage}>게시글 작성</Button>
            </RedirectPage>
            <ListPosts posts={posts} loading={loading}/>
        </Section>
    )
}

export default MainPage;