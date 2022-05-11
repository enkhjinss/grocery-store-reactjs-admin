import { AddProduct } from "../components/AddProduct";
import { EditProduct } from "../components/EditProduct";
import { useState } from "react";
import axios from "axios";

export const Product = () => {
    const [productDetail, setProductDetail] = useState({
        name: "",
        description: "",
        price: "",
        count: "",
        priority: "",
    });
    // const { name, price } = productDetail; // ene tergeltengis bagshiin helsen arga hereggui ym shg sngdsan, zugeer form n ali input hooson bn gedgiig helchihej bga bolohoor
    // length-tei n tentsuu bish bvl gd shalgana
    const onSave = () => {
        if (Object.keys(productDetail).length === 7) {
            axios.post("http://localhost:8080/products", productDetail);
            alert("success");
        }
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
