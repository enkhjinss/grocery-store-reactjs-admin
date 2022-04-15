import { Product } from "./Product";
import { Button } from "./Button";

export const AddProduct = ({
    setProductDetail,
    productDetail,
    onSave,
}) => {
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
            {/* <Button width="60%" text="Add" /> */}
            <Button width="60%" text="Save" onClick={onSave} />
        </div>
    );
};
