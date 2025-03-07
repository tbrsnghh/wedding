import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import Step1GeneralInfo from "../components/booking/Step1GeneralInfo";
import Step2SelectHall from "../components/booking/Step2SelectHall";
import Step3SelectMenu from "../components/booking/Step3SelectMenu";
import Step4Expense from "../components/booking/Step4Expense";
import Step5Confirmation from "../components/booking/Step5Confirmation";

const Booking = () => {
  const { user, token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const location = useLocation();
  const [step, setStep] = useState(1); // 🌟 Lưu bước hiện tại

  // Nếu chưa đăng nhập, chuyển hướng về login
  useEffect(() => {
    if (!token) {
      setTimeout(() => {
        navigate("/login", { state: { from: location.pathname } });
      }, 3000);
    }
  }, [token, navigate, location]);

  if (!token) {
    return (
      <div className="bg-pastel-pink-light h-screen p-4 text-center flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Bạn chưa đăng nhập</h1>
        <p>Cần đăng nhập để đặt tiệc</p>
        <p>Đang chuyển hướng đến đăng nhập... 🤗</p>
      </div>
    );
  }

  // 🌟 Chọn component hiển thị dựa trên bước hiện tại
  const renderStep = () => {
    switch (step) {
      case 1:
        return <Step1GeneralInfo onNext={() => setStep(2)} />;
      case 2:
        return <Step2SelectHall onNext={() => setStep(3)} onBack={() => setStep(1)} />;
      case 3:
        return <Step3SelectMenu onNext={() => setStep(4)} onBack={() => setStep(2)} />;
      case 4:
        return <Step4Expense onNext={() => setStep(5)} onBack={() => setStep(3)} />;
      case 5:
        return <Step5Confirmation onBack={() => setStep(4)} />;
      default:
        return <Step1GeneralInfo onNext={() => setStep(2)} />;
    }
  };

  return (
    <div className="w-full bg-pastel-pink-light h-screen p-4 text-center flex flex-col">
      <h1 className="text-3xl font-bold font-dancing-script text-center mb-6">Đặt Tiệc</h1>

      {/* 🌟 Hiển thị bước hiện tại */}
      {renderStep()}

      {/* 🌟 Hiển thị tiến trình */}
      <div className="bottom-5 left-170 absolute">
        <p>Bước {step} / 5</p>
      </div>
    </div>
  );
};

export default Booking;
