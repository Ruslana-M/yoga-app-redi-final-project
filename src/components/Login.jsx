import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Backendless from "backendless";

function Login() {
  const navigate = useNavigate();
  function loginUser(e) {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    
    Backendless.UserService.login(email, password, true)
      .then((res) => {
        console.log(res);
        navigate("/teacherHome");
      })
      .catch((err) => {
        console.log(` Check your password`, err);
      });
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center min-h-screen">
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form className="card-body" onSubmit={loginUser}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-secondary">Login</button>
          </div>
          <p>or</p>
          <Link className="text-blue-600" to="/register">
            Register
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
