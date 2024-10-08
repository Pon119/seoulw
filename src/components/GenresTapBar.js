import React from 'react'
import genresTapBarStyle from '@/styles/genresTapBar.module.scss'

// [↓] swiper
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/free-mode';
// import required modules
import { FreeMode } from 'swiper/modules';


const GenresTapBar = () => {

  return (
    <div className={genresTapBarStyle.genresTapBarWrap}>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={10}
        freeMode={true}
        modules={[FreeMode]}
        className="genresSwiper"
      >
        <SwiperSlide className={genresTapBarStyle.genresBtnsSlide}>
          <span className={`${genresTapBarStyle.genresBtn} ${genresTapBarStyle.active}`}>뮤지컬</span>
        </SwiperSlide>
        <SwiperSlide className={genresTapBarStyle.genresBtnsSlide}>
          <span className={genresTapBarStyle.genresBtn}>연극</span>
        </SwiperSlide>
        <SwiperSlide className={genresTapBarStyle.genresBtnsSlide}>
          <span className={genresTapBarStyle.genresBtn}>대중음악</span>
        </SwiperSlide>
        <SwiperSlide className={genresTapBarStyle.genresBtnsSlide}>
          <span className={genresTapBarStyle.genresBtn}>무용</span>
        </SwiperSlide>
        <SwiperSlide className={genresTapBarStyle.genresBtnsSlide}>
          <span className={genresTapBarStyle.genresBtn}>클래식</span>
        </SwiperSlide>
        <SwiperSlide className={genresTapBarStyle.genresBtnsSlide}>
          <span className={genresTapBarStyle.genresBtn}>국악</span>
        </SwiperSlide>
        <SwiperSlide className={genresTapBarStyle.genresBtnsSlide}>
          <span className={genresTapBarStyle.genresBtn}>서커스/마술</span>
        </SwiperSlide>
        <SwiperSlide className={genresTapBarStyle.genresBtnsSlide}>
          <span className={genresTapBarStyle.genresBtn}>기타</span>
        </SwiperSlide>
      </Swiper>

        {/* <ul className={genresTapBarStyle.genresBtnsUl}>
            <li className={genresTapBarStyle.genresBtnsLi}><span className={`${genresTapBarStyle.genresBtn} ${genresTapBarStyle.active}`} >뮤지컬</span></li>
            <li className={genresTapBarStyle.genresBtnsLi}><span className={genresTapBarStyle.genresBtn} >연극</span></li>
            <li className={genresTapBarStyle.genresBtnsLi}><span className={genresTapBarStyle.genresBtn} >대중음악</span></li>
            <li className={genresTapBarStyle.genresBtnsLi}><span className={genresTapBarStyle.genresBtn} >무용</span></li>
            <li className={genresTapBarStyle.genresBtnsLi}><span className={genresTapBarStyle.genresBtn} >클래식</span></li>
            <li className={genresTapBarStyle.genresBtnsLi}><span className={genresTapBarStyle.genresBtn} >국악</span></li>
            <li className={genresTapBarStyle.genresBtnsLi}><span className={genresTapBarStyle.genresBtn} >서커스/마술</span></li>
            <li className={genresTapBarStyle.genresBtnsLi}><span className={genresTapBarStyle.genresBtn} >기타</span></li>
        </ul> */}
    </div>
  )
}

export default GenresTapBar