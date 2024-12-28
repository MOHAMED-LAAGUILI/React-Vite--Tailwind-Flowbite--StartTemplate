import { Route, Routes } from "react-router-dom";
import Index from "../container/Index";
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/NotFound";

const RouterApp = () => {
  return (
    <Routes>
    <Route path="/" element={<Index />}>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="services" element={<div>services</div>} />
    <Route path="*" element={<NotFound/>} />
      {/* You can add more nested routes here */}
    </Route>
  </Routes>
  );
};

export default RouterApp;
