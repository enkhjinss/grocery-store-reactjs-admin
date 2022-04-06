import { Product } from "./Product";
import { Button } from "./Button";

export const AddProduct = () => {
    return (
        <div style={{ width: "70%", marginTop: "25px"}} className="flex column align-center">
            <div className="flex column" style={{ width: "60%", height: "89%", overflow: "auto" }}>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
            <Button text={"Add"} />
            <Button text={"Save"} />
        </div>

    );
}
