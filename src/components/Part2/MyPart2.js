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
import { Google, Twitter, Facebook } from "react-bootstrap-icons";
import Form from "react-bootstrap/Form";

const Part2Box = styled.div`
  height: 86.7vh;
  /* border: 1px solid #ff1234; */
  gap: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  /* background-color: ${(props) => props.theme.body}; */
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

const Account = styled.form`
  height: 86.7vh;
  /* border: 1px solid #ff1234; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .form {
    /* border: 1px solid red; */
    box-shadow: 2px 5px 5px 4px #cfd0d4;
    width: 80%;
    height: 55vh;
    border-radius: 15px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 21px;
    h3 {
      color: ${(props) => props.theme.title};
    }
    ul {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 0;
      li {
        list-style: none;

        a {
          text-decoration: none;
          border: 1px solid red;
          padding: 12px 24px;
          width: 140px;
          border-radius: 8px;
          background-color: ${(props) => props.theme.socialNetworkBgColor};
          border: none;
          color: ${(props) => props.theme.title};
          font-weight: 600;
          transition: all 0.4s;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          gap: 8px;
          &:hover {
            background-color: #cdd0d4;
          }
        }
      }
    }

    span {
      /* border: 1px solid; */
      padding: 0;
      margin-top: -10px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      .hr {
        /* border: 1px solid red; */
        width: 80%;
        padding: 0;

        border-top: 1px solid #cdd0d4;
      }

      h3 {
        font-size: 13px;
        font-weight: 400;
        /* padding: 5px; */
        padding-bottom: 5px;
        padding-left: 5px;
        padding-right: 5px;
        font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
          "Lucida Sans", Arial, sans-serif;
        color: #73a0c3;
      }
    }

    input {
      border: none;
      outline: 0;
      border: ${(props) => props.theme.searchBorder};
      padding: 6px 18px;
      border-radius: 6px;
      background-color: ${(props) => props.theme.miniBody};
      font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
        "Lucida Sans", Arial, sans-serif;
    }

    .bottomText {
      color: #627289;
      font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
        "Lucida Sans", Arial, sans-serif;
      font-size: 15px;
      a {
        text-decoration: none;
        color: ${(props) => props.theme.textColor};
        font-weight: 600;
      }
    }
  }
`;

const StartCoursesBtn = styled.button`
  background-color: #754ffe;
  color: white;
  width: 100%;
  border: none;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  padding: 8px 12px;
  border-radius: 6px;
  transition: 0.3s;
  &:hover {
    background-color: #5f4ffe;
  }
`;
const socialMedias = ["Google", "Twitter", "Facebook"];

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
        <Col className="account">
          <Account theme={isDarkTheme ? darkTheme : lightTheme}>
            <Form className="form">
              <h3>Create Free Account</h3>
              <ul>
                {socialMedias.map((item, index) => {
                  return (
                    <li>
                      <a href="!#">
                        {index === 0 ? <Google /> : ""}
                        {index === 1 ? <Twitter /> : ""}
                        {index === 2 ? <Facebook /> : ""}
                        {item}
                      </a>
                    </li>
                  );
                })}
              </ul>
              <span>
                <p className="hr"></p>
                <h3>OR</h3>
                <p className="hr"></p>
              </span>
              <input type="email" placeholder="Email" className="email" />
              <input
                type="password"
                placeholder="Password"
                className="password"
              />
              <StartCoursesBtn>Start Courses for Free</StartCoursesBtn>
              <hr id="hr-line" />
              <p className="bottomText">
                By continuing you accept the <a href="!#">Terms of Use</a>,{" "}
                <a href="!#">Privacy Policy</a>, and{" "}
                <a href="!#">Data Policy</a>
              </p>
            </Form>
          </Account>
        </Col>

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
