import { ProductWrapper } from "./product.styled"


export const Product = ({name, description, img}) => {

    return (
        <>
            <ProductWrapper>
                <h1>{name}</h1>
                <img src={img}/>
                <p>{description}</p>
            </ProductWrapper>
        </>
    )
}