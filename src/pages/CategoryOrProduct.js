import { Link } from "react-router-dom";

import { Button } from "../components/Button";

export const CategoryOrProduct = () => {
    return (
        <div
            className="flex column align-center justify-center"
            style={{ height: "100%" }}
        >
            <Link to="/product">
                <Button text={"Product"} />
            </Link>
            <Link to="/category">
                <Button text={"Category"} />
            </Link>
        </div>
    );
};
