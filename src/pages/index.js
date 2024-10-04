// 1. 메인
import Image from "next/image";
import HomeStyle from "@/styles/main.module.scss";
import Card from "@/components/Card";
import GenresTapBar from "@/components/GenresTapBar";


export default function Main() {
  const dummyData = [
    {
      id: 0,
      title: '뮤지컬 ( 지킬앤 하이드 ) jekyll & Hyde',
      performing: '공연중',
      venue: '블루스퀘어 신한카드 홀',
      date:'2024.11.29~2025.05.18',
      img:'/assets/images/poster_01.jpg'
    },
    {
      id: 1,
      title: '뮤지컬 ( 클로버 )',
      performing: '공연 예정',
      venue: '대학로 자유 극장',
      date:'2024.11.29~2025.05.18',
      img:'/assets/images/poster_02.jpg'
    },
    {
      id: 2,
      title: '뮤지컬 ( 부치하난 )',
      performing: '공연 예정',
      venue: '홍익대 대학로 아트센터 대극장',
      date:'2024.11.29~2025.05.18',
      img:'/assets/images/poster_03.jpg'
    },
    {
      id: 3,
      title: '뮤지컬 ( 지킬앤 하이드 ) jekyll & Hyde',
      performing: '공연 예정',
      venue: '블루스퀘어 신한카드 홀',
      date:'2024.11.29~2025.05.18',
      img:'/assets/images/poster_04.jpg'
    },
    {
      id: 4,
      title: '뮤지컬 ( 클로버 )',
      performing: '공연 완료',
      venue: '블루스퀘어 신한카드 홀',
      date:'2024.11.29~2025.05.18',
      img:'/assets/images/poster_05.jpg'
    },
    {
      id: 5,
      title: '뮤지컬 ( 부치하난 )',
      performing: '공연 완료',
      venue: '블루스퀘어 신한카드 홀',
      date:'2024.11.29~2025.05.18',
      img:'/assets/images/poster_06.jpg'
    },
    {
      id: 6,
      title: '뮤지컬 ( 지킬앤 하이드 ) jekyll & Hyde',
      performing: '공연중',
      venue: '블루스퀘어 신한카드 홀',
      date:'2024.11.29~2025.05.18',
      img:'/assets/images/poster_07.jpg'
    }
  ]

  return (
    <div>
      메인
      <GenresTapBar />
      <ul>
        <li>
          {dummyData.map((item) => (
            <Card key={item.id} item={item}/>
          ))}
        </li>
      </ul>
    </div>
  );
}