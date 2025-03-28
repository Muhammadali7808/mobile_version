import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import img1 from "../../src/assets/icon/ca_1.png";
import img2 from "../../src/assets/icon/ca_2.png";
import img3 from "../../src/assets/icon/ca_3.png";
import img4 from "../../src/assets/icon/ca_4.png";
import img5 from "../../src/assets/icon/ca_5.png";
import img6 from "../../src/assets/icon/ca_6.png";
import img7 from "../../src/assets/icon/ca_7.png";
import img9 from "../../src/assets/icon/ca_9.png";
import "../index.css";

function Slider() {
  const slides = [
    {
      title: "Сервис",
      description: "Гарантия, возврат, обмен и ремонт",
      image: img1,
      bgColor: "bg-blue-50",
    },
    {
      title: "Акции",
      description: "Скидки, рассрочка",
      image: img2,
      bgColor: "bg-green-50",
    },
    {
      title: "Сборка ПК",
      description: "Без проблем с совместимостью",
      image: img3,
      bgColor: "bg-gray-50",
    },
    {
      title: "Подарочные карты",
      description: "Порадуйте близких",
      image: img4,
      bgColor: "bg-purple-50",
    },
    {
      title: "Рейтинг ПК",
      description: "Составленный пользователями",
      image: img5,
      bgColor: "bg-blue-50",
    },
    {
      title: "Оплата и услуги",
      description: "Цифровые платежи",
      image: img6,
      bgColor: "bg-orange-50",
    },
    {
      title: "Еще услуги",
      description: "Дополнительные удобства",
      image: img7,
      bgColor: "bg-yellow-50",
    },
    {
      title: "Бытовая техника",
      description: "Холодильники, микроволновки и другое",
      image: img9,
      bgColor: "bg-red-50",
    },
  ];

  return (
    <div className="bg-white flex justify-center">
      <div className="container w-full max-w-[1270px] px-4 py-9">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={10}
          slidesPerView={2} // Default for mobile
          navigation
          autoplay={{ delay: 2000 }}
          className="mySwiper h-[220px]"
          breakpoints={{
            320: { slidesPerView: 2 }, // Mobil (2 ta slayd yonma-yon)
            480: { slidesPerView: 3 }, // Kichik planshet (3 ta)
            640: { slidesPerView: 4 }, // Katta planshet (4 ta)
            768: { slidesPerView: 5 }, // O‘rta ekran (5 ta)
            1024: { slidesPerView: 6 }, // Desktop (6 ta)
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className={`${slide.bgColor} w-full max-w-[150px] h-[180px] rounded-xl p-4 shadow-sm cursor-pointer transition-transform hover:scale-105 flex flex-col justify-between items-center md:max-w-[180px] md:h-[200px] lg:max-w-[183px] lg:h-[206px]`}
              >
                <div className="text-center">
                  <h3 className="text-sm font-bold text-gray-800 md:text-base lg:text-sm">
                    {slide.title}
                  </h3>
                  <p className="text-xs text-gray-600 md:text-sm lg:text-xs">{slide.description}</p>
                </div>
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-[60px] h-[60px] object-contain md:w-[70px] md:h-[70px] lg:w-[70px] lg:h-[70px]"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Slider;
