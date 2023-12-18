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
import Backendless from "backendless";
import Preview from "./components/Preview";
import { useEffect, useState } from "react";
import ProtectedRoutes from "./components/ProtectedRoutes";

Backendless.serverURL = "https://eu-api.backendless.com";
Backendless.initApp(
  process.env.REACT_APP_BACKENDLESS_ID,
  process.env.REACT_APP_BACKENDLESS_KEY
);

function App() {
  const [flowForPreview, setFlowForPreview] = useState();  //data table of created flow returned from BE
  const [user, setUser] = useState();

  useEffect(() => {
    Backendless.UserService.getCurrentUser()
      .then((res) => {
        setUser(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App" data-theme="cupcake">
      <Nav user={user} setUser={setUser} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/teacherHome"
            element={
              <ProtectedRoutes user={user}>
                <TeacherHome
                  setFlowForPreview={setFlowForPreview}
                  user={user}
                />
              </ProtectedRoutes>
            }
          />

          <Route
            path="/createForm"
            element={
              <ProtectedRoutes user={user}>
                <CreateForm setFlowForPreview={setFlowForPreview} />
              </ProtectedRoutes>
            }
          />

          <Route
            path="/preview"
            element={
              <ProtectedRoutes user={user}>
                <Preview flowForPreview={flowForPreview} setFlowForPreview={setFlowForPreview}/>
              </ProtectedRoutes>
            }
          />

          <Route path="/*" element={<Error />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
