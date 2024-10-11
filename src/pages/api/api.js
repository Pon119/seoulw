import axios from 'axios'
import React from 'react'

const API_KEY = '7b1ab9ea464e4d70ad4c8bad7505f532';
const defaultParams = {
  service: API_KEY,
  stdate: '20240101',
  eddate: '20241231',
  rows: '20',
  signgucode: '11'
};

const instance = axios.create({
  baseURL: 'http://www.kopis.or.kr/openApi/restful/pblprfr',
  params: defaultParams
});

var convert = require('xml-js');

//메인 & 카테고리용
async function sos_code_blue(cpage, res){
  

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
} 


//서치
async function apiSearch({searchWord, num}, res){
  let [title, venue] = await Promise.all([
    instance.get('', {params: {...defaultParams, shprfnm: encodeURIComponent(searchWord), cpage: (num)} }), // 공연명
    instance.get('', {params: {...defaultParams, shprfnmfct: encodeURIComponent(searchWord), cpage: 1} }), // 공연명
  ]);
  res.json({ 
    title: title.value.data, 
    venue: venue.value.data 
  });
}

//디테일
async function apiDetail(mt20id, res){
  // mt20id = 'PF250136';
  // const detail = axios.get(`http://www.kopis.or.kr/openApi/restful/pblprfr/$mt20id{mt20id}`, {params: {service:API_KEY} }); // 공연명
  const detail = axios.get(`http://www.kopis.or.kr/openApi/restful/pblprfr/${mt20id}`, {params: {service:API_KEY} }); // 공연명

  res.json(detail.value.data);
  // console.log(detail.value.data);
  // let mt10id = 'FC001247';
  // const detailMap = axios.get(`http://www.kopis.or.kr/openApi/restful/prfplc/${mt10id}`, {params: {service:API_KEY} }); // 공연명
  
  // res.json({ 
  //   detail: detail.value.data,
  //   detailMap: detailMap.value.data
  // });
  console.log(detail.value.data);
}


export default async function handler(req, res){  
  const {type,mt20id,cpage,searchWord} = req.query;
  
  switch(type){
    case 'apiCategory': await sos_code_blue(cpage, res); break;
    case 'apiSearch': await apiSearch(searchWord,cpage,res); break;
    case 'apiDetail': await apiDetail(mt20id, res); break;
    default:;
  }
}