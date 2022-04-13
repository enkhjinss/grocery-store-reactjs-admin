import { Product } from "./Product";
import { Button } from "./Button";
import { useState } from "react";
import axios from "axios";

export const AddProduct = () => {
    const [productDetail, setProductDetail] = useState();
    const onSave = async () => {
        await axios.post('http://localhost:8080/products', {data: productDetail})
        console.log(productDetail);
    };
    return (
        <div
            style={{ width: "60%", marginTop: "25px" }}
            className="flex column align-center"
        >
            <div
                className="flex column"
                style={{ width: "60%", height: "89%", overflow: "auto" }}
            >
                <Product
                    // onChange={(change, indicator) => {
                    //     // change -> bob
                    //     // indicator -> name
                    // }}
                    setProductDetail={setProductDetail}
                    productDetail={productDetail}
                />
            </div>
            <Button width="60%" text="Add" />
            <Button width="60%" text="Save" onClick={onSave} />
        </div>
    );
};
