import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editMe, getMe } from "../../redux/authSlice";

export default function CustomerInfo() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    username: user?.username || "",
    birth: user?.birth || "",
    gender: user?.gender || "",
    phone: user?.phone || "",
    address: user?.address || "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSaveClick = () => {
    dispatch(editMe(formData));
    setIsEditing(false);
  };

  return (
    <><h2 className="text-lg font-semibold text-gray-700 mb-3">Thông Tin Khách Hàng</h2>
      {/* Hiển thị thông tin khách hàng */}
      <div className="max-w-md bg-white shadow-md rounded-lg p-4">
        {user && (
          <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-sm text-gray-700">
            <div>
              <p>
                <strong>Họ và tên:</strong> {user.username || "N/A"}
              </p>
              <p>
                <strong>Ngày sinh:</strong> {user.birth || "N/A"}
              </p>
              <p>
                <strong>Giới tính:</strong> {user.gender || "N/A"}
              </p>
            </div>
            <div>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>SĐT:</strong> {user.phone || "N/A"}
              </p>
              <p>
                <strong>Địa chỉ:</strong> {user.address || "N/A"}
              </p>
            </div>
            <div className="col-span-2 flex justify-end">
              <button
                onClick={() => setIsEditing(true)}
                className="mt-2 text-sm text-rose-500 hover:text-rose-700"
              >
                Chỉnh sửa
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Modal chỉnh sửa thông tin */}
      {isEditing && (
        <div className="fixed inset-0 backdrop-blur-sm bg-white bg-opacity-30 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">
              Chỉnh sửa thông tin
            </h2>

            <div className="space-y-3">
              <div>
                <label className="text-sm text-gray-600">Họ và tên</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500 text-sm"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">Ngày sinh</label>
                <input
                  type="date"
                  name="birth"
                  value={formData.birth}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500 text-sm"
                />
              </div>

              {/* Giới tính dùng radio button */}
              <div>
                <label className="text-sm text-gray-600">Giới tính</label>
                <div className="flex space-x-4 mt-1">
                  {[
                    { label: "Nam", value: "male" },
                    { label: "Nữ", value: "female" },
                    { label: "Khác", value: "other" },
                  ].map((option) => (
                    <label
                      key={option.value}
                      className="flex items-center space-x-1"
                    >
                      <input
                        type="radio"
                        name="gender"
                        value={option.value} // Giá trị API cần gửi lên
                        checked={formData.gender == option.value} // So sánh đúng với API trả về
                        onChange={handleChange}
                        className="form-radio text-rose-500"
                      />
                      <span className="text-gray-700 text-sm">
                        {option.label}
                      </span>{" "}
                      {/* Hiển thị tiếng Việt */}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm text-gray-600">SĐT</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500 text-sm"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">Địa chỉ</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500 text-sm"
                />
              </div>
            </div>

            {/* Button hành động */}
            <div className="flex justify-end space-x-2 mt-4">
              <button
                onClick={() => setIsEditing(false)}
                className="text-sm text-gray-600 hover:text-gray-800"
              >
                Hủy
              </button>
              <button
                onClick={handleSaveClick}
                className="text-sm text-rose-500 hover:text-rose-700"
              >
                Lưu
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
