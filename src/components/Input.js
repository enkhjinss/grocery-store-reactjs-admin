export const Input = ({ width, onFun, type }) => {
    const onChange = (e) => {
        onFun(e.target.value);
    };
    return (
        <input
            required
            onChange={onChange}
            type={type}
            placeholder="name"
            style={{ width: `${width}` }}
            className="input"
        />
    );
};
