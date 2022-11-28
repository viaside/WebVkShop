import { useState } from 'react'
import { IProduct } from '../models'
import {Modal} from '../components/Modal'
import {InfoProduct} from '../components/InfoProduct'

interface ProductProps{
    product: IProduct
}

// Card product
export function Product({product}: ProductProps){
    const [modal, setModal] = useState(false)

    return (
        <div className='d-flex flex-column p-3'>
            <div className='d-flex  justify-content-center m-0'>
                <img width={350} height={350} src={product.imageSecond} alt="" onClick={() => setModal(true)}/>
            </div>
            <h4 className='text-center m-0'>{product.title}</h4>
            <p className='text-center m-0'>{product.price} ₽</p>

            {modal && <Modal title={product.id} onClose={()=>setModal(false)}>
                <InfoProduct onCheck={() => setModal(false)} id={product.id-1}/>
            </Modal>} 
        </div>
    )
}