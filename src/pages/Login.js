import { Input } from "../components/Input";
import { Button } from "../components/Button";
import googleIcon from "../pictures/googleIcon.svg";
import gitHubLogo from "../pictures/github-logo.png";
import { User } from "../components/User";

import "../styles/login.css";
import "../styles/flex.css";

import { useContext, useEffect, useRef, useState } from "react";

import {
    GoogleAuthProvider,
    signInWithPopup,
    GithubAuthProvider,
    RecaptchaVerifier,
    signInWithPhoneNumber,
} from "firebase/auth";
import auth from "../firebase";
import { UserContext } from "../components/userContext";
auth.languageCode = "mn";

const providerGoogle = new GoogleAuthProvider();
const providerGit = new GithubAuthProvider();

export const Login = () => {
    const { setUser, user } = useContext(UserContext);
    const [code, setCode] = useState("");

    const recaptchaVerifier = useRef();
    const confirmationResult = useRef();

    useEffect(() => {
        recaptchaVerifier.current = new RecaptchaVerifier(
            "sign-in-button",
            {
                size: "invisible",
            },
            auth
        );
    }, []);

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

    const signInPhoneNumber = async () => {
        try {
            confirmationResult.current = await signInWithPhoneNumber(
                auth,
                `+976${code}`,
                recaptchaVerifier.current
            );
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <>
            {user && <User />}
            {!user && (
                <div className="flex column align-center">
                    <div id="sign-in-button"></div>
                    <h1>Login eeee</h1>
                    <Input
                        placeHolder="enter the phone number"
                        width={"50%"}
                        onFun={(value) => {
                            setCode(value);
                        }}
                        type="number"
                    />

                    <Button
                        width={"50%"}
                        text="check code"
                        onClick={signInPhoneNumber}
                    />
                    <div className="flex loginContainer">
                        <img src={googleIcon} onClick={googleSignIn} />
                        <img
                            src={gitHubLogo}
                            className="signInGitHub"
                            onClick={gitHubSignUp}
                        />
                    </div>
                </div>
            )}
        </>
    );
};
