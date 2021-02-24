import { Link } from "react-router-dom";

export default function FooterPage() {
  return (
    <footer class="footer bg-gray-50 relative pt-1m t-5 border-b-2 border-blue-700">
      <div class="container mx-auto px-6 pt-2">
        <div class="sm:flex sm:mt-8">
          <div class="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
            <div class="flex flex-col">
              <p className="font-bold text-blue-400 uppercase mb-2">
                Food <span className="text-blue-700">Chronicles</span>
              </p>
              <span class="my-2 text-blue-400  text-md">
                With blockchain technology we provide your food chronicles
              </span>
            </div>
            <div class="flex flex-col">
              <span class="font-bold text-blue-700 uppercase mt-4 md:mt-0 mb-2">
                Get Started
              </span>
              <Link
                to="/register"
                class="my-2 text-blue-400  text-md hover:text-blue-500"
              >
                Create Account
              </Link>
              <Link
                to="/scan"
                class="my-2 text-blue-400  text-md hover:text-blue-500"
              >
                Scan
              </Link>
            </div>
            <div class="flex flex-col">
              <span class="font-bold text-blue-700 uppercase mt-4 md:mt-0 mb-2">
                Get In Touch
              </span>
              <span class="my-2 text-blue-400  text-md hover:text-blue-500">
                support@foodchronicles.com
              </span>
              <span class="my-2 text-blue-400  text-md hover:text-blue-500">
                012-345-678
              </span>
              <span class="my-2 text-blue-400  text-md hover:text-blue-500">
                Food Chronicles, Jakarta
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="container mx-auto px-6">
        <div class="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
          <div class="sm:w-2/3 text-center py-6">
            <p class="text-sm text-blue-700 font-bold mb-2">© 2021 by Team 8</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
