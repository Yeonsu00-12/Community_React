import React, { useState } from "react";
import Button from "../Button";
import Input from "../Input/input";
import Header from "../Header";
import { useForm } from "react-hook-form";
import { Error } from "../Error/style";
import * as E from "../../constants/formRequitements";
import { Content, InputBox, Title, Wrap } from "./loginStyle";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../auth/authProvider";


const Login = () => {
    const navigate = useNavigate();
    const {login} = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const SignUpPage = () => {
        navigate('/signup')
    }

    const onSubmit = async(data) => {
        setIsLoading(true);
        try {
            const response = await axios.post('http://localhost:4000/user/login', data, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if(response.status === 200){
                alert('로그인 성공!');
                console.log('로그인 성공(프론트) 유저 : ', response.data);
                login(response.data.user);
                navigate('/');
            }else {
                alert("이메일과 비밀번호가 일치하지 않습니다");
            } 
        }catch(error) {
            console.error("error : ", error);
        } finally {
            setIsLoading(false);
        }
    }
    return (
        <>
            <Header/>
            <Wrap>
                <Title>로그인</Title>
                <InputBox onSubmit={handleSubmit(onSubmit)}>
                    <Content>이메일</Content>
                    <Input size={"large"} type={"email"} placeholder={"이메일을 입력하세요."}
                    {...register("email",{
                        required : E.emailRequirements.required, 
                        pattern: E.emailValid.pattern
                    })}
                    />
                    {errors.email && <Error>{errors.email.message}</Error>}
                    <Content>비밀번호</Content>
                    <Input size={"large"} type={"password"} placeholder={"비밀번호를 입력하세요."}
                    {...register("password", {
                        required : E.passwordRequirements.required, 
                        pattern: E.passwordPattern.pattern
                    })}
                    />
                    {errors.password && <Error>{errors.password.message}</Error>}
                    <Button type="submit" variant={'submitBtn'} disabled={isLoading}>{isLoading ? "로그인 중..." : "로그인"}</Button>
                </InputBox>
                <Button variant={'buttonBtn'} onClick={SignUpPage}>회원가입</Button>
            </Wrap>
        </>
    )
}

export default Login;