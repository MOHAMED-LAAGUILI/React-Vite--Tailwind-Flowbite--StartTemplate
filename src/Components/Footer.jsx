function Footer() {
    return (
      <footer className="bg-white rounded-lg shadow-xl border m-4 dark:bg-gray-800 mt-auto">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <span className="text-sm text-gray-900 sm:text-center dark:text-white mb-2 sm:mb-0">
              © {new Date().getFullYear()}{" "}
              <a href="/" className="hover:underline text-blue-500 dark:text-blue-300">
                Company Name ™
              </a>
              . All Rights Reserved.
            </span>
            <span className="text-sm text-gray-900 sm:text-center dark:text-white">
              Developed by{" "}
              <a
                href="https://laaguili-dev.app.genez.io/"
                className="hover:underline text-blue-500 dark:text-blue-300"
              >
                Mohamed Laaguili
              </a>
            </span>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  