import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import hero1 from "../assets/hero-1.png";
import hero2 from "../assets/hero-2.png";
import hero3 from "../assets/hero-3.png";

function Header() {
  const sliderClass = "h-full w-full object-cover object-center";
  return (
    <header className="w-full h-[calc(100svh-72px)]">
      <Swiper
        slidesPerView={1}
        loop={true}
        modules={[Autoplay, EffectFade]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        fadeEffect={{ crossFade: true }}
        speed={500}
        effect="fade"
        className="w-full h-full"
      >
        <SwiperSlide>
          <img src={hero1} alt="Slider" className={sliderClass} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hero2} alt="Slider" className={sliderClass} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hero3} alt="Slider" className={sliderClass} />
        </SwiperSlide>
      </Swiper>
    </header>
  );
}

export default Header;
