import React from "react";
import { SectionTitle } from "../../section-title/SectionTitle";
import { Container, Row, Col } from "react-bootstrap";

export const Skill = () => {
  return (
    <div id="skills" className="py-5">
      <SectionTitle title="Skills" />;
      <Container>
        <Row className="fs-1 fw-bold text-center mt-2">
          <Col sm="6" md="6" className="mb-5">
            <div>
              <i class="fab fa-html5 text-primary">HTML</i>
            </div>
          </Col>
          <Col sm="6" md="6" className="mb-5">
            <div>
              <i class="fab fa-css3-alt text-danger">CSS</i>
            </div>
          </Col>
          <Col sm="6" md="6" className="mb-5">
            <div>
              <i class="fab fa-js-square text-warning">JS</i>
            </div>
          </Col>

          <Col sm="6" md="6" className="mb-5">
            <div>
              <i class="fab fa-react text-primary">REACT</i>
            </div>
          </Col>
          <Col sm="6" md="6" className="mb-5">
            <div>
              <i class="fab fa-node-js text-success">NODE</i>
            </div>
          </Col>
          <Col sm="6" md="6" className="mb-5">
            <div>
              <i class="fab fa-html5">MDB</i>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
