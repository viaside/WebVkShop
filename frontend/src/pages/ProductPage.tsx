import { Product } from "../components/Product";
import { products } from "../data/products";
import 'bootstrap/dist/css/bootstrap.min.css';


// Product page
export function ProductPage(){
    return (
        <>
        <div className="head"/>
        <div className="d-flex flex-row flex-wrap container">
            { products.map(product => <Product product={product} key={product.id}/>) }
        </div>        
        </>
    )
}