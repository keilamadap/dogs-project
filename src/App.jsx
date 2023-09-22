import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Conta from "./components/Conta";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import { UserStorage } from "./context/UserContext";
import User from "./User/User";
import ProtectedRoute from "./Helper/ProtectedRoute";

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <Route
              path="conta/*"
              element={
                <ProtectedRoute>
                  {" "}
                  <User />{" "}
                </ProtectedRoute>
              }
            />
          </Routes>

          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
