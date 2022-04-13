import { Name } from "./Name";

export const EditProduct = ({ productDetail }) => {
    console.log(productDetail);
    return (
        <div
            style={{ width: "40%", height: "80%" }}
            className="flex column align-center"
        >
            <Name name="banana" />
            <Name />
            <Name />
            <Name />
            <Name />
        </div>
    );
};
