import { Link } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { ButtonComponent } from "../components/Button";

import { UserContext } from "../components/userContext";
import { useContext, useState } from "react";

export const CategoryOrProduct = () => {
    const { a, setA } = useContext(UserContext);

    const handleOpen = () => {
        console.log("done");
    };

    return (
        <>
            <AppBar>
                <Toolbar>
                    <IconButton color="inherit" onClick={handleOpen}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h7" component="div">
                        Grocery store
                    </Typography>
                </Toolbar>
            </AppBar>
            <div
                className="flex column align-center justify-center"
                style={{ height: "100%" }}
            >
                <Link to="/product">
                    <ButtonComponent text={"Product"} />
                </Link>
                <Link to="/category">
                    <ButtonComponent text={"Category"} />
                </Link>
            </div>
        </>
    );
};
