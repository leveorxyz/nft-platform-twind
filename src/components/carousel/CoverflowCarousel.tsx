import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper';
import coverflow_data from '@/data/coverflow_data.json';
import CoverflowCard from '../cards/CoverflowCard';
import Dropdown from '../common/Dropdown';

const CoverflowCarousel = () => {
  return (
    <div className="container py-20">
      <div className="flex justify-center items-center gap-2">
        <h5 className="font-display text-center text-brand-700  text-3xl dark:text-white">
          Hot Collections in
        </h5>
        <Dropdown
          title="All Categories"
          options={['Sports', 'Music', 'Art', 'Collectibles', 'Trading Cards', 'Photography']}
        />
      </div>
      <div className="relative px-6 pb-16 sm:px-0">
        <Swiper
          breakpoints={{
            100: {
              slidesPerView: 1,
            },
            575: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 4,
            },
          }}
          effect="coverflow"
          slidesPerView={4}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          navigation={{
            nextEl: '.swiper-button-next-4',
            prevEl: '.swiper-button-prev-4',
          }}
          className="!py-5"
          grabCursor
          centeredSlides
          pagination={true}
          loop
        >
          {coverflow_data.map((item) => (
            <SwiperSlide key={item.id}>
              <CoverflowCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="swiper-button-prev-4 group absolute top-1/2 -left-4 z-10 -mt-6 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white p-3 text-brand-700 text-xl shadow-white-volume select-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className="fill-brand-700 group-hover:fill-accent"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z" />
          </svg>
        </div>
        <div className="swiper-button-next-4 group absolute top-1/2 -right-4 z-10 -mt-6 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white p-3 text-brand-700 text-xl shadow-white-volume select-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className="fill-brand-700 group-hover:fill-accent"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CoverflowCarousel;
