import React from 'react'

function Nav() {
  return (
    <div className="navbar justify-evenly bg-orange-200 text-primary-content">
    <div className="flex-1">
      <a className="btn btn-ghost text-xl">Calm Hub </a>
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1">
        <li><a>Link</a></li>
        <li>
          <details>
            <summary>
              Login
            </summary>
            <ul className="p-2 bg-base-100 rounded-t-none">
              <li><a>Register</a></li>
              <li><a>Logout</a></li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  </div>
  )
}

export default Nav