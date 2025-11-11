import React, { use, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);
        const [isHovering, setIsHovering] = useState(false);

  console.log(user);

  //   Home, All Vehicles, Add Vehicle, My Vehicles, My
  // Bookings, Login/Register
  const links = (
    <div className="space-x-4">
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/allVehicles"}>All Vehicles</NavLink>
      <NavLink to={"/addVehicle"}>Add Vehicle</NavLink>
      <NavLink to={"/myVehicles"}>My Vehicles</NavLink>
      <NavLink to={"/myBookings"}>My Bookings</NavLink>
    </div>
  );
  let handleLogout = () => {
    signOutUser()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "You Logged Out Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        Swal.fire(err.message);
      });
  };
  return (
    <div>
      <div className="navbar px-0 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl px-0">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end ">
          {user ? (
            <div className="flex gap-2 items-center">
              <div  onMouseEnter={() => setIsHovering(true)}
                                onMouseLeave={() => setIsHovering(false)} >
                <img
                  className="h-[50px] w-[50px] rounded-[50px]"
                  src={user.photoURL}
                  alt=""
                />
              
              </div>{" "}
              <Link onClick={() => handleLogout()}>Logout</Link>
            </div>
          ) : (
            <div className="space-x-3">
              {" "}
              <Link to={"/login"}>Login</Link>
              <Link to={"/register"}>Register</Link>
            </div>
          )}
        </div>
      </div>
      {isHovering && (<h2 className="absolute z-10 right-10">{user.displayName || 'N/A'}</h2> )}
    </div>
  );
};

export default Navbar;
