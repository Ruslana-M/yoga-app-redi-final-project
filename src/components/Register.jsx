import React from "react";

function Register() {
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
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Confirm Passoword</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <div className="flex justify-between">
              <label className="label flex-none">
                <span className="label-text">User Type</span>
              </label>
              <div className="flex justify-between gap-6">
                <label className="label cursor-pointer">
                <input
                    type="radio"
                    name="radio-10"
                    className="radio radio-secondary"
                    checked
                  />
                  <span className="label-text">Teacher</span>

                </label>
                <label className="label cursor-pointer">
                <input
                    type="radio"
                    name="radio-10"
                    className="radio radio-secondary"
                  />
                  <span className="label-text">Student</span>

                </label>
              </div>
            </div>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-secondary">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
