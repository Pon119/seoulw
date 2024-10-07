// 1. 메인
import Image from "next/image";
import mainStyle from "@/styles/main.module.scss";
import Card from "@/components/Card";
import GenresTapBar from "@/components/GenresTapBar";

// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/pagination';
import { Pagination } from 'swiper/modules';
import Link from "next/link";

export default function Main() {
  // 공연목록 가짜 데이터는 7개입니다
  const dummyData = [
    {
      mt20id: 'PF000000',
      prfnm: '뮤지컬 ( 베르사유의 장미 )',
      performing: '공연중',
      venue: '서울 블루스퀘어 신한카드 홀 10420 1024',
      dateFrom:'2024.11.29',
      dateTo:'2025.05.18',
      poster:'/assets/images/poster_01.jpg'
    },
    {
      mt20id: 'PF000001',
      prfnm: '제20회 숙명여자대학교 문화예술대학원 전통예술학과 전통음악전공 정기연주회: 절차탁마',
      performing: '공연 예정',
      venue: '대학로 자유 극장',
      dateFrom:'2024.11.29',
      dateTo:'2025.05.18',
      poster:'/assets/images/poster_02.jpg'
    },
    {
      mt20id: 'PF000002',
      prfnm: '국립심포니오케스트라 실내악 시리즈 Ⅱ, 정화된 밤',
      performing: '공연 예정',
      venue: '홍익대 대학로 아트센터 대극장',
      dateFrom:'2024.11.29',
      dateTo:'2025.05.18',
      poster:'/assets/images/poster_03.jpg'
    },
    {
      mt20id: 'PF000003',
      prfnm: '뮤지컬 ( 지킬앤 하이드 ) jekyll & Hyde',
      performing: '공연 예정',
      venue: '블루스퀘어 신한카드 홀',
      dateFrom:'2024.11.29',
      dateTo:'2025.05.18',
      poster:'/assets/images/poster_04.jpg'
    },
    {
      mt20id: 'PF000004',
      prfnm: '뮤지컬 ( 클로버 )',
      performing: '공연 완료',
      venue: '블루스퀘어 신한카드 홀',
      dateFrom:'2024.11.29',
      dateTo:'2025.05.18',
      poster:'/assets/images/poster_05.jpg'
    },
    {
      mt20id: 'PF000005',
      prfnm: '뮤지컬 ( 부치하난 )',
      performing: '공연 완료',
      venue: '블루스퀘어 신한카드 홀',
      dateFrom:'2024.11.29',
      dateTo:'2025.05.18',
      poster:'/assets/images/poster_06.jpg'
    },
    {
      mt20id: 'PF000006',
      prfnm: '뮤지컬 ( 지킬앤 하이드 ) jekyll & Hyde',
      performing: '공연중',
      venue: '블루스퀘어 신한카드 홀',
      dateFrom:'2024.01.09',
      dateTo:'2025.05.18',
      poster:'/assets/images/poster_07.jpg'
    }
  ]

  // 리뷰 가짜 데이터는 10개입니다
  const reviewDummyData = [
    {
      index: 0,
      mt20id: 'PF000000', //작품id
      userid: 'exid000@gmail.com',  //작성자id
      prfnm: '국립심포니오케스트라 실내악 시리즈 Ⅱ, 정화된 밤', //작품 제목
      star: 10, //별점
      review: '스토리 보고 갔다가 배우에 반했어요!!! 냉전과 스파이에 끌려서 삼만년 만에 보러 간 뮤지컬이었는데 와우 스토리가 진짜 탄탄하네 시간이 어떻게 간지 모르게 즐겁게 봤습니다. 진짜 대박이에요! 냉전과 스파이에 끌려서 삼만년 만에 보러 간 뮤지컬이었는데 와우 스토리가 진짜 탄탄하네 시간이 어떻게 간지 모르게 즐겁게 봤습니다. 진짜 대박이에요! 냉전과 스파이에 끌려서 삼만년 만에 보러 갔는데 진짜 대박 냉전과 스파이에 끌려서 삼만년 만에 보러 간 뮤지컬이었는데 와우 스토리가 진짜 탄탄하네 시간이 어떻게',
      postdate: '2024.10.07', //작성일
      poster:'/assets/images/poster_01.jpg' //작품포스터
    },
    {
      index: 1,
      mt20id: 'PF000001',
      userid: 'exid001@gmail.com',
      prfnm: '비 오는 날의 인터뷰',
      star: 10,
      review: '나만 기다린게 아니었구나.. 관객 모두가 미쳐버림 ㅋㅋ커튼콜때 관객들의 미친 환호에 배우들의 놀라면서 행복해 하는 모습 +뒤로 관객들 구경하는 재미가 쏠쏠..장관이구요 절경이더이다.',
      postdate: '2024.10.07',
      poster:'/assets/images/poster_02.jpg'
    },
    {
      index: 2,
      mt20id: 'PF000002',
      userid: 'exid002@naver.com',
      prfnm: '라 트라비아타',
      star: 6,
      review: '많이 기다린 랭보 기다린만큼 좋았어서 앞으로도 더욱 기대됩니다 모든 배우로 한번씩 보고 싶을만큼 좋았어요 넘버 특히 좋고 손유동랭보..최고입니다 재관람 할 것 같아요 랭보 보세요!!',
      postdate: '2024.10.07',
      poster:'/assets/images/poster_03.jpg'
    },
    {
      index: 3,
      mt20id: 'PF000003',
      userid: 'exid003@gmail.com',
      prfnm: '홍선미 퀸텟 인 코리아',
      star: 8,
      review: '"실체없는 기다림" , "삶을 살아가는 의미" , "절망과 허무". 수많은 삶의 모습 만큼 고도에 대한 해석 또한 셀 수 없을 것이다. 극을 본 후 어느 무명 배우가 고민을 상담하는 영상이 떠올랐는데, 가능성에 중독된 것 같다는 댓글이 있었다. 나도 내 신발이 한쌍 있다는 사실 하나만으로  달리면서 수없는 장애물에 부딫힌 사람으로 , 내가 꿈꾸는 이상을 이루기 위한 과정들을 이겨낼 수 있는 그릇인지도 모른채 달려갔기에 더욱더 고독했었다.',
      postdate: '2024.10.07',
      poster:'/assets/images/poster_04.jpg'
    },
    {
      index: 4,
      mt20id: 'PF000004',
      userid: 'exid004@gmail.com',
      prfnm: '현대카드 Curated 95, 한로로 X 윤마치 X QWER',
      star: 10,
      review: '고도에 충분히 오르지 않았나 생각하는 배우분들이 에스터와 밸 역을 맡아 자신만의 톤과 해석으로 캐릭터를 연기하는 것이 흥미로웠다. 자신만의 고도를 가지고 달려가는 청춘, 어느 한 분야에서 고도를 달성하고 또 다른 고도를 꿈꾸는 사람, 고도를 향해 달려가다 이런저런 이유로 부딫혀 잠시 쉬고있는 사람 등 다양한 사람들이 공감할 수 있고 n차 관람을 해도 매번 다른 생각을 열어주는 좋은 연극이었다. 좋은 연극 무대에 세워주셔서 감사합니다!',
      postdate: '2024.10.07',
      poster:'/assets/images/poster_05.jpg'
    },
    {
      index: 5,
      mt20id: 'PF000005',
      userid: 'exid005@gmail.com',
      prfnm: '제90회 한국프랑스가곡연구회 정기연주회',
      star: 10,
      review: '크리스마스 시즌에도 공연해 주세요~공연 기간이 너무 짧아요~^^내용도 크리스마스 시즌에 일어나는 이야기잖아요!벌써 두번째 예약까지는 했는데이런 멋진 공연을 10월 한달만 하다니..이거 너무한거 아닌가요? 진지하게 건의합니다~~~~^^',
      postdate: '2024.10.07',
      poster:'/assets/images/poster_06.jpg'
    },
    {
      index: 6,
      mt20id: 'PF000006',
      userid: 'exid006@gmail.com',
      prfnm: '임지훈 데뷔 40주년 기념 콘서트 with 임현식 (BTOB)',
      star: 10,
      review: '배우들이 멱살잡고 끌고 가는 극.....극본 진짜..... 너어어어어무 노답인데....배우들이 더 친해졌는지 무대에서 진짜 친구들처럼 놀고 있어서 재미있었어요!!!배우들과 밴드 생각하면 별 다섯개...ㅠㅠㅠㅠㅠㅠ',
      postdate: '2024.10.06',
      poster:'/assets/images/poster_07.jpg'
    },
    {
      index: 7,
      mt20id: 'PF000007',
      userid: 'exid007@gmail.com',
      prfnm: '하현상 콘서트: Elegy [서울]',
      star: 8,
      review: '홍련과 바리가 혐오와 사랑이라는 두개의 선택지로서로 밀어 내는 듯 보였지만 사실은 당기고 있었고서로를 판단 하려 하는 듯 보였지만, 사실은 위로 받고 싶고 위로 하고 있었다라는 상당히 깊이 바라보고 해석할 수 있는 극.여러 장르가 포진 되어 재판장이 마치 쇼처럼 보인다.',
      postdate: '2024.10.06',
      poster:'/assets/images/poster_01.jpg'
    },
    {
      index: 8,
      mt20id: 'PF000008',
      userid: 'exid008@gmail.com',
      prfnm: '제20회 숙명여자대학교 문화예술대학원 전통예술학과 전통음악전공 정기연주회: 절차탁마',
      star: 8,
      review: '예쁘고 아름다운 조명에 더 아름다운 중독성 가득한 넘버까지 !! 보고나면 용기와 희망 한가득 안고가는 기분이라 너무 행복해져요 !! 나의 힐링극 시데 !',
      postdate: '2024.10.06',
      poster:'/assets/images/poster_02.jpg'
    },
    {
      index: 9,
      mt20id: 'PF000009',
      userid: 'exid009@gmail.com',
      prfnm: '제30회 서울시민교향악단 가을 정기연주회',
      star: 6,
      review: '처음으로 제 최애가 노래하는 모습을 보니까 아 이런게 행복이구나 싶기도하고 진짜 시간이 멈췄으면 좋겠다는 생각을 몇번이고 했는지 모르겠어요ㅠㅡㅠ 본인 확인하고 주는 포카도 너무 이쁘고... 끝나고 하이바이브 세션은 진짜 그냥 미쳤고.. 진짜 너무 행복 그 자체였습니다??',
      postdate: '2024.10.06',
      poster:'/assets/images/poster_03.jpg'
    }
  ];

  return (
    <div className={mainStyle.mainWrap}>
      <section className={mainStyle.visual}>
        <Swiper
          pagination = {{
            type: 'fraction',
          }}
          navigation={true}
          modules={[Pagination]}
          className={mainStyle.visualSlide}
        >
          {
            dummyData.map((item) => (
              <SwiperSlide className={mainStyle.slidePage}>
                <div className={mainStyle.slideWrap}>
                  <img className={mainStyle.slideImg} src={item.poster} />
                  <div className={mainStyle.slideTextWrap}>
                    <h2>{item.prfnm}</h2>
                    <p className={mainStyle.venue}>{item.venue}</p>
                    <p className={mainStyle.date}>{item.dateFrom} ~ {item.dateTo}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))
          }
          {/* <SwiperSlide className={mainStyle.slidePage}><img src={dummyData[1].img} /></SwiperSlide>
          <SwiperSlide className={mainStyle.slidePage}><img src={dummyData[2].img} /></SwiperSlide>
          <SwiperSlide className={mainStyle.slidePage}><img src={dummyData[3].img} /></SwiperSlide>
          <SwiperSlide className={mainStyle.slidePage}><img src={dummyData[4].img} /></SwiperSlide> */}
        </Swiper>
      </section>
      <section className={mainStyle.genresBtns}>
          <ul className={mainStyle.btnsWrap}>
            <li className={mainStyle.btnSubWrapTop}>
              <ul>
                <li><Link href='#'>뮤지컬</Link></li>
                <li><Link href='#'>연극</Link></li>
                <li><Link href='#'>대중음악</Link></li>
                <li><Link href='#'>무용</Link></li>
              </ul>
            </li>
            <li className={mainStyle.btnSubWrapBottom}>
              <ul>
                <li><Link href='#'>클래식</Link></li>
                <li><Link href='#'>국악</Link></li>
                <li><Link href='#'>서커스/마술</Link></li>
                <li><Link href='#'>기타</Link></li>
              </ul>
            </li>          
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
                  <Card key={item.mt20id} item={item}/>
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
                  <Card key={item.mt20id} item={item}/>
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
          <img src={item.poster} />
        </div>
        <figcaption className={mainStyle.smallImgDescription}>
          <ul>
            <li className={mainStyle.date}>{item.dateFrom} ({day}) ~</li>
            <li className={mainStyle.title}>{item.prfnm}</li>
            <li className={mainStyle.venue}>{item.venue}</li>
          </ul>
        </figcaption>
      </figure>
    </div>
  )
}