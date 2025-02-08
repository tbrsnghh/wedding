import React from "react";

const foodList = [
  {
    id: 1,
    name: "Vịt Nướng",
    price: "119K/1 Phần",
    image: "/images/vit-nuong.png",
  },
  {
    id: 2,
    name: "Trứng Omelet",
    price: "69K/1 Phần",
    image: "/images/trung-omelet.png",
  },
  {
    id: 3,
    name: "Hải Sản Nướng Đá",
    price: "169K/1 Phần",
    image: "/images/hai-san-nuong-da.png",
  },
  {
    id: 4,
    name: "Khoai Sọ An Nam",
    price: "79K/1 Phần",
    image: "/images/khoai-so-an-nam.png",
  },
];

const Menu = () => {
  return (
    <div className="flex grid grid-cols-2 md:grid-cols-4 gap-6 p-4">
      {foodList.map((food) => (
        <div key={food.id} className="text-center bg-white p-4 rounded-xl shadow-md">
          <img
            src={food.image}
            alt={food.name}
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <h3 className="text-lg font-semibold">{food.name}</h3>
          <p className="text-green-600 font-bold">{food.price}</p>
          <button className="mt-3 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
            🛒 Đặt Món
          </button>
        </div>
      ))}
    </div>
  );
};

export default Menu;
