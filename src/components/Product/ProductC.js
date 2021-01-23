import React, {useContext} from 'react';
import ProductContext from './ProductContext';

const ProductC = () => {
    const products = useContext(ProductContext);

    return (
        <div>

            {products.map((aproduct) => {
                return <img src={`images/products/${aproduct.imageSrc}`}
                            alt={aproduct.name} key={aproduct.imageSrc}>

                </img>;
            })}
        </div>
    );
}

export default ProductC;
