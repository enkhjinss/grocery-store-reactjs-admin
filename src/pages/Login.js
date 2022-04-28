import { Input } from "../components/Input";
import { Button } from "../components/Button";
import googleIcon from "../pictures/googleIcon.svg";
import gitHubLogo from "../pictures/github-logo.png";
import { User } from "../components/User";

import { useContext } from "react";

import {
    GoogleAuthProvider,
    signInWithPopup,
    GithubAuthProvider,
} from "firebase/auth";
import auth from "../firebase";
import { UserContext } from "../components/userContext";
auth.languageCode = "it";

const providerGoogle = new GoogleAuthProvider();
const providerGit = new GithubAuthProvider();

export const Login = () => {
    const { setUser, user } = useContext(UserContext);

    const googleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, providerGoogle);
            setUser(result.user);
        } catch (error) {
            console.log(error.message);
        }
    };

    const gitHubSignUp = async () => {
        try {
            const result = await signInWithPopup(auth, providerGit);
            setUser(...user, result.user);
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
                    <div style={{ display: "flex", marginTop: "35px" }}>
                        <img src={googleIcon} onClick={googleSignIn} />
                        <img
                            src={gitHubLogo}
                            onClick={gitHubSignUp}
                            style={{
                                height: "40px",
                                width: "40px",
                                marginLeft: "40px",
                            }}
                        />
                    </div>
                </div>
            )}
        </>
    );
};
