import React from 'react'
import genresTapBarStyle from '@/styles/genresTapBar.module.scss'

// [↓] swiper
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// import './styles.css';
// import required modules
import { FreeMode, Pagination } from 'swiper/modules';


const GenresTapBar = () => {
  return (
    <div className={genresTapBarStyle.genresTapBarWrap}>
      <Swiper
        slidesPerView={4}
        spaceBetween={0}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><button className={`${genresTapBarStyle.genresBtn} ${genresTapBarStyle.active}`} type='button'>뮤지컬</button></SwiperSlide>
        <SwiperSlide><button className={genresTapBarStyle.genresBtn} type='button'>연극</button></SwiperSlide>
        <SwiperSlide><button className={genresTapBarStyle.genresBtn} type='button'>대중음악</button></SwiperSlide>
        <SwiperSlide><button className={genresTapBarStyle.genresBtn} type='button'>무용</button></SwiperSlide>
        <SwiperSlide><button className={genresTapBarStyle.genresBtn} type='button'>클래식</button></SwiperSlide>
        <SwiperSlide><button className={genresTapBarStyle.genresBtn} type='button'>국악</button></SwiperSlide>
        <SwiperSlide><button className={genresTapBarStyle.genresBtn} type='button'>서커스/마술</button></SwiperSlide>
        <SwiperSlide><button className={genresTapBarStyle.genresBtn} type='button'>기타</button></SwiperSlide>
      </Swiper>

        {/* <ul className={genresTapBarStyle.genresBtnsUl}>
            <li className={genresTapBarStyle.genresBtnsLi}><button className={`${genresTapBarStyle.genresBtn} ${genresTapBarStyle.active}`} type='button'>뮤지컬</button></li>
            <li className={genresTapBarStyle.genresBtnsLi}><button className={genresTapBarStyle.genresBtn} type='button'>연극</button></li>
            <li className={genresTapBarStyle.genresBtnsLi}><button className={genresTapBarStyle.genresBtn} type='button'>대중음악</button></li>
            <li className={genresTapBarStyle.genresBtnsLi}><button className={genresTapBarStyle.genresBtn} type='button'>무용</button></li>
            <li className={genresTapBarStyle.genresBtnsLi}><button className={genresTapBarStyle.genresBtn} type='button'>클래식</button></li>
            <li className={genresTapBarStyle.genresBtnsLi}><button className={genresTapBarStyle.genresBtn} type='button'>국악</button></li>
            <li className={genresTapBarStyle.genresBtnsLi}><button className={genresTapBarStyle.genresBtn} type='button'>서커스/마술</button></li>
            <li className={genresTapBarStyle.genresBtnsLi}><button className={genresTapBarStyle.genresBtn} type='button'>기타</button></li>
        </ul> */}
    </div>
  )
}

export default GenresTapBar