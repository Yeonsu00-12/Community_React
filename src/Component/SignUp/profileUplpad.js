import React, { forwardRef, useRef, useState } from "react";
import { ProfileUploadWrapper, ProfiledUpload } from "../Login/loginStyle";

const ProfileImgUpload = forwardRef(({onChange, onBlur, onImageLoad}, ref) => {
    const [imageUrl, setImgUrl] = useState("");
    const fileInput = useRef(null);

    const imageUpload = (e) => {
        const file = e.target.files[0];
        if(file){
            const reader = new FileReader();
            reader.onload = () => {
                if(reader.readyState === 2){
                    setImgUrl(reader.result);
                    onImageLoad(e.target.files[0]);
                }
            };
            reader.readAsDataURL(file);
        }
    }
    

    return (
        <ProfileUploadWrapper>
            <ProfiledUpload onClick={() => {fileInput.current.click();}}>
                {imageUrl ? (
                    <img src={imageUrl} alt="Profile Preview"/>
                ) : (
                    <span>+</span>
                )}
            </ProfiledUpload>
            <input
                type="file"
                accept="image/*"
                name="profile_img"
                style={{display: 'none'}}
                onChange={imageUpload}
                onBlur={onBlur}
                ref={fileInput}
            />
        </ProfileUploadWrapper>
    );
});

export default ProfileImgUpload;