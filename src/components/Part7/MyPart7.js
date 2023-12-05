import React from "react";
import styled from "styled-components";

const Part7Box = styled.div`
  height: 40vh;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 200px;
  background-color: ${(props) => props.theme.part5BgColor};
  h1 {
    color: ${(props) => props.theme.title};
  }

  p {
    font-size: 20px;
    color: #64748b;
    font-weight: 600;
    width: 50%;
    text-align: center;
  }

  .btns {
    display: flex;
    /* border: 1px solid white; */
    flex-direction: row;
    align-items: center;
    gap: 5px;
    a {
      /* border: 1px solid; */
      text-decoration: none;
      /* width: 100%; */
      padding: 10px 20px;
      border-radius: 8px;
      font-weight: bold;
      transition: 0.3s;
      &:nth-child(1) {
        color: white;
        background-color: #754ffe;
        &:hover {
          background-color: #804ffe;
        }
      }

      &:nth-child(2) {
        color: white;
        background-color: #0ea5e9;
        &:hover {
          background-color: #47a5e9;
        }
      }
    }
  }
`;

const MyPart7 = ({ isDarkTheme, lightTheme, darkTheme, theme }) => {
  return (
    <Part7Box theme={isDarkTheme ? darkTheme : lightTheme}>
      <h1>Join more than 1 million learners worldwide</h1>
      <p>
        Effective learning starts with assessment. Learning a new skill is hard
        work—Signal makes it easier.
      </p>

      <div className="btns">
        <a href="!#">Start Learning for Free</a>
        <a href="!#">Geeks for Business</a>
      </div>
    </Part7Box>
  );
};

export default MyPart7;
