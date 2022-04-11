import { AddProduct } from "../components/AddProduct";
import { EditProduct } from "../components/EditProduct";
export const Product = () => {
    return (
        <main className="flex align-center justify-center">
            <AddProduct />
            <EditProduct />
        </main>
    );
};
