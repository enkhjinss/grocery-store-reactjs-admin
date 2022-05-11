import { ImgDiv } from "./ImgDiv";
import { InputComponent } from "./Input";
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
                <InputComponent width={"86.5%"} />
            </div>
            <h2>Description</h2>
            <InputComponent />
            <div className="flex space-between">
                <h1>Border</h1>
                <h1>Border Color</h1>
            </div>
            <div className="flex space-between">
                <InputComponent width={"40%"} />
                <InputComponent width={"40%"} />
            </div>
            <img src={lineSvg} className="line"/>
        </div>
    );
};
