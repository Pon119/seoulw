import React, { useState } from 'react'
import Swal from 'sweetalert2';
import dropoutStyle from '@/styles/dropout.module.scss'
import { useSession } from 'next-auth/react';
import db from '@/lib/firebase';
import { collection,getDocs, query, where, deleteDoc, doc  } from 'firebase/firestore';
import { useRouter } from 'next/router';

const dropout = () => {
  const { data: session } = useSession();
  const [isAgreed, setIsAgreed] = useState(false); // 탈퇴 동의 체크 상태 관리
  const router = useRouter();

  
  // 이메일로 회원을 찾고, 해당 회원의 정보를 삭제하는 함수
  const handleDropout = async () => {
    if (isAgreed) {
      try {
        await deleteDoc(collection(db, "member", id),{
            
        }) 
        router.push('/');// 홈으로 리다이렉트
      } catch (error) {
        console.error('회원 탈퇴 실패:', error.message);
        alert('회원 탈퇴 실패. 다시 시도해주세요.');
      }
    } else {
      alert('탈퇴에 동의해주세요.');
    }
  };

  //탈퇴 POPUP
  function popUp() {
    Swal.fire({
      title: "탈퇴",
      text: "탈퇴 하시겠습니까?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#FF4B77",
      cancelButtonColor: "#8E8E8E",
      confirmButtonText: "Confirm",
    }).then((result) => {
      if (result.isConfirmed) {
        handleDropout();
      }
    });
  }

   
  // 체크박스 상태 변경
   const handleCheckboxChange = () => {
    setIsAgreed(!isAgreed);
  };

 
  return (
    <div className={dropoutStyle.dropoutwrap}>
        <p>{session?.user?.name || "사용자"}님 <i>정보가 모두 사라져요!</i></p>
        <div className={dropoutStyle.dropbox} id={dropoutStyle.box1}><b>북마크</b><span>50<i>개</i></span></div>
        <div className={dropoutStyle.dropbox}><b>리뷰</b><span>1,024<i>개</i></span></div>
        <div className={dropoutStyle.dropinfo}>
        <p><em></em>꼭 확인해 주세요!</p>
        <ul>
        <li>회원 탈퇴 시 서울더블유 주식회사(SEOUL W corp.)의 모든 서비스에서 탈퇴 처리됩니다.</li>
        <li>회원 탈퇴 시 계정과 관련된 정보는 복구가 불가능합니다.</li>
        <li>동일한 이메일이나 휴대폰 번호로는 30일 간 재가입이 불가능합니다.</li>
        <li>디지털 콘텐츠 등 관련 서비스에서 회원님이 작성하신 콘텐츠에 대한 이용 권한이 상실됩니다.</li>
        </ul>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
        <input type='checkbox' className={dropoutStyle.checkbox} id="info1" name="info" onChange={handleCheckboxChange}
          checked={isAgreed} />
        <label for="info1" ><i></i>위 내용을 숙지하였으며 탈퇴에 동의합니다.</label>
        <input type="submit" className={dropoutStyle.keepbtn} value="계속 사용하기" />
        <input type="submit" onClick={popUp} className={dropoutStyle.dropbtn} value="회원 탈퇴" />
        </form>
    </div>
  )
}

export default dropout