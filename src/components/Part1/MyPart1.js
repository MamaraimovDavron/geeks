import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import styled from "styled-components";
import { SunFill } from "react-bootstrap-icons";
import { MoonFill } from "react-bootstrap-icons";
import { Search } from "react-bootstrap-icons";

const StyledSpan = styled.div`
  margin-right: 10px;
  margin-left: 5px;
  a {
    text-decoration: none;
    font-size: 35px;
    color: black;
    line-height: 20px;
    transition: 0.3s;
    &:hover {
      color: ${(props) => props.theme.color};
    }
  }
`;

const MainBox = styled.div`
  /* width: 100%; */
  display: flex;
  padding: 15px;
  flex-direction: row;
  border-bottom: ${(props) => props.theme.borderBottom};
  /* height: 8vh; */
  background-color: ${(props) => props.theme.nav};
  align-items: center;
  .geekAvatar {
    /* background-color: red; */
    /* border: 1px solid red; */
  }
  #navbarScroll {
    .nav {
      width: 100%;
      display: flex;
      gap: 10px;
      font-weight: 600;
      .font-color {
        color: red;
      }

      #inputBox {
        position: relative;
        .search {
          /* border: 1px solid red; */
          position: absolute;
          font-size: 13px;
          top: 13px;
          left: 20px;
          color: #6e788b;
        }
      }
    }
  }
`;
// src="/static/media/logo.e22c846d87ff5a1252df471397badc6d.svg"
const FormBox = styled.div`
  display: flex;
  width: 15%;
  flex-direction: row;
  gap: 10px;
  align-items: center;
`;

const SignInBtn = styled.button`
  border: none;
  border-radius: 6px;
  padding: 8px 12px;
  /* box-shadow: 0px 0px 2px 1px #f8f8f8; */
  border: ${(props) => props.theme.border};
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  background-color: ${(props) => props.theme.miniBody} !important;
  color: ${(props) => props.theme.title};
  font-weight: 600;
`;
const SignUpBtn = styled.button`
  border: none;
  border-radius: 6px;
  padding: 8px 10px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-weight: 600;
  color: white;
  background-color: #754ffe;
`;

const SunAndMoon = styled.button`
  /* border: 1px solid red; */
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: ${(props) => props.theme.iconBody};
  .sun {
    /* border: 1px solid red; */
    font-size: 23px;
    color: #94a3b8;
  }

  .moon {
    /* border: 1px solid red; */
    font-size: 23px;
    color: #94a3b8;
  }
`;

const FormControl = styled.input`
  border: none;
  outline: none;
  border: ${(props) => props.theme.searchBorder};
  border-radius: 5px;
  padding-left: 50px;
  padding-right: 30px;
  /* padding-right: 0; */
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: 16px;
  background-color: ${(props) => props.theme.searchBody};
`;

