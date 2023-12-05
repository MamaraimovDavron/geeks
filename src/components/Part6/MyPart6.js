import React from "react";
import styled from "styled-components";
import { Plus } from "react-bootstrap-icons";

const Part6Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 150px;
  h4 {
    color: #754ffe;
    font-size: 14px;
    letter-spacing: 1px;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    font-weight: 700;
    padding-bottom: 15px;
  }

  h2 {
    font-size: 42px;
    font-weight: 700;
    color: ${(props) => props.theme.title};
  }
  p {
    font-size: 20px;
    color: #64748b;
    text-align: center;
    padding-bottom: 60px;
    font-weight: 600;
  }

  ul {
    display: flex;
    flex-direction: column;
    padding: 0;
    /* border: 1px solid red; */
    width: 40%;
    li {
      list-style-type: none;
      a {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        font-size: 20px;
        text-decoration: none;
        font-weight: 700;
        color: ${(props) => props.theme.title};
        border-bottom: 1px solid gray;
        padding: 10px;
        .plusIcon {
          color: #754ffe;
          font-size: 30px;
          font-weight: bold;
        }
      }
    }
  }

  .btn {
    margin-top: 50px;
    padding: 10px;
    border: 1px solid #754ffe;
    border-radius: 6px;
    color: #754ffe;
    font-weight: 600;
    transition: 0.5s;
    &:hover {
      background-color: #754ffe;
      color: white;
    }
  }
`;

const MyPart6 = ({ isDarkTheme, lightTheme, darkTheme, theme }) => {
  const list = [
    "What is the cost of an online course",
    "What do I need to take a course?",
    "What do I receive for taking this course?",
    "What willI get if I subscribe to this Certificate?",
  ];

  return (
    <Part6Box theme={isDarkTheme ? darkTheme : lightTheme}>
      <h4>NEED TO KNOW</h4>
      <h2>Frequently Asked Questions.</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mattis non
        accumsan in, tempor dictum neque.
      </p>

      <ul>
        {list.map((item) => {
          return (
            <li>
              <a href="!#">
                {item} <Plus className="plusIcon" />
              </a>
            </li>
          );
        })}
      </ul>

      <a href="!#" className="btn">
        More questions? Visit the Learner Help Center
      </a>
    </Part6Box>
  );
};

export default MyPart6;
