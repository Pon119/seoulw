import React, { useEffect, useState } from 'react'
import searchStyle from '@/styles/search.module.scss'
import useSearchStore from '../store/search_store';
import Card from '@/components/Card';
import { useRouter } from 'next/router';
import { fn } from '@/utils/apiFunc';
import { useSearchParams } from 'next/navigation';
import Loading from '@/components/Loading';

function Search2() {
  const {results} = useSearchStore();
  const [functionData, setFunctionData] = useState();
  const router = useRouter();
  const { query } = router.query;
  const searchWord = useSearchParams()
  let b = searchWord.get('query')

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
  
  const handleSearch = async () => {
    const data = await fn.search(b, 1); 
    setFunctionData(data);
  };
  
  useEffect(()=>{
    handleSearch();
    console.log(1);
  },[query])
  
  // if(!functionData)<></>;
console.log(functionData);
  return (
    !functionData ? <><Loading /></> :
    <div className={`search ${searchStyle.search}`}>
      { functionData ? (
        <>
          <h2>검색 결과</h2>
          <div className={searchStyle.thousand}>
            {functionData?.titleData.map((item,i) => (
              <figure key={i}>
                  <Card item={item}/>
              </figure>
            ))}
          </div>
        </>
      ) : (
        <>
          <h2>검색 결과</h2>
          <div className={searchStyle.none}>
            <p>검색 결과가 없습니다.</p>
          </div>
        </>
      )}
    </div>
  )
}

export default Search2