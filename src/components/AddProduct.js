import { Input } from "./Input";
import { Button } from "./Button";
import { ImgDiv } from "./ImgDiv";

export const AddProduct = () => {
    return (
        <div className="flex column" style={{ width: "98%"}}>
            <h1>Product 1 name</h1>
            <div style={{ display: "flex" }}>
                <ImgDiv width={"50px"}/>
                <Input />
            </div>
        </div>
    );
};
