import { Input } from "./Input";
import { ImgDiv } from "./ImgDiv";

export const Product = ({ setProductDetail, productDetail }) => {
    const onSelect = (e) => {
        if (e.target.value === "Exclusive") {
            setProductDetail({
                ...productDetail,
                isExclusive: true,
                isBestSelling: false,
            });
        } else if (e.target.value === "BestSelling") {
            setProductDetail({ ...productDetail, isBestSelling: true });
        }
        return;
    };

    return (
        <div
            className="flex column"
            style={{ width: "98%", marginBottom: "20px" }}
        >
            <h1>Product 1 Name</h1>
            <div className="flex">
                <ImgDiv width={"13.5%"} />
                <Input
                    onFun={(productName) => {
                        setProductDetail({
                            ...productDetail,
                            name: productName,
                        });
                    }}
                    width={"86.5%"}
                />
            </div>
            <h2>Description</h2>

            <Input
                onFun={(description) => {
                    setProductDetail({
                        ...productDetail,
                        description: description,
                    });
                }}
            />
            <div className="flex space-between">
                <h1>Price</h1>
                <h1>Count</h1>
                <h1>Priority</h1>
            </div>
            <div className="flex space-between">
                <Input
                    onFun={(price) => {
                        setProductDetail({
                            ...productDetail,
                            price: price,
                        });
                    }}
                    width={"25%"}
                    type="number"
                />
                <Input
                    onFun={(count) => {
                        setProductDetail({
                            ...productDetail,
                            count: count,
                        });
                    }}
                    width={"25%"}
                    type="number"
                />
                <Input
                    width={"25%"}
                    type="number"
                    onFun={(priority) => {
                        setProductDetail({
                            ...productDetail,
                            priority: priority,
                        });
                    }}
                />
            </div>

            <label htmlFor="cars">Choose a category xD: </label>
            <select onChange={onSelect}>
                <option value={null}>Choose</option>
                <option value="BestSelling">Best Selling</option>
                <option value="Exclusive">Exclusive</option>
            </select>
        </div>
    );
};
