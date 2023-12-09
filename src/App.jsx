import { Route, Routes } from "react-router-dom";
import "./App.css";
// import data from "../src/data/data-asana.json";
import Nav from "./layout/Nav";
import Footer from "./layout/Footer";

import Home from "./layout/Home";
import Login from "./components/Login";
import Error from "./components/Error";
import Register from "./components/Register";

function App() {
  return (
    <div className="App" data-theme="cupcake">
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/*" element={<Error />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
