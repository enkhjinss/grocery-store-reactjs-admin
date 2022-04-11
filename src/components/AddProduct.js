import { Product } from "./Product";
import { Button } from "./Button";

export const AddProduct = () => {
    const product = {}
    const onAdd = () => {
        
    }
    return (
        <div style={{ width: "60%", marginTop: "25px"}} className="flex column align-center">
            <div className="flex column" style={{ width: "60%", height: "89%", overflow: "auto" }}>
                <Product />
                {/* <Product />
                <Product />
                <Product />
                <Product /> */}
            </div>
            <Button text="Add" onClick={onAdd}/>
            <Button text="Save" />
        </div>

    );
}
