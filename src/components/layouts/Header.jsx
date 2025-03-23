import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../../assets/BMS.webp";
import { FaHome } from "react-icons/fa";
import { IoLogInSharp } from "react-icons/io5";
import { GiArchiveRegister } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { AiTwotoneDashboard } from "react-icons/ai";
import { IoLogOutSharp } from "react-icons/io5";
import { logoutUserAPi } from "../../services/authAPI";
import { setUser } from "../../features/user/userSlice.js";
import { Form, InputGroup } from "react-bootstrap";
import { CiSearch } from "react-icons/ci";

export const Header = () => {
  const { user } = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();
  //this is for logout user
  const handleOnLogout = () => {
    //call api to logout from backend
    logoutUserAPi();
    //call logout from the frontend
    sessionStorage.removeItem("accessJWT");
    localStorage.removeItem("refreshJWT");
    dispatch(setUser({}));
  };

  return (
    <Navbar expand="md" className="bg-dark" variant="dark">
      <Container>
        <Link to="/">
          <img src={logo} width="90px" height="60px" alt="" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="d-flex w-100 justify-content-between flex-column flex-md-row">
            <div></div>
            <Form style={{ width: "40%" }}>
              <InputGroup className="">
                <Form.Control
                  placeholder="Search Books"
                  aria-label="Search books"
                  aria-describedby="basic-addon2"
                />
                <InputGroup.Text id="basic-addon2">
                  <CiSearch />
                </InputGroup.Text>
              </InputGroup>
            </Form>

            <Nav className="">
              <Link className="nav-link" to="/">
                <FaHome />
                Home
              </Link>
              {user?._id ? (
                <>
                  <Link className="nav-link" to="/user">
                    <AiTwotoneDashboard />
                    Dashboard
                  </Link>
                  <Link className="nav-link" to="/" onClick={handleOnLogout}>
                    Logout <IoLogOutSharp />
                  </Link>
                </>
              ) : (
                <>
                  <Link className="nav-link" to="/signup">
                    <GiArchiveRegister />
                    Sign Up
                  </Link>
                  <Link className="nav-link" to="/login">
                    <IoLogInSharp />
                    LogIn
                  </Link>
                </>
              )}
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
