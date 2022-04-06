import { SketchPicker } from "react-color";
import { useState } from "react";

const App = () => {
    const [sketchPickerColor, setSketchPickerColor] = useState({
        r: "241",
        g: "112",
        b: "19",
        a: "1",
    });
    const { r, g, b, a } = sketchPickerColor;

    return (
        <div
            className="App"
            style={{ display: "flex", justifyContent: "space-around" }}
        >
            <div className="sketchpicker">
                <div
                    style={{
                        backgroundColor: `rgba(${r},${g},${b},${a})`,
                        width: 100,
                        height: 50,
                        border: "2px solid white",
                    }}
                ></div>
                <SketchPicker
                    onChange={(color) => {
                        setSketchPickerColor(color.rgb);
                    }}
                    color={sketchPickerColor}
                />
            </div>
        </div>
    );
};

export default App;