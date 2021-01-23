import React from "react";

function withData(maxProductsShow) {

    return function (Component) {

        const products = [
            { imageSrc: '008.jpg', name: '008'},
            { imageSrc: 'IMG_1178.jpg', name: 'IMG_1178'},
            { imageSrc: 'Kampot+Image-3.png', name: 'Kampot Image'},
            { imageSrc: 'mask_etak_04_c.jpg', name: 'Mask Etak'}
        ];

        return function() {
            const limitProducts = products.slice(0, maxProductsShow);
            return <Component products={limitProducts} ></Component>
        }
    }

}



export default withData;
