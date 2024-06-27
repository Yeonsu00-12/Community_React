export const emailRequirements = {
    required : {
        value : true,
        message : "이메일을 입력해주세요"
    },
};

export const emailValid = {
    pattern : {
        value : /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,
        message : "올바른 이메일 주소 형식을 입력해주세요."
    }
}

export const passwordRequirements = {
    required : {
        value : true,
        message : "비밀번호를 입력해주세요"
    }
}

export const passwordPattern = {
    pattern : {
        value : /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/,
        message : "비밀번호는 8자 이상, 20자 이하이며, 대문자, 소문자, 숫자, 특수문자를 각각 최소 1개 포함해야 합니다."
    }
}

export const validatePassword = (getValues) => ({
    validate : (value) => value === getValues("password") || "비밀번호가 일치하지 않습니다."
})

export const nickNameValue = {
    pattern : {
        value : /\s/g,
        message : "띄어쓰기를 없애주세요."
    }
}

export const nickNameLength = {
    maxlength : {
        value : 10,
        message : "닉네임은 최대 10자까지 작성 가능합니다."
    }
}

export const porfileCheck = {
    required : {
        value : true,
        message : "프로필 사진을 업로드해주세요!"
    }
}

export const titleCheck = {
    required : "제목은 필수 입력 항목입니다.",
    maxLength: {
        value : 26,
        message : "제목을 입력해주세요!"
    },
};

export const writeCheck = {
    required : "게시글 내용은 필수 입력 항목입니다."
}

export const imgCheck = {
    required: "이미지파일을 추가해주세요!"
};

