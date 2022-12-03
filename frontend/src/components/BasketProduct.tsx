import { Cookies, getCookie } from "typescript-cookie";
import { products } from "../data/products";

interface CheckBasketProductProps {
    id: number
}

export function BasketProduct({ id }: CheckBasketProductProps){
    const RemoveProduct = () =>{
        const ProductId: string[] = [];
        for(var i = 0; i <= ("" + getCookie("ProductId")).length-1; i++){
            ProductId.push(("" + getCookie("ProductId"))[i]);
        }
        console.log(ProductId);
        delete ProductId[ProductId.indexOf(String(id))];
        Cookies.remove("ProductId");
        Cookies.set("ProductId", ProductId.join(''));
        window.location.reload();
    }

    return( 
        <>
        <div className="basketItems">
            <div className="d-flex flex-row">
                <div className="p-2">
                    <img src={products[id].imageSecond} width={150} height={150} alt="product" />
                </div>
                <div className="p-2">
                    <h1> {products[id].title} </h1>
                    <p> {products[id].description} </p>
                </div>
            </div>
            <div>
                <div>
                    <h1>{products[id].price} ₽</h1>
                </div>
                <div className="d-flex">
                    <p className="text-end">кол-во - 1 |</p>
                    <button className="ButtonValue">+</button>
                    <button className="ButtonValue">-</button>
                </div>
                <div>
                    <button className="ButtonEvent" onClick={ RemoveProduct }>Убрать</button>
                </div>
            </div>
        </div>
        </>
    );
}