import React, { useState } from "react";
import heartStyle from "@/styles/heart.module.scss";
import { useSession } from "next-auth/react";

function Heart({ performanceDetails }) {
  const [isActive, setIsActive] = useState(false); // 하트 상태 관리
  const { data: session } = useSession();

  // 질문1) 세션을 받으면 이것을 어떻게 사용해서 북마크 화면에 노출하는가?

  // 순서
  // 1. onsole.log(performanceDetails); // 디테일에서 전달받은 공연정보
  // console.log(session); 이 둘의 정보값을 다시 파이어 베이스 > 북마크 카테고리에 저장한다,
  // ㄴ 파이어 베이스에 넣는 작업 필요
  // >>에드
  
  // 2. 상태값에 대한 관리 필요 (유저가 이미 하트를 클릭했을 경우에는 동일한 페이지로 진입했을 때 유지시켜줘야함.)
  // >>겟 if문을 사용해서 [isActive, setIsActive] = useState(false); // 요것을 활용해서 관리하도록 함.

  // 하트는 저장을 시키고 (파이어 베이스)

//   아래는 하트가 동작했을 때 노출되는 데이터 값들 (디테일의 공연 정보, 유저세션의 유저 아이디, 이메일)
  const handleClick = () => {
    setIsActive(!isActive);
    console.log(performanceDetails); // 디테일에서 전달받은 공연정보
    console.log(session);
  };

  return (
    <button
      onClick={handleClick}
      className={`${heartStyle.like} ${isActive ? heartStyle.active : ""}`}
      type="button"
    ></button>
  );
}

export default Heart;
