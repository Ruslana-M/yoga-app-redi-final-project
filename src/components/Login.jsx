import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="w-screen h-screen flex justify-center items-center min-h-screen">
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
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
          <Link className='text-blue-600' to='/register'>Register</Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
