import React ,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { Badge } from "react-bootstrap";
import Modal from "../Modal";
import Cart from "../screens/Cart";
import { useCart } from "./ContextReducer";

export default function Navbar() {

const [cartView, setCartView] = useState(false);

let data = useCart();
const navigate = useNavigate();
const handleLogout = ()=>{
  localStorage.removeItem("authToken");
  navigate("/login")  
}

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg "
        style={{ backgroundColor: "#9572ce" }}
      >
        <div className="container-fluid">
          <Link
            className="navbar-brand fs-3 fw-bold fst-italic"
            to="/"
            style={{ color: "#ffffff" }}
          >
            QuickBite
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto ">
              <li className="nav-item active fs-5 fw-bold">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/"
                  style={{ color: "#ffffff" }}
                >
                  Home
                </Link>
              </li>
              {(localStorage.getItem("authToken"))?
              <li className="nav-item active fs-5 fw-bold">
              <Link
                className="nav-link"
                aria-current="page"
                to="/myOrder"
                style={{ color: "#ffffff" }}
              >
                My Orders
              </Link>
            </li>:""
              }
            </ul>
            {(!localStorage.getItem("authToken"))?
            <div className="d-flex">
              <Link
                className="btn bg-white text-success mx-1"
                to="/login"
                style={{ color: "#ffffff" }}
              >
                Login
              </Link>
              <Link
                className="btn bg-white text-success mx-1"
                to="/signup"
                style={{ color: "#ffffff" }}
              >
                Sign Up
              </Link>
            </div>
            : 
            <div>
              <div className="btn bg-white text-success mx-2 fw-bold" onClick={() =>{setCartView(true)}}>
              My Cart {" "}
              {data.length>0 ?<Badge pill bg="danger">{data.length}</Badge> :null}
            </div>

              {cartView? <Modal onClose={()=>setCartView(false)} ><Cart/></Modal> : null}

            <div className="btn bg-white text-danger mx-2 fw-bold" onClick={handleLogout}>
              Logout
            </div>
            </div>
          }
          </div>
        </div>
      </nav>
    </div>
  );
}
