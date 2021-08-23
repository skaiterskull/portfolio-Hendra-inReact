import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { TopNavBar } from "../navbar/TopNavBar";
import "aos/dist/aos.css";
import "./hero-style.css";
import bg1 from "../../assets/img/bg1.png";
import AOS from "aos";

export const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in",
      delay: 100,
      // disable: "mobile",
      offset: 200,
    });
  }, []);

  return (
    <div id="hero" className="hero">
      <TopNavBar />
      <Container>
        <Row className="mt-md-5">
          <Col md="6" className="text-center">
            <div
              className="order-md-2"
              data-aos="zoom-in-up"
              data-aos-anchor-placement="top-center"
            >
              <img src={bg1} width="80%" height="80%" alt="hendra" />
            </div>
          </Col>
          <Col md="6" className="text-center">
            <div className="info mt-md-5">
              <h1 data-aos="zoom-in">Hi, I am Hendra Wijaya</h1>
              <p data-aos="zoom-out">
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
