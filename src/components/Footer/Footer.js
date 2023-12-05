import React from "react";
import styled from "styled-components";
import { Facebook } from "react-bootstrap-icons";
import { Twitter } from "react-bootstrap-icons";
import { Instagram } from "react-bootstrap-icons";

const FooterBox = styled.div`
  /* height: 40vh; */
  /* border: 1px solid red; */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .top {
    /* border: 1px solid; */
    width: 80%;
    display: flex;
    flex-direction: row;
    padding: 80px;
    .box-1 {
      width: 40%;
      /* border: 1px solid; */
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 10px;
      p {
        color: #64748b;
        font-size: 15px;
        width: 80%;
      }
      ul {
        padding: 0;
        display: flex;
        flex-direction: row;
        gap: 10px;
        li {
          list-style-type: none;
          display: flex;
          a {
            color: #64748b;
            transition: 0.5s;
            &:hover {
              color: #754ffe;
            }
          }
        }
      }
    }

    .box-2 {
      width: 20%;
      display: flex;
      /* border: 1px solid red; */
      flex-direction: column;
      gap: 15px;
      h4 {
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        font-size: 20px;
        font-weight: 700;
        color: ${(props) => props.theme.title};
      }
      ul {
        display: flex;
        flex-direction: column;
        padding: 0;
        gap: 10px;
        li {
          list-style-type: none;
          a {
            text-decoration: none;
            color: #64748b;
            font-size: 14px;
          }
        }
      }
    }
    .box-3 {
      width: 20%;
      display: flex;
      /* border: 1px solid red; */
      flex-direction: column;
      gap: 15px;
      h4 {
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        font-size: 20px;
        font-weight: 700;
        color: ${(props) => props.theme.title};
      }
      ul {
        display: flex;
        flex-direction: column;
        padding: 0;
        gap: 10px;
        li {
          list-style-type: none;
          a {
            text-decoration: none;
            color: #64748b;
            font-size: 14px;
          }
        }
      }
    }

    .box-4 {
      width: 26%;
      display: flex;
      /* border: 1px solid red; */
      flex-direction: column;
      gap: 10px;
      align-items: flex-start;
      h4 {
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        font-size: 20px;
        font-weight: 700;
        color: ${(props) => props.theme.title};
      }

      p {
        color: #64748b;
        font-size: 14px;
      }
      h5 {
        color: #64748b;
        font-size: 14px;
      }

      .imgBox {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: center;
        gap: 10px;
        a {
          /* width: 40%; */
          /* border: 1px solid red; */
        }
      }
    }
  }

  .bottom {
    /* border: 1px solid red; */
    width: 80%;
    /* padding: 80px; */
    padding: 0 80px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .bottom-left {
      p {
        color: #64748b;
        font-size: 14px;
      }
    }
    ul {
      display: flex;
      flex-direction: row;
      gap: 20px;
      li {
        list-style-type: none;
        a {
          text-decoration: none;
          font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
            "Lucida Sans", Arial, sans-serif;
          color: #64748b;
          font-weight: 400;
          transition: 0.5s;
          font-size: 14px;
          &:hover {
            color: #754ffe;
          }
        }
      }
    }
  }
`;

const socialMedia = [<Facebook />, <Twitter />, <Instagram />];
const companyList = ["About", "Pricing", "Blog", "Careers", "Contact"];
const supportList = [
  "Help and Support",
  "Become Instructor",
  "Get the app",
  "FAQ`s",
  "Tutorial",
];

const footerLi = [
  "Privacy Policy",
  "Cookie Notice",
  "Do Not Sell My Personal Information",
  "Terms of Use",
];

export default function Footer({ isDarkTheme, lightTheme, darkTheme, theme }) {
  return (
    <FooterBox theme={isDarkTheme ? darkTheme : lightTheme}>
      <div className="top">
        <div className="box-1">
          <img
            src="https://geeks-react.netlify.app/static/media/logo.e22c846d87ff5a1252df471397badc6d.svg"
            alt=""
          />

          <p>
            Geek is feature-rich components and beautifully Bootstrap UIKit for
            developers, built with bootstrap responsive framework.
          </p>

          <ul>
            {socialMedia.map((item) => {
              return (
                <li>
                  <a href="!#">{item}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="box-2">
          <h4>Company</h4>
          <ul>
            {companyList.map((item) => {
              return (
                <li>
                  <a href="!#">{item}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="box-3">
          <h4>Support</h4>
          <ul>
            {supportList.map((item) => {
              return (
                <li>
                  <a href="!#">{item}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="box-4">
          <h4>Get in touch</h4>
          <p>339 McDermott Points Hettingerhaven, NV 15283</p>
          <h5>
            Email:{" "}
            <a href="!#" className="email">
              support@geeksui.com
            </a>
          </h5>
          <h5>
            Phone:{" "}
            <a href="!#" className="phone">
              (000) 123 456 789
            </a>
          </h5>
          <div className="imgBox">
            <a href="!#">
              <img
                src="https://geeks-react.netlify.app/static/media/appstore.b464860c93223b3fc15fc7d026bcdca0.svg"
                alt=""
              />
            </a>

            <a href="!#">
              <img
                src="https://geeks-react.netlify.app/static/media/playstore.f23c3dcbde32e767203274d4b1749cc7.svg"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
      <hr />
      <div className="bottom">
        <div className="bottom-left">
          <p>© 2023 Geeks-UI, Inc. All Rights Reserved</p>
        </div>
        <div className="bottom-right">
          <ul>
            {footerLi.map((item) => {
              return (
                <li>
                  <a href="!#">{item}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </FooterBox>
  );
}
