import { Input } from "../components/Input";
import { Button } from "../components/Button";
import googleIcon from "../pictures/googleIcon.svg";
import { User } from "../components/User";

import { useContext } from "react";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../firebase";
import { UserContext } from "../components/userContext";
auth.languageCode = "it";

const provider = new GoogleAuthProvider();

export const Login = () => {
    const { setUser, user } = useContext(UserContext);
    const googleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            setUser(result.user);
        } catch (error) {
            console.log(error.message);
        }
    };
    return (
        <>
            {user && <User />}
            {!user && (
                <div
                    className="flex column align-center"
                    style={{ height: "100%", width: "100%" }}
                >
                    <h1 style={{ margin: "12% 0" }}>Login</h1>
                    <Input width={"25%"} />
                    <Input width={"25%"} />
                    <Button width={"25%"} />
                    <img src={googleIcon} onClick={googleSignIn} />
                </div>
            )}
        </>
    );
};
