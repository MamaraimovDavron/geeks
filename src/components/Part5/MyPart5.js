import React from "react";
import styled from "styled-components";
import { Quote } from "react-bootstrap-icons";

const Part5Box = styled.div`
  /* border: 1px solid red; */
  /* height: 100; */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 200px;
  /* justify-content: center; */
  background-color: ${(props) => props.theme.part5BgColor};
  .up {
    /* border: 1px solid; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    h5 {
      color: #754ffe;
      letter-spacing: 1.5px;
      font-size: 15px;
      font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
        "Lucida Sans", Arial, sans-serif;
      font-weight: 600;
    }
    h2 {
      font-size: 42px;
      font-weight: bold;
      color: ${(props) => props.theme.title};
    }
    p {
      font-size: 22px;
      font-weight: 600;
      color: #64748b;
    }
  }
  .bottom {
    /* border: 1px solid red; */
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    /* border-radius: 10px; */
    padding-top: 80px;
    .left {
      /* border: 1px solid; */
      width: 49%;
      display: flex;
      flex-direction: column;
      align-items: center;

      /* background-color: ; */
      .top {
        /* border: 1px solid yellow; */
        border-radius: 10px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 100px 50px;
        gap: 20px;
        background-color: ${(props) => props.theme.cardBgColor};
        border-radius: 10px 10px 0 0;

        .quote {
          /* border: 1px solid red; */
          /* padding-bottom: 40px; */
          font-size: 50px;
          color: ${(props) => props.theme.colorQuote};
        }
        p {
          font-size: 20px;
          text-align: center;
          font-weight: 600;
          color: ${(props) => props.theme.title};
        }
      }
      .bottomImg {
        width: 100%;
        /* border: 1px solid red; */
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #754ffe;
        position: relative;
        padding-top: 40px;
        border-radius: 0 0 10px 10px;
        .imgBox {
          width: 70px;
          height: 70px;
          position: relative;
          background-color: #754ffe;
          /* border: 1px solid; */
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          position: absolute;
          top: -40px;

          img {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            /* top: -50px; */
          }
        }
        h4 {
          color: ${(props) => props.theme.titleReverse};
          font-family: Arial, Helvetica, sans-serif;
          font-size: 19px;
        }
        h5 {
          font-size: 14px;
          font-weight: 600;
          color: #b698fe;
        }
      }
    }

    .right {
      /* border: 1px solid green; */
      width: 49%;
      display: flex;
      flex-direction: column;
      align-items: center;
      .top {
        /* border: 1px solid yellow; */
        border-radius: 10px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 100px 50px;
        gap: 20px;
        background-color: ${(props) => props.theme.cardBgColor};
        border-radius: 10px 10px 0 0;

        .quote {
          /* border: 1px solid red; */
          /* padding-bottom: 40px; */
          font-size: 50px;
          color: ${(props) => props.theme.colorQuote1};
        }
        p {
          font-size: 20px;
          text-align: center;
          font-weight: 600;
          color: ${(props) => props.theme.title};
        }
      }
      .bottomImg {
        width: 100%;
        /* border: 1px solid red; */
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #0ea5e9;
        position: relative;
        padding-top: 40px;
        border-radius: 0 0 10px 10px;
        .imgBox {
          width: 70px;
          height: 70px;
          position: relative;
          background-color: #0ea5e9;
          /* border: 1px solid; */
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          position: absolute;
          top: -40px;

          img {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            /* top: -50px; */
          }
        }
        h4 {
          color: ${(props) => props.theme.titleReverse};
          font-family: Arial, Helvetica, sans-serif;
          font-size: 19px;
        }
        h5 {
          font-size: 14px;
          font-weight: 600;
          color: #68cff4;
        }
      }
    }
  }
`;

const MyPart5 = ({ isDarkTheme, lightTheme, darkTheme, theme }) => {
  return (
    <Part5Box theme={isDarkTheme ? darkTheme : lightTheme}>
      <div className="up">
        <h5>TESTIMONIALS</h5>
        <h2>What our learners are saying</h2>
        <p>12+ million people are already learning on Geeks</p>
      </div>
      <div className="bottom">
        <div className="left">
          <div className="top">
            <Quote className="quote" />
            <p>
              The generated lorem Ipsum is therefore always free from
              repetition, injected humour, or words etc generate lorem Ipsum
              which looks racteristic reasonable.
            </p>
          </div>

          <div className="bottomImg">
            <div className="imgBox">
              <img
                src="https://geeks-react.netlify.app/static/media/avatar-1.d2fd9642fd3628734b27.jpg"
                alt=""
              />
            </div>
            <h4>Barry Watson</h4>
            <h5>Web Developer,UK</h5>
          </div>
        </div>
        <div className="right">
          <div className="top">
            <Quote className="quote" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipi scing elit. Sed vel
              felis imperdiet, lacinia metus malesuada diamamus rutrum turpis
              leo, id tincidunt magna sodales.
            </p>
          </div>
          <div className="bottomImg">
            <div className="imgBox">
              <img
                src="https://geeks-react.netlify.app/static/media/avatar-2.397cdd4b772a83b9166e.jpg"
                alt=""
              />
            </div>
            <h4>Linda Shenoy</h4>
            <h5>Developer and Bootcamp Instructor</h5>
          </div>
        </div>
      </div>
    </Part5Box>
  );
};

export default MyPart5;
