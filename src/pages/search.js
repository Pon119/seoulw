// 3. 검색
import React, { useEffect, useState } from 'react'
import searchStyle from '@/styles/search.module.scss'
import Link from 'next/link';
import useSearchStore from '../store/search_store';
import { useRouter } from 'next/router';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode } from 'swiper/modules';

function Search() {
  const {results, readCookie, setResults} = useSearchStore();
  const remove = useSearchStore((state) => state.deleteC);
  const router = useRouter();

  console.log(results);
  
  useEffect(()=>{
    readCookie();
  },[])
  
  const { setSearchWord } = useSearchStore();
  const pClick = (value) => {
    setSearchWord(value);

     // 현재 results에서 value를 가져오는 과정
  const newResults = results.map(result => result.value); // 현재 결과의 value 배열
  newResults.push(value); // 클릭한 검색어 추가

  console.log('New Results to Set:', newResults); // 디버깅 로그 추가
  setResults(newResults); // 새로운 결과 설정

    router.push(`/search2?query=${value}`);
  };


  return (
    <div className={`search ${searchStyle.search}`}>
      <h2>최근 검색어</h2>   
      <ul>
      { results!== null && results.length > 0 ? (
        <Swiper
        slidesPerView={'auto'}
        spaceBetween={30}
        freeMode={true}
        modules={[FreeMode]}
        className="mySwiper"
        >
          {results.slice().reverse().map((result,k) => (
            <SwiperSlide key={k}>
            <li>
              <p onClick={() => pClick(result.value)}>{result.value}</p>
              <button onClick={() => remove(result.value)}><img src='./assets/icons/x_button.svg'/></button>
            </li>
            </SwiperSlide>
            )
          )}
        </Swiper>
      ) : (
      <div>
        <p>최근 검색어가 없습니다.</p>
      </div>
      )}
      </ul>

      <h2>최근 본 상품</h2>
      <section>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          modules={[FreeMode]}
          className="mySwiper"
        >
        <SwiperSlide>
        <figure>
          <img src='./assets/images/poster_07.jpg'/>
          <p>뮤지컬</p>
          <figcaption>(지킬앤 하이드)</figcaption>
          <button><img src='./assets/icons/x_button.svg'/></button>
        </figure>
        </SwiperSlide>
        <SwiperSlide>
        <figure>
          <img src='./assets/images/poster_06.jpg'/>
          <p>연극</p>
          <figcaption>(더보이즈 인 더밴드)</figcaption>
          <button><img src='./assets/icons/x_button.svg'/></button>
        </figure>
        </SwiperSlide>
        <SwiperSlide>
        <figure>
          <img src='./assets/images/poster_04.jpg'/>
          <p>뮤지컬</p>
          <figcaption>(클로버)</figcaption>
          <button><img src='./assets/icons/x_button.svg'/></button>
        </figure>
        </SwiperSlide>
        <SwiperSlide>
        <figure>
          <img src='./assets/images/poster_06.jpg'/>
          <p>연극</p>
          <figcaption>(더보이즈 인 더밴드)</figcaption>
          <button><img src='./assets/icons/x_button.svg'/></button>
        </figure>
        </SwiperSlide>
        <SwiperSlide>
        <figure>
          <img src='./assets/images/poster_04.jpg'/>
          <p>뮤지컬</p>
          <figcaption>(클로버)</figcaption>
          <button><img src='./assets/icons/x_button.svg'/></button>
        </figure>
        </SwiperSlide>
        </Swiper>
      </section>

      <Link href='/bookpage'>b</Link>
    </div>
  )
}

export default Search