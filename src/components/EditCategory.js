import { Name } from "./Name";

export const EditCategory = () => {
    return (
        <div
            style={{ width: "40%", height: "80%" }}
            className="flex column align-center"
        >
            <Name name="apple" />
            <Name />
            <Name />
            <Name />
            <Name />
        </div>
    );
};
