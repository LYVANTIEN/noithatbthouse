"use client";

import Image from "next/image";

const FloatingContact = () => {
  return (
    <>
      {/* Inline global CSS */}
      <style>{`
        @keyframes softPulse {
          0% { box-shadow: 0 0 0 0 rgba(200,161,101,.6); }
          70% { box-shadow: 0 0 0 14px rgba(200,161,101,0); }
          100% { box-shadow: 0 0 0 0 rgba(200,161,101,0); }
        }

        @keyframes softPulseBlue {
          0% { box-shadow: 0 0 0 0 rgba(0,132,255,.6); }
          70% { box-shadow: 0 0 0 14px rgba(0,132,255,0); }
          100% { box-shadow: 0 0 0 0 rgba(0,132,255,0); }
        }

        .pulse-gold {
          animation: softPulse 1.2s infinite;
        }

        .pulse-blue {
          animation: softPulseBlue 1.2s infinite;
        }
      `}</style>

      {/* Messenger – Bottom Left */}
      <a
        href="https://m.me/noithat.bthouse.vn"
        target="_blank"
        rel="noopener noreferrer"
        className="
          fixed bottom-6 left-4 z-50
          flex items-center gap-3
          rounded-full bg-[#C8A165] text-white
          p-4 sm:px-5 sm:py-3
          shadow-lg
          pulse-blue
          hover:scale-105 transition
        "
      >
        <Image
          src="/images/messenger.png"
          alt="Messenger"
          width={26}
          height={26}
        />
        <span className="hidden sm:block font-medium">
          Messenger
        </span>
      </a>

      {/* Call – Bottom Right */}
      <a
        href="tel:0913477124"
        className="
          fixed bottom-6 right-4 z-50
          flex items-center gap-3
          rounded-full bg-[#C8A165] text-white
          p-4 sm:px-5 sm:py-3
          shadow-lg
          pulse-gold
          hover:scale-105 transition
        "
      >
        <Image
          src="/images/viber.png"
          alt="Gọi điện"
          width={26}
          height={26}
        />
        <span className="hidden sm:block font-medium">
          Liên hệ
        </span>
      </a>
    </>
  );
};

export default FloatingContact;
