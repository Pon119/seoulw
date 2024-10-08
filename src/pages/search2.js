import React from 'react'
import searchStyle from '@/styles/search.module.scss'
import useSearchStore from '../store/search_store';
import Card from '@/components/Card';

const search2 = () => {
  const {results} = useSearchStore();

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
    <div className={`search ${searchStyle.search}`}>
      { results.length > 0 ? (
        <>
          <h2>검색 결과 <span>(1,000)</span></h2>
          <div>
            {dummyData.map((item) => (
              <figure>
                  <Card key={item.id} item={item}/>
              </figure>
            ))}
          </div>
        </>
      ) : (
        <>
          <h2>검색 결과 <span>(0)</span></h2>
          <div className={searchStyle.none}>
            <p>검색 결과가 없습니다.</p>
          </div>
        </>
      )}
    </div>
  )
}

export default search2