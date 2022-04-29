export const Input = ({ width, onFun, type, placeHolder }) => {
    const onChange = (e) => {
        onFun(e.target.value);
    };
    return (
        <input
            required
            onChange={onChange}
            type={type}
            placeholder={placeHolder}
            style={{ width: `${width}` }}
            className="input"
        />
    );
};
