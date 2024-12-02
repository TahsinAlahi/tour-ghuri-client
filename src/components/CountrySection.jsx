import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const countries = [
  { name: "Afghanistan", flag: "🇦🇫" },
  { name: "Armenia", flag: "🇦🇲" },
  { name: "Azerbaijan", flag: "🇦🇿" },
  { name: "Bahrain", flag: "🇧🇭" },
  { name: "Bangladesh", flag: "🇧🇩" },
  { name: "Bhutan", flag: "🇧🇹" },
  { name: "Brunei", flag: "🇧🇳" },
  { name: "Cambodia", flag: "🇰🇭" },
  { name: "China", flag: "🇨🇳" },
  { name: "India", flag: "🇮🇳" },
  { name: "Indonesia", flag: "🇮🇩" },
  { name: "Iran", flag: "🇮🇷" },
  { name: "Iraq", flag: "🇮🇶" },
  { name: "Palestine", flag: "🇵🇸" },
  { name: "Japan", flag: "🇯🇵" },
  { name: "Jordan", flag: "🇯🇴" },
  { name: "Kazakhstan", flag: "🇰🇿" },
  { name: "Kuwait", flag: "🇰🇼" },
  { name: "Kyrgyzstan", flag: "🇰🇬" },
  { name: "Laos", flag: "🇱🇦" },
  { name: "Lebanon", flag: "🇱🇧" },
  { name: "Malaysia", flag: "🇲🇾" },
  { name: "Maldives", flag: "🇲🇻" },
  { name: "Mongolia", flag: "🇲🇳" },
  { name: "Myanmar (Burma)", flag: "🇲🇲" },
  { name: "Nepal", flag: "🇳🇵" },
  { name: "North Korea", flag: "🇰🇵" },
  { name: "Oman", flag: "🇴🇲" },
  { name: "Pakistan", flag: "🇵🇰" },
  { name: "Philippines", flag: "🇵🇭" },
  { name: "Qatar", flag: "🇶🇦" },
  { name: "Saudi Arabia", flag: "🇸🇦" },
  { name: "Singapore", flag: "🇸🇬" },
  { name: "South Korea", flag: "🇰🇷" },
  { name: "Sri Lanka", flag: "🇱🇰" },
  { name: "Syria", flag: "🇸🇾" },
  { name: "Tajikistan", flag: "🇹🇯" },
  { name: "Thailand", flag: "🇹🇭" },
  { name: "Timor-Leste", flag: "🇹🇱" },
  { name: "Turkmenistan", flag: "🇹🇲" },
  { name: "Uzbekistan", flag: "🇺🇿" },
  { name: "Vietnam", flag: "🇻🇳" },
  { name: "Yemen", flag: "🇾🇪" },
];

function CountrySection() {
  return (
    <section className="max-w-4xl mx-auto mt-14 font-nunito">
      <h2 className="text-5xl font-bold text-center mb-10 border-b-4 border-title-underline w-fit mx-auto font-playfair">
        Countries of Asia
      </h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 100 }}
        speed={3000}
        loop
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {countries.map((country, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white p-2 shadow-md rounded-md text-center cursor-move">
              <div className="text-6xl mb-4 select-none">{country.flag}</div>
              <h3 className="text-xl font-semibold">{country.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default CountrySection;
