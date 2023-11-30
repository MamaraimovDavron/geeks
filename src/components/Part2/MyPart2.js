import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/esm/Button";
import { Watch } from "react-bootstrap-icons";
import { CameraVideo } from "react-bootstrap-icons";
import { Person } from "react-bootstrap-icons";
import { CheckCircle } from "react-bootstrap-icons";

const Part2Box = styled.div`
  height: 86.7vh;
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
  padding: 0;
  li {
    list-style-type: none;
    a {
      text-decoration: none;
      color: #64748b;
      font-weight: 600;
      padding: 2px;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 10px;
      .icons {
        font-size: 20px;
        color: #f59e0b;
      }
    }
  }
`;

const list = ["4 Hours", "12 Videos", "10.234 + Enrolled"];

const listChecked = [
  "Shareable Certificate",
  "Flexible Deadlines",
  "100% Online Courses",
  "Approx.24 hours",
];

const ColChecked = styled.div`
  width: 100%;
  /* border: 1px solid; */
  /* margin-bottom: 30px; */
  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0;
    li {
      display: flex;
      flex-direction: row;
      gap: 20px;
      align-items: center;
      /* border: 1px solid; */
      padding: 5px;
      a {
        text-decoration: none;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
        font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
          "Lucida Sans", Arial, sans-serif;
        color: ${(props) => props.theme.aColor};
        font-weight: 600;
        .icon {
          /* background-color: ${(props) => props.theme.iconBgColor}; */
          border-radius: 50%;
          /* color: red; */
          color: ${(props) => props.theme.iconColor};
          font-size: 20px;
        }
      }
    }
  }
`;

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
              {list.map((item, index) => {
                return (
                  <li>
                    <a href="!#">
                      {index === 0 ? <Watch className="icons" /> : ""}
                      {index === 1 ? <CameraVideo className="icons" /> : ""}
                      {index === 2 ? <Person className="icons" /> : ""} {item}
                    </a>
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
        <ColChecked
          lg={12}
          className="colChecked"
          theme={isDarkTheme ? darkTheme : lightTheme}
        >
          <ul>
            {listChecked.map((item) => {
              return (
                <li>
                  <a href="!#">
                    <CheckCircle className="icon" />
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </ColChecked>
      </Row>
      <Row></Row>
    </Container>
  );
}
