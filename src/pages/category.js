// 2. 카테고리
import React, { useEffect, useState } from 'react'
import categoryStyle from '@/styles/category.module.scss'
import Card from '@/components/Card';
import GenresTapBar from '@/components/GenresTapBar';
import axios from 'axios';
import { handler } from '../pages/api/api';
import { fn } from '@/utils/apiFunc';

function Category() {
  const [all, setAll] = useState(1);
  const [clickedGenre, setClickedGenre] = useState(0);
  const [functionData, setFunctionData] = useState([]);

  const tab = (i)=>{
    setAll(i);
  }


  let count = 1;
  const genreMapping = [
    'GGGA',
    'AAAA',
    'CCCD',
    'BBB',
    'CCCA',
    'CCCC',
    'EEEB',
    'EEEA',
  ];

  const handleGenre = async () => {
    const shcateValue = genreMapping[clickedGenre];
    const data = await fn.genre(shcateValue, 1); 
    console.log(data);
    setFunctionData(data);
  };

  useEffect(()=>{
    handleGenre();
    setAll(1);
  },[clickedGenre])

  // useEffect(() => {
  //   console.log(functionData);
  // }, [functionData]);

  const handleThisWeek = async () => {
    const shcateValue = genreMapping[clickedGenre];
    const data = await fn.thisWeek(shcateValue, 1); 
    console.log(data);
    setFunctionData(data);
  };
  const handleIng = async () => {
    const shcateValue = genreMapping[clickedGenre];
    const data = await fn.ing(shcateValue, 1); 
    setFunctionData(data);
  };
  const handleUpcoming = async () => {
    const shcateValue = genreMapping[clickedGenre];
    const data = await fn.upcoming(shcateValue, 1); 
    setFunctionData(data);
  };


  
  // if(!data.length) return<></>;

  return (
    <div className={`categoryCommon ${categoryStyle.category}`}>
      <div className={categoryStyle.genresTapBarWrap}>
        <GenresTapBar clickedGenre={clickedGenre} setClickedGenre={setClickedGenre}/>
      </div>

      <ul>
        <li className={all === 1 ? categoryStyle.selected : ''} onClick={()=>tab(1)}>
          <button onClick={handleGenre}>전체</button>
          <div></div>
        </li>
        <li className={all === 2 ? categoryStyle.selected : ''} onClick={()=>tab(2)}>
          <button onClick={handleThisWeek}>이번주</button>
          <div></div>
        </li>
        <li className={all === 3 ? categoryStyle.selected : ''} onClick={()=>tab(3)}>
          <button onClick={handleIng}>공연중</button>
          <div></div>
        </li>
        <li className={all === 4 ? categoryStyle.selected : ''} onClick={()=>tab(4)}>
          <button onClick={handleUpcoming}>공연 예정</button>
          <div></div>
        </li>
      </ul>

      <section>
        {all === 1 && (
          <>
          {functionData.map((item,i) => (
            <Card key={i} item={item}/>
          ))}
          </>
        )}
        {all === 2 && functionData.length > 0 && (
          <>
          {functionData.map((item,i) => (
            <Card key={i} item={item}/>
          ))}
          </>
        )}
        {all === 3 && (
          <>
          {functionData.map((item,i) => (
            <Card key={i} item={item}/>
          ))}
          </>
        )}
        {all === 4 && (
          <>
          {functionData.map((item,i) => (
            <Card key={i} item={item}/>
          ))}
          </>
        )}

      </section>
      
    </div>
  )
}

export default Category