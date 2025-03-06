import React, { useState } from "react";

export default function NewBooking({ setCustomer }) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    address: "",
    birthdate: "",
    gender: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCustomer(formData);
    alert("Đăng ký thành công!");
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-[#FCE8E0]">
      <h2 className="text-4xl font-bold text-[#5A4D4D] mb-6 font-[Dancing Script]">
        Đăng ký
      </h2>
      <form
        className="bg-white p-8 rounded-lg shadow-lg w-96 border-2 border-[#F7CAC9] flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        {[
          { label: "Tên đăng nhập", name: "username", type: "text" },
          { label: "Email", name: "email", type: "email" },
          { label: "Địa chỉ", name: "address", type: "text" },
          { label: "Ngày sinh", name: "birthdate", type: "date" },
          { label: "Số điện thoại", name: "phone", type: "tel" },
          { label: "Mật khẩu", name: "password", type: "password" },
        ].map((field) => (
          <div key={field.name} className="flex flex-col">
            <label className="text-[#5A4D4D] font-semibold mb-1">{field.label}</label>
            <input
              type={field.type}
              name={field.name}
              className="w-full p-3 border rounded-lg bg-[#FFF5F8] border-[#E7A9A1] text-[#5A4D4D] focus:outline-none focus:ring-2 focus:ring-[#C7738F] transition"
              value={formData[field.name]}
              onChange={handleChange}
              required
            />
          </div>
        ))}

        <div className="flex flex-col">
          <label className="text-[#5A4D4D] font-semibold mb-1">Giới tính</label>
          <select
            name="gender"
            className="w-full p-3 border rounded-lg bg-[#FFF5F8] border-[#E7A9A1] text-[#5A4D4D] focus:outline-none focus:ring-2 focus:ring-[#C7738F] transition"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Chọn giới tính</option>
            <option value="male">Nam</option>
            <option value="female">Nữ</option>
            <option value="other">Khác</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-[#A0D8EF] text-[#5A4D4D] p-3 rounded-lg font-semibold shadow-md hover:bg-[#88C1E0] transition"
        >
          Đăng ký
        </button>
      </form>
    </div>
  );
}
