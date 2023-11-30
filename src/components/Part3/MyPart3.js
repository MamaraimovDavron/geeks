import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";

const Part3MainBox = styled.div`
  height: 100vh;
  /* border: 1px solid red; */
  background-color: ${(props) => props.theme.part3Body};
`;
export default function MyPart3({ isDarkTheme, lightTheme, darkTheme, theme }) {
  return (
    <Part3MainBox theme={isDarkTheme ? darkTheme : lightTheme}>
      <Container>
        <Row>
          <Col lg={12}></Col>
        </Row>
        <Row className="d-flex border justify-content-center">
          <Col lg={6} className="border">
            lg={6}
          </Col>
          <Col lg={6} className="border">
            lg={6}
          </Col>
          <Col lg={6} className="border">
            lg={6}
          </Col>
          <Col lg={6} className="border">
            lg={6}
          </Col>
        </Row>
      </Container>
    </Part3MainBox>
  );
}
