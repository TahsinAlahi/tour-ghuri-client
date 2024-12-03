import { useState } from "react";
import { useRef } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router";
import LoginWithGoogle from "../components/LoginWithGoogle";

function RegisterPage() {
  const formRef = useRef(null);
  const termRef = useRef(null);
  const [response, setResponse] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="bg-slate-100 min-h-[calc(100svh-72px)] flex items-center justify-center flex-col font-nunito">
      <div className="lg:mx-auto flex-grow w-full my-10">
        <div className="bg-white w-full lg:w-2/5 lg:mx-auto h-fit my-auto p-10 rounded-lg">
          <h1 className="pb-2 mb-5 border-b-4 border-[#5897de] lg:text-3xl text-2xl font-semibold text-center text-gray-700 font-playfair">
            Register your account
          </h1>
          <form onSubmit={handleSubmit} ref={formRef}>
            <div className="flex flex-col w-full gap-1 mb-4">
              <label className="text-lg font-semibold">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="p-3 px-4 bg-gray-500/10 rounded-md outline-none"
                name="username"
              />
            </div>
            <div className="flex flex-col w-full gap-1 mb-4">
              <label className="text-lg font-semibold">Photo URL</label>
              <input
                type="url"
                placeholder="Enter your photo URL"
                className="p-3 px-4 bg-gray-500/10 rounded-md outline-none"
                name="imageUrl"
              />
            </div>
            <div className="flex flex-col w-full gap-1 mb-4">
              <label className="text-lg font-semibold">Email</label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="p-3 px-4 bg-gray-500/10 rounded-md outline-none"
                name="email"
              />
            </div>
            <div className="flex flex-col w-full gap-1 mb-4 relative">
              <label className="text-lg font-semibold">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="p-3 px-4 bg-gray-500/10 rounded-md outline-none"
                name="password"
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
            {response && (
              <p
                className={`${
                  response.status === "success"
                    ? "text-green-700 bg-green-500/30"
                    : "text-red-500 bg-red-500/10"
                } font-semibold text-lg w-full text-center py-3 mb-4`}
              >
                {response.message}
              </p>
            )}
            <div className="flex flex-row items-center w-full gap-2 mb-4">
              <input
                type="checkbox"
                className="w-4 h-4 bg-gray-500/10 rounded-md outline-none"
                ref={termRef}
              />
              <label className="text-lg font-medium">
                Accept <span className="font-semibold">Terms & Conditions</span>
              </label>
            </div>
            <button className="w-full text-lg p-4 py-3 bg-detail-btn hover:bg-detail-btn-hover duration-100 rounded-md text-white text-center font-semibold">
              Register
            </button>
          </form>
          <h1 className="text-gray-700 font-semibold text-center mt-4 mb-2">
            Already have an account?{" "}
            <Link
              className="text-orange-700 font-bold hover:border-b-2 hover:border-orange-800 duration-100"
              to="/login"
            >
              Login
            </Link>
          </h1>
          <div className="flex items-center justify-center mb-4">
            <div className="flex-1 border-t border-gray-400" />
            <span className="px-4 text-gray-500 font-bold text-lg">OR</span>
            <div className="flex-1 border-t border-gray-400" />
          </div>
          <LoginWithGoogle />
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
