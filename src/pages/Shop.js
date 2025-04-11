import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const Shop = () => {
  const products = [
    { id: 1, name: "Classic Tote", price: 399, image: "/Bag11.png", rating: 4.5, reviews: 32 },
    { id: 2, name: "Printed Tote", price: 449, image: "/Bag5.png", rating: 5, reviews: 18 },
    { id: 3, name: "Cotton Tote", price: 399, image: "/Bag6.png", rating: 4, reviews: 24 },
    { id: 4, name: "Minimalist Tote", price: 399, image: "/Bag7.png", rating: 4.5, reviews: 15 },
    { id: 5, name: "Eco-Friendly Tote", price: 449, image: "/Bag8.png", rating: 4.5, reviews: 42 },
    { id: 6, name: "Customized Tote", price: 449, image: "/Bag9.png", rating: 5, reviews: 27 },
    { id: 7, name: "Hand Painted Tote", price: 549, image: "/Bag10.png", rating: 4, reviews: 19 },
    { id: 8, name: "Reuse Tote", price: 499, image: "/Bag2.png", rating: 4.5, reviews: 22 }
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-warning" />);
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-warning" />);
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="text-warning" />);
    }

    return stars;
  };

  const formatPrice = (price) => {
    return `₹${price}`;
  };

  const handleBuy = (productId, productName) => {
    console.log(`Product purchased: ${productName} (ID: ${productId})`);
    alert(`Thank You For Buying :)`);
  };

  return (
    <div className="product-categories">
      <Container className="py-5">
        <h1 className="section-title">Shop Our Collection</h1>
        <p className="section-subtitle">
          Discover our handcrafted, sustainable bags made with love and care for the environment.
        </p>

        <Row>
          {products.map(product => (
            <Col key={product.id} xs={12} sm={6} lg={3} className="mb-4">
              <div className="category-card">
                <div className="card-img-container">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="category-img"
                  />
                </div>
                <div className="card-body">
                  <h5>{product.name}</h5>
                  <div className="product-rating mb-2">
                    {renderStars(product.rating)}
                    <small className="ms-2 review-count">({product.reviews})</small>
                  </div>
                  <p className="product-price mb-3">
                    {formatPrice(product.price)}
                  </p>
                  <Button
                    variant="primary"
                    className="btn-primary"
                    onClick={() => handleBuy(product.id, product.name)}
                  >
                    Buy Now
                  </Button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Shop;
