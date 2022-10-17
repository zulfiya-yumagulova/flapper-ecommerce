import React, { useState } from "react";
// import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
// import { Link, NavLink } from "react-router-dom";
// import { AiOutlineUser } from "react-icons/ai";
import "./Navbar.css";

// function Navbar() {
//   return (
//     <NavbarBs className="bg-white shadow-sm mb-3">
//       <Container>
//         <Nav className="me-auto">
//           <Link to="/home">Home</Link>
//           <Link to="/about">About</Link>
//           <Link to="/contact">Contact</Link>
//           <Link to="/products">Products</Link>
//         </Nav>
//         <Link to="/user">
//           <AiOutlineUser className="user" />
//         </Link>
//         <Button
//           style={{ width: "3rem", height: "3rem", position: "relative" }}
//           variant="outline-primary"
//           className="rounded-circle"
//         >
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
//             />
//           </svg>
//           <div className="rounded-circle bg-danger d-flex justify-content-center alighn-items-center num-items ">
//             3
//           </div>
//         </Button>
//       </Container>
//     </NavbarBs>
//   );
// }

// export default Navbar;

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar">
      <span className="logo">Logo</span>
      <div className="navbar-items">
        <a href="home">Home</a>
        <a href="home">About</a>
        <a href="home">Comtact</a>
        <button className="basket">
          <svg
            className="w-6 h-6 basket-icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <div className="num-items "> 3</div>
        </button>
      </div>
      <div className="navbar-toggle" onClick={() => setIsOpen(isOpen)}>
        <div className="bar"></div>
      </div>
    </div>
  );
}

export default Navbar;
