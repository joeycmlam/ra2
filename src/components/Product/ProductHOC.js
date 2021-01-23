import React from 'react';
import withData from './withData';

const ProductHOC = ({products}) => {

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

const maxProductShow = 2;
export default withData(maxProductShow)(ProductHOC);
