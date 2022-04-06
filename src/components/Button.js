export const Button = ({ width, text}) => {
    return (
        <button style={{ width: `${width}` }} className="longButton">
        {text}
        </button>
    );
};
