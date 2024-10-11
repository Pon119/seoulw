import React from 'react'

var convert = require('xml-js');

export default async function category (genre, cpage){
  let result = await axios.get(`/api/api?type=apiCategory&cpage=${cpage}`);

  var result2 = convert.xml2json(result.data[genre], {compact: true, spaces: 4});
  var data = JSON.parse(result2).dbs.db;
  return data;
}


export default async function detail(id){
  // let a = await axios.get('/api/api?type=apiDetail');
  let result = await axios.get(`/api/api?type=apiDetail&mt20id=${id}`);
  console.log()

  var result2 = convert.xml2json(result.data, {compact: true, spaces: 4});
  var data = JSON.parse(result2).dbs.db;
  return data;
}