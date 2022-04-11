import { CategoryDetail } from "./CategoryDetail";
import { Button } from "./Button";

export const AddCategory = () => {
    return (
        <div style={{ width: "50%" }} className="flex column align-center">
            <div
                className="flex column"
                style={{ width: "60%", height: "89%", overflow: "auto" }}
            >
                <CategoryDetail />
                <CategoryDetail />
            </div>
            <Button text="Add category" width="60%"/>
        </div>
    );
};
