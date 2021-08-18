import React from "react";
import { SectionTitle } from "../../section-title/SectionTitle";
import { Container, Row, Col, Image } from "react-bootstrap";
import bg1 from "../../../assets/img/bg1.png";
import "./about.css";

export const About = () => {
  return (
    <div id="about" className="py-5">
      <SectionTitle title="About Me" />
      <Container>
        <Row className="mt-5 ">
          <Col md="6" className="mb-sm-4">
            <Image
              src={bg1}
              width="100%"
              alt="Its Hendra Wijaya"
              roundedCircle
            />
          </Col>
          <Col md="6">
            <h1>I am Hendra</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              sed eum atque cumque magnam accusantium itaque ipsum veritatis
              provident minus?
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
