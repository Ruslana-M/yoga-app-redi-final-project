import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover text-white"
      style={{
        backgroundImage:
          "url( https://images.unsplash.com/photo-1433360405326-e50f909805b3?q=80&w=2376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}
    >
      <p className="text-4xl">Page not found</p>
      <p className="text-3xl">It is ok to be lost sometimes.</p>
      <Link className="text-2xl underline decoration-solid decoration-sky-500" to='/'>
        Go back to Home
      </Link>
    </div>
  );
}

export default Error;
