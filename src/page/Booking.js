import React, { useState } from 'react';
import OldBooking from '../components/booking/OldBooking';
import NewBooking from '../components/booking/NewBooking';

export default function Booking() {
  const [customer, setCustomer] = useState({ type: "" });
  const handleCustomerType = (type) => {
    setCustomer({ type });
  };

  return (
    <>
      {customer.type === "" ? (
        <div className="h-screen flex flex-col items-center justify-center bg-pastel-pink-light">
          <h1 className="text-4xl font-bold text-black mb-6 font-dancing-script">Đặt trước</h1>
          <div className="flex flex-col space-y-4">
            <button
              className="px-6 py-3 text-white bg-pastel-blue-light rounded-lg shadow-md hover:scale-105 transition"
              onClick={() => handleCustomerType("old")}
            >
              Khách hàng đã đăng ký
            </button>
            <button
              className="px-6 py-3 bg-pastel-yellow-light text-black rounded-lg shadow-md hover:scale-105 transition"
              onClick={() => handleCustomerType("new")}
            >
              Khách hàng mới
            </button>
          </div>
        </div>
      ) : customer.type === "old" ? (
        <OldBooking customer={customer} setCustomer={setCustomer}/>
      ) : (
        <NewBooking customer={customer} setCustomer={setCustomer}/>
      )}
    </>
  );
}

