import React from 'react';
import Product from './Product';
import product1 from './assets/product1.jpg';
import product2 from './assets/product2.jpg';
import product3 from './assets/product3.jpg';
import product4 from './assets/product4.jpg';
import product5 from './assets/product5.jpg';
import product6 from './assets/product6.jpg';
import product7 from './assets/product7.jpg';
import product8 from './assets/product8.jpg';
import product9 from './assets/product9.jpg';
import product10 from './assets/product10.jpg';

const ProductList = ({ addToCart }) => {
  const products = [
    { id: 1, name: 'GIGABYTE RADEON RX 6500 XT EAGLE 4G - 4GB GDDR6', price: 5190.00, image: product1 },
    { id: 2, name: 'GALAX GEFORCE RTX 4060 (1-CLICK OC) 2X V2 - 8GB GDDR6', price: 10300.00, image: product2 },
    { id: 2, name: 'RAM (แรม) T-FORCE VULCAN 8GB (8x1) DDR5 5200MHz RED', price: 1090.00, image: product3 },
    { id: 2, name: 'RAM NOTEBOOK (แรมโน้ตบุ๊ค) ADATA 8GB 4800MHz DDR5', price: 1150.00, image: product4 },
    { id: 2, name: 'CPU (ซีพียู) INTEL CORE I3-12100F [1700]', price: 2990.00, image: product5 },
    { id: 2, name: 'CPU (ซีพียู) AMD RYZEN 5 4500 [AM4]', price: 2790.00, image: product6 },
    { id: 2, name: 'CASE (เคส) SAMA GZS WHITE (ATX)', price: 1390.00, image: product7 },
    { id: 2, name: 'CASE (เคส) DARKFLASH DLM22 (BLACK)(mATX)', price: 1390.00, image: product8 },
    { id: 2, name: 'MOUSE (เมาส์) ONIKUMA CW923 GAMING MOUSE : WHITE', price: 390.00, image: product9 },
    { id: 2, name: 'MOUSE (เมาส์) CORSAIR KATAR PRO (CH-930C011-AP)', price: 549.00, image: product10 },
    
    // เพิ่มสินค้าให้ครบ 10 รายการ
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map((product) => (
        <Product key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;
