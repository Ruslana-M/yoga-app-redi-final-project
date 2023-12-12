import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./layout/Nav";
import Footer from "./layout/Footer";
import Home from "./layout/Home";
import Login from "./components/Login";
import Error from "./components/Error";
import Register from "./components/Register";
import TeacherHome from "./components/TeacherHome";
import CreateForm from "./components/CreateForm";
import Backendless from 'backendless';
import Preview from "./components/Preview";

Backendless.serverURL = "https://eu-api.backendless.com"
Backendless.initApp(process.env.REACT_APP_BACKENDLESS_ID, process.env.REACT_APP_BACKENDLESS_KEY);

function App() {
  return (
    <div className="App" data-theme="cupcake">
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/teacherHome" element={<TeacherHome />} />
          <Route path="/createForm" element={<CreateForm />} />
          <Route path="/preview" element={<Preview/>} />

          
          <Route path="/*" element={<Error />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
