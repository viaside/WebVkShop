import 'bootstrap/dist/css/bootstrap.min.css';
import { Product } from "../components/Product";
import { products } from "../data/products";

// Product page
export function ProductPage(){
    return (
        <>
        <div className="head"/>
        <div className="d-flex flex-row flex-wrap containerProduct">
            { products.map(product => <Product  product={product} key={product.id}/>) }
        </div>        
        </>
    )
}