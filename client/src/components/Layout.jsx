import React from "react";
import { Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import NavBar from "./ui/NavBar";

export default function Layout({user, logoutHandler, setUser}) {
  return (
    <Container>
      <NavBar user={user} logoutHandler={logoutHandler} setUser={setUser}  />
      <Outlet />
    </Container>
  );
}
