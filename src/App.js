import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Login } from "./pages/Login";
import { CategoryOrProduct } from "./pages/CategoryOrProduct";
import { Product } from "./pages/Product";
import { Category } from "./pages/Category";
import { UserProvider } from "./components/userContext";

const App = () => {
    return (
        <UserProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/choice" element={<CategoryOrProduct />}></Route>
                    <Route path="category" element={<Category />} />
                    <Route path="product" element={<Product />} />
                </Routes>
            </BrowserRouter>
        </UserProvider>
    );
};
export default App;
