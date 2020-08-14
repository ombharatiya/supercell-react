import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import styled from "styled-components";
import Container from "react-bootstrap/esm/Container";
import logo from "../assets/supercell.png";
import supercellId from "../assets/supercell_id_1.jpg";
import searchIcon from "../assets/icons8-search.svg";
import searchIconWhite from "../assets/icons8-search-bbb.svg";

export const NavigationBar = (props: any) => {
  const [isSearchEnabled, setSearchEnabled] = useState(false);
  const [searchText, setSearchText] = useState("");

  const handleClick = (event: any) => {
    event.preventDefault();
    setSearchEnabled(!isSearchEnabled);
    console.log(event);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSearchText(event.target.value);
    console.log(event);
  };
  return (
    <Styles>
      <Container>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/">
            <img
              src={logo}
              width="50"
              height="45"
              className="d-inline-block align-top"
              alt="Supercell"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/home#">Our Story</Nav.Link>
              <NavDropdown title="Games" id="collasible-nav-dropdown">
                {gamesMoreOption.map((option: any, index: number) => (
                  <NavDropdown.Item href={option.url} key={index}>
                    {option.name}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
              <NavDropdown title="Careers" id="collasible-nav-dropdown">
                {careerMoreOption.map((option: any, index: number) => (
                  <NavDropdown.Item href={option.url} key={index}>
                    {option.name}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
              <Nav.Link href="https://supercell.com/en/support/">
                Support
              </Nav.Link>
              <Nav.Link href="https://supercell.com/en/safe-fair-play/">
                Safe &amp; Fair Play
              </Nav.Link>
            </Nav>
            <Nav>
              {isSearchEnabled ? (
                <Form inline>
                  <FormControl
                    type="text"
                    placeholder="Search"
                    value={searchText}
                    onChange={handleChange}
                  />
                </Form>
              ) : (
                <Nav.Item className="nav-right-border padding-left-none">
                  <Nav.Link href="https://supercell.com/en/supercell-id/">
                    <img
                      src={supercellId}
                      height="30"
                      className="d-inline-block align-top"
                      alt="Supercell"
                    />
                  </Nav.Link>
                </Nav.Item>
              )}
              <Nav.Item onClick={handleClick} className="padding-left-none">
                <Nav.Link href="#">
                  <img
                    src="#"
                    // src={searchIcon}
                    height="30"
                    className="d-inline-block align-top search-icon"
                    alt=""
                  />
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </Styles>
  );
};

export default NavigationBar;

export const gamesMoreOption = [
  {
    name: "Games",
    url: "/games",
  },
  {
    name: "Hay Day",
    url: "/games/hayday",
  },
  {
    name: "Clash of Clans",
    url: "https://supercell.com/en/games/clashofclans/",
  },
  {
    name: "Boom Beach",
    url: "https://supercell.com/en/games/boombeach/",
  },
  {
    name: "Clash Royale",
    url: "https://supercell.com/en/games/clashroyale/",
  },
  {
    name: "Brawl Stars",
    url: "https://supercell.com/en/games/brawlstars/",
  },
];
export const careerMoreOption = [
  {
    name: "Why You Might Love It Here",
    url: "https://supercell.com/en/careers/why-you-might-love-it-here/",
  },
  {
    name: "Our Offices",
    url: "https://supercell.com/en/careers/our-offices/",
  },
  {
    name: "Living in Helsinki",
    url: "https://supercell.com/en/careers/living-helsinki/",
  },
  {
    name: "Joinig Supercell",
    url: "https://supercell.com/en/careers/joining-supercell/",
  },
];

export const Styles = styled.div`
  .navbar {
    background-color: #000;
    min-height: 80px;
    // padding-right: 0;
  }
  .navbar-brand,
  .navbar-nav,
  .nav-link {
    color: #bbb;
    &:hover {
      color: white;
    }
  }
  .container {
    // max-width: 90%;
    position: fixed;
    top: 0;
    z-index: 1;
    padding-right: 0;
    padding-left: 0;
    margin-right: 0;
    margin-left: 0;
  }
  .nav-item {
    padding: 0 10px;
  }
  .mr-auto.navbar-nav {
    align-items: flex-end;
  }
  .navbar-nav {
    align-items: flex-end;
  }
  .dropdown-menu {
    background-color: #000000c7;
    top: 133%;
    width: 300px;
    align-items: flex-end;
  }
  .dropdown-item {
    color: #808080;
  }
  .nav-right-border {
    border-right: 1px solid #363636;
  }
  .dropdown-toggle::after {
    display: none;
  }
  .form-control {
    background: transparent;
    outline: 0;
    border-color: #808080;
    border-width: 0 0 1px;
    border-radius: 0;
    box-shadow: none;
    color: white;
    font-size: 14px;
    padding: 0;
    width: 250px;
    height: calc(1.5em + 0.75rem);
    &:active,
    &:focus {
      border-width: 0 0 1px;
      border-color: #808080;
      box-shadow: none;
    }
  }
  .padding-left-none {
    padding-left: 0;
  }

  .search-icon {
    height: 25px;
    width: 40px;
    background: url(${searchIcon});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    // &:selected,
    &:hover {
      height: 25px;
      width: 40px;
      background: url(${searchIconWhite});
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center center;
    }
  }
`;
