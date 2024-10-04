import React from 'react'
import headerStyle from "@/styles/header.module.scss";
import Link from 'next/link'
import { useRouter } from 'next/router';




function Header() {
  const router = useRouter();
  let header;
  switch(router.pathname){
    case '/':
      header = <HeaderMain />
      break;
    case '/category':
      header = <HeaderMain />
      break;
    case '/detail':
      header = <HeaderMain />
      break;
    default:
      header = <HeaderMain />
      break;
  }
  return (
    
    <header>
      {header}
    </header>
  )
}

const HeaderMain = () => {
  return(
      <div className={headerStyle.mainHeaderWrap}>
        <Link href="/">
          <h1 className='logo'></h1>
        </Link>
        <div className={headerStyle.btnWrap}>
          <Link href='/search'>
            <button type='button' className={headerStyle.search}></button>
          </Link>
          <Link href='/mypage'>
            <button type='button' className={headerStyle.myPage}></button>
          </Link>
        </div>
      </div>
  )
}

const HeaderSub = () => {
    function goBack() {
        if (window.history.length > 2) {
            router.back();  // 히스토리가 있을 때만 뒤로가기
        } else {
        router.push('/');  // 히스토리가 없으면 홈으로 이동
        }
    }
  return(
    <div className={headerStyle.subHeaderWrap}>
      <h2>
        <button type='button' className={headerStyle.goBackBtn} onClick={goBack}></button>
        마이페이지
      </h2>
    </div>
  )
}

const HeaderDetail = () => {
  return(
    <div>
      <button></button>
      <h2></h2>
    </div>
  )
}


const HeaderSearch = () => {
  return(
    <div>
      <button></button>
      <h2></h2>
    </div>
  )
}

export default Header