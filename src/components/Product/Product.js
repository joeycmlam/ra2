import React from 'react';

const Product = () => {

    const products = [
        { imageSrc: '008.jpg', name: '008'},
        { imageSrc: 'IMG_1178.jpg', name: 'IMG_1178'},
        { imageSrc: 'Kampot+Image-3.png', name: 'Kampot Image'},
        { imageSrc: 'mask_etak_04_c.jpg', name: 'Mask Etak'}
    ]

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

export default Product;
