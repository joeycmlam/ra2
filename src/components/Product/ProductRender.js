import React from 'react';
import ProductRenderProps from "./ProductRenderProps";



const ProductRender = () => {

    return (
        <ProductRenderProps>
            { ({products}) => {
                return(
                    <div>
                        {products.map((aproduct) => {
                            return <img src={`images/products/${aproduct.imageSrc}`}
                                        alt={aproduct.name} key={aproduct.imageSrc}>

                            </img>;
                        })}
                    </div>);
                }
            }
        </ProductRenderProps>
    );
}

export default ProductRender;
