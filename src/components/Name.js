import editSvg from "../pictures/edit.svg";
import deleteSvg from "../pictures/delete.svg";
export const Name = ({ name }) => {
    return (
        <div className="product flex justify-center">
            <img src={editSvg} />
            <img src={deleteSvg} />
            <h1 style={{ marginLeft: "15px" }}>{name}</h1>
        </div>
    );
};
