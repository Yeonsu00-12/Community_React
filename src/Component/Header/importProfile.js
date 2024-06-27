import React, { useEffect, useState } from "react";
import { useAuth } from "../../auth/authProvider";
import { HeaderImg } from "./headerStyle";

const ImportProfile = () => {
    const {user} = useAuth();
    const [profileImage, setProfileImage] = useState('');

    useEffect(() => {
        console.log("user object : ", user);
        if(user && user.profileImage){
            const imageUrl = `http://localhost:4000/${user.profileImage}`;
            console.log("profile image: ", imageUrl)
            setProfileImage(imageUrl);
        } else {
            console.log("user or profile is undefinded");
        }
    }, [user]);

    return profileImage ? <HeaderImg src={profileImage} alt="Profile" /> : null;
}

export default ImportProfile;