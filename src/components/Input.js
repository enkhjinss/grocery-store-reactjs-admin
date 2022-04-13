export const Input = ({ width, onFun}) => {
    const onChange = (e) => {
        onFun(e.target.value)
    }
    return (
        <input
            onChange={onChange}
            placeholder="name"
            style={{ width: `${width}` }}
            className="input"
        />
    );
};
