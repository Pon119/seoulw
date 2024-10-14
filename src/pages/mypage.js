// 4. MY
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import mypageStyle from "@/styles/mypage.module.scss";
import Swal from "sweetalert2";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import Review from "@/components/Review";
import Bookmark from "@/components/Bookmark";
import Edit from "@/components/edit";


function Mypage() {
  const [status, setStatus] = useState('');
 const [page, setPage] = useState();
  const router = useRouter();
  
  const name = "박지연";
  const { data: session } = useSession();
  console.log(session)


const movePage = (page) =>{
  router.push(page);
}

useEffect (()=>{
  switch (router.pathname){
    case "edit" :
     setPage(()=> <Edit movePage={movePage}/>); break;
  }
}, [status])
 

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

      {

      <ul>
        <li>안녕하세요. {session?.user?.name || "사용자"}님</li>
        <li onClick={()=> setStatus(()=>'edit')}>
          회원정보 수정
        </li>
        
        <li onClick={() => router.push('/bookmark')}>북마크</li>
        <li onClick={() => router.push('/review')}>나의 리뷰</li>
        {/* <li onClick={popUp}>로그아웃</li> */}
        <li onClick={popUp}>로그아웃</li>
        <li>
          <Link href="/dropout">회원 탈퇴</Link>
        </li>
      </ul>

      }



    </div>
  );
}

export default Mypage;
