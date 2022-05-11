import { Button } from "@mui/material";

export const ButtonComponent = ({ width, text, onClick, type, id }) => {
    return (
        <Button
            variant="contained"
            id={id}
            sx = {{width: `${width}`, mt: "20px"}}
        >
            {text}
        </Button>
        // <button
        //     onClick={onClick}
        //     type="submit"
        //     id={id}
        //     style={{ width: `${width}` }}
        //     className="longButton"
        // >
        //     {text}
        // </button>
    );
};
