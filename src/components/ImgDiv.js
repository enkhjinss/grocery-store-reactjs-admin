export const ImgDiv = ({ width }) => {
    return (
        <>
            <div style={{ width: `${width}`}} className="imgDiv"></div>
            <input style={{ display: "none" }} type="file" />
        </>
    );
};
