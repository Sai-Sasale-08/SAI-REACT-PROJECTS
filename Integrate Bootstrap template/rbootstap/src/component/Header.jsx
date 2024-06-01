import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <div>
   
      <div className="container-fluid  bg-primary-subtle  vh-100 p-0">
      <nav className="navbar bg-danger  ">
      <div className="logo text-white">
        <h4>SAI SASALE</h4>
      </div>
      </nav>
        <div
          className="row"
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div className="col-lg-6  text-center  p-5  mt-0 border cnt-box">
            <h1 className="mt-5">Hi, Hi, I'm John Doe</h1>
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              viverra vehicula enim ut rhoncus. Mauris arcu velit, pretium nec
              varius quis, posuere eget urna. Fusce at rutrum dolor.
            </p>
            <button className="btn btn-primary ">I'm AVAILABLE</button>
          </div>
          <div className="col-lg-6  text-center  mt-1 img-box">
            <img
              style={{ width: "60vh", height: "80vh" }}
              className="img-fluid"
              src="https://png.pngtree.com/png-vector/20230918/ourmid/pngtree-man-in-shirt-smiles-and-gives-thumbs-up-to-show-approval-png-image_10094380.png"
              alt="John Doe"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;