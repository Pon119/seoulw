import React, { useEffect, useState } from "react";
import headerStyle from "@/styles/header.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import useSearchStore from "@/store/search_store";
import Search from "@/pages/search";


function Header() {
  const router = useRouter();

  const movePage = (page) => {
    router.push(page)
  }
  
  if(router.pathname === '/login' || router.pathname === '/join'){
    return null;
  }
  let header;

  switch (router.pathname) {
    case "/":
      header = <HeaderMain movePage={movePage} />;
      break;
    case "/category":
      header = <HeaderSub name={'뮤지컬'} />;
      break;
    case "/detail":
      header = <HeaderMain movePage={movePage} />;
      break;
    case "/search":
      header = <HeaderSearch />;
      break;
    case "/search2":
      header = <HeaderSearch />;
      break;
    case "/mypage":
      header = <HeaderSub name={'마이페이지'} />;
      break;
    default:
      header = <HeaderMain movePage={movePage} />;
      break;
  }

  return (
    <header>
      {header}
    </header>
  );
}

const GoBackBtn = () => {
  const router = useRouter();
  const goBack = () => {
    if (window.history.length > 2) {
      router.back(); // 히스토리가 있을 때만 뒤로가기
    } else {
      router.push("/"); // 히스토리가 없으면 홈으로 이동
    }
  }

  return(
    <div className={headerStyle.goBackBtnWrap}>
      <button
          type="button"
          className={headerStyle.goBackBtn}
          onClick={goBack}
      ></button>
    </div>
  )
}

// 메인 헤더
const HeaderMain = ({movePage}) => {
  
  return (
    <div className={headerStyle.mainHeaderWrap}>
      <h1 onClick={() => movePage('/')} className="logo"></h1>
      <div className={headerStyle.btnWrap}>
        <button onClick={() => movePage('/search')} type="button" className={headerStyle.search}></button>
        <button onClick={() => movePage('/mypage')} type="button" className={headerStyle.myPage}></button>
      </div>
    </div>
  );
};

// 서브 헤더
const HeaderSub = ({name}) => {
  return (
    <div className={headerStyle.subHeaderWrap}>
      <GoBackBtn />
      <h2 className={headerStyle.title}>{name}</h2>
    </div>
  );
};

const HeaderDetail = ({movePage}) => {
  return (
    <div className={headerStyle.detailHeaderWrap}>
      <GoBackBtn />
      <h2></h2>
    </div>
  );
};

const HeaderSearch = () => {
  const router = useRouter();
  const { searchWord, setSearchWord, setResults } = useSearchStore();

  function goBack() {
    if (window.history.length > 2) {
      router.back(); // 히스토리가 있을 때만 뒤로가기
    } else {
      router.push("/"); // 히스토리가 없으면 홈으로 이동
    }
  }

  const togResult = (e) => {
    e.preventDefault();
    if (searchWord) {
      setResults([searchWord]);
      router.push("/search2");
    }
  };

  return (
    <div className={headerStyle.searchWrap}>
      <button
        type="button"
        className={headerStyle.goBackBtn}
        onClick={goBack}
      ></button>
      <form onSubmit={togResult}>
        <input
          type="text"
          name="searchWord"
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
          placeholder="티켓명, 아티스트명을 검색하세요."
        ></input>
        <button type="submit"></button>
      </form>
    </div>
  );
};

const HeaderSearch2 = () => {
  const router = useRouter();
  const { searchWord, setSearchWord, setResults } = useSearchStore();

  function goBack() {
    router.push("/search");
  }

  const togResult = (e) => {
    e.preventDefault();
    if (searchWord) {
      setResults([searchWord]);
      router.push("/search2");
    }
  };

  useEffect(() => {
    if (!searchWord.trim()) {
      router.push("/search");
    }
  }, [searchWord]);

  return (
    <div className={headerStyle.searchWrap}>
      <button
        type="button"
        className={headerStyle.goBackBtn}
        onClick={goBack}
      ></button>
      <form onSubmit={togResult}>
        <input
          type="text"
          name="searchWord"
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
          placeholder="티켓명, 아티스트명을 검색하세요."
        ></input>
        <button type="submit"></button>
      </form>
    </div>
  );
};

const HeaderMypage = () => {
  return (
    <div className={headerStyle.mypageHeaderWrap}>
      <button type="button">
        <img src="../../assets/icons/arrow_left.svg" />
      </button>
      <p>마이페이지</p>
    </div>
  );
};


export default Header;
