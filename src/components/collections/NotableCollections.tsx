import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
import notableCollection from '@/data/notableCollections.json';
import NotableCard from '../cards/NotableCard';

const NotableCollections = () => {
  return (
    <div className="container">
      <h2 className="font-display text-brand-700 mb-8 border-b border-brand-500 text-3xl dark:text-white my-10 py-5 ">
        Notable Collections
      </h2>
      <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
        <img src="/images/gradient_light.jpg" alt="gradient" className="h-full w-full" />
      </picture>

      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar]}
          spaceBetween={30}
          slidesPerView="auto"
          loop={true}
          breakpoints={{
            240: {
              slidesPerView: 1,
            },
            565: {
              slidesPerView: 2,
            },
            1000: {
              slidesPerView: 3,
            },
            1100: {
              slidesPerView: 4,
            },
          }}
          navigation={{
            nextEl: '.bids-swiper-button-next',
            prevEl: '.bids-swiper-button-prev',
          }}
          className="card-slider-4-columns !py-5"
        >
          {notableCollection.map((item) => {
            return (
              <SwiperSlide className="text-white" key={item.id}>
                <NotableCard {...item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="group bids-swiper-button-prev swiper-button-prev shadow-white-volume absolute !top-1/2 !-left-4 z-10 -mt-6 flex !h-12 !w-12 cursor-pointer items-center justify-center rounded-full bg-white p-3 text-brand-700 text-xl sm:!-left-6 after:hidden">
          <MdKeyboardArrowLeft />
        </div>
        <div className="group bids-swiper-button-next swiper-button-next shadow-white-volume absolute !top-1/2 !-right-4 z-10 -mt-6 flex !h-12 !w-12 cursor-pointer items-center justify-center rounded-full bg-white p-3 text-brand-700 text-xl sm:!-right-6 after:hidden">
          <MdKeyboardArrowRight />
        </div>
      </div>
    </div>
  );
};

export default NotableCollections;
