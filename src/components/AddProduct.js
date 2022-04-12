import { Product } from "./Product";
import { Button } from "./Button";
import { useState } from "react";

export const AddProduct = () => {
    const [product, setProduct] = useState({});
    const onAdd = () => {
        
    }
    return (
        <div style={{ width: "60%", marginTop: "25px"}} className="flex column align-center">
            <div className="flex column" style={{ width: "60%", height: "89%", overflow: "auto" }}>
                <Product product={product}/>
                {/* <Product />
                <Product />
                <Product />
                <Product /> */}
            </div>
            <Button width="60%" text="Add" onClick={onAdd}/>
            <Button width="60%" text="Save" />
        </div>

    );
}
