// 2. 카테고리
import React, { useEffect, useState } from 'react'
import categoryStyle from '@/styles/category.module.scss'
import Card from '@/components/Card';
import GenresTapBar from '@/components/GenresTapBar';
import axios from 'axios';
import { handler } from '../pages/api/api';
import { fn } from '@/utils/apiFunc';

function Category() {
  const [all, setAll] = useState(1);
  const [dataMusical, setDataMusical] = useState([]);
  
  const tab = (i)=>{
    setAll(i);
  }

  const dummyData = [
    {
      mt20id: 'PF000000',
      prfnm: '뮤지컬 ( 베르사유의 장미 )',
      prfstate: '공연중',
      fcltynm: '서울 블루스퀘어 신한카드 홀 10420 1024',
      prfpdfrom:'2024.11.29',
      prfpdto:'2025.05.18',
      poster:'/assets/images/poster_01.jpg'
    },
    {
      mt20id: 'PF000001',
      prfnm: '제20회 숙명여자대학교 문화예술대학원 전통예술학과 전통음악전공 정기연주회: 절차탁마',
      prfstate: '공연 예정',
      fcltynm: '대학로 자유 극장',
      prfpdfrom:'2024.11.29',
      prfpdto:'2025.05.18',
      poster:'/assets/images/poster_02.jpg'
    },
    {
      mt20id: 'PF000002',
      prfnm: '국립심포니오케스트라 실내악 시리즈 Ⅱ, 정화된 밤',
      prfstate: '공연 예정',
      fcltynm: '홍익대 대학로 아트센터 대극장',
      prfpdfrom:'2024.11.29',
      prfpdto:'2025.05.18',
      poster:'/assets/images/poster_03.jpg'
    },
    {
      mt20id: 'PF000003',
      prfnm: '뮤지컬 ( 지킬앤 하이드 ) jekyll & Hyde',
      prfstate: '공연 예정',
      fcltynm: '블루스퀘어 신한카드 홀',
      prfpdfrom:'2024.11.29',
      prfpdto:'2025.05.18',
      poster:'/assets/images/poster_04.jpg'
    },
    {
      mt20id: 'PF000004',
      prfnm: '뮤지컬 ( 클로버 )',
      prfstate: '공연 완료',
      fcltynm: '블루스퀘어 신한카드 홀',
      prfpdfrom:'2024.11.29',
      prfpdto:'2025.05.18',
      poster:'/assets/images/poster_05.jpg'
    },
    {
      mt20id: 'PF000005',
      prfnm: '뮤지컬 ( 부치하난 )',
      prfstate: '공연 완료',
      fcltynm: '블루스퀘어 신한카드 홀',
      prfpdfrom:'2024.11.29',
      prfpdto:'2025.05.18',
      poster:'/assets/images/poster_06.jpg'
    },
    {
      mt20id: 'PF000006',
      prfnm: '뮤지컬 ( 지킬앤 하이드 ) jekyll & Hyde',
      prfstate: '공연중',
      fcltynm: '블루스퀘어 신한카드 홀',
      prfpdfrom:'2024.01.09',
      prfpdto:'2025.05.18',
      poster:'/assets/images/poster_07.jpg'
    }
  ]
  

  let count = 1;

  const handleGenre = async (selectedGenre) => {
    const genreMapping = {
      'GGGA': 1,
      'AAAA': 2,
      'CCCD': 3,
      'BBB': 4,
      'CCCA': 5,
      'CCCC': 6,
      'EEEB': 7,
      'EEEA': 8,
    };

    const shcateValue = genreMapping[selectedGenre];
    const data = await fn.genre(shcateValue, 1); 
    console.log(data);
  };

  
  // if(!dataMusical.length) return<></>;

  return (
    <div className={`categoryCommon ${categoryStyle.category}`}>
      <div className={categoryStyle.genresTapBarWrap}>
        <GenresTapBar/>
      </div>

      <ul>
        <li className={all === 1 ? categoryStyle.selected : ''} onClick={()=>tab(1)}>
          <button>전체</button>
          <div></div>
        </li>
        <li className={all === 2 ? categoryStyle.selected : ''} onClick={()=>tab(2)}>
          <button>이번주</button>
          <div></div>
        </li>
        <li className={all === 3 ? categoryStyle.selected : ''} onClick={()=>tab(3)}>
          <button>공연중</button>
          <div></div>
        </li>
        <li className={all === 4 ? categoryStyle.selected : ''} onClick={()=>tab(4)}>
          <button>공연 예정</button>
          <div></div>
        </li>
      </ul>

      <section>
        {all === 1 && (
          <>
          {dummyData.map((item) => (
            <Card key={item.id} item={item}/>
          ))}
          </>
        )}
        {all === 2 && (
          <>
          <figure>
            <img src='./assets/images/poster_07.jpg'/>
            <figcaption>뮤지컬 ( 지킬앤 하이드 ) jeky & Hyde</figcaption>
          </figure>
          </>
        )}
        {all === 3 && (
          <>
          {dummyData.map((item) => (
            <Card key={item.id} item={item}/>
          ))}
          </>
        )}
        {all === 4 && (
          <>
          {dummyData.map((item) => (
            <Card key={item.id} item={item}/>
          ))}
          </>
        )}

      </section>
      
    </div>
  )
}

export default Category