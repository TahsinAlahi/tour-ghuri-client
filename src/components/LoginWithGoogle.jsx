import { useState } from "react";
import { FaGoogle } from "react-icons/fa";

function LoginWithGoogle() {
  const [response, setResponse] = useState(null);

  async function handleGoogleLogin(e) {
    e.preventDefault();
  }

  return (
    <>
      <div
        className="w-full flex items-center justify-center py-3 rounded-lg bg-orange-600 cursor-pointer font-semibold text-white hover:bg-orange-700 duration-100 transition text-lg"
        onClick={handleGoogleLogin}
      >
        <FaGoogle className="w-8 aspect-square mr-2" />
        Login With Google
      </div>
      {response && (
        <p
          className={`${
            response.status === "success"
              ? "text-green-700 bg-green-500/30"
              : "text-red-500 bg-red-500/10"
          } font-semibold text-lg w-full  text-center py-3 mt-4`}
        >
          {response.message}
        </p>
      )}
    </>
  );
}

export default LoginWithGoogle;
