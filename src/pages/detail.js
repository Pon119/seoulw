// 2-1. 디테일
import React, { useState } from "react";
import detailStyle from "@/styles/detail.module.scss";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import Review from "@/components/Review";
import Map from "@/components/Map";
// var parseString = require("xml2js").parseString;

function Detail() {
  // 탭 메뉴
  const [all, setAll] = useState(1);
  const tap = (i) => {
    setAll(i);
  };

  let detail;
  let itemXML = `<dbs>
  <db>
  <mt20id>PF249920</mt20id>
  <prfnm>서울숲 재즈 페스티벌</prfnm>
  <prfpdfrom>2024.10.12</prfpdfrom>
  <prfpdto>2024.10.13</prfpdto>
  <fcltynm>서울숲공원 (가족마당)</fcltynm>
  <prfcast>한석규, 신선미, 정재형, 김유진, 송영주, 고상지, 김윤아 등</prfcast>
  <prfcrew> </prfcrew>
  <prfruntime>6시간</prfruntime>
  <prfage>전체 관람가</prfage>
  <entrpsnm> </entrpsnm>
  <entrpsnmP> </entrpsnmP>
  <entrpsnmA> </entrpsnmA>
  <entrpsnmH>(재)성동문화재단, (주)페이지터너</entrpsnmH>
  <entrpsnmS>(주)모스트콘텐츠, (주)페이지터너</entrpsnmS>
  <pcseguidance>1일권 99,000원, 펫존 1일권 109,000원, 펫존 1일권 ＋ MD 148,000원, 얼리버드 티켓 79,000원</pcseguidance>
  <poster>http://www.kopis.or.kr/upload/pfmPoster/PF_PF249920_240926_135919.png</poster>
  <sty> </sty>
  <area>서울특별시</area>
  <genrenm>대중음악</genrenm>
  <openrun>N</openrun>
  <visit>Y</visit>
  <child>N</child>
  <daehakro>N</daehakro>
  <festival>Y</festival>
  <musicallicense>N</musicallicense>
  <musicalcreate>N</musicalcreate>
  <updatedate>2024-09-26 15:00:00</updatedate>
  <prfstate>공연예정</prfstate>
  <styurls>
  <styurl>http://www.kopis.or.kr/upload/pfmIntroImage/PF_PF249920_240926_0159190.png</styurl>
  </styurls>
  <mt10id>FC002042</mt10id>
  <dtguidance>토요일 ~ 일요일(12:30)</dtguidance>
  <relates>
  <relate>
  <relatenm>멜론티켓</relatenm>
  <relateurl>https://ticket.melon.com/performance/index.htm?prodId=210218</relateurl>
  </relate>
  <relate>
  <relatenm>예스24</relatenm>
  <relateurl>http://ticket.yes24.com/Perf/50551</relateurl>
  </relate>
  <relate>
  <relatenm>인터파크</relatenm>
  <relateurl>http://ticket.interpark.com/Ticket/Goods/GoodsInfo.asp?GoodsCode=24011121</relateurl>
  </relate>
  </relates>
  </db>
  </dbs>`;

  // parseString(itemXML, function (err, result) {
  //   detail = result.dbs.db[0];
  // });

  console.log(detail);
  //하단의 공연 예매 버튼
  // useEffect(() => {
  //   switch (status) {
  //     case 'reserved':
  //       setButtonText('예약하기');
  //       break;
  //     case 'completed':
  //       setButtonText('공연완료');
  //       break;
  //     case 'upcoming':
  //       setButtonText('공연예정');
  //       break;
  //     default:
  //       setButtonText('예약하기'); // 기본값
  //   }
  // }, [status]);

  //리뷰 별점

  // const ARRAY = [0, 1, 2, 3, 4];
  // const [score, setScore] = useState([false, false, false, false, false]);

  // const starScore = (index) => {
  //   let star = [...score];
  //   for (let i = 0; i < 5; i++) {
  //     star[i] = i <= index ? true : false;
  //   }
  //   setScore(star);
  // };

  return (
    <>
      <div className={detailStyle.container}>
        <div className={detailStyle.header}>
          {/* 여기에 상단 타이틀 이미지 넣기 */}
          <img className={detailStyle.headerposter} src={detail.poster[0]} />
          <h1>{detail.prfnm[0]}</h1>
          <ul>
            <li>{detail.prfage[0]}</li>
            <li>
              <img src="/assets/icons/map.svg" />
              {detail.fcltynm}
            </li>
            <li className={detailStyle.time}>
              <img src="/assets/icons/calender.svg" />
              {detail.prfpdfrom} ~ {detail.prfpdto}
              {/* 끝나는 날짜 코드로 가져오기 */}
            </li>
            <li>
              {/* 해당 값은 통으로 들어오고 코드로 가져오기 */}
              <img src="/assets/icons/watch.svg" />
              {detail.dtguidance}
            </li>
            <li>
              <img src="/assets/icons/runnigtime.svg" />
              {detail.prfruntime}
            </li>
          </ul>
        </div>

        {/* 탭 메뉴 */}
        <ul className={detailStyle.tap}>
          <li>
            <button
              className={all === 1 ? detailStyle.selected : ""}
              onClick={() => tap(1)}
            >
              공연 정보
            </button>
            <button
              className={all === 2 ? detailStyle.selected : ""}
              onClick={() => tap(2)}
            >
              후기
            </button>
            <button
              className={all === 3 ? detailStyle.selected : ""}
              onClick={() => tap(3)}
            >
              장소
            </button>
          </li>
        </ul>

        <div className={detailStyle.information}>
          {all === 1 && (
            <div className={detailStyle.info}>
              <div className={detailStyle.infoetc}>
                {/* 공연 정보 */}
                <ul>
                  <li className={detailStyle.infotitle}>공연정보</li>
                  <li>{detail.genrenm}</li>
                </ul>
                {/* 캐스팅 리스트 */}
                <ul className={detailStyle.cast}>
                  <li className={detailStyle.infotitle}>캐스팅</li>
                  <li>{detail.prfcast}</li>
                </ul>
                {/* 가격 */}
                <ul className={detailStyle.place}>
                  <li className={detailStyle.infotitle}>가격</li>
                  <li>{detail.pcseguidance}</li>
                </ul>
                <img src={detail.styurls[0].styurl[0]} />

                {/* 장소까지 info에 포함되어야 함.  */}
                <hr />
                <div className={detailStyle.map}>
                  <h2>장소</h2>
                  <div className={detailStyle.mapinfo}>
                    <p>서울숲공원 (가족마당) </p>
                    <p>서울특별시 성동구 뚝섬로 273(성수동1가)</p>
                    <div className={detailStyle.mapnum}>
                      <p>02-460-2905</p>
                      <Link href="" style={{ marginTop: "5px" }}>
                        홈페이지
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* <div className="여기가 리뷰"> */}
        {all === 2 && <Review />}

        {all === 3 && (
          <div className={detailStyle.reivew}>
            <Map />
          </div>
        )}

        <div className={detailStyle.footer}>
          <button className={detailStyle.reserveButton}>예약하기</button>
        </div>
      </div>
    </>
  );
}

export default Detail;
