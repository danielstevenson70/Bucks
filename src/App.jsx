import { Routes, Route } from "react-router";
import { AuthProvider } from "./AuthContext";

import MainLayout from "./layouts/MainLayout";
import ProtectedLayout from "./layouts/ProtectedLayout";

import Home from "./Pages/home";
import Login from "./Pages/login";
import Register from "./Pages/register";
import Logout from "./Pages/logout";



function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
          <Route element={<ProtectedLayout />}>
            <Route path="/logout" element={<Logout />} />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
}


export default App;

