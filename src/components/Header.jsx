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
    <header className="w-full h-[calc(100svh-72px)] relative">
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
      <div className="absolute top-0 bottom-0 left-0 right-0 text-center bg-white/10 z-10 bg-blend-darken flex items-center justify-center">
        <div className="w-full px-4 py-9 md:w-1/2 space-y-6 font-nunito text-black bg-white/30 backdrop-filter backdrop-blur-sm">
          <h1 className="font-bold text-5xl md:text-6xl font-cinzel">
            Tour Ghuri
          </h1>
          <p className="font-semibold text-3xl font-roboto md:text-2xl font-playfair">
            Where Every Journey <br className="block lg:hidden" />
            Becomes a Story.
          </p>
          <button className="growing-border inline-block text-xl font-semibold">
            Your Adventure, Your Story
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
