import axios from 'axios'
import React from 'react'

function getThisWeekDate() {
  function dateFormat (date) {
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1 필요
    const dd = String(date.getDate()).padStart(2, '0');
    return `${yyyy}${mm}${dd}`
  }

  const today = new Date();
  const dayIndex = today.getDay(); // 0: 일요일, 1: 월요일, ..., 6: 토요일
  const endDate = new Date(today); // stdate 복사
  endDate.setDate(today.getDate() + (7-dayIndex));
  const stdate = dateFormat(today)
  const eddate = dateFormat(endDate)
  return {stdate, eddate}   
}

let {stdate, eddate} = getThisWeekDate();
console.log(stdate,eddate);

const API_KEY = '7b1ab9ea464e4d70ad4c8bad7505f532';
const defaultParams = {
  service: API_KEY,
  stdate: '20240101',
  eddate: '20241231',
  rows: '20',
  signgucode: '11'
};

const defaultParams2 = {
  service: API_KEY,
  stdate: stdate,
  eddate: eddate,
  rows: '20',
  signgucode: '11'
};

const instance = axios.create({
  baseURL: 'http://www.kopis.or.kr/openApi/restful/pblprfr',
  params: defaultParams
});

var convert = require('xml-js');

//메인 & 카테고리용
async function apiGenre(cpage, res){
// 프로미스 요청
  let [musical, play, pop, dance, classic, gukak, circus, etc] = await Promise.allSettled([
    instance.get('', {params: {...defaultParams, cpage: `${cpage}`, shcate: 'GGGA'} }), //뮤지컬
    instance.get('', {params: {...defaultParams, cpage: `${cpage}`, shcate: 'AAAA'} }), //연극
    instance.get('', {params: {...defaultParams, cpage: `${cpage}`, shcate: 'CCCD'} }), //대중음악
    instance.get('', {params: {...defaultParams, cpage: `${cpage}`, shcate: 'BBB'} }), //무용
    instance.get('', {params: {...defaultParams, cpage: `${cpage}`, shcate: 'CCCA'} }), //서양음악
    instance.get('', {params: {...defaultParams, cpage: `${cpage}`, shcate: 'CCCC'} }), //국악
    instance.get('', {params: {...defaultParams, cpage: `${cpage}`, shcate: 'EEEB'} }), //서커스/마술
    instance.get('', {params: {...defaultParams, cpage: `${cpage}`, shcate: 'EEEA'} }), //기타
  ])

  res.status(200).json({ 
    musical: musical.value.data,
    play: play.value.data,
    pop: pop.value.data,
    dance: dance.value.data,
    classic: classic.value.data,
    gukak: gukak.value.data,
    circus: circus.value.data,
    etc: etc.value.data
  });
  // console.log(musical.value.data);
} 

//이번주,,, 데이터,,,
async function apiThisWeek(cpage, res){

// 프로미스 요청
  let [musical, play, pop, dance, classic, gukak, circus, etc] = await Promise.allSettled([
    instance.get('', {params: {...defaultParams2, cpage: `${cpage}`, shcate: 'GGGA'} }), //뮤지컬
    instance.get('', {params: {...defaultParams2, cpage: `${cpage}`, shcate: 'AAAA'} }), //연극
    instance.get('', {params: {...defaultParams2, cpage: `${cpage}`, shcate: 'CCCD'} }), //대중음악
    instance.get('', {params: {...defaultParams2, cpage: `${cpage}`, shcate: 'BBB'} }), //무용
    instance.get('', {params: {...defaultParams2, cpage: `${cpage}`, shcate: 'CCCA'} }), //서양음악
    instance.get('', {params: {...defaultParams2, cpage: `${cpage}`, shcate: 'CCCC'} }), //국악
    instance.get('', {params: {...defaultParams2, cpage: `${cpage}`, shcate: 'EEEB'} }), //서커스/마술
    instance.get('', {params: {...defaultParams2, cpage: `${cpage}`, shcate: 'EEEA'} }), //기타
  ])
console.log(musical.value.data);
  res.status(200).json({ 
    musical: musical.value.data,
    play: play.value.data,
    pop: pop.value.data,
    dance: dance.value.data,
    classic: classic.value.data,
    gukak: gukak.value.data,
    circus: circus.value.data,
    etc: etc.value.data
  });
  // console.log(musical.value.data);
} 

