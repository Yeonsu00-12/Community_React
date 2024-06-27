import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./Pages/main";
import Login from "./Pages/loginPage";
import { AuthProvider } from "./auth/authProvider";
import SignUpPage from "./Pages/signupPage";
import BoardWrite from "./Pages/write";
import PostDetail from "./Component/Board/Detail/detailBoard";
import EditPost from "./Component/Board/editPost";

const Router = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<Main />}></Route>
                    <Route path="/login" element={<Login/>}></Route>
                    <Route path="/signup" element={<SignUpPage/>}></Route>

                    <Route path="/write" element={<BoardWrite/>}></Route>
                    <Route path="/posts/:id" element={<PostDetail/>}></Route>
                    <Route path="/posts/edit/:id" element={<EditPost/>}></Route>
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    )
}

export default Router;