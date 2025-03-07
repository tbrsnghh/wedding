import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHalls } from "../../redux/hallSlice";

export default function Step2SelectHall({ onNext, onBack }) {
  const dispatch = useDispatch();
  const halls = useSelector((state) => state.hall.halls);
  const [selectedHall, setSelectedHall] = useState(0);
  console.log('Halls: ', halls);
  
  useEffect(() => {
    dispatch(fetchHalls());
  }, [dispatch]);
  return (
    <div className="text-left p-8">
      <h2 className="text-lg font-semibold text-gray-700 my-3">
        Chọn hội trường
      </h2>
      <div className="grid grid-cols-3 gap-4 p-4">
        <select
          className="bg-gray-100 p-2 rounded cursor-pointer hover:bg-gray-200 transition h-10 hover:shadow-md"
          onChange={(e) => setSelectedHall(e.target.value)}
        >
          <option value="0">{halls && halls[0].name}</option>
          {halls && halls.map((hall, index) => (
            <option key={index} value={index}>
              {hall.name} - Sức chứa: {hall.capacity} người
            </option>
          ))}
        </select>
        <div className="bg-gray-100 col-span-2 p-4 rounded">
          {selectedHall !== "" && (
            <div>
              <p className="text-lg font-semibold mb-2">
                {halls[selectedHall].name}
              </p>
              <p className="text-sm text-gray-500">Sức chứa: {halls[selectedHall].capacity} người</p>
          <p className="text-sm text-gray-500">Giá: {halls[selectedHall].price} đ</p>
            </div>
          )}
          
          <img  className="w-150"
                src="https://vietnamarch.com.vn/wp-content/uploads/2022/11/loi-di-len-san-khau-hoi-truong-to-chuc-tiec-cuoi.jpg"></img>
          
        </div>
      </div>
      <div className="space-x-4">
        <button
          onClick={onBack}
          className="bg-white text-black px-4 py-2 rounded mt-4"
        >
          Bước trước
        </button>
        <button
          onClick={onNext}
          className="bg-rose-500 text-white px-4 py-2 rounded mt-4"
        >
          Tiếp
        </button>
      </div>
    </div>
  );
}
