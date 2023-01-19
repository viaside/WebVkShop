import React, { useCallback } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import { products } from "../data/products"
import useEmblaCarousel from 'embla-carousel-react'
import { getCookie } from 'typescript-cookie'
import toast, { Toaster } from 'react-hot-toast';



// get id and close event
interface CheckInfoProductProps {
    onCheck: () => void
    id: number
}

// create template modal
export function InfoProduct({onCheck, id}: CheckInfoProductProps){

    // adding product in basket
    const addBasketProduct = () => {
        var basketProduct = [];
        var thisProduct = { id: id, price: products[id].price, count: 1};
        var repeatProduct;


        if(localStorage.getItem("Basket") !== null){
            // parse local storage to JSON
            basketProduct = JSON.parse(localStorage.getItem("Basket") || "{}");

            // check repeat product in local storage
            for (let i = 0; i < basketProduct.length; i++) {
                if(basketProduct[i]["id"] === id){
                    repeatProduct = true;
                } else{
                    repeatProduct = false;
                }
            }
        }

        if(repeatProduct === true){
            let auth = getCookie("id");
            let message = auth? "Данный товар уже добавлен в корзину" : "Войдите с помощью vk";
            toast(message);
        } else{
            // adding product in local storage
            basketProduct.push(thisProduct);
            localStorage.setItem("Basket", JSON.stringify(basketProduct));
            window.location.reload();
        }
    }

    // default close modal window
    const closeHandler = (event: React.MouseEvent) => {
        event.preventDefault();
        addBasketProduct();
    }
    
    // redirect to cart
    const buyOneClick = (event: React.MouseEvent) => {
        event.preventDefault();
        addBasketProduct();
        if(getCookie("islogin") === "true"){
            window.location.href = "http://localhost:3000/basket";
        }
    }

    // carusel setting 
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
                <button onClick={ buyOneClick }>Купить в один клик</button>
                <button onClick={ closeHandler }>В корзину</button>
                <Toaster/>
            </div>
        </>
    )
}