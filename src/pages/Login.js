import { Input } from "../components/Input";
import { Button } from "../components/Button";

export const Login = () => {
    return (
        <div
            className="flex column align-center"
            style={{ height: "100%", width: "100%" }}
        >
            <h1 style={{ margin: "12% 0"}}>Login</h1>
            <Input width={"25%"}/>
            <Input width={"25%"}/>
            <Button width={"25%"}/>
        </div>
    );
};
