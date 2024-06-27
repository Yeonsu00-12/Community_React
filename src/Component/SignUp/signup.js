import React,{ useState } from "react";
import {useForm} from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { Content, InputBox, Title, Wrap } from "../Login/loginStyle";
import Input from "../Input/input";
import axios from "axios";
import Header from "../Header";
import * as E from "../../constants/formRequitements";
import { Error } from "../Error/style";
import Button from "../Button";
import ProfileImgUpload from "./profileUplpad";

const SignUp = () => {
    const navigate = useNavigate();
    const [nicknameResult, setNicknameResult] = useState("");
    const [emailResult, setEmailResult] = useState("");
    const [selectImg, setSelectedImg] = useState(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        getValues,
    } = useForm();

    const handleProfileImg = (file) => {
        setSelectedImg(file);
        setValue('profile', file);
    }

    const emailCheck = async(email) => {
        console.log(email);
        try {
            const emailRes = await axios.get(
                `http://localhost:4000/user/emailCheck?email=${email}`
            );
            setEmailResult(
                emailRes.data.exist ? "중복된 이메일입니다." : "사용 가능한 이메일입니다."
            );
        } catch (error) {
            console.error(error);
        }
    }

    const nicknameCheck = async(nickname) => {
        console.log(nickname);
        try {
            const nicknameRes = await axios.get(
                `http://localhost:4000/user/nicknameCheck?nickname=${nickname}`
            );
            setNicknameResult(
                nicknameRes.data.exist ? "중복된 닉네임입니다." : "사용 가능한 닉네임입니다."
            );
        } catch (error) {
            console.log(error);
        }
    }

    const onSubmit = async(data) => {
        if(!data.email || !data.password || !data.nickname || !data.profile) {
            console.log('입력값 다 안채워짐');
            alert("모든 항목을 채워주세요!");
            return;
        }

        const formData = new FormData();
        formData.append("email", data.email)
        formData.append("password", data.password);
        formData.append("nickname", data.nickname);
        formData.append("profile", selectImg);
        console.log("formData : ", {
            email: data.email,
            password: data.password,
            nickname: data.nickname,
            profile: selectImg
        });

        try {
            const response = await axios.post('http://localhost:4000/user/signup', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('회원가입 성공 ~', response.data);
            alert("회원가입 성공!");
            navigate("/login"); 
        } catch(error) {
            console.log("회원가입 실패", error);
            alert('회원가입에 실패하셨습니다. 다시 시도해주세요.');
        } finally {
            console.log("server error");
        }
    };

    return (
        <>
        <Header/>
        <Wrap>
            <Title>회원가입</Title>
            <InputBox onSubmit={handleSubmit(onSubmit)}>
                <Content>프로필 사진</Content>
                <ProfileImgUpload onImageLoad={handleProfileImg} {...register("profile", {required: E.porfileCheck.required})}/>
                {errors.profile && <Error>{errors.profile.message}</Error>}
                <Content>이메일</Content>
                <Input size={"large"} type={"email"} placeholder={"이메일을 입력하세요."}
                    {...register("email",{
                        required : E.emailRequirements.required, 
                        pattern: E.emailValid.pattern
                    })}
                    onChange={(e) => emailCheck(e.target.value)}
                    />
                    {errors.email && <Error>{errors.email.message}</Error>}
                    <Error>{emailResult}</Error>
                    <Content>비밀번호</Content>
                    <Input size={"large"} type={"password"} placeholder={"비밀번호를 입력하세요."}
                    {...register("password", {
                        required : E.passwordRequirements.required, 
                        pattern: E.passwordPattern.pattern
                    })}
                    />
                    {errors.password && <Error>{errors.password.message}</Error>}
                    <Content>비밀번호 확인</Content>
                    <Input size={"large"} type={"password"} placeholder={"비밀번호를 동일하게 입력해주세요."}
                    {...register("passwordConfirm", E.validatePassword(getValues))}
                    />
                    {errors.passwordConfirm && <Error>{errors.passwordConfirm.message}</Error>}
                    <Content>닉네임</Content>
                    <Input size={"large"} type={"text"} placeholder={"닉네임을 입력하세요."}
                    {...register("nickname", {
                        required: E.nickNameValue.pattern,
                        maxLength : E.nickNameLength.maxlength
                    })}
                    onChange = {(e) => nicknameCheck(e.target.value)}
                    />
                    {errors.nickname && <Error>{errors.nickname.message}</Error>}
                    <Error>{nicknameResult}</Error>
                    <Button type="submit" variant={'submitBtn'}>회원가입</Button>
            </InputBox>
        </Wrap>
        </>
    );
};

export default SignUp;