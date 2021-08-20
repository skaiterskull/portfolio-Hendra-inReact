import { React } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { TopNavBar } from "../navbar/TopNavBar";
import "./hero-style.css";
import bg1 from "../../assets/img/bg1.png";

export const Hero = () => {
  return (
    <div id="hero" className="hero">
      <TopNavBar />
      <Container>
        <Row className="mt-5">
          <Col md="6" className="text-center">
            <div className="order-md-2">
              <img src={bg1} width="80%" height="80%" alt="hendra" />
            </div>
          </Col>
          <Col md="6" className="text-center">
            <div className="info mt-5">
              <h1>Hi, I am Hendra Wijaya</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Molestiae aliquam quam tempore suscipit accusantium placeat
                nesciunt, rem doloribus deleniti in.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
