import React from "react";
import styled from "styled-components";

const Part4Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* border: 1px solid; */
  padding: 150px;
  gap: 100px;

  .up {
    /* border: 1px solid red; */
    display: flex;
    width: 70%;
    flex-direction: row;
    .left {
      width: 50%;
      /* border: 1px solid green; */
      display: flex;
      flex-direction: column;
      gap: 10px;
      h4 {
        text-transform: uppercase;
        letter-spacing: 1px;
        font-size: 15px;
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif,
          "Lucida Sans", Arial, sans-serif;
        color: #754ffe;
      }
      h1 {
        color: ${(props) => props.theme.title};
        font-family: sans-serif;
        font-weight: 600;
        font-size: 40px;
        /* border: 1px solid; */
        text-align: start;
        .purple {
          color: #754ffe;
        }
      }

      p {
        color: #64748b;
        font-size: 20px;
        font-family: Arial, Helvetica, sans-serif;
        width: 90%;
      }
      ul {
        display: flex;
        /* border: 1px solid; */
        justify-content: space-between;
        /* gap: 10px; */
        li {
          list-style-type: none;
          /* border: 1px solid; */
          h3 {
            font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
            font-size: 30px;
            font-weight: bold;
            color: ${(props) => props.theme.title};
          }
          h4 {
            color: #64748b;
            text-transform: capitalize;
            font-size: 13px;
            font-weight: 500;
          }
        }
      }
    }

    .right {
      width: 50%;
      /* border: 1px solid yellow; */
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        border-radius: 50%;
        /* border: 1px solid; */
      }
    }
  }

  .bottom {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
    h4 {
      color: #754ffe;
      letter-spacing: 2px;
      font-size: 15px;
    }

    .imgs {
      display: flex;
      /* border: 1px solid; */
      width: 100%;
      gap: 100px;
    }
  }
`;

const MyPart4 = ({ isDarkTheme, lightTheme, darkTheme, theme }) => {
  //   const listNums = [45, 10.5, 12];
  //   const listWords = ["Lessons", "Students", "Learning Hours"];
  const imgUrl = [
    "https://geeks-react.netlify.app/static/media/gray-logo-stripe.6b556d06bcc209f1c051bbdb399131f0.svg",
    "https://geeks-react.netlify.app/static/media/gray-logo-airbnb.5908aac3e8062333869d580f4b2f3d59.svg",
    "https://geeks-react.netlify.app/static/media/gray-logo-discord.2e0bae69d24feccf4efdd3f80746031b.svg",
    "https://geeks-react.netlify.app/static/media/gray-logo-intercom.870602b99ded665ecf0c2d5b2ffeb8c4.svg",
    "https://geeks-react.netlify.app/static/media/gray-logo-pinterest.928eaa29223a809cc5554847139d26a9.svg",
    "https://geeks-react.netlify.app/static/media/gray-logo-netflix.a47db6eaf2de7327844f27eb230da39c.svg",
  ];
  return (
    <Part4Box theme={isDarkTheme ? darkTheme : lightTheme}>
      <div className="up">
        <div className="left">
          <h4>Your instructor</h4>
          <h1>
            Hi, I’m <span className="purple">James Davies</span>, I will be
            taking you through lessons.
          </h1>
          <p>
            Create beautiful website with this Geeks UI template. Get started
            building a site today.
          </p>
          <hr />
          <ul>
            <li>
              <h3>45</h3>
              <h4>Lessons</h4>
            </li>
            <li>
              <h3>10,500+</h3>
              <h4>Students</h4>
            </li>
            <li>
              <h3>12+</h3>
              <h4>Learning Hours</h4>
            </li>
          </ul>
        </div>

        <div className="right">
          <img
            src="https://geeks-react.netlify.app/static/media/instructor-img.1ed9cc40ee4734876e12.png"
            alt=""
          />
        </div>
      </div>

      <div className="bottom">
        <h4>TRUSTED BY TOP-TIER PRODUCT COMPANIES</h4>
        <div className="imgs">
          {imgUrl.map((item) => {
            return <img src={item} alt="" />;
          })}
        </div>
      </div>
    </Part4Box>
  );
};

export default MyPart4;
