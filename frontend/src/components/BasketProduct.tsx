import  { useState } from 'react'
import { products } from "../data/products"

interface CheckBasketProductProps {
    id: number
}

// card basket product
export function BasketProduct({ id}: CheckBasketProductProps){
    let [count, setCount] = useState(NaN);
    let [price] = useState(NaN);
    let basketProducts = JSON.parse(localStorage.getItem("Basket") || "{}");

    // search count by product ID
    for(let i = 0; i < basketProducts.length; i++){
        if( basketProducts[i].id === id){
            count = basketProducts[i].count;
        }
    }

    // search price by product ID
    for(let i = 0; i < basketProducts.length; i++){
        if( basketProducts[i].id === id){
            price = basketProducts[i].price;
        }
    }

    // plus 1 from product count local storage
    const plusCount = () => {
        for(let i = 0; i < basketProducts.length; i++){
            if( basketProducts[i].id === id){
                basketProducts[i].count +=  1;
                localStorage.setItem("Basket", JSON.stringify(basketProducts));
                setCount(count+1);
                window.location.reload();
            }
        }
    }
    
    // minus 1 from product count local storage
    const minusCount = () => {
        for(let i = 0; i < basketProducts.length; i++){
            if( basketProducts[i].id === id){
                basketProducts[i].count -=  1;
                localStorage.setItem("Basket", JSON.stringify(basketProducts));
                setCount(count-1);
                window.location.reload();
            }
            if(basketProducts[i].count >= 0){
                basketProducts.splice(i,1);
                localStorage.setItem("Basket", JSON.stringify(basketProducts));
                window.location.reload();
            }
        }
    }

    // delete product from local storage
    const deleteProduct = () => {
        for(let i = 0; i < basketProducts.length; i++){
            if( basketProducts[i].id === id){
                basketProducts.splice(i,1);
                localStorage.setItem("Basket", JSON.stringify(basketProducts));
                window.location.reload();
            }
        }
    }

    return( 
        <div className="basketItems">
            <div className="d-flex flex-row">
                <div className="p-2">
                    <img src={ products[id].imageSecond }  width={150} height={150} alt="product" />
                </div>
                <div className="p-2">
                    <h1> { products[id].title } </h1>
                    <p> { products[id].category } </p>
                </div>
            </div>
            <div>
                <div>
                    <h1>{ price * count } ₽</h1>
                </div>
                <div className="d-flex">
                    <p className="text-end">кол-во - { count } |</p>
                    <button className="ButtonValue" onClick={ plusCount }>+</button>
                    <button className="ButtonValue" onClick={ minusCount }>-</button>
                </div>
                <div>
                    <button className="ButtonEvent" onClick={ deleteProduct }>Убрать</button>
                </div>
            </div>
        </div>
    );
}