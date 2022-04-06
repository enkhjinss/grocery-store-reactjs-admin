import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Login } from "./pages/Login";
import { CategoryOrProduct } from "./pages/CategoryOrProduct";
import { Product } from "./pages/Product";
import { Category } from "./pages/Category";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/choice" element={<CategoryOrProduct />} />
                <Route path="/category" element={<Category />} />
                <Route path="/product" element={<Product />} />
            </Routes>
        </BrowserRouter>
    );
};
export default App;
