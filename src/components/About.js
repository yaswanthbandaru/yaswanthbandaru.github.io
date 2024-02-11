import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Logo from '../assets/logos/logo3.svg';

const About = () => {
  return (
    <Container id="about" className="full-page-component d-flex align-items-center justify-content-center">
      <Row>
        <Col md={6} className="text-md-right">
          <h2>About Me</h2>
          <p>
            I am a passionate and creative front-end developer with a strong
            background in user experience design. I love to create beautiful and
            functional websites using the latest web technologies.
          </p>
          <p>
            My skills include HTML, CSS, JavaScript, and various front-end
            frameworks such as React. I also have experience in responsive web
            design and web accessibility.
          </p>
          <p>
            In my free time, I enjoy contributing to open-source projects and
            staying up to date with the latest trends in web development.
          </p>
        </Col>
        <Col md={6} className="text-md-left">
          <img src={Logo} alt="About Illustration" />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
