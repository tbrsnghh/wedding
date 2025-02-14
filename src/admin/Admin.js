import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";

const Admin= () => {
  const dispatch = useDispatch();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Dashboard Admin</h1>
      
    </div>
  );
};

export default Admin;
