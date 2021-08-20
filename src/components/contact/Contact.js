import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const Contact = () => {
  return (
    <div id="contact" className="py-3">
      <Container>
        <Row>
          <Col className="d-flex justify-content-between">
            <a href="mailto:info@dentedcode.com">
              <i className="fas fa-envelope-square"></i>
            </a>
            <a href="#" target="_blank">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" target="_blank">
              <i className="fab fa-twitter-square"></i>
            </a>
            <a href="#" target="_blank">
              <i className="fab fa-facebook-square"></i>
            </a>
            <a href="tel:04000000">
              <i className="fas fa-phone-square"></i>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
