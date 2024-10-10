import axios from 'axios'
import React from 'react'

const API_KEY = '7b1ab9ea464e4d70ad4c8bad7505f532';
const defaultParams = {
  service: API_KEY,
  stdate: '20240101',
  eddate: '20241231',
  rows: '20',
  signgucode: '11'
}

const instance = axios.create({
  baseURL: 'http://www.kopis.or.kr/openApi/restful/pblprfr',
  params: defaultParams
});

//메인 & 카테고리용
export async function sos_code_blue(){
  let [musical, play, pop, dance, classic, circus, etc] = await Promise.all([
    instance.get('&cpage=1&shcate=GGGA'), //뮤지컬
    instance.get('&cpage=1&shcate=AAAA'), //연극
    instance.get('&cpage=1&shcate=CCCD'), //대중음악
    instance.get('&cpage=1&shcate=BBB'), //무용
    instance.get('&cpage=1&shcate=CCCA'), //서양음악
    instance.get('&cpage=1&shcate=CCCC'), //국악
    instance.get('&cpage=1&shcate=EEEB'), //서커스/마술
    instance.get('&cpage=1&shcate=EEEA'), //기타
  ])
  return {musical, play, pop, dance, classic, circus, etc};
} 

//서치
export async function apiSearch({searchWord}){
  let [title, venue] = await Promise.all([
    instance.get(`/?shprfnm=${encodeURIComponent(searchWord)}`), // 공연명
    instance.get(`/?shprfnmfct=${encodeURIComponent(searchWord)}`), // 공연장소
    
  ]);
  return {title, venue};
}

//디테일
export async function apiDetail(mt20id){  
  const response = await axios.get(`http://www.kopis.or.kr/openApi/restful/pblprfr/${mt20id}?service=7b1ab9ea464e4d70ad4c8bad7505f532`);
  // const detailMap = await axios.get(`http://www.kopis.or.kr/openApi/restful/prfplc/${mt10id}?service=7b1ab9ea464e4d70ad4c8bad7505f532`);
  // return {detail}
  console.log(response.data); // 응답 구조 확인
  return { detail: response.data };
}
