import React from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.css";

export default function Footer() {
  return (
    <footer className="bg-body-tertiary text-center">
      {/* <!-- Grid container --> */}
      <div className="container p-4 pb-0">
        {/* <!-- Section: Social media --> */}
        <section className="mb-4">
          {/* <!-- Facebook --> */}
          <Link
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1"
            style={{
              backgroundColor: "#3b5998",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
            }}
            to="https://facebook.com/"
            role="button"
          >
            <i className="fab fa-facebook-f"></i>
          </Link>

          {/* <!-- Twitter --> */}
          <Link
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1"
            style={{
              backgroundColor: "#55acee",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
            }}
            to="https://twitter.com/"
            role="button"
          >
            <i className="fab fa-twitter"></i>
          </Link>

          {/* <!-- Google --> */}
          <Link
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1"
            style={{
              backgroundColor: "#0F9D58",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
            }}
            to="https://google.com/"
            role="button"
          >
            <i className="fab fa-google"></i>
          </Link>

          {/* <!-- Instagram --> */}
          <Link
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1"
            style={{
              backgroundColor: "#e4405f",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
            }}
            to="https://instagram.com/"
            role="button"
          >
            <i className="fab fa-instagram"></i>
          </Link>
        </section>
        {/* <!-- Section: Social media --> */}
      </div>
      {/* <!-- Grid container --> */}

      {/* <!-- Copyright --> */}
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        {/* © 2020 Copyright: */}
        <Link className="text-body" to="https://quickstrap.com/">
          © 2023 Company,Inc
        </Link>
      </div>
      {/* <!-- Copyright --> */}
    </footer>
  );
}
