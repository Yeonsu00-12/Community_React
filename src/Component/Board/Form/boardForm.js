import { useForm } from "react-hook-form";
import { titleCheck, writeCheck, imgCheck } from "../../../constants/formRequitements";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Input from "../../Input/input";
import { Error } from "../../Error/style";
import * as W from "../../../Styles/writeStyle"
import Button from "../../Button";
import {useAuth} from "../../../auth/authProvider"

const WriteForm = () => {
    const navigate = useNavigate();
    const [imgPreview, setImagePreview] = useState("");
    const {user} = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm();

    const files = watch('files'); // files 이름으로 파일을 감시함

    useEffect(() => {
        if (files && files.length > 0) { // files가 존재하고 길이가 0보다 크면
            const file = files[0]; // 첫번째 파일을 가져옴
            setImagePreview(URL.createObjectURL(file)); // 파일을 미리보기 이미지로 설정
        }
    }, [files]); // files가 변경될 때마다 useEffect

    const onSubmitHandler = async(data) => {
        const {title, content, files} = data;

        if (!data.files || data.files.length === 0) { // files가 존재하지 않거나 길이가 0 이면
            console.error('No file selected');
            alert('이미지를 선택해 주세요');
            return;
        }

        const formData = new FormData();
        formData.append("title", title);
        formData.append("content", content);
        formData.append("userId", user.userId);
        formData.append("image", files[0]);
        
        console.log('Form data: ', { title, content, userId: user.userId, image: files[0] });
        try {
            const res = await axios.post("http://localhost:4000/posts",formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            if(res.status === 201) {
                alert("게시글이 작성되었습니다!");
                console.log("게시글 작성한거 : ",res.data);
                navigate("/");
            } else {
                alert("게시글 작성 실패 !");
            }
        } catch(e) {
            console.error(e);
            alert("서버오류 씨시시ㅣㅅㅅㅅ");
        }
    };

    return (
        <W.Wrap>
            <W.Container>
                <W.HeadTitle>
                    <h1>게시글 작성</h1>
                </W.HeadTitle>
                <W.Form onSubmit={handleSubmit(onSubmitHandler)}>
                    <div>
                        <W.H5>제목*</W.H5>
                        <W.Line/>
                        <Input 
                        type={"text"} size={"large"} placeholder = {"제목을 입력해주세요. (최대 26글자)"}
                        {...register("title", titleCheck)}
                        />
                        {errors.title && <Error>{errors.title.message}</Error>}
                    </div>
                    <W.Line/>
                    <W.TextContainer>
                        <W.H5>내용*</W.H5>
                        <W.MiddleLine/>
                        <W.TextContext rows="5" placeholder="내용을 입력해주세요."
                            {...register("content", writeCheck)}
                        ></W.TextContext>
                        {errors.content && <Error>{errors.content.message}</Error>}
                    </W.TextContainer>
                    <W.Line/>
                    <label>
                        <W.H5>이미지</W.H5>
                        {imgPreview ? (
                            <W.ImgSize src={imgPreview} alt="사진첨부"/>
                        ):(
                            <div></div>
                        )}
                        <Input size={"large"} {...register("files", imgCheck)}
                            type="file"
                            accept="image/*"
                        />
                    </label>
                    {errors.img && <Error>{errors.img.message}</Error>}
                    <div>
                        <Button type="submit" variant={'submitBtn'}>완료</Button>
                    </div>
                </W.Form>
            </W.Container>
        </W.Wrap>
    )
}

export default WriteForm;