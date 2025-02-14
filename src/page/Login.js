import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../redux/authSlice";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error , user} = useSelector((state) => state.auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const result = await dispatch(login({ email, password }));
  
      if (login.fulfilled.match(result)) {
        //navigate(result.payload.user.role === "admin" ? "/admin" : "/");
        navigate("/admin");
      }
    } catch (error) {
      console.error("Đăng nhập thất bại", error);
    }
  };
  

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-rose-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h2 className="text-2xl font-bold text-center mb-6 text-rose-500">
            Đăng nhập
          </h2>
            <div className="mb-4">
              <label
                className="block text-sm font-medium text-rose-500"
                htmlFor="email"
              >
                Email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                required
                type="email" placeholder="nhh@gmail.com"
                name="email"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-rose-500"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-sm font-medium text-rose-500"
                htmlFor="password"
              >
                Mật khẩu
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password" placeholder="********"
                name="password"
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-rose-500"
              />
            </div>
            <button
              // type="button"
              onClick={() => handleLogin()}
              className="w-full bg-rose-500 text-white font-semibold py-2 rounded-md hover:bg-rose-600 transition duration-200"
            >
              Đăng nhập
            </button>
          <p className="mt-4 text-center text-sm text-gray-600">
            Bạn chưa có tài khoản?
            <Link to="/register" className="text-rose-500 hover:underline">
              {" "}
              Đăng ký
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
