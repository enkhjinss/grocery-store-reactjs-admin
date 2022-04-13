import { AddProduct } from "../components/AddProduct";
import { EditProduct } from "../components/EditProduct";
// import { useState } from "react";

export const Product = () => {
    // const [productDetail, setProductDetail] = useState({});
    return (
        <main className="flex align-center justify-center">
            <AddProduct />
            <EditProduct />
        </main>
    );
};
