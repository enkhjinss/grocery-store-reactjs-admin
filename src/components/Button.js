export const Button = ({ width, text, onClick, type, id }) => {
    return (
        <button
            onClick={onClick}
            type="submit"
            id={id}
            style={{ width: `${width}` }}
            className="longButton"
        >
            {text}
        </button>
    );
};
