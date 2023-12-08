import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./layout/Nav";
import Home from "./layout/Home";
import Footer from "./layout/Footer";
import Error from "./components/Error";

function App() {
  return (
    <div className="App" data-theme="cupcake">
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nav" element={<Nav />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
