import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import FavouritePage from "./pages/FavouritePage";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProfilePage from "./pages/ProfilePage";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import SingleProductPage from "./pages/SingleProductPage";

const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/signin", element: <SigninPage /> },
  { path: "/signup", element: <SignupPage /> },
  { path: "/cart", element: <CartPage /> },
  { path: "/favourite", element: <FavouritePage /> },
  { path: "/products", element: <ProductsPage /> },
  { path: "/product/:id", element: <SingleProductPage /> },
  { path: "/profile", element: <ProfilePage /> },
  { path: "/checkout", element: <CheckoutPage /> },
];

export default routes;
