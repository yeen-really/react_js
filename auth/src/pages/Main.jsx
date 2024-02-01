import { useEffect } from "react"
import { MainWrapper } from "./msin.styled"
import { fetchProducts, getProducts } from "../store/productsSlice"
import { useDispatch, useSelector } from "react-redux"
import { Product } from "./Product"

export const Main = () => {
    const dispatch = useDispatch()
    const products = useSelector(getProducts)
    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])
    console.log(products)
    return (
        <>
        <MainWrapper>
            {products.length > 0 && 
                products.map(({name, description, img}) => {
                return <Product name={name} description={description} img={img}/>
            })}
        </MainWrapper>
        </>
    )
}