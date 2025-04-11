import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaWhatsapp, FaInstagram, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer py-5">
      <Container>
        <Row className="text-center">
          <Col md={4} className="mb-4">
          </Col>
          
          <Col md={4} className="mb-4">
            <h5 className="fw-bold">Style Your Way</h5>
            <div className="d-flex justify-content-center gap-3 social-icons">
              <a href="https://wa.me/919991112288" target="_blank" rel="noopener noreferrer" className="text-white fs-4">
                <FaWhatsapp />
              </a>
              <a href="https://www.instagram.com/_eraya.?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="text-white fs-4">
                <FaInstagram />
              </a>
              <a href="tel:+919991112288" className="text-white fs-4">
                <FaPhone />
              </a>
            </div>
          </Col>

          <Col md={4} className="mb-4">
          </Col>
        </Row>

        <div className="text-center mt-4">
          <p className="mb-0 small">
            ©2025 Eraya | All Rights Reserved | <Link to="/terms" className="text-decoration-none text-info">Terms and Conditions</Link> | <Link to="/privacy" className="text-decoration-none text-info">Privacy</Link>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;