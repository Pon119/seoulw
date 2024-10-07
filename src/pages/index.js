// 1. 메인
import Image from "next/image";
import mainStyle from "@/styles/main.module.scss";
import Card from "@/components/Card";
import GenresTapBar from "@/components/GenresTapBar";

// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Link from "next/link";

export default function Main() {
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
    <div className={mainStyle.mainWrap}>
      <section className={mainStyle.visual}>
        <Swiper
          pagination={{
            type: 'fraction',
          }}
          navigation={true}
          modules={[Pagination]}
          className={mainStyle.visualSlide}
        >
          <SwiperSlide className={mainStyle.slidePage}><img src="../../public/assets/" /></SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
        </Swiper>
      </section>
      <section className={mainStyle.genresBtns}>
          <ul className={mainStyle.btnsWrap}>
            <li><Link href='#'>뮤지컬</Link></li>
            <li><Link href='#'>연극</Link></li>
            <li><Link href='#'>대중음악</Link></li>
            <li><Link href='#'>무용</Link></li>

            <li><Link href='#'>클래식</Link></li>
            <li><Link href='#'>국악</Link></li>
            <li><Link href='#'>서커스/마술</Link></li>
            <li><Link href='#'>기타</Link></li>            
          </ul>
      </section>

      <section className={mainStyle.mainContents}>
        <article className={mainStyle.thisWeek}>
          <div className={mainStyle.titleWrap}>
            <h2>이번주 공연</h2>
            <ViewAll link = {'#'} />
          </div>
          <GenresTapBar />
          <ul className={mainStyle.itemsWrap}>
            {dummyData.map((item) => (
              <li>
                  <Card key={item.id} item={item}/>
              </li>
            ))}
          </ul>
        </article>

        <article className={mainStyle.upcoming}>
          <div className={mainStyle.titleWrap}>
            <h2>공연 예정</h2>
            <ViewAll link = {'#'} />
          </div>
          <GenresTapBar />
          <ul className={mainStyle.itemsWrap}>
            {dummyData.map((item) => (
              <li>
                <SmallCard item={item} />
              </li>
            ))}
          </ul>
        </article>

        <article className={mainStyle.byGenres}>
          <div className={mainStyle.titleWrap}>
            <h2>장르별</h2>
            <ViewAll link = {'#'} />
          </div>
          <GenresTapBar />
          <ul className={mainStyle.itemsWrap}>
            {dummyData.map((item) => (
              <li>
                  <Card key={item.id} item={item}/>
              </li>
            ))}
          </ul>
        </article>

        <article className={mainStyle.reviews}>
          <div className={mainStyle.titleWrap}>
            <h2>관람 후기</h2>
            <ViewAll link = {'#'} />
          </div>
          <ul>
            컨텐츠
          </ul>
        </article>
      </section>
    </div>
  );
}


const ViewAll = ({link}) => {
  return(
    <Link className={mainStyle.viewAllBtn} href={link}>
      전체보기
    </Link>
  )
}

const SmallCard = ({item}) => {
  const mm = item.dateFrom.slice(5,7);
  const dd = item.dateFrom.slice(8,10);
  const getDay = (dateFrom) => {
    const week = ['일', '월', '화', '수', '목', '금', '토']
    const dateFormat = new Date(dateFrom.replace(/\./g, '/'));
    return week[dateFormat.getDay()];
  }
  const day = getDay(item.dateFrom);

  
  return(
    <div className={mainStyle.smallCardWrap}>
      <figure>
        <div className={mainStyle.smallImgWrap}>
          <img src={item.img} />
        </div>
        <figcaption className={mainStyle.smallImgDescription}>
          <ul>
            <li className={mainStyle.date}>{item.dateFrom} ({day}) ~</li>
            <li className={mainStyle.title}>{item.title}</li>
            <li className={mainStyle.venue}>{item.venue}</li>
          </ul>
        </figcaption>
      </figure>
    </div>
  )
}