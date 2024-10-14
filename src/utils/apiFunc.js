import axios from 'axios';
import React from 'react'

var convert = require('xml-js');

function xmlTOjson (axiosResult,genre){
  const xmlData = genre === undefined ? axiosResult.data : axiosResult.data[genre]; 
  
  const jsonGenre = convert.xml2json(xmlData, {compact: true, spaces: 4});
  let dataGenre = JSON.parse(jsonGenre).dbs.db;
  return dataGenre;
}

export const fn = {
  category : async (genre,cpage) => {
    let c = await axios.get(`/api/api?type=apiCategory&cpage=${cpage}`);

    //장르별로 하나씩 변환
    switch(genre){
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
  thisWeek : async (genre,cpage) => {
    let c = await axios.get(`/api/api?type=apiThisWeek&cpage=${cpage}`);
    
    //장르별로 하나씩 변환
    switch(genre){
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
  ing : async (genre,cpage) => {
    let c = await axios.get(`/api/api?type=apiIng&cpage=${cpage}`);

    //장르별로 하나씩 변환
    switch(genre){
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
  upcoming : async (genre,cpage) => {
    let c = await axios.get(`/api/api?type=apiUpcoming&cpage=${cpage}`);

    //장르별로 하나씩 변환
    switch(genre){
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
    let {data} = await axios.get(`/api/api?type=apiSearch&searchWord=${searchWord}&cpage=${page}`);
    
    return data;
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