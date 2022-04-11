import { ImgDiv } from "./ImgDiv";
import { Input } from "./Input";
import lineSvg from "../pictures/line.svg";

export const CategoryDetail = () => {
    return (
        <div
            className="flex column"
            style={{ width: "98%", marginBottom: "20px" }}
        >
            <h1>Category 1 Name</h1>
            <div className="flex">
                <ImgDiv width={"13.5%"} />
                <Input width={"86.5%"} />
            </div>
            <h2>Description</h2>
            <Input />
            <div className="flex space-between">
                <h1>Border</h1>
                <h1>Border Color</h1>
            </div>
            <div className="flex space-between">
                <Input width={"40%"} />
                <Input width={"40%"} />
            </div>
            <img src={lineSvg} className="line"/>
        </div>
    );
};
