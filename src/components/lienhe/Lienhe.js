import React from 'react';


const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Liên Hệ</h2>
      <form>
        <input type="text" placeholder="Tên của bạn" required />
        <input type="email" placeholder="Email của bạn" required />
        <textarea placeholder="Lời nhắn của bạn" required></textarea>
        <button type="submit">Gửi Lời Nhắn</button>
      </form>
    </section>
  );
};

export default Contact;