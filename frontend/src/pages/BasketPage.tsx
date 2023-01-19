import 'bootstrap/dist/css/bootstrap.min.css'
import { getCookie } from 'typescript-cookie'
import { BasketProduct } from '../components/BasketProduct'

// Basket page
export function BasketPage(){
    let userId = NaN;
    let basketProducts = JSON.parse(localStorage.getItem("Basket") || "{}");

    function BasketInfo(){
        let ProductId: number[] = [];
        let sum = 0;

        if(basketProducts.length !== 0 && basketProducts.length !== undefined){
            // adding product IDs from an object
            for (let i = 0; i < basketProducts.length; i++) {
                ProductId.push(basketProducts[i].id);            
            };

            // calculates the sum of all products
            for (let i = 0; i < basketProducts.length; i++) {
                sum += basketProducts[i].count * basketProducts[i].price;
            }

            // Returning cart product cards
            return (
                <>
                {ProductId.map(ProductId => 
                    <BasketProduct id = { ProductId } key = { ProductId } />
                )} 
                <hr/>
                <h1 className='text-end'>Сумма: {sum} </h1>
                <button className='ButtonEvent'>Заказать</button>
                </>
            );
        } else{
            let auth = getCookie("id");
            let message = auth? "Корзина пуста" : "Войдите с помощью vk";

            return (
                <>
                <div className='text-center'>
                    <h4 className='p-5'>{message}</h4>
                </div>
                <hr />
                </>
            )
        }
    }
    
    return (
        <div className='basket container'>
            <h1>Корзина</h1>
            <hr/>
            <div>
                <BasketInfo/>
            </div>
        </div>
    )
}