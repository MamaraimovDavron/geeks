import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/esm/Button";
// import { Watch } from "react-bootstrap-icons";
// import { CameraVideo } from "react-bootstrap-icons";
// import { Persons } from "react-bootstrap-icons";

const Part2Box = styled.div`
  height: 90vh;
  /* border: 1px solid #ff1234; */
  gap: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const TextVanilla = styled.h1`
  font-size: 60px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: ${(props) => props.theme.title};
`;

const Info = styled.p`
  font-size: 20px;
  color: #64748b;
  font-weight: 600;
`;

const Ul = styled.ul`
  /* border: 1px solid red; */
  padding: 0;
  li {
    list-style-type: none;
    a {
      text-decoration: none;
      color: #64748b;
      font-weight: 600;
    }
  }
`;

const list = ["4 Hours", "12 Videos", "10.234 + Enrolled"];
// const listIcons = ["Watch", "CameraVideo", "Persons"];
export default function MyPart2({ isDarkTheme, lightTheme, darkTheme, theme }) {
  console.log(darkTheme);
  return (
    <Container>
      <Row>
        <Col>
          <Part2Box>
            <TextVanilla theme={isDarkTheme ? darkTheme : lightTheme}>
              Become a Vanilla JavaScript Developer
            </TextVanilla>
            <Info>
              In this tutorial, we are going to learn about JavaScript (Vanilla
              JS) - for building incredible, powerful JavaScript applications.
            </Info>
            <Ul>
              {list.map((item) => {
                return (
                  <li>
                    <a href="!#">{item}</a>
                  </li>
                );
              })}
            </Ul>

            <Button variant="success" className="fw-bold p-3">
              Watch Preview
            </Button>
          </Part2Box>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}
