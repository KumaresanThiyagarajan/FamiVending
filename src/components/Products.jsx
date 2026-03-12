import React from 'react';
import './Products.css';

const productsData = [
  {
    id: 1,
    name: '22″ inch Smart Combo Vending Machine',
    image: '/product-1.png',
    specs: [
      '22-inch interactive touchscreen with advertisement capabilities.',
      'Refrigerated vending machine suitable for different types of products.',
      'Provides better shopping experience.',
      'Slots / Varieties 60',
      'Type - spring slots / conveyor slots',
      'Capacity - all beverages 300 pcs',
      'Voltage: AC 220 v ~ 240 v, 50/60 hz',
      'Power: 510 w',
      'Temperature: 4 deg C ~ 25 deg C',
      'Weight: 320 kg',
      'H: 1940 mm | W: 1269 mm | D: 795 mm',
    ],
    tags: ['Fruits', 'Snacks', 'Beverages'],
  },
  {
    id: 2,
    name: '10″ inch Smart Combo Vending Machine',
    image: '/product2.png',
    specs: [
      '10-inch interactive touchscreen with advertisement capabilities.',
      'Refrigerated vending machine suitable for different types of products.',
      'Provides better shopping experience.',
      'Slots / Varieties 30 - 60',
      'Type - spring slots / conveyor slots',
      'Capacity - all beverages 300 - 400 pcs',
      'Voltage: AC 220 v ~ 240 v, 50/60 hz',
      'Power: 510 w',
      'Temperature: 4 deg C ~ 25 deg C',
      'Weight: 285 kg',
      'H: 1940 mm | W: 920 mm | D: 800 mm',
    ],
    tags: ['Snacks', 'Beverages', 'Combos'],
  },
  {
    id: 3,
    name: '10C Combo Vending Machine',
    image: '/product3.png',
    specs: [
      'Compact design ideal for small to medium-sized locations.',
      'Refrigerated vending machine with versatile product compatibility.',
      'Easy-to-use interface for seamless transactions.',
      'Slots / Varieties 10 - 30',
      'Type - spring slots',
      'Capacity - all beverages 150 - 200 pcs',
      'Voltage: AC 220 v ~ 240 v, 50/60 hz',
      'Power: 350 w',
      'Temperature: 4 deg C ~ 20 deg C',
      'Weight: 210 kg',
      'H: 1830 mm | W: 820 mm | D: 750 mm',
    ],
    tags: ['Snacks', 'Beverages', 'Compact'],
  },
];

const Products = () => {
  return (
    <section id="products" className="products">
      <div className="container">
        <div className="products-header">
          <span className="section-label">OUR PRODUCTS</span>
          <h2 className="section-title">
            <span className="gradient-text">Perfect Vending Machines </span>
            For Your Business
          </h2>
          <div className="products-header-line"></div>
        </div>

        <div className="products-list">
          {productsData.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <ul className="product-specs">
                  {product.specs.map((spec, idx) => (
                    <li key={idx}>
                      <span className="spec-arrow">→</span> {spec}
                    </li>
                  ))}
                </ul>
                <div className="product-tags">
                  {product.tags.map((tag, idx) => (
                    <span className="product-tag" key={idx}>{tag}</span>
                  ))}
                </div>
              </div>
              <div className="product-image-wrapper">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative spiral/wave shapes */}
      <div className="products-decorations">
        <div className="prod-deco prod-deco-1"></div>
        <div className="prod-deco prod-deco-2"></div>
      </div>
    </section>
  );
};

export default Products;
