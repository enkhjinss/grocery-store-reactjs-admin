import { AddProduct } from "../components/AddProduct";
import { EditProduct } from "../components/EditProduct";
import { useState } from "react";
import { axios } from "react"

export const Product = () => {
    const [productDetail, setProductDetail] = useState();
    const onSave = async () => {
        await axios.post("http://localhost:8080/products", productDetail);
    };
    return (
        <main className="flex align-center justify-center">
            <AddProduct productDetail={productDetail} setProductDetail={setProductDetail} onSave={onSave}/>
            <EditProduct productDetail={productDetail} />
        </main>
    );
};
