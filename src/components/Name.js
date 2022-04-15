import editSvg from "../pictures/edit.svg";
import deleteSvg from "../pictures/delete.svg";
export const Name = ({ product }) => {
    return (
        <div className="product flex">
            <img src={editSvg} style={{cursor: "pointer"}}/>
            <img src={deleteSvg} style={{cursor: "pointer"}} />
            <h1 style={{ marginLeft: "15px" }}>{product.name}</h1>
        </div>
    );
};
