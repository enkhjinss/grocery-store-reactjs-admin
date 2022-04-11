import { AddCategory } from "../components/AddCategory";
import { EditCategory } from "../components/EditCategory";

export const Category = () => {
    return (
        <main className="flex align-center justify-center">
            <AddCategory />
            <EditCategory />
        </main>
    )
}