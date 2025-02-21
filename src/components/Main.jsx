import { Route, Routes } from "react-router";
import UserForm from "./UserForm";
import Logout from "./Logout";

const Main = () => {
  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/login" element={<UserForm action="login" />} />
        <Route path="/signup" element={<UserForm action="signup" />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </main>
  );
};

export default Main;
