import { Button } from "@mui/material";

export const ButtonComponent = ({ width, text, onClick, type, id }) => {
    return (
        <Button
            variant="contained"
            onClick={onClick}
            id={id}
            sx={{ width: `${width}`, mt: "20px" }}
        >
            {text}
        </Button>
    );
};
