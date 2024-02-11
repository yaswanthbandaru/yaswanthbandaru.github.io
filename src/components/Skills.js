import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container, OverlayTrigger, Tooltip } from 'react-bootstrap';

const Skills = () => {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      JavaScript 
    </Tooltip>
  );

  return (
    <Container id="skills" className="full-page-component d-flex justify-content-center">
      <Row>
        <Col>
            <Container>
              <h1 className="text-center">Skills</h1>

            <OverlayTrigger
              placement="top"
              delay={{ show: 250, hide:400 }}
              overlay={renderTooltip}
            >
              <img src={require('../assets/icons/javascript.svg').default} alt="js" />
            </OverlayTrigger>
            </Container>
        </Col>
      </Row>
    </Container>
  )
}

export default Skills;
