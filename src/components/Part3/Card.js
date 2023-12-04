import React from "react";
import styled from "styled-components";

const CardBox = styled.div`
  width: 100%;
  /* border: 1px solid red; */
  padding: 40px;
  background-color: ${(props) => props.theme.cardBgColor};
  /* box-shadow: 0px 0px 5px 1px #c8c8c8; */
  border-radius: 10px;
  /* gap: 10px; */
  .card-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 20px;

    img {
      background-color: #754ffe;
      border-radius: 50%;
    }
    .card-text {
      display: flex;
      flex-direction: column;
      /* border: 1px solid white; */
      flex: 1;

      h3 {
        font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
          "Lucida Sans", Arial, sans-serif;
        font-weight: 600;
        font-size: 27px;
        color: ${(props) => props.theme.title};
      }

      ul {
        display: flex;
        flex-direction: row;
        padding: 0;
        /* border: 1px solid red; */
        justify-content: flex-start;
        gap: 20px;
        li {
          list-style-type: none;
          text-transform: uppercase;
          font-size: 12px;
          font-family: Arial, Helvetica, sans-serif;
          font-weight: 600;
          color: #64748b;
        }

        li:nth-child(1) {
          list-style-type: none;
          color: ${(props) => props.theme.title};
        }
      }
    }
  }

  .card-body {
    padding: 20px 0;
    p {
      color: #64748b;
      font-weight: 500;
      font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
        "Lucida Sans", Arial, sans-serif;
    }
  }

  .card-footer {
    /* border: 1px solid; */
    a {
      /* text-decoration: none; */
      font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
        "Lucida Sans", Arial, sans-serif;
      color: #754ffe;
      font-weight: 600;
      font-size: 15px;
    }
  }
`;

const Card = ({ isDarkTheme, lightTheme, darkTheme, theme, img, h3, p }) => {
  const courses = ["Courses-1", "6 Lessons", "1 Hour 12 min"];

  return (
    <CardBox theme={isDarkTheme ? darkTheme : lightTheme}>
      <div className="card-header">
        <img src={img} alt="" />
        <div className="card-text">
          <h3>{h3}</h3>
          <ul>
            {courses.map((item) => {
              return <li>{item}</li>;
            })}
          </ul>
        </div>
      </div>

      <div className="card-body">
        <p>{p}</p>
      </div>
      <div className="card-footer">
        <a href="!#">View Chapter Details +</a>
      </div>
    </CardBox>
  );
};

export default Card;
