import axios from 'axios';
import React from 'react'

var convert = require('xml-js');

function xmlTOjson (axiosResult, shcate){
  let genre = '';
  const genreParams = [
    { shcate: 'GGGA', label: 'musical' }, // 뮤지컬
    { shcate: 'AAAA', label: 'play' }, // 연극
    { shcate: 'CCCD', label: 'pop' }, // 대중음악
    { shcate: 'BBB', label: 'dance' }, // 무용
    { shcae: 'CCCA', label: 'classic' }, // 서양음악
    { shcate: 'CCCC', label: 'gukak' }, // 국악
    { shcate: 'EEEB', label: 'circus' }, // 서커스/마술
    { shcate: 'EEEA', label: 'etc' } // 기타
  ];
  genreParams.forEach((obj) => {
    if(obj.shcate === shcate ){
      genre = obj.label
    }
  })

  const xmlData = (genre === '') ? axiosResult.data : axiosResult.data[genre]; 
  
  const jsonGenre = convert.xml2json(xmlData, {compact: true, spaces: 4});
  let dataGenre = JSON.parse(jsonGenre).dbs.db;
  return dataGenre;
}

export const fn = {
  main : async () => {
    let res = await axios.get(`/api/api?type=apiMain`);
    // console.log(res.data.genres)
    console.log(res.data.ing)
    // console.log(res.data.thisWeek)
    // console.log(res.data.upcoming)

    // let genresObj = {musical:[], play:[], pop:[], dance:[], classic:[], gukak:[], circus:[], etc:[]};
    // let genresObj = {musical:[], play:[], pop:[], dance:[], classic:[], gukak:[], circus:[], etc:[]};
    // let genresObj = {musical:[], play:[], pop:[], dance:[], classic:[], gukak:[], circus:[], etc:[]};
    // let genresObj = {musical:[], play:[], pop:[], dance:[], classic:[], gukak:[], circus:[], etc:[]};

    // (res.data.genres).forEach((obj) => {
    //   const key = Object.keys(obj)[0]; 
    //   if(  Object.keys(genresObj).includes(key)  ){
    //     genresObj[key].push(xmlTOjson(Object.values(obj)[0], key))
    //   }
    // })
    // console.log(genresObj);
    
    // let dataMusical = xmlTOjson(c,'musical');
    
    // let dataMusical = xmlTOjson(c,'musical');
    // let dataPlay = xmlTOjson(c,'play');    
    // let dataPop = xmlTOjson(c,'pop');    
    // let dataDance = xmlTOjson(c,'dance');    
    // let dataClassic = xmlTOjson(c,'classic');    
    // let dataGukak = xmlTOjson(c,'gukak');    
    // let dataCircus = xmlTOjson(c,'circus');
    // let dataEtc = xmlTOjson(c,'etc');
  },

  genre : async (shcate, cpage) => {
    let res = await axios.get(`/api/api?type=apiGenre&shcate=${shcate}&cpage=${cpage}`);
    let resToJson = xmlTOjson(res);
    return resToJson;
  },

  thisWeek : async (shcate, cpage) => {
    let res = await axios.get(`/api/api?type=apiThisWeek&shcate=${shcate}&cpage=${cpage}`);
    let resToJson = xmlTOjson(res);
    return resToJson;
  },

  ing : async (shcate, cpage) => {
    let res = await axios.get(`/api/api?type=apiIng&shcate=${shcate}&cpage=${cpage}`);
    let resToJson = xmlTOjson(res);
    return resToJson;
  },

  upcoming : async (shcate, cpage) => {
    let res = await axios.get(`/api/api?type=apiUpcoming&shcate=${shcate}&cpage=${cpage}`);
    let resToJson = xmlTOjson(res);
    return resToJson;
    //장르별로 하나씩 변환
    switch(shcate){
      case 'musical':
        let dataMusical = xmlTOjson(c,'musical');
        return dataMusical
        
      case 'play':
        let dataPlay = xmlTOjson(c,'play');
        return dataPlay
        
      case 'pop':
        let dataPop = xmlTOjson(c,'pop');
        return dataPop
        
      case 'dance':
        let dataDance = xmlTOjson(c,'dance');
        return dataDance
        
      case 'classic':
        let dataClassic = xmlTOjson(c,'classic');
        return dataClassic
        
      case 'gukak':
        let dataGukak = xmlTOjson(c,'gukak');
        return dataGukak
        
      case 'circus':
        let dataCircus = xmlTOjson(c,'circus');
        return dataCircus
        
      case 'etc':
        let dataEtc = xmlTOjson(c,'etc');
        return dataEtc
      default:          
        // dataMusical = xmlTOjson(c,'musical');
        // return dataMusical;
    }
  },

  search : async (searchWord,page) =>{
    let res = await axios.get(`/api/api?type=apiSearch&searchWord=${searchWord}&cpage=${page}`);
    let resToJson = xmlTOjson(res, shcate);
    return resToJson;
  },

  detail : async (mt20id) => {
    let a = await axios.get(`/api/api?type=apiDetail&mt20id=${mt20id}`);
  // console.log(a.data);
  //json 변환
    var result = convert.xml2json(a.data, {compact: true, spaces: 4});
    var re = JSON.parse(result).dbs.db;
    console.log(re.mt10id._text);
    let placeId = re.mt10id._text;

    let b = await axios.get(`/api/api?type=apiDetailMap&mt10id=${placeId}`)
    //json 변환
    var result2 = convert.xml2json(b.data, {compact: true, spaces: 4});
    var re2 = JSON.parse(result2).dbs.db;
    console.log(re2);
    
    return {re, re2};
  }
}