import { Link } from "react-router";
import { useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function LoginPage() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [showPassword, setShowPassword] = useState(false);
  const [response, setResponse] = useState(null);

  async function handleLogin(e) {
    e.preventDefault();
  }

  return (
    <div className="bg-slate-100 min-h-[calc(100svh-72px)] flex items-center justify-center flex-col font-nunito">
      <div className="lg:mx-auto flex-grow w-full mt-6">
        <div className="bg-white w-full lg:w-2/5 lg:mx-auto h-fit my-auto py-8 px-10 rounded-lg">
          <h1 className="pb-2 mb-5 border-b-4 border-[#5897de] lg:text-3xl text-2xl font-semibold text-center text-gray-700 font-playfair">
            Login your account
          </h1>
          <form onSubmit={handleLogin}>
            <div className="flex flex-col w-full gap-1 mb-4">
              <label className="text-lg font-semibold">Email address</label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="p-3 px-4 bg-gray-500/10 rounded-md outline-none"
                ref={emailRef}
              />
            </div>
            <div className="flex flex-col w-full mb-2 relative">
              <label className="text-lg font-semibold">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="p-3 px-4 bg-gray-500/10 rounded-md outline-none"
                ref={passwordRef}
              />
              {showPassword ? (
                <FaEye
                  className="absolute right-4 top-[2.8rem] cursor-pointer text-lg"
                  onClick={() => setShowPassword(!showPassword)}
                />
              ) : (
                <FaEyeSlash
                  className="absolute right-4 top-[2.8rem] cursor-pointer text-xl"
                  onClick={() => setShowPassword(!showPassword)}
                />
              )}
            </div>

            <div className="text-blue-800 w-fit cursor-pointer font-bold border-b-2 border-transparent hover:border-blue-800 duration-100">
              Forgot Password?
            </div>
            {response && (
              <p
                className={`${
                  response.status === "success"
                    ? "text-green-700 bg-green-500/30"
                    : "text-red-500 bg-red-500/10"
                } font-semibold text-lg w-full  text-center py-3 mb-4`}
              >
                {response.message}
              </p>
            )}
            <button className="w-full text-lg mt-4 p-4 py-3 bg-detail-btn hover:bg-detail-btn-hover duration-100 rounded-md text-white text-center font-semibold">
              Login
            </button>
          </form>

          <h1 className="text-gray-700 font-semibold text-center mt-4 mb-2">
            Don&apos;t have an account?{" "}
            <Link
              className="text-orange-700 font-bold hover:border-b-2 hover:border-orange-800 duration-100"
              to="/register"
            >
              Register
            </Link>
          </h1>

          <div className="flex items-center justify-center mb-4">
            <div className="flex-1 border-t border-gray-400" />
            <span className="px-4 text-gray-500 font-bold text-lg">OR</span>
            <div className="flex-1 border-t border-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
