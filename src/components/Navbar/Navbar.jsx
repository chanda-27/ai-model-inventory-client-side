import React, { use, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import Swal from "sweetalert2";

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');
  const { user, signOutUser } = use(AuthContext);
        const [isHovering, setIsHovering] = useState(false);

  console.log(user);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    const localTheme = localStorage.getItem('theme');
    document.querySelector('html').setAttribute('data-theme',localTheme)
 },[theme,])
  const links = (
    <div className="space-x-4  *:p-2 text-[17px] *:rounded-[10px] *:hover:text-primary *:hover:border-1 *:hover:border-primary  ">
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/allVehicles"}>All Vehicles</NavLink>
      <NavLink to={"/addVehicle"}>Add Vehicle</NavLink>
      <NavLink to={"/myVehicles"}>My Vehicles</NavLink>
      <NavLink to={"/myBookings"}>My Bookings</NavLink>

    </div>
  );
const handleToggle=(e)=>{
  if (e.target.checked) {
    setTheme('dark');
  } else {
    
    setTheme('light');
  }
}
  const handleLogout = () => {
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
        Swal.fire(error.message);
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
          <a className="btn btn-ghost text-2xl text-primary px-0 ml-3">TripWise</a>
          <label className="swap swap-rotate ml-5">
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" checked={theme == 'light'? false:true} onChange={handleToggle} />

  {/* sun icon */}
  <svg
    className="swap-on h-10 w-10 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
  </svg>

  {/* moon icon */}
  <svg
    className="swap-off h-10 w-10 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
  </svg>
</label>
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
              <Link className="p-1.5 px-4 rounded-2xl bg-primary text-white hover:bg-transparent hover:border hover:border-primary hover:text-primary" onClick={() => handleLogout()}>Logout</Link>
            </div>
          ) : (
            <div className="space-x-3 text-[20px]">
              {" "}
              <Link className="p-1.5 px-4 rounded-2xl bg-primary text-white hover:bg-transparent hover:border hover:border-primary hover:text-primary" to={"/login"}>Login</Link>
              <Link className="p-1.5 px-4 rounded-2xl bg-primary text-white hover:bg-transparent hover:border hover:border-primary hover:text-primary"  to={"/register"}>Register</Link>
            </div>
          )}
        </div>
      </div>
      {isHovering && ( <div className=" bg-gray-400 rounded-2xl p-5 text-2xl text-primary absolute z-10 right-16">
        <h2 className="">{user.displayName || 'N/A'}</h2>
        <br />
        <h2 className="">{user.email || 'N/A'}</h2>

        </div>
      )}
    </div>
  );
};

export default Navbar;
