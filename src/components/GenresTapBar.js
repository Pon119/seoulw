import React, { useState } from 'react'
import genresTapBarStyle from '@/styles/genresTapBar.module.scss'

// [↓] swiper
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/free-mode';
// import required modules
import { FreeMode } from 'swiper/modules';


const GenresTapBar = () => {
  const genres = [
    '뮤지컬',
    '연극',
    '대중음악',
    '무용',
    '클래식',
    '국악',
    '서커스/마술',
    '기타',
  ];

  const [clickedGenre, setClickedGenre] = useState(0);
  const onActive = (idx) => {
    setClickedGenre(() => idx);
  }


  return (
    <div className={genresTapBarStyle.genresTapBar}>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={10}
        freeMode={true}
        modules={[FreeMode]}
        className="genresSwiper"
      >
        {
          genres.map((genre, idx) => (
            <SwiperSlide className={genresTapBarStyle.genresBtnsSlide}>
              <span onClick={() => onActive(idx)} className={`${genresTapBarStyle.genresBtn} ${clickedGenre === idx ? genresTapBarStyle.active : ''}`}>
                {genre}
              </span>
            </SwiperSlide>
          ))
        }
        {/* 
        <SwiperSlide className={genresTapBarStyle.genresBtnsSlide}>
          <span className={genresTapBarStyle.genresBtn}>뮤지컬</span>
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
        */}
      </Swiper>
    </div>
  )
}

export default GenresTapBar