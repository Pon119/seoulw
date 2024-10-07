// 4. MY
import React from 'react'
import { useRouter } from 'next/router'
import mypageStyle from '@/styles/mypage.module.scss'
import Login from './login'




function Mypage() {
  const router = useRouter()
  const login = true;
  const name = '지연'

  if(login) {
    router.push('login')
  } 
  


  return (
    <div className={mypageStyle.mypagewrap}>
        {/* <div className={mypageStyle.topwrap}>
        <button><img src="../../assets/icons/arrow_left.svg"/></button>
        <p>마이페이지</p>
        </div> */}
        <ul>
          <li>안녕하세요. {name}님</li>
          <li><a href="/edit">회원정보 수정</a></li>
          <li><a href="/">북마크</a></li>
          <li><a href="/">나의 리뷰</a></li>
          <li><a href="/">로그아웃</a></li>
          <li><a href="/">회원 탈퇴</a></li>
        </ul>
      
    </div>
  )
}

export default Mypage