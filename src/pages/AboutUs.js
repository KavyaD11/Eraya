// pages/AboutUs.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutUs = () => {
  return (
    <section className="about-section">
      <Container>
        <Row className="align-items-center mb-5">
          <Col lg={6} className="mb-4 mb-lg-0">
            <h2>About Eraya</h2>
            <p>
              At Eraya, we believe that fashion is a form of self-expression, and everyone deserves to 
              have accessories that truly reflect their unique personality and style.
            </p>
            <p>
              Founded in 2023, Eraya began with a simple idea: create high-quality, customizable bags that 
              allow our customers to express their creativity and individuality.
            </p>
            <p>
              Our name "Eraya" comes from the concept of "era," representing evolution and uniqueness, 
              combined with "raya," meaning celebration – together symbolizing our celebration of 
              self-expression through fashion.
            </p>
          </Col>
          <Col lg={6}>
            <img 
              src="/images/about-us.jpg" 
              alt="Eraya Team" 
              className="about-image"
            />
          </Col>
        </Row>
        
        <Row className="mt-5">
          <Col lg={12} className="mb-4">
            <h2 className="text-center mb-4">Our Mission</h2>
            <p className="text-center">
              To empower individuals to express themselves through personalized, high-quality, and 
              sustainable fashion accessories that they can proudly carry every day.
            </p>
          </Col>
        </Row>
        
        <Row className="mt-5">
          <Col md={4} className="mb-4">
            <div className="value-card text-center">
              <h4 className="mb-3">Quality</h4>
              <p>
                We use only premium materials to ensure that our bags are not just beautiful but durable 
                and long-lasting.
              </p>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="value-card text-center">
              <h4 className="mb-3">Creativity</h4>
              <p>
                We believe in the power of creativity and self-expression, giving you the freedom to 
                design bags that truly represent you.
              </p>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="value-card text-center">
              <h4 className="mb-3">Sustainability</h4>
              <p>
                We're committed to sustainable practices, using eco-friendly materials and reducing waste 
                in our production processes.
              </p>
            </div>
          </Col>
        </Row>
        
        <Row className="mt-5">
          <Col lg={12}>
            <h2 className="text-center mb-4">Our Process</h2>
            <div className="process-timeline">
              <div className="process-step">
                <div className="process-icon">1</div>
                <h5>Design</h5>
                <p>
                  Use our intuitive design tool to create your own unique bag design.
                </p>
              </div>
              <div className="process-step">
                <div className="process-icon">2</div>
                <h5>Craft</h5>
                <p>
                  Our skilled artisans transform your design into a high-quality bag.
                </p>
              </div>
              <div className="process-step">
                <div className="process-icon">3</div>
                <h5>Deliver</h5>
                <p>
                  Your custom-made bag is carefully packaged and delivered to your doorstep.
                </p>
              </div>
              <div className="process-step">
                <div className="process-icon">4</div>
                <h5>Enjoy</h5>
                <p>
                  Carry your one-of-a-kind bag with pride, knowing it's uniquely yours.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;