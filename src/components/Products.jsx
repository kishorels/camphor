import { useRef, useState } from 'react';
import useReveal from '../hooks/useReveal';
import './Products.css';

const products = [
  {
    id: 1,
    name: 'Tablet Camphor',
    description: 'Premium-grade camphor tablets for spiritual rituals, aromatherapy, and household use. Made with 99.5% purity.',
    uses: ['Pooja & Rituals', 'Air Freshener', 'Aromatherapy'],
    image: '/camphor-product.png',
    badge: 'Best Seller',
  },
  {
    id: 2,
    name: 'Camphor Powder',
    description: 'Finely ground camphor powder for pharmaceutical, industrial, and cosmetic applications. Consistent granularity.',
    uses: ['Pharmaceuticals', 'Cosmetics', 'Industrial Use'],
    image: '/camphor-product.png',
    badge: 'Premium',
  },
  {
    id: 3,
    name: 'Camphor Blocks',
    description: 'Large-format camphor blocks for commercial and industrial customers. Available in custom sizes and packaging.',
    uses: ['Bulk Supply', 'moth repellent', 'Commercial Use'],
    image: '/camphor-product.png',
    badge: 'Industrial',
  },
  {
    id: 4,
    name: 'Refined Camphor Oil',
    description: 'Pure camphor essential oil extracted through precision distillation. Ideal for medicinal and therapeutic applications.',
    uses: ['Medicine', 'Massage Oil', 'Pest Control'],
    image: '/camphor-product.png',
    badge: 'New',
  },
];

export default function Products() {
  const sectionRef = useRef(null);
  const [activeProduct, setActiveProduct] = useState(null);
  useReveal(sectionRef);
  
  return (
    <section id="products" className="products section-padding" ref={sectionRef}>
      <div className="container">
        <div className="products-header">
          <span className="section-label reveal">Our Products</span>
          <h2 className="section-title reveal delay-1">
            Camphor Solutions for Every Need
          </h2>
          <p className="section-subtitle reveal delay-2">
            From sacred rituals to industrial applications, our diverse range of 
            camphor products delivers unmatched purity and performance.
          </p>
        </div>
        
        <div className="products-grid">
          {products.map((product, i) => (
            <div
              key={product.id}
              className={`product-card reveal delay-${i + 1}`}
              onMouseEnter={() => setActiveProduct(product.id)}
              onMouseLeave={() => setActiveProduct(null)}
              data-cursor-hover
            >
              {/* Card glow */}
              <div className="product-card-glow" />
              
              {/* Badge */}
              <span className="product-badge">{product.badge}</span>
              
              {/* Image */}
              <div className="product-image-wrapper">
                <img src={product.image} alt={product.name} className="product-image" />
                <div className="product-image-overlay" />
              </div>
              
              {/* Info */}
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                
                <div className="product-uses">
                  {product.uses.map((use, j) => (
                    <span key={j} className="product-use-tag">{use}</span>
                  ))}
                </div>
                
                <button className="product-btn" data-cursor-hover>
                  <span>Learn More</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
