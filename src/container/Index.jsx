import { Outlet } from "react-router-dom";
import Aside from "../Components/Aside";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Index = () => {
  return (
    <>
      <Header />
      <Aside />

      {/* Main container with dark background */}
      <div className="min-h-screen flex flex-col p-4 pt-20 sm:ml-64  dark:bg-gray-800 dark:text-white">
        {/* Render nested routes like Dashboard or Services */}
        <Outlet />

        {/* Footer positioned at the bottom */}
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Index;
