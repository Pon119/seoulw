// 2. 카테고리
import React, { useState } from 'react'
import categoryStyle from '@/styles/category.module.scss'
import Card from '@/components/Card';

function Category() {

  const [all, setAll] = useState(1);
  const tab = (i)=>{
    setAll(i);
  }

  const dummyData = [
    {
      id: 'PF0',
      title: '뮤지컬 ( 지킬앤 하이드 ) jekyll & Hyde',
      performing: '공연중',
      venue: '블루스퀘어 신한카드 홀',
      dateFrom:'2024.11.29',
      dateTo:'2025.05.18',
      img:'/assets/images/poster_01.jpg'
    },
    {
      id: 'PF1',
      title: '뮤지컬 ( 클로버 )',
      performing: '공연 예정',
      venue: '대학로 자유 극장',
      dateFrom:'2024.11.29',
      dateTo:'2025.05.18',
      img:'/assets/images/poster_02.jpg'
    },
    {
      id: 'PF2',
      title: '뮤지컬 ( 부치하난 )',
      performing: '공연 예정',
      venue: '홍익대 대학로 아트센터 대극장',
      dateFrom:'2024.11.29',
      dateTo:'2025.05.18',
      img:'/assets/images/poster_03.jpg'
    },
    {
      id: 'PF3',
      title: '뮤지컬 ( 지킬앤 하이드 ) jekyll & Hyde',
      performing: '공연 예정',
      venue: '블루스퀘어 신한카드 홀',
      dateFrom:'2024.11.29',
      dateTo:'2025.05.18',
      img:'/assets/images/poster_04.jpg'
    },
    {
      id: 'PF4',
      title: '뮤지컬 ( 클로버 )',
      performing: '공연 완료',
      venue: '블루스퀘어 신한카드 홀',
      dateFrom:'2024.11.29',
      dateTo:'2025.05.18',
      img:'/assets/images/poster_05.jpg'
    },
    {
      id: 'PF5',
      title: '뮤지컬 ( 부치하난 )',
      performing: '공연 완료',
      venue: '블루스퀘어 신한카드 홀',
      dateFrom:'2024.11.29',
      dateTo:'2025.05.18',
      img:'/assets/images/poster_06.jpg'
    },
    {
      id: 'PF6',
      title: '뮤지컬 ( 지킬앤 하이드 ) jekyll & Hyde',
      performing: '공연중',
      venue: '블루스퀘어 신한카드 홀',
      dateFrom:'2024.01.09',
      dateTo:'2025.05.18',
      img:'/assets/images/poster_07.jpg'
    }
  ]


  return (
    <div className={categoryStyle.category}>
      
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
              <figure>
                  <Card key={item.id} item={item}/>
              </figure>
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
              <figure>
                  <Card key={item.id} item={item}/>
              </figure>
            ))}
          </>
        )}
        {all === 4 && (
          <>
          <figure>
            <img src='./assets/images/poster_07.jpg'/>
            <figcaption>뮤지컬 ( 지킬앤 하이드 ) jeky & Hyde</figcaption>
          </figure>
          </>
        )}

      </section>
      
    </div>
  )
}

export default Category