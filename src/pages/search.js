// 3. 검색
import React from 'react'
import searchStyle from '@/styles/search.module.scss'


import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// import required modules
import { FreeMode, Pagination } from 'swiper/modules';


function Search() {
  return (
    <div className={searchStyle.search}>
      <h2>최근 검색어</h2>
      
      <ul>
      <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          modules={[FreeMode]}
          className="mySwiper"
        >
        <SwiperSlide>
        <li>
          <button>뮤지컬</button>
          <button><img src='./assets/icons/x_button.svg'/></button>
        </li>
        </SwiperSlide>
        <SwiperSlide>
        <li>
          <button>연극</button>
          <button><img src='./assets/icons/x_button.svg'/></button>
        </li>
        </SwiperSlide>
        <SwiperSlide>
        <li>
          <button>서커스</button>
          <button><img src='./assets/icons/x_button.svg'/></button>
        </li>
        </SwiperSlide>
        <SwiperSlide>
        <li>
          <button>연극</button>
          <button><img src='./assets/icons/x_button.svg'/></button>
        </li>
        </SwiperSlide>
        <SwiperSlide>
        <li>
          <button>서커스</button>
          <button><img src='./assets/icons/x_button.svg'/></button>
        </li>
        </SwiperSlide>
        </Swiper>
      </ul>

      <h2>최근 본 상품</h2>
      <section>
        <figure>
          <img src='./assets/images/poster_07.jpg'/>
          <p>뮤지컬</p>
          <figcaption>(지킬앤 하이드)</figcaption>
          <button><img src='./assets/icons/x_button.svg'/></button>
        </figure>
        <figure>
          <img src='./assets/images/poster_06.jpg'/>
          <p>연극</p>
          <figcaption>(더보이즈 인 더 밴드)</figcaption>
          <button><img src='./assets/icons/x_button.svg'/></button>
        </figure>
        <figure>
          <img src='./assets/images/poster_04.jpg'/>
          <p>뮤지컬</p>
          <figcaption>(클로버)</figcaption>
          <button><img src='./assets/icons/x_button.svg'/></button>
        </figure>
      </section>
    </div>
  )
}

export default Search