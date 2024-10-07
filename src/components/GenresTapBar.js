import React from 'react'
import genresTapBarStyle from '@/styles/genresTapBar.module.scss'

// [↓] swiper
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/scss';
// import 'swiper/css/free-mode';
// import 'swiper/css/pagination';
// import './styles.css';
// import required modules
import { FreeMode } from 'swiper/modules';
import Link from 'next/link';


const GenresTapBar = () => {
  return (
    <div className={genresTapBarStyle.genresTapBarWrap}>
      <Swiper
        slidesPerView={4}
        spaceBetween={0}
        freeMode={true}
        pagination={{
         // clickable: true,
        }}
        modules={[FreeMode]}
        className="genresSwiper"
      >
        <ul className={genresTapBarStyle.genresBtnsWrap}>
          <li>
            <SwiperSlide className={genresTapBarStyle.btnslide}><Link href='#' className={`${genresTapBarStyle.genresBtn} ${genresTapBarStyle.active}`}>뮤지컬</Link></SwiperSlide>
          </li>
          <li>
            <SwiperSlide><Link href='#' className={genresTapBarStyle.genresBtn} >연극</Link></SwiperSlide>
          </li>          
          <li>
            <SwiperSlide><Link href='#' className={genresTapBarStyle.genresBtn} >대중음악</Link></SwiperSlide>
          </li>
          <li>
            <SwiperSlide><Link href='#' className={genresTapBarStyle.genresBtn} >무용</Link></SwiperSlide>
          </li>
          <li>
            <SwiperSlide><Link href='#' className={genresTapBarStyle.genresBtn} >클래식</Link></SwiperSlide>
          </li>
          <li>
            <SwiperSlide><Link href='#' className={genresTapBarStyle.genresBtn} >국악</Link></SwiperSlide>
          </li>
          <li>
            <SwiperSlide><Link href='#' className={genresTapBarStyle.genresBtn} >서커스/마술</Link></SwiperSlide>
          </li>
          <li>
            <SwiperSlide><Link href='#' className={genresTapBarStyle.genresBtn} >기타</Link></SwiperSlide>
          </li>
        </ul>
      </Swiper>

        {/* <ul className={genresTapBarStyle.genresBtnsUl}>
            <li className={genresTapBarStyle.genresBtnsLi}><button className={`${genresTapBarStyle.genresBtn} ${genresTapBarStyle.active}`} >뮤지컬</button></li>
            <li className={genresTapBarStyle.genresBtnsLi}><button className={genresTapBarStyle.genresBtn} >연극</button></li>
            <li className={genresTapBarStyle.genresBtnsLi}><button className={genresTapBarStyle.genresBtn} >대중음악</button></li>
            <li className={genresTapBarStyle.genresBtnsLi}><button className={genresTapBarStyle.genresBtn} >무용</button></li>
            <li className={genresTapBarStyle.genresBtnsLi}><button className={genresTapBarStyle.genresBtn} >클래식</button></li>
            <li className={genresTapBarStyle.genresBtnsLi}><button className={genresTapBarStyle.genresBtn} >국악</button></li>
            <li className={genresTapBarStyle.genresBtnsLi}><button className={genresTapBarStyle.genresBtn} >서커스/마술</button></li>
            <li className={genresTapBarStyle.genresBtnsLi}><button className={genresTapBarStyle.genresBtn} >기타</button></li>
        </ul> */}
    </div>
  )
}

export default GenresTapBar