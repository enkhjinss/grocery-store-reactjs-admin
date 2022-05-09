import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Login } from "./pages/Login";
import { CategoryOrProduct } from "./pages/CategoryOrProduct";
import { Product } from "./pages/Product";
import { Category } from "./pages/Category";
// import { Theme } from "./components/Theme";
import { UserProvider } from "./components/userContext";

const App = () => {
    return (
        <UserProvider>
            {/* <Theme> */}
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route
                            path="/choice"
                            element={<CategoryOrProduct />}
                        ></Route>
                        <Route path="category" element={<Category />} />
                        <Route path="product" element={<Product />} />
                    </Routes>
                </BrowserRouter>
            {/* </Theme> */}
        </UserProvider>
    );
};
export default App;
