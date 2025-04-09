import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { FaShoppingCart, FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const Shop = () => {
  const [filter, setFilter] = useState('all');
  
  // Products data
  const products = [
    { id: 1, name: "Classic Canvas Tote", price: 899, image: "/images/product-1.jpg", category: "tote", rating: 4.5, reviews: 32 },
    { id: 2, name: "Printed Art Tote", price: 1199, image: "/images/product-2.jpg", category: "tote", rating: 5, reviews: 18 },
    { id: 3, name: "Premium Cotton Tote", price: 999, image: "/images/product-3.jpg", category: "tote", rating: 4, reviews: 24 },
    { id: 4, name: "Minimalist Tote", price: 799, image: "/images/product-4.jpg", category: "tote", rating: 4.5, reviews: 15 },
    { id: 5, name: "Eco-Friendly Backpack", price: 1499, image: "/images/product-5.jpg", category: "backpack", rating: 4.5, reviews: 42 },
    { id: 6, name: "Travel Backpack", price: 1899, image: "/images/product-6.jpg", category: "backpack", rating: 5, reviews: 27 },
    { id: 7, name: "Crossbody Bag", price: 1299, image: "/images/product-7.jpg", category: "bag", rating: 4, reviews: 19 },
    { id: 8, name: "Wallet Clutch", price: 699, image: "/images/product-8.jpg", category: "wallet", rating: 4.5, reviews: 22 }
  ];

  // Filter products based on category
  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(product => product.category === filter);

  // Render star ratings
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

  return (
    <Container className="py-5">
      <h1 className="text-center mb-4">Shop Our Collection</h1>
      <p className="text-center mb-5">
        Discover our handcrafted, sustainable bags made with love and care for the environment.
      </p>
      
      {/* Filter controls */}
      <Row className="mb-4">
        <Col md={6} className="mx-auto">
          <Form.Group>
            <Form.Label>Filter by category:</Form.Label>
            <Form.Select 
              value={filter} 
              onChange={(e) => setFilter(e.target.value)}
              className="form-control"
            >
              <option value="all">All Products</option>
              <option value="tote">Tote Bags</option>
              <option value="backpack">Backpacks</option>
              <option value="bag">Other Bags</option>
              <option value="wallet">Wallets</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      
      {/* Product grid */}
      <Row>
        {filteredProducts.map(product => (
          <Col key={product.id} xs={12} sm={6} lg={3} className="mb-4">
            <Card className="h-100 product-card">
              <div className="product-image-container">
                <Card.Img 
                  variant="top" 
                  src={product.image} 
                  alt={product.name}
                  className="product-image"
                />
              </div>
              <Card.Body className="d-flex flex-column">
                <Card.Title>{product.name}</Card.Title>
                <div className="mb-2">
                  {renderStars(product.rating)}
                  <small className="ms-2 text-muted">({product.reviews})</small>
                </div>
                <Card.Text className="mb-2">
                  ${(product.price / 100).toFixed(2)}
                </Card.Text>
                <Button 
                  variant="outline-primary" 
                  className="mt-auto d-flex align-items-center justify-content-center"
                >
                  <FaShoppingCart className="me-2" /> Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      
      {/* No products found message */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-5">
          <h3>No products found</h3>
          <p>Try changing your filter selection</p>
        </div>
      )}
      
      {/* Custom pagination */}
      <Row className="mt-4">
        <Col className="d-flex justify-content-center">
          <nav>
            <ul className="pagination">
              <li className="page-item disabled">
                <span className="page-link">Previous</span>
              </li>
              <li className="page-item active">
                <span className="page-link">1</span>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">2</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">3</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">Next</a>
              </li>
            </ul>
          </nav>
        </Col>
      </Row>
    </Container>
  );
};

export default Shop;