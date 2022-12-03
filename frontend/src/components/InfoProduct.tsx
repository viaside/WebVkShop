import React, { useCallback } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import { products } from "../data/products"
import useEmblaCarousel from 'embla-carousel-react'
import { getCookie, setCookie} from 'typescript-cookie'


// get id and close event
interface CheckInfoProductProps {
    onCheck: () => void
    id: number
}

//Create template modal
export function InfoProduct({onCheck, id}: CheckInfoProductProps){
    const closeHandler = (event: React.MouseEvent) => {
        event.preventDefault();
        onCheck();
        if (getCookie("ProductId") !== undefined){
            setCookie("ProductId", getCookie("ProductId") + (id).toString());
            window.location.reload();
        } else{
            setCookie("ProductId" , id);
            window.location.reload();
        }
    }

    const [emblaRef, emblaApi] = useEmblaCarousel()

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
      }, [emblaApi])

    const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <>
        <div className="emblaStyle d-flex">
            <button className="embla__prev" onClick={scrollPrev}> &lt; </button>
            <div className="embla align-middle" >
                    <div className="embla__viewport" ref={emblaRef}>
                        <div className="embla__container">
                            <div className="embla__slide"><img className="imgProduct" src={ products[id].imageSecond } alt="2" /></div>
                            <div className="embla__slide"><img className="imgProduct" src={ products[id].imageThird } alt="3" /></div>
                            <div className="embla__slide"><img className="imgProductMain" src={ products[id].imageMain } alt="1" /></div>
                        </div>
                    </div>
            </div>
            <button className="embla__next" onClick={scrollNext}> &gt; </button>
        </div>
            <p>Названия: {products[id].title}</p>
            <p>Описания: {products[id].description}</p>
            <p>Цена: {products[id].price} ₽</p>
            <div className="ShopButton">
                <button onClick={closeHandler}>Купить в один клик</button>
                <button onClick={closeHandler}>В корзину</button>
            </div>
        </>
    )
}