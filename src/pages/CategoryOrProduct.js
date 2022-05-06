import { Link } from "react-router-dom";
import { AppBar, Toolbar, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { Button } from "../components/Button";

export const CategoryOrProduct = () => {
    return (
        <>
            <AppBar>
                <Toolbar>
                    <IconButton>
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
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
        </>
    );
};
