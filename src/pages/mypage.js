// 4. MY
import React from "react";
import { useRouter } from "next/router";
import mypageStyle from "@/styles/mypage.module.scss";
import Swal from "sweetalert2";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

function Mypage() {
  const router = useRouter();
  // const login = true;
  const name = "박지연";
  const { data: session } = useSession();
  console.log(session)

  //로그아웃 POPUP
  function popUp() {
    Swal.fire({
      title: "로그아웃",
      text: "로그아웃 하시겠습니까?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#FF4B77",
      cancelButtonColor: "#8E8E8E",
      confirmButtonText: "Confirm",
    }).then((result) => {
      if (result.isConfirmed) {

        signOut();

        // Swal.fire({
        //   title: "로그아웃 완료",
        //   text: "로그아웃이 완료되었습니다.",
        //   confirmButtonColor: "#FF4B77",
        //   icon: "success",
        // });
      }
    });
  }

  if(!session) signIn();

  return (
    <div className={mypageStyle.mypagewrap}>
      {/* <div className={mypageStyle.topwrap}>
        <button><img src="../../assets/icons/arrow_left.svg"/></button>
        <p>마이페이지</p>
        </div> */}
      <ul>
        <li>안녕하세요. {name}님</li>
        <li>
          <Link href="/edit">회원정보 수정</Link>
        </li>
        <li>
          <Link href="/">북마크</Link>
        </li>
        <li>
          <Link href="/">나의 리뷰</Link>
        </li>
        {/* <li onClick={popUp}>로그아웃</li> */}
        <li onClick={popUp  }>로그아웃</li>
        <li>
          <Link href="/dropout">회원 탈퇴</Link>
        </li>
      </ul>
    </div>
  );
}

export default Mypage;
