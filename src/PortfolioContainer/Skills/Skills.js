import React from "react";
import "./Skills.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
export default function Skills() {
  return (
    <div className="skill-container">
      <div className="container-skill">
        <div className="skill-header">
          <h1>Skills</h1>
          <h4>Bellow are the list of my currents skills:</h4>

          <Container>
            <Col>
              <div className="skill-list">
                <div className="col">
                  <Row>
                    <h6>HTML: </h6>
                  </Row>
                </div>
                <div className="col">
                  <h6>HTML: </h6>
                </div>
              </div>
            </Col>
          </Container>
        </div>
      </div>
    </div>
  );
}
