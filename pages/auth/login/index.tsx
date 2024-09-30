// pages/login.tsx

import Layout from "@/components/Layout"; // Adjust the import based on your layout component structure
import Link from "next/link";
const LoginPage = () => {
  return (
    <Layout>
      <div className="bg-white min-h-screen flex items-center justify-center relative" style={{ height: 'calc(100vh - 100px)' }}> {/* Adjust 100px to your navbar + footer height */}
        <main className="relative isolate px-6 lg:px-8 w-full h-full"> {/* Set h-full to make it fill the container */}
          <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            ></div>
          </div>

          {/* Content centered in viewport */}
          <div className="flex items-center justify-center h-full"> {/* Center the content in the full height */}
            <div className="p-8 rounded-lg shadow-md w-full max-w-sm">
              <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">Login</h2>
              <p className="text-gray-600 text-center mb-4">Welcome back! Please log in to your account.</p>

              {/* Google Login Button */}
              <a
                href="#"
                className="flex items-center justify-center w-full py-3 mb-4 text-sm font-medium text-gray-900 transition duration-300 bg-gray-200 rounded-lg hover:bg-gray-300 focus:ring-4 focus:ring-gray-300"
                role="button"
                aria-label="Sign in with Google"
              >
                <img className="h-5 mr-2" src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/logos/logo-google.png" alt="Google Logo" />
                Sign in with Google
              </a>

              <div className="flex items-center mb-4">
                <hr className="flex-grow border-gray-300" />
                <span className="mx-4 text-gray-500">or</span>
                <hr className="flex-grow border-gray-300" />
              </div>

              <form>
                <div className="mb-4">
                  <label htmlFor="email" className="block mb-2 text-sm text-gray-700">Email*</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                    aria-required="true"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="password" className="block mb-2 text-sm text-gray-700">Password*</label>
                  <input
                    id="password"
                    type="password"
                    placeholder="Enter a password"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                    aria-required="true"
                  />
                </div>

                <div className="flex items-center justify-between mb-4">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" aria-label="Keep me logged in" />
                    <span className="text-sm text-gray-700">Keep me logged in</span>
                  </label>
                  <a href="#" className="text-sm text-blue-500">Forgot password?</a>
                </div>

                <button
                  type="submit"
                  className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-300"
                  aria-label="Login"
                >
                  Login
                </button>
              </form>

              <p className="mt-4 text-sm text-center text-gray-600">
                Not a member?
                <Link href="/auth/signup" className="text-blue-500">
                  Create an account
                </Link>
              </p>


            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default LoginPage;