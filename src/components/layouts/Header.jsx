import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../../assets/BMS.webp";
import { FaHome } from "react-icons/fa";
import { IoLogInSharp } from "react-icons/io5";
import { GiArchiveRegister } from "react-icons/gi";

export const Header = () => {
  return (
    <Navbar expand="md" className="bg-dark" variant="dark">
      <Container>
        <Link to="/">
          <img src={logo} width="90px" height="60px" alt="" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link" to="/">
              <FaHome />
              Home
            </Link>
            <Link className="nav-link" to="/signup">
              <GiArchiveRegister />
              Sign Up
            </Link>
            <Link className="nav-link" to="/login">
              <IoLogInSharp />
              LogIn
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
