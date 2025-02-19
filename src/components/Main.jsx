import { Route, Routes } from "react-router";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/login" element={<h1>Home</h1>} />
        <Route path="/signup" element={<h1>Home</h1>} />
      </Routes>
    </main>
  );
};

export default Main;