const MyPart1 = ({
  isDarkTheme,
  toggleTheme,
  lightTheme,
  darkTheme,
  theme,
}) => {
  return (
    <MainBox theme={isDarkTheme ? darkTheme : lightTheme}>
      <Navbar.Brand href="#">
        {isDarkTheme ? (
          <img
            src="https://geeks-react.netlify.app/static/media/logo.e22c846d87ff5a1252df471397badc6d.svg"
            alt=""
            className="geekAvatar"
          />
        ) : (
          <img
            src="https://geeks-react.netlify.app/static/media/logo.e22c846d87ff5a1252df471397badc6d.svg"
            alt=""
            className="geekAvatar"
          />
        )}
      </Navbar.Brand>

      <Navbar.Collapse id="navbarScroll" className="d-flex">
        <Nav className="nav me-auto my-2 my-lg-0" navbarScroll>
          <NavDropdown
            title="Browse"
            id="navbarScrollingDropdown"
            className="fontColor"
          >
            <NavDropdown.Item href="#action3">Web development</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Design</NavDropdown.Item>
            <NavDropdown.Item href="#action5">Mobile App</NavDropdown.Item>
            <NavDropdown.Item href="#action6">IT software</NavDropdown.Item>
            <NavDropdown.Item href="#action7">Marketing</NavDropdown.Item>
            <NavDropdown.Item href="#action8">Music</NavDropdown.Item>
            <NavDropdown.Item href="#action9">Life style</NavDropdown.Item>
            <NavDropdown.Item href="#action10">Business</NavDropdown.Item>
            <NavDropdown.Item href="#action11">Photography</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Landings" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Landings</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Home Academy</NavDropdown.Item>
            <NavDropdown.Item href="#action5">Courses</NavDropdown.Item>
            <NavDropdown.Item href="#action6">Lead Courses</NavDropdown.Item>
            <NavDropdown.Item href="#action7">Request Access</NavDropdown.Item>
            <NavDropdown.Item href="#action8">Saas</NavDropdown.Item>
            <NavDropdown.Item href="#action9">Job listing</NavDropdown.Item>
          </NavDropdown>
          {/* Pages */}
          <NavDropdown title="Pages" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Courses</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Paths</NavDropdown.Item>

            <NavDropdown.Item href="#action5">Blog</NavDropdown.Item>

            <NavDropdown.Item href="#action6">Career</NavDropdown.Item>

            <NavDropdown.Item href="#action7">Job</NavDropdown.Item>

            <NavDropdown.Item href="#action8">Specialty</NavDropdown.Item>

            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">About</NavDropdown.Item>
            <NavDropdown.Item href="#action6">Help Center</NavDropdown.Item>
            <NavDropdown.Item href="#action7">Pricing</NavDropdown.Item>
            <NavDropdown.Item href="#action8">Compare Plan</NavDropdown.Item>
            <NavDropdown.Item href="#action9">Contact</NavDropdown.Item>
          </NavDropdown>
          {/* Accounts */}
          <NavDropdown title="Accounts" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Accounts</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Instructor</NavDropdown.Item>

            <NavDropdown.Item href="#action5">Students</NavDropdown.Item>

            <NavDropdown.Item href="#action6">Admin</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action7">Sign in</NavDropdown.Item>

            <NavDropdown.Item href="#action8">Sign up</NavDropdown.Item>

            <NavDropdown.Item href="#action5">Forgot Password</NavDropdown.Item>
            <NavDropdown.Item href="#action6">Edit Profile</NavDropdown.Item>
            <NavDropdown.Item href="#action7">Security</NavDropdown.Item>
            <NavDropdown.Item href="#action8">Social Profiles</NavDropdown.Item>
            <NavDropdown.Item href="#action9">Notifications</NavDropdown.Item>
            <NavDropdown.Item href="#action10">
              Privacy settings
            </NavDropdown.Item>
            <NavDropdown.Item href="#action11">Delete profile</NavDropdown.Item>
            <NavDropdown.Item href="#action11">
              Linked accounts
            </NavDropdown.Item>
          </NavDropdown>

          <StyledSpan>
            <a href="!#">...</a>
          </StyledSpan>

          <Form className="d-flex " id="inputBox">
            {/* <Form.Control
              type="search"
              placeholder="Search Courses"
              className="input"
              aria-label="Search"
              style={{ width: "220px" }}
              theme={isDarkTheme ? darkTheme : lightTheme}
            /> */}
            <Search className="search" />
            <FormControl
              placeholder="Search Courses"
              theme={isDarkTheme ? darkTheme : lightTheme}
            ></FormControl>
          </Form>
        </Nav>
        <FormBox>
          <SunAndMoon
            onClick={() => {
              toggleTheme();
            }}
            className="sunAndMoon"
            theme={isDarkTheme ? darkTheme : lightTheme}
          >
            {isDarkTheme ? (
              <SunFill className="sun" />
            ) : (
              <MoonFill className="moon" />
            )}
          </SunAndMoon>

          <SignInBtn
            className="sign-in"
            theme={isDarkTheme ? darkTheme : lightTheme}
          >
            Sign in
          </SignInBtn>
          <SignUpBtn className="sign-up">Sign up</SignUpBtn>
        </FormBox>
      </Navbar.Collapse>
    </MainBox>
  );
};

export default MyPart1;
