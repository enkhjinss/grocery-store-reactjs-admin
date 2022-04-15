import { Name } from "./Name";
import axios from "axios";
import { useEffect, useState } from "react";
export const EditProduct = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        (async () => {
            const res = await axios.get("http://localhost:8080/products");
            setProducts(res.data);
        })();    
    }, []);

    return (
        <div
            style={{ width: "40%", height: "80%" }}
            className="flex column align-center"
        >
            {products.map((product) => {
                return <Name product={product} key={product.id}/>
            })}
           
        </div>
    );
};
