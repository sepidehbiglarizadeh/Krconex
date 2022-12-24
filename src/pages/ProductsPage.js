import { useLocation } from "react-router-dom";
import queryString from 'query-string';

const ProductsPage = () => {
    const location =useLocation();
    const queryParsed = queryString.parse(location.search);


    return ( 
        <section>This is ProductsPage</section>
     );
}
 
export default ProductsPage;