import { Input } from "./Input";
import { ImgDiv } from "./ImgDiv";
// import { useState } from "react";

export const Product = ({ product }) => {
    
    // const [count, setCount] = useState(0);
    return (
        <div className="flex column" style={{width: "98%", marginBottom: "20px"}}>
            <h1>Product 1 Name</h1>
            <div className="flex">
                <ImgDiv width={'13.5%'}/>
                <Input width={"86.5%"}/>
            </div>
            <h2>Description</h2>
            <Input />
            <div className="flex space-between">
                <h1>Price</h1>
                <h1>Count</h1>
                <h1>Priority</h1>
            </div>
            <div className="flex space-between">
                <Input width={"25%"} />
                <Input width={"25%"} />
                <Input width={"25%"} />
            </div>
        </div>
    )
}