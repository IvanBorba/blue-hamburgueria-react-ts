import { Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<div>Home</div>} />
    </Routes>
  );
};

export default Router;
