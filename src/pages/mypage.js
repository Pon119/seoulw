// 4. MY
import React from 'react'
import { useRouter } from 'next/router'
import mypageStyle from '@/styles/mypage.module.scss'
import Login from './login'




function Mypage() {
  const router = useRouter()
  router.push('login')
  const login = true;
  const name = '지연'

  if(!login) {
    router.push('login')
  }
  
  return (
    <div>
      <div className={mypageStyle.topwrap}>
        <button><img src="../../assets/icons/arrow_left.svg"/></button><span>마이페이지</span>
        <ul>
          <li>안녕하세요, {name}님</li>
          <li><a href="/">회원정보수정</a></li>
          <li><a href="/">북마크</a></li>
          <li><a href="/">나의리뷰</a></li>
          <li><a href="/">로그아웃</a></li>
          <li><a href="/">회원탈퇴</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Mypage