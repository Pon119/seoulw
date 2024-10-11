import React, { useEffect, useState } from "react";
import headerStyle from "@/styles/header.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import useSearchStore from "@/store/search_store";
import Search from "@/pages/search";

function Header() {
  const router = useRouter();
  let header;
  switch (router.pathname) {
    case "/":
      header = <HeaderMain />;
      break;
    case "/category":
      header = <HeaderMain />;
      break;
    case "/detail":
      header = <HeaderMain />;
      break;
    case "/search":
      header = <HeaderSearch />;
      break;
    case "/search2":
      header = <HeaderSearch2 />;
      break;
    default:
      header = <HeaderMain />;
      break;
  }
  return <header>{header}</header>;
}

const HeaderMain = () => {
  return (
    <div className={headerStyle.mainHeaderWrap}>
      <Link href="/">
        <h1 className="logo"></h1>
      </Link>
      <div className={headerStyle.btnWrap}>
        <Link href="/search">
          <button type="button" className={headerStyle.search}></button>
        </Link>
        <Link href="mypage">
          <button type="button" className={headerStyle.myPage}></button>
        </Link>
      </div>
    </div>
  );
};

const HeaderSub = () => {
  function goBack() {
    if (window.history.length > 2) {
      router.back(); // 히스토리가 있을 때만 뒤로가기
    } else {
      router.push("/"); // 히스토리가 없으면 홈으로 이동
    }
  }
  return (
    <div className={headerStyle.subHeaderWrap}>
      <h2>
        <button
          type="button"
          className={headerStyle.goBackBtn}
          onClick={goBack}
        ></button>
        마이페이지
      </h2>
    </div>
  );
};

const HeaderDetail = () => {
  return (
    <div>
      <button></button>
      <h2></h2>
    </div>
  );
};

const HeaderSearch = () => {
  const router = useRouter();
  const { searchWord, setSearchWord, setResults } = useSearchStore();

  function goBack(){
    router.back();
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
          placeholder="공연명, 공연장소를 검색하세요."
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
    setSearchWord('');
    router.back();
  }

  const togResult = (e) => {
    e.preventDefault();
    if (searchWord) {
      setResults([searchWord]);
      router.push("/search2");
    }
  };

  const handle = (e) => {
    const value = e.target.value;
    setSearchWord(value);

    if (value.trim() === '') {
      setTimeout(()=>{
        router.push('/search');
      }, 0);
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
          onChange={handle}
          // onChange={(e) => setSearchWord(e.target.value)}
          placeholder="공연명, 공연장소를 검색하세요."
        ></input>
        <button type="submit"></button>
      </form>
    </div>
  );
};


const HeaderSearch3 = () => {
  const router = useRouter();
  const { searchWord, setSearchWord, setResults } = useSearchStore();

  const goBack = () => {
    setSearchWord(''); 
    router.back();
  };

  const togResult = (e) => {
    e.preventDefault();
    if (searchWord) {
      setResults([searchWord]);
      router.push("/search2");
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchWord(value);

    if (value.trim() === '') {
      setTimeout(() => {
        router.push('/search');
      }, 0);
    }
  };

  useEffect(() => {
    if (!searchWord.trim()) {
      router.push("/search");
    }
  }, [searchWord, router]);

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
          onChange={handleChange}
          placeholder="티켓명, 아티스트명을 검색하세요."
        />
        <button type="submit"></button>
      </form>
    </div>
  );
};


const HeaderMypage = () => {
  return (
    <div className={headerStyle.mypageHeaderWrap}>
      <button>
        <img src="../../assets/icons/arrow_left.svg" />
      </button>
      <p>마이페이지</p>
    </div>
  );
};

const HeaderLogin = () => {
  return <div></div>;
};
export default Header;
