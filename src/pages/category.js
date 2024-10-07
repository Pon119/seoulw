// 2. 카테고리
import React, { useState } from 'react'
import categoryStyle from '@/styles/category.module.scss'

function Category() {

  const [all, setAll] = useState(1);
  const tab = (i)=>{
    setAll(i);
  }
  // if(!res) return <>준비중..</>;

  return (
    <div className={categoryStyle.category}>
      {/* <div>
        <button>뮤지컬</button>
      </div> */}

      <ul>
        <li className={all === 1 ? categoryStyle.selected : ''} onClick={()=>tab(1)}>
          <button>전체</button>
          <div></div>
        </li>
        <li className={all === 2 ? categoryStyle.selected : ''} onClick={()=>tab(2)}>
          <button>이번주</button>
          <div></div>
        </li>
        <li className={all === 3 ? categoryStyle.selected : ''} onClick={()=>tab(3)}>
          <button>공연중</button>
          <div></div>
        </li>
        <li className={all === 4 ? categoryStyle.selected : ''} onClick={()=>tab(4)}>
          <button>공연 예정</button>
          <div></div>
        </li>
      </ul>

      <section>
        {all === 1 && (
          <>
          <figure>
            <img src='./assets/images/poster_07.jpg'/>
            <figcaption>뮤지컬 ( 지킬앤 하이드 ) jeky & Hyde</figcaption>
          </figure>
          <figure>
            <img src='./assets/images/poster_04.jpg'/>
            <figcaption>뮤지컬 (클로버)</figcaption>
          </figure>
          </>
        )}
        {all === 2 && (
          <>
          <figure>
            <img src='./assets/images/poster_07.jpg'/>
            <figcaption>뮤지컬 ( 지킬앤 하이드 ) jeky & Hyde</figcaption>
          </figure>
          </>
        )}
        {all === 3 && (
          <>
          <figure>
            <img src='./assets/images/poster_07.jpg'/>
            <figcaption>뮤지컬 ( 지킬앤 하이드 ) jeky & Hyde</figcaption>
          </figure>
          </>
        )}
        {all === 4 && (
          <>
          <figure>
            <img src='./assets/images/poster_07.jpg'/>
            <figcaption>뮤지컬 ( 지킬앤 하이드 ) jeky & Hyde</figcaption>
          </figure>
          </>
        )}

      </section>
      
    </div>
  )
}

export default Category