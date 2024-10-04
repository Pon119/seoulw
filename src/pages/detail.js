// 2-1. 디테일
import React, { useState } from "react";
import detailStyle from "@/styles/detail.module.scss";

function Detail() {
  // 탭 메뉴
  const [all, setAll] = useState(1);
  const tap = (i) => {
    setAll(i);
  };

  return (
    <>
      <div className={detailStyle.container}>
        <div className={detailStyle.header}>
          {/* 여기에 상단 타이틀 이미지 넣기 */}
          <img
            className={detailStyle.headerposter}
            src="/assets/images/poster_01.jpg"
          />
          <h1>서울 숲 재즈 페스티벌</h1>
          <ul>
            <li>전체 관람가</li>
            <li>
              <img src="/assets/icons/map.svg" />
              서울숲공원 (가족마당)
            </li>
            <li className={detailStyle.time}>
              <img src="/assets/icons/calender.svg" />
              2024. 10. 12 ~ 2024.10.13
              {/* 끝나는 날짜 코드로 가져오기 */}
            </li>
            <li>
              {/* 해당 값은 통으로 들어오고 코드로 가져오기 */}
              <img src="/assets/icons/watch.svg" />
              토요일 ~ 일요일 (12:30)
            </li>
            <li>
              <img src="/assets/icons/runnigtime.svg" />
              6시간
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

        <div className="여기까지가 공연 정보">
          {all === 1 && (
            <div className={detailStyle.info}>
              {/* 공연 정보 */}
              <ul>
                <li>공연정보</li>
              </ul>
              <ul className={detailStyle.info2}>
                <li>대중 음악</li>
              </ul>
              {/* 캐스팅 리스트 */}
              <ul className={detailStyle.cast}>
                <li>캐스팅</li>
                <li>
                  한석규, 신선미, 정재형, 김유진, 송영주, 고상지, 김윤아 등
                </li>
              </ul>
              {/* 가격 */}
              <ul className={detailStyle.place}>
                <li>가격</li>
                <li>
                  1일권 99,000원, 펫존 1일권 109,00원,펫존 1일권 ＋ MD
                  148,000원, 얼리버드 티켓 79,000원
                </li>
              </ul>
              <img src="/assets/images/fake_info_img_01.png" />

              {/* 장소까지 info에 포함되어야 함.  */}
              <div className={detailStyle.map}>
                <h2>장소</h2>
                <p>서울숲공원 (가족마당) </p>
                <p>서울특별시 성동구 뚝섬로 273</p>
                <p>02-460-2905</p>
                <img src="/assets/icons/map.svg" alt="Map" />
              </div>
            </div>
          )}
        </div>

        <div className="여기가 리뷰">
          {all === 2 && (
            <div className={detailStyle.reivew}>
              <p>리뷰 나오는 곳</p>
            </div>
          )}
        </div>
        {all === 3 && (
          <div className={detailStyle.reivew}>
            <p>장소 나오는 곳</p>
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
