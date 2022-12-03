import 'bootstrap/dist/css/bootstrap.min.css';
import { BasketProduct } from '../components/BasketProduct';
import { Component, ReactNode } from 'react'
import { getCookie } from 'typescript-cookie';


export class BasketPage extends Component {
    
    BasketProducts = (
        function(){
            const ProductId: string[] = [];
            for(var i = 0; i <= ("" + getCookie("ProductId")).length-1; i++){
                ProductId.push(("" + getCookie("ProductId"))[i]);
            }
            console.log(getCookie("ProductId"));
            if (getCookie("ProductId") === ""){
                return (
                    <>
                    <p className='text-center p-5'>Корзина пуста</p>
                    </>
                )
            } else{
                return ( 
                    <>
                    {ProductId.map(ProductId => 
                        <BasketProduct id={Number(ProductId)} key={ Number(ProductId)}/>
                    )}
                    </>
                )
            }
        }
    );
    
    render(): ReactNode {
        return (
            <> 
            <div className='basket container'>
                <h1>Корзина</h1>
                <hr/>
                <this.BasketProducts/>
                <hr/>
                <button className='ButtonEvent'>Заказать</button>
            </div>
            </>
        )
        }
}