import CartPage from "./pages/CartPage";
import FavouritePage from "./pages/FavouritePage";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import SigninPage from "./pages/SigninPage";

const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/signin", element: <SigninPage /> },
  { path: "/cart", element: <CartPage /> },
  { path: "/favourite", element: <FavouritePage /> },
  {path:"/products",element: <ProductsPage/>}
];

export default routes;
