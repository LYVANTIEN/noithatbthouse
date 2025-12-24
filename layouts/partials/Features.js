"use client";

import { markdownify } from "@lib/utils/textConverter";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import { useRef } from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ImageFallback from "@components/ImageFallback"; // nếu dùng ImageFallback

const Features = ({ features }) => {
  const paginationRef = useRef(null);
  return (
    <section className="section">
      <div className="container text-center">
        <div className="animate">
          <p className="uppercase">{features.sub_title}</p>
          {markdownify(features.title, "h2", "mt-4 section-title font-extrabold text-[32px] sm:text-[36px] lg:text-[42px] [text-shadow:0_12px_8px_rgba(184,142,90,0.45)]")}
          {markdownify(features.description, "p", "mt-10")}
        </div>
        <div className="animate from-right relative mt-10">
          <Swiper
            slidesPerView={1}
            pagination={{
              type: "bullets",
              el: paginationRef.current,
              clickable: true,
              dynamicBullets: true,
            }}
            // autoplay={{ delay: 3000 }}
            onBeforeInit={(swiper) => {
              swiper.params.pagination.el = paginationRef.current;
            }}
            modules={[Pagination]}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
          >
            {features.list.map((item, index) => (
              <SwiperSlide key={"feature-" + index}>
                <div className="feature-card m-4 rounded-md border border-transparent px-7 py-16 shadow-[0px_4px_25px_rgba(0,0,0,.05)] transition-all duration-300  hover:border-[#ffece4] hover:shadow-none">
                  <div className="feature-card-icon inline-flex items-center justify-center w-full max-w-[300px] mx-auto aspect-[4/5]">
                    {item.image ? (
                      <ImageFallback
                        src={item.image}
                        alt={item.title}
                        width={300}
                        height={360}
                        className="object-contain w-full h-full"
                      />
                    ) : (
                      <FeatherIcon icon={item.icon} size={32} />
                    )}
                  </div>


                  <h3 className="h4 mb-5 mt-6">{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="relative mt-9 flex justify-center">
            <div className="pagination " ref={paginationRef}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
