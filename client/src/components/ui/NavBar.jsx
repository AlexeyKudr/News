import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import axiosInstance from "../api/axiosInstance";

export default function NavBar({ user, setUser }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [showUserMenu, setShowUserMenu] = useState(false);

  const handleLogoClick = () => {
    if (user.data) {
      navigate("/news");
    } else {
      navigate("/");
    }
  };

  const logoutHandler = () => {
    axiosInstance
      .get("/auth/logout")
      .then(() => setUser({ status: "guest", data: null }));
    navigate("/", { replace: true });
  };

  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        {user.data ? (
          <Navbar.Brand href="/news" onClick={handleLogoClick}>
            <img
              src="./../../public/logo.png"
              width="auto"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        ) : (
          <Navbar.Brand href="/" onClick={handleLogoClick}>
            <img
              src="./../../public/logo.png"
              width="auto"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        )}
        <Nav className="me-auto">
          {user.data && (
            <>
              <NavLink to="/news" className="nav-link">
                Новости
              </NavLink>
              <NavLink to="/account" className="nav-link">
                Избранное
              </NavLink>
            </>
          )}
        </Nav>
        <Nav>
          <Dropdown
            show={showUserMenu}
            onToggle={() => setShowUserMenu(!showUserMenu)}
          >
            <DropdownToggle variant="light" id="dropdown-basic">
              <Navbar.Text>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-person-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path
                    fillRule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                  />
                </svg>
              </Navbar.Text>
            </DropdownToggle>
            <Dropdown.Menu>
              {!user.data && (
                <>
                  {location.pathname !== "/auth/signin" && (
                    <Dropdown.Item as={NavLink} to="/auth/signin">
                      Вход
                    </Dropdown.Item>
                  )}
                  {location.pathname !== "/auth/signup" && (
                    <Dropdown.Item as={NavLink} to="/auth/signup">
                      Регистрация
                    </Dropdown.Item>
                  )}
                </>
              )}
              {user.data && (
                <Dropdown.Item onClick={logoutHandler}>Выйти</Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>
          <span className="nav-link">
            {user.data ? user.data.name : "Гость"}
          </span>
        </Nav>
      </Container>
    </Navbar>
  );
}
