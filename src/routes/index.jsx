import { Route, Routes } from "react-router-dom";
import Index from "../container/Index";
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/NotFound";

import AuthForm from "../pages/Auth/Auth";

const RouterApp = () => {
  return (
    <Routes>
    <Route path="/" element={<Index />}>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/auth" element={<AuthForm />} />
     {/* You can add more nested routes here */}



      <Route path="*" element={<NotFound/>} />
    </Route>
  </Routes>
  );
};

export default RouterApp;
