import React, { useState } from "react";
import Backendless from 'backendless';

function Register() {
    const [showError, setShowError] = useState(false)

  function registerUser(e) {
    e.preventDefault();
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (password !== confirmPassword) {
        setShowError(true)
        
    }else {
        //creating Object for Backendless
        const newUser = new Backendless.User()
        newUser.email = email
        newUser.password = password
        newUser.username = username
        newUser.userType = 'teacher'
        //registing
        Backendless.UserService.register(newUser)
            .then((res) => { console.log(res)
          }).catch(err => { console.log(` Check your password`,  err)
          })
    }
  }
  return (
    <div className="w-screen h-screen flex justify-center items-center min-h-screen">
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form className="card-body" onSubmit={registerUser}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="username"
              name="username"  
              className="input input-bordered"
              required
            />
          </div>
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
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Confirm Passoword</span>
            </label>
            <input
              type="password"
              placeholder="confirm password"
              name="confirmPassword"
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
                  <span className="label-text  pl-2">Teacher</span>
                </label>
                <label className="label cursor-pointer">
                  <input
                    type="radio"
                    name="radio-10"
                    className="radio radio-secondary"
                  />
                  <span className="label-text pl-2">Student</span>
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
