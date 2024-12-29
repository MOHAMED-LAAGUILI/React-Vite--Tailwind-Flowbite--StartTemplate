import notFound404 from "../assets/image/not-found404.png";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center  bg-white dark:bg-gray-800 px-4">
      <div className="max-w-screen-md text-center">
        {/* Image */}
        <img
          src={notFound404}
          alt="404 Not Found"
          className="mx-auto mb-8 rounded-md dark:bg-slate-200"
        />

        {/* Message */}
        <h1 className="text-5xl font-extrabold text-gray-800 dark:text-white mb-4">
          404
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          Oops! The page you're looking for doesn't exist.
        </p>

        {/* Action Button */}
        <Link
          to="/dashboard"
          className="px-6 py-3 text-lg font-semibold text-white bg-green-400 rounded-lg shadow-lg hover:bg-green-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
