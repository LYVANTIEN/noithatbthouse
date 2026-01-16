"use client";

import { useState } from "react";
import config from "@config/config.json";
import Banner from "./components/Banner";
import ImageFallback from "./components/ImageFallback";

const Contact = ({ data }) => {
  const { frontmatter } = data;
  const { title } = frontmatter;

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    try {
      const res = await fetch(config.params.contact_form_action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        alert("Gửi thất bại, vui lòng thử lại.");
      }
    } catch (err) {
      alert("Có lỗi xảy ra, vui lòng thử lại.");
    }

    setLoading(false);
  };

  return (
    <section className="section">
      <Banner title={title} />
      <div className="container">
        <div className="section row items-center justify-center">
          <div className="animate lg:col-5">
            <ImageFallback
              className="mx-auto lg:pr-10"
              src="/images/vanphongbt.png"
              width={497}
              height={397}
              alt=""
            />
          </div>

          <div className="animate lg:col-5">
            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                className="contact-form rounded-xl p-6 shadow-[0_4px_25px_rgba(0,0,0,0.05)]"
                style={{ animation: "fadeIn 0.4s ease forwards" }}
              >
                <h2 className="h4 mb-6">Để lại thông tin liên hệ</h2>

                <div className="mb-6">
                  <label className="mb-2 block font-medium text-dark">
                    Tên khách hàng
                  </label>
                  <input
                    className="form-input w-full"
                    name="name"
                    placeholder="Họ và tên"
                    type="text"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label className="mb-2 block font-medium text-dark">
                    Số điện thoại
                  </label>
                  <input
                    className="form-input w-full"
                    name="phone"
                    placeholder="Số điện thoại"
                    type="text"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label className="mb-2 block font-medium text-dark">
                    Địa chỉ
                  </label>
                  <input
                    className="form-input w-full"
                    name="address"
                    placeholder="Địa chỉ"
                    type="text"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label className="mb-2 block font-medium text-dark">
                    Thông tin cần tư vấn
                  </label>
                  <textarea
                    className="form-textarea w-full"
                    rows="6"
                    name="message"
                    placeholder="Nội dung cần tư vấn"
                    required
                  />
                </div>

                <button
                  className="btn btn-primary block w-full"
                  disabled={loading}
                >
                  {loading ? "Đang gửi..." : "Gửi ngay"}
                </button>
              </form>
            ) : (
              <div
                className="rounded-xl p-10 text-center shadow-[0_4px_25px_rgba(0,0,0,0.05)]"
                style={{
                  background: "#fff",
                  animation: "scaleIn 0.45s ease forwards",
                }}
              >
                <div
                  style={{
                    width: 72,
                    height: 72,
                    margin: "0 auto 20px",
                    borderRadius: "50%",
                    background: "rgba(184,142,90,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 32,
                    color: "#B88E5A",
                  }}
                >
                  ✓
                </div>

                <h2
                  style={{
                    fontSize: 26,
                    fontWeight: 700,
                    marginBottom: 12,
                    color: "#B88E5A",
                  }}
                >
                  Cảm ơn bạn đã liên hệ BT House
                </h2>

                <p style={{ fontSize: 16, opacity: 0.8 }}>
                  Bộ phận chăm sóc khách hàng sẽ liên hệ với bạn trong thời gian
                  sớm nhất.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* INLINE ANIMATION */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
