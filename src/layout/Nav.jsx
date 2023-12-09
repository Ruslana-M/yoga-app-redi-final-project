import React from "react";
import { Link } from "react-router-dom";
import CalmHubLogo from "../others/CalmHub_logo.png";

function Nav() {
  return (
    <div className="navbar bg-orange-200 text-primary-content">
      <Link className="flex-1" to="/">
        <img className='w-25' src={CalmHubLogo} alt="logo" />
      </Link>
      <div className="flex-2">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link className="bg-[#FD94D1]" to="/login">
              Get Started
            </Link>
          </li>
          {/* <li>
          <details>
            <summary>
              Login
            </summary>
            <ul className="p-2 bg-base-100 rounded-t-none">
              <li><a>Register</a></li>
              <li><a>Logout</a></li>
            </ul>
          </details>
        </li> */}
        </ul>
      </div>
    </div>
  );
}

export default Nav;
