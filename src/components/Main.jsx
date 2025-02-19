import { Route, Routes } from "react-router";
import UserForm from "./UserForm";

const Main = () => {
  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/login" element={<UserForm action="login" />} />
        <Route path="/signup" element={<UserForm action="signup" />} />
      </Routes>
    </main>
  );
};

export default Main;
