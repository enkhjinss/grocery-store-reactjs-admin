export const Button = ({ width, text, onClick}) => {
    return (
        <button onClick={onClick} style={{ width: `${width}` }} className="longButton">
        {text}
        </button>
    );
};
