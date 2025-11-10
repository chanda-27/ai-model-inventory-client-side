import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";
import Container from "../components/Container/Container";

const RootLayout = () => {
  return (
    <div className="flex flex-col h-screen ">
      <header>
              <nav>
                  <Container>
                      
          <Navbar></Navbar>
                  </Container>
        </nav>
      </header>
      <main className="flex-1">
        <Container>
          <Outlet></Outlet>
        </Container>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default RootLayout;