//공연중,,,
async function apiIng(cpage, res){
// 프로미스 요청
  let [musical, play, pop, dance, classic, gukak, circus, etc] = await Promise.allSettled([
    instance.get('', {params: {...defaultParams, cpage: `${cpage}`, shcate: 'GGGA', prfstate: '02'} }), //뮤지컬
    instance.get('', {params: {...defaultParams, cpage: `${cpage}`, shcate: 'AAAA', prfstate: '02'} }), //연극
    instance.get('', {params: {...defaultParams, cpage: `${cpage}`, shcate: 'CCCD', prfstate: '02'} }), //대중음악
    instance.get('', {params: {...defaultParams, cpage: `${cpage}`, shcate: 'BBB', prfstate: '02'} }), //무용
    instance.get('', {params: {...defaultParams, cpage: `${cpage}`, shcate: 'CCCA', prfstate: '02'} }), //서양음악
    instance.get('', {params: {...defaultParams, cpage: `${cpage}`, shcate: 'CCCC', prfstate: '02'} }), //국악
    instance.get('', {params: {...defaultParams, cpage: `${cpage}`, shcate: 'EEEB', prfstate: '02'} }), //서커스/마술
    instance.get('', {params: {...defaultParams, cpage: `${cpage}`, shcate: 'EEEA', prfstate: '02'} }), //기타
  ])

  res.status(200).json({ 
    musical: musical.value.data,
    play: play.value.data,
    pop: pop.value.data,
    dance: dance.value.data,
    classic: classic.value.data,
    gukak: gukak.value.data,
    circus: circus.value.data,
    etc: etc.value.data
  });
  // console.log(musical.value.data);
} 

//공연예정,,,
async function apiUpcoming(cpage, res){
// 프로미스 요청
  let [musical, play, pop, dance, classic, gukak, circus, etc] = await Promise.allSettled([
    instance.get('', {params: {...defaultParams, cpage: `${cpage}`, shcate: 'GGGA', prfstate: '01'} }), //뮤지컬
    instance.get('', {params: {...defaultParams, cpage: `${cpage}`, shcate: 'AAAA', prfstate: '01'} }), //연극
    instance.get('', {params: {...defaultParams, cpage: `${cpage}`, shcate: 'CCCD', prfstate: '01'} }), //대중음악
    instance.get('', {params: {...defaultParams, cpage: `${cpage}`, shcate: 'BBB', prfstate: '01'} }), //무용
    instance.get('', {params: {...defaultParams, cpage: `${cpage}`, shcate: 'CCCA', prfstate: '01'} }), //서양음악
    instance.get('', {params: {...defaultParams, cpage: `${cpage}`, shcate: 'CCCC', prfstate: '01'} }), //국악
    instance.get('', {params: {...defaultParams, cpage: `${cpage}`, shcate: 'EEEB', prfstate: '01'} }), //서커스/마술
    instance.get('', {params: {...defaultParams, cpage: `${cpage}`, shcate: 'EEEA', prfstate: '01'} }), //기타
  ])

  res.status(200).json({ 
    musical: musical.value.data,
    play: play.value.data,
    pop: pop.value.data,
    dance: dance.value.data,
    classic: classic.value.data,
    gukak: gukak.value.data,
    circus: circus.value.data,
    etc: etc.value.data
  });
  // console.log(musical.value.data);
} 


//서치
async function apiSearch(searchWord, cpage, res){
  let encodedWord = encodeURIComponent('우주');
  let page = 1
  let title = await axios.get(`http://www.kopis.or.kr/openApi/restful/pblprfr?service=${API_KEY}&stdate=20240101&eddate=20241231&rows=20&cpage=1&signgucode=11&shprfnm=${encodedWord}`)
  res.json(title.data)//xml민트색
  // console.log(title.data);//문자열같아요 흰색

  let venue = await axios.get(`http://www.kopis.or.kr/openApi/restful/pblprfr?service=${API_KEY}&stdate=20240101&eddate=20241231&rows=20&cpage=${page}&signgucode=11&shprfnmfct=${encodedWord}`)
  res.json(venue.data)
  // console.log(venue.data);



  // let [title, venue] = await Promise.all([
  //   instance.get('', {params: {...defaultParams, shprfnm: encodedWord, cpage: 1} }), // 공연명
  //   instance.get('', {params: {...defaultParams, shprfnmfct: encodedWord, cpage: 1}}), // 공연명
  // ]);

  // console.log(title.data);
  // console.log(venue.data);

  // res.json({ 
  //   title: title.data, 
  //   venue: venue.data 
  // });
  console.log('----------------------------------------------------------------------');
}

//디테일
async function apiDetail(mt20id, res){
  const detail = await axios.get(`http://www.kopis.or.kr/openApi/restful/pblprfr/${mt20id}`, {params: {service:API_KEY} }); // 공연명

  res.json(detail.data);
  // console.log(detail.data.mt10id._text);
}

async function apiDetailMap (mt10id, res){
  const detailMap = await axios.get(`http://www.kopis.or.kr/openApi/restful/prfplc/${mt10id}`, {params: {service:API_KEY} }); // 공연명
  res.json(detailMap.data);
  // console.log(detailMap.data);
}


export default async function handler(req, res){  
  const {type,mt20id,mt10id,cpage,searchWord} = req.query;
  
  switch(type){
    case 'apiCategory': await apiGenre(cpage, res); break;
    case 'apiThisWeek': await apiThisWeek(cpage, res); break;
    case 'apiIng': await apiIng(cpage, res); break;
    case 'apiUpcoming': await apiUpcoming(cpage, res); break;
    case 'apiDetail': await apiDetail(mt20id, res); break;
    case 'apiDetailMap': await apiDetailMap(mt10id, res); break;
    case 'apiSearch': await apiSearch(searchWord,cpage,res); break;
    default:;
  }
}