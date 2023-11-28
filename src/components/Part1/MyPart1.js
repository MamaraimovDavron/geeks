import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
// import { NavLink } from "react-bootstrap";
import styled from "styled-components";
import { Sun } from "react-bootstrap-icons";

const StyledSpan = styled.div`
  /* border: 1px solid red; */
  /* font-size: 20px; */
  margin-right: 10px;
  margin-left: 5px;
  a {
    text-decoration: none;
    font-size: 35px;
    color: black;
    line-height: 20px;
    transition: 0.3s;
    &:hover {
      color: #20a1f1;
    }
    /* border: 1px solid yellow; */
  }
`;
const MainBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: white !important;
  border-bottom: 1px solid #f8f8f8;

  #navbarScroll {
    background-color: white !important;

    .nav {
      width: 100%;
      display: flex;
      gap: 10px;
      /* border: 5px solid green; */
      font-weight: 600;
    }
  }
`;

const FormBox = styled.div`
  /* border: 1px solid yellow; */
  display: flex;
  width: 15%;
  flex-direction: row;
  gap: 10px;
  .circle {
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  /* justify-content: space-around; */
`;

const MyPart1 = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <MainBox>
        <Navbar.Brand href="#">
          <img
            src="https://geeks-react.netlify.app/static/media/logo.e22c846d87ff5a1252df471397badc6d.svg"
            alt=""
          />
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
        <Navbar.Collapse id="navbarScroll" className="d-flex">
          <Nav className="nav me-auto my-2 my-lg-0" navbarScroll>
            <NavDropdown title="Browse" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3" className="hover">
                Web development
              </NavDropdown.Item>
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
              <NavDropdown.Item href="#action7">
                Request Access
              </NavDropdown.Item>
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

              <NavDropdown.Item href="#action5">
                Forgot Password
              </NavDropdown.Item>
              <NavDropdown.Item href="#action6">Edit Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action7">Security</NavDropdown.Item>
              <NavDropdown.Item href="#action8">
                Social Profiles
              </NavDropdown.Item>
              <NavDropdown.Item href="#action9">Notifications</NavDropdown.Item>
              <NavDropdown.Item href="#action10">
                Privacy settings
              </NavDropdown.Item>
              <NavDropdown.Item href="#action11">
                Delete profile
              </NavDropdown.Item>
              <NavDropdown.Item href="#action11">
                Linked accounts
              </NavDropdown.Item>
            </NavDropdown>

            <StyledSpan>
              <a href="!#">...</a>
            </StyledSpan>

            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search Courses"
                className="me-2"
                aria-label="Search"
                style={{ width: "220px" }}
              />
            </Form>
          </Nav>
          <FormBox>
            <Button className="fw-bold circle">
              <Sun />
            </Button>
            <Button variant="outline-success" className="fw-bold">
              Sign in
            </Button>
            <Button variant="outline-danger" className="fw-bold">
              Sign up
            </Button>
          </FormBox>
        </Navbar.Collapse>
      </MainBox>
    </Navbar>
  );
};

export default MyPart1;

// const Navbar = styled.div`
//   background-color: red;
//   border: 1px solid black;
//   height: 10vh;
// `;
