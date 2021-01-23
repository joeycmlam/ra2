import React from 'react';

function ProductRenderProps(props) {
    const products = [
        { imageSrc: '008.jpg', name: '008'},
        { imageSrc: 'IMG_1178.jpg', name: 'IMG_1178'},
        { imageSrc: 'Kampot+Image-3.png', name: 'Kampot Image'},
        { imageSrc: 'mask_etak_04_c.jpg', name: 'Mask Etak'}
    ];

    return props.children( {
            products: products
        }

    );
}

export default ProductRenderProps;
