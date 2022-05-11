import { TextField } from "@mui/material";

export const InputComponent = ({ width, onFun, type, placeHolder }) => {
    const onChange = (e) => {
        onFun(e.target.value);
    };
    return (
        // <input
        //     required
        //     onChange={onChange}
        //     type={type}
        //     placeholder={placeHolder}
        //     style={{ width: `${width}` }}
        //     className="input"
        // />

        <TextField
            required
            type={type}
            label={placeHolder}
            style={{ width: `${width}` }}
            onChange={onChange}
        ></TextField>
    );
};
