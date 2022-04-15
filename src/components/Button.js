export const Button = ({ width, text, onClick, type}) => {
    return (
        <button onClick={onClick} type="submit" style={{ width: `${width}` }} className="longButton">
        {text}
        </button>
    );
};
