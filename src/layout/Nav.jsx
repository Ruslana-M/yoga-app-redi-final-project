import { Link } from "react-router-dom";
import CalmHubLogo from "../others/CalmHub_logo.png";
import { useNavigate } from "react-router-dom";
import Backendless from "backendless";

function Nav({ user, setUser }) {
  const navigate = useNavigate();
  function logoutUser() {
    Backendless.UserService.logout()
      .then((res) => {
        setUser(null);
        navigate("/");
      })
      .catch((err) => console.log(err));
  }
  function myClasses(){
    navigate("/teacherHome");
  }
  return (
    <div className="navbar bg-orange-200 text-primary-content">
      <Link className="flex-1" to="/">
        <img className="w-25" src={CalmHubLogo} alt="logo" />
      </Link>
      {/*to hide log in btn after login- made a condition
      ? : - if user is logged in show me LogOut button, otherwise- Get started */}
      {user ? (
        <div className="flex-2">
          {/* //first */}
          <details className="dropdown">
            <summary className="m-1 btn btn-sm border-zinc-300 border-2">
              Language
            </summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
              <li>
                <a>English</a>
              </li>
              <li>
                <a>Українська</a>
              </li>
            </ul>
          </details>
          {/* second */}
          <button
            className="btn btn-sm m-1 border-zinc-300 border-2 w-28"
            onClick={myClasses}
          >
            My Classes
          </button>
          <button
            className="btn btn-sm m-1 border-zinc-300 border-2 w-28"
            onClick={logoutUser}
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="flex-2">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link className="bg-[#FD94D1]" to="/login">
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Nav;
