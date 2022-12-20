import CartPage from "./pages/CartPage";
import FavouritePage from "./pages/FavouritePage";
import HomePage from "./pages/HomePage";
import SigninPage from "./pages/SigninPage";

const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/signin", element: <SigninPage /> },
  { path: "/cart", element: <CartPage /> },
  { path: "/favourite", element: <FavouritePage /> },
];

export default routes;
