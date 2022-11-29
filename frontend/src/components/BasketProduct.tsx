import { products } from "../data/products";

interface CheckBasketProductProps {
    id: number
}

export function BasketProduct({ id }: CheckBasketProductProps){
    return( 
        <>
        <div className="basketItems">
            <img src={products[id].imageSecond} width={150} alt="product" />
            <div>
                <h1> {products[id].title} </h1>
                <p> {products[id].description} </p>
            </div>
            <h1 className="price"> {products[id].price} ₽</h1>
            <button>удалить</button>
        </div>
        </>
    );
}