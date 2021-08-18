import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { SectionTitle } from "../../section-title/SectionTitle";
import pj1 from "../../../assets/img/prank_calculator.png";
import pj2 from "../../../assets/img/todolist.png";
import pj3 from "../../../assets/img/portfolio.png";

export const Project = () => {
  return (
    <div id="skill" className="py-5">
      <SectionTitle title="Projects" />;
      <Container>
        {/*Project 1==================================================== */}

        <Row className="mb-5">
          <Col md="6">
            <img src={pj1} width="100%" alt="Prank Calculator" />
          </Col>
          <Col md="6">
            <div class="fs-2 fw-bold">
              Not to do task lists |
              <a href="" target="_blank">
                <i class="fab fa-github-alt"></i>
              </a>
            </div>

            <div class="fst-italic">Tech: HTML CSS, JS</div>
            <p>
              <strong>About: </strong>Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Consectetur repellat eaque inventore accusamus
              illum recusandae delectus totam qui id explicabo.
            </p>
          </Col>
        </Row>

        {/* Project 2=============================================*/}

        <Row className="mb-5">
          <Col md="6" className="order-md-2">
            <img src={pj2} width="100%" alt="Not to do list Project " />
          </Col>
          <Col md="6" className="order-md-1">
            <div class="fs-2 fw-bold">
              Not to do task lists |
              <a href="" target="_blank">
                <i class="fab fa-github-alt"></i>
              </a>
            </div>

            <div class="fst-italic">Tech: HTML CSS, JS</div>
            <p>
              <strong>About: </strong>Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Consectetur repellat eaque inventore accusamus
              illum recusandae delectus totam qui id explicabo.
            </p>
          </Col>
        </Row>

        {/* Project 3============================================= */}

        <Row className="mb-5">
          <Col md="6">
            <img src={pj3} width="100%" alt="Portfolio Project" />
          </Col>
          <Col md="6">
            <div class="fs-2 fw-bold">
              My Portfolio |
              <a href="" target="_blank">
                <i class="fab fa-github-alt"></i>
              </a>
            </div>

            <div class="fst-italic">Tech: HTML CSS, JS</div>
            <p>
              <strong>About: </strong>Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Consectetur repellat eaque inventore accusamus
              illum recusandae delectus totam qui id explicabo.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
