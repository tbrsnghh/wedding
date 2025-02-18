import React from 'react';
import "./gioithieu.css"

const About = () => {
  return (
    <div className="container">
      <div className="button-group">
        <button className="btn btn-yellow">SẢNH TIỆC</button>
        <button className="btn btn-outline-yellow">THỰC ĐƠN</button>
        <button className="btn btn-outline-yellow">THƯ VIỆN ẢNH</button>
      </div>
      
      <div className="content">
        <h1 className="title">SẢNH TIỆC TẠI HOÀNG LONG</h1>
        <p className="description">
          Ngày cưới của bạn sẽ trở nên ý nghĩa và hoàn hảo hơn dưới sự biến tấu điệu nghệ của các chuyên gia tiệc cưới giàu kinh nghiệm tại Trung Tâm Hội Nghị – Tiệc Cưới Hoàng Long sẽ giúp bạn không phải “đau đầu” khi lên kế hoạch tổ chức buổi hôn lễ nữa, từ khâu chuẩn bị cho đến quá trình diễn ra lễ cưới, mọi thứ sẽ được đi theo một quy trình chuyên nghiệp và sáng tạo. Hoàng Long được đánh giá cao và là sự lựa chọn hàng đầu của các cặp đôi cho ngày cưới trọng đại của mình, với sự tận tâm và tinh tế từ những tiểu tiết nhỏ nhất bên cạnh không gian và cơ sở vật chất được đầu tư chỉnh chu.
        </p>
        <div className="sanh-group">
          <button className="btn btn-text-yellow">SẢNH BẠCH LONG</button>
          <button className="btn btn-text-gray">SẢNH KIM LONG</button>
          <button className="btn btn-text-gray">SẢNH HỒNG LONG</button>
          <button className="btn btn-text-gray">SẢNH KIM HỒNG LONG</button>
        </div>
      </div>

      <div className="image-section">
        <img
          alt="A beautifully decorated banquet hall with elegant lighting and table settings"
          className="banquet-image"
          src="https://storage.googleapis.com/a1aa/image/yyKPeBbsG7lGnDgcHgr04uHqEKUo4c-yazL1p5M3-78.jpg"
        />
        <h2 className="sanh-title">SẢNH KIM HỒNG LONG</h2>
        <ul className="features-list">
          <li>Sức chứa lên đến hơn 500 khách</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
