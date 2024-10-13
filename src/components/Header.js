import React, { useEffect, useState } from "react";
import headerStyle from "@/styles/header.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import useSearchStore from "@/store/search_store";
import Search from "@/pages/search";

function Header() {
  const [header, setHeader] = useState();
  const router = useRouter();

  const movePage = (page) => {
    router.push(page);
  };

  // if(router.pathname === '/login' || router.pathname === '/join'){
  //   return null;
  // }

  useEffect(() => {
    switch (router.pathname) {
      case "/":
        setHeader(() => <HeaderMain movePage={movePage} hide={false} />);
        break;
      case "/category":
        setHeader(() => <HeaderSub name={"뮤지컬"} />);
        break;
      case "/detail":
        setHeader(() => <HeaderDetail name={"서울 숲 재즈 페스티벌"} />);
        break;
      case "/search":
        setHeader(() => <HeaderSearch />);
        break;
      case "/search2":
        setHeader(() => <HeaderSearch />);
        break;
      case "/mypage":
        setHeader(() => <HeaderSub name={"마이페이지"} />);
        break;
      case "/login":
      case "/join":
        setHeader(() => <HeaderMain movePage={movePage} hide={true} />);
        break;
      default:
        setHeader(() => <HeaderMain movePage={movePage} hide={false} />);
        break;
    }
  }, [router.pathname]);

  return <header>{header}</header>;
}

// 뒤로 가기 버튼
const GoBackBtn = () => {
  const router = useRouter();
  const goBack = () => {
    if (window.history.length > 2) {
      router.back(); // 히스토리가 있을 때만 뒤로가기
    } else {
      router.push("/"); // 히스토리가 없으면 홈으로 이동
    }
  };

  return (
    <div className={headerStyle.goBackBtnWrap}>
      <button
        type="button"
        className={headerStyle.goBackBtn}
        onClick={goBack}
      ></button>
    </div>
  );
};

// 메인 헤더
const HeaderMain = ({ movePage, hide }) => {
  return (
    <div
      className={`${headerStyle.mainHeaderWrap} ${
        hide ? headerStyle.hide : ""
      }`}
    >
      <h1 onClick={() => movePage("/")} className="logo"></h1>
      <div className={headerStyle.btnWrap}>
        <button
          onClick={() => movePage("/search")}
          type="button"
          className={headerStyle.search}
        ></button>
        <button
          onClick={() => movePage("/mypage")}
          type="button"
          className={headerStyle.myPage}
        ></button>
      </div>
    </div>
  );
};

// 서브(카테고리, MY) 헤더
const HeaderSub = ({ name }) => {
  return (
    <div
      className={`${headerStyle.subHeaderWrap} ${headerStyle.btnWrapCommon}`}
    >
      <GoBackBtn />
      <h2 className={headerStyle.subtitle}>{name}</h2>
    </div>
  );
};

// 디테일 헤더
const HeaderDetail = ({ name }) => {
  return (
    <div
      className={`${headerStyle.detailHeaderWrap} ${headerStyle.btnWrapCommon}`}
    >
      <GoBackBtn />
      <h2 className={headerStyle.itemTitle}>{name}</h2>
    </div>
  );
};

// 검색 헤더
const HeaderSearch = () => {
  const router = useRouter();
  const { searchWord, setSearchWord, setResults } = useSearchStore();

  function goBack() {
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
    setSearchWord("");
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

    if (value.trim() === "") {
      setTimeout(() => {
        router.push("/search");
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
    setSearchWord("");
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

    if (value.trim() === "") {
      setTimeout(() => {
        router.push("/search");
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


export default Header;
