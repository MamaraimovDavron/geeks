import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "./Card";
import styled from "styled-components";

const Part3MainBox = styled.div`
  /* height: 100vh; */
  /* border: 1px solid red; */
  padding-bottom: 150px;
  background-color: ${(props) => props.theme.part3Body};
  .col-12 {
    /* border: 1px solid; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 120px;
    padding-bottom: 80px;
    gap: 10px;
    h4 {
      font-size: 14px;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      letter-spacing: 1.5px;
      /* font-weight: 900; */
      color: #754ffe;
    }

    h1 {
      /* border: 1px solid red; */
      color: ${(props) => props.theme.title};
      font-weight: bold;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    }

    p {
      color: #64748b;
      font-weight: 600;
      width: 65%;
      text-align: center;
      font-size: 20px;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    }
  }

  .cardRow {
    /* border: 1px solid red; */
    display: flex;
    flex-direction: row;
    gap: 30px;
    /* align-items: center; */
    justify-content: center;
    .col-border {
      /* border: 1px solid; */
      padding: 0;
      /* padding: 0; */
      width: 48%;
    }
  }
`;
export default function MyPart3({ isDarkTheme, lightTheme, darkTheme, theme }) {
  return (
    <Part3MainBox theme={isDarkTheme ? darkTheme : lightTheme}>
      <Container>
        <Row>
          <Col lg={12} className="col-12">
            <h4>COURSE DESCRIPTION</h4>
            <h1>What will you learn?</h1>
            <p>
              Vanilla JS is a fast, lightweight, cross-platformframework for
              building incredible, powerful JavaScript applications.
            </p>
          </Col>
        </Row>
        <Row className="cardRow">
          <Col className="col-border" lg={5}>
            <Card
              isDarkTheme={isDarkTheme}
              lightTheme={lightTheme}
              darkTheme={darkTheme}
              theme={theme}
              img="https://geeks-react.netlify.app/static/media/feature-icon-1.d81a3fc1e4004c4b67e31168c1898c64.svg"
              h3="Introduction to JavaScript"
              p="In et tempus dui, in porta dolor. Donec molestie a purus ut interdum.
              Donec quis felis dignissim, luctus libero ornare"
            />
          </Col>
          <Col className="col-border" lg={5}>
            <Card
              isDarkTheme={isDarkTheme}
              lightTheme={lightTheme}
              darkTheme={darkTheme}
              theme={theme}
              img="https://geeks-react.netlify.app/static/media/feature-icon-2.35b3b77394deb3cd7ebf78b8464fab62.svg"
              h3="JavaScript Beginning"
              p="Malesuada fames ac turpis egesta mpor tempus tincidunt. Aliquam congue lacus ac tellus consectetur malesuada."
            />
          </Col>
          <Col className="col-border" lg={5}>
            <Card
              isDarkTheme={isDarkTheme}
              lightTheme={lightTheme}
              darkTheme={darkTheme}
              theme={theme}
              img="https://geeks-react.netlify.app/static/media/feature-icon-3.7cfb20a1964dfcd934da6b2267d68bc9.svg"
              h3="Variables and Constants"
              p="Aliquam pulvinar eros a dictur vitae diam imperdiet, ornare turpis vequet elit nec, imperdiet lectuna liquam qs."
            />
          </Col>
          <Col className="col-border" lg={5}>
            <Card
              isDarkTheme={isDarkTheme}
              lightTheme={lightTheme}
              darkTheme={darkTheme}
              theme={theme}
              img="https://geeks-react.netlify.app/static/media/feature-icon-4.4e54d5c3aeac9d9d151971629ba18abf.svg"
              h3="Types and Operators"
              p="In lobortis quam eu augue spendisse imperdiet nec orci ipsum, tempus pharetra posuere imperdiet, lacinia a nisl."
            />
          </Col>
        </Row>
      </Container>
    </Part3MainBox>
  );
}
