import 'bootstrap/dist/css/bootstrap.min.css';
import { BasketProduct } from '../components/BasketProduct';

export function BasketPage() {
    return (
        <> 
            <div className='basket container'>
                <h1>Корзина</h1>
                <hr />
                <BasketProduct id={0}/>
                <BasketProduct id={1}/>
                <BasketProduct id={2}/>
                <BasketProduct id={3}/>
                <hr />
                <button>Заказать</button>
            </div>
        </>
    )
}