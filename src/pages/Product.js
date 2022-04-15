import { AddProduct } from "../components/AddProduct";
import { EditProduct } from "../components/EditProduct";
import { useState } from "react";
import axios from "axios";

export const Product = () => {
    const [productDetail, setProductDetail] = useState();
    
    const onSave = () => {
        Object.values(productDetail).forEach((value) => {
            if (value === null) {
                alert("utgaa guitsed oruulna uu");
            } else {
                axios.post("http://localhost:8080/products", productDetail);
                console.log("amjilltai");
            }
        });
    };
    return (
        <main className="flex align-center justify-center">
            <AddProduct
                productDetail={productDetail}
                setProductDetail={setProductDetail}
                onSave={onSave}
            />
            <EditProduct />
        </main>
    );
};
