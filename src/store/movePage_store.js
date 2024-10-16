// 페이지 이동하면서 헤더에 표시할 값 저장하는 곳
// =========<복붙시작>========================================================
// [↓] 외부 import
// import movePageStore from '../store/movePage_store';

// [↓] const Detail 내부
// const {setMoveDetailData} = movePageStore();   //movePageData=[장르인덱스, all인덱스]
// setMoveDetailData(() => item.mt20id)
// =========<복붙종료>========================================================

import { create } from "zustand";


const useMovePageStore = create((set) => ({
  //카테고리 페이지
  movePageData:[],
  setMovePageData: (genre, all) => {
    set( {  movePageData: [genre, all]  } )
  },

  //디테일 페이지
  moveDetailData:'',
  setMoveDetailData: (title) => {
    set( { moveDetailData: title } )
  }
}));



export default useMovePageStore