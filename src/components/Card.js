import React, { useState } from 'react'
import cardStyle from "@/styles/card.module.scss";

function Card({item}) {
  let isPerform = item.performing;
  const [isActive, setIsActive] = useState(false);
  const likeToggle = () => {
    setIsActive((prev) => !prev)
  }

  return (
    <div className={cardStyle.cardWrap}>
      <figure>
        <div className={cardStyle.imgWrap}>
          <img src={item.img} alt='posterName'/>
          <button onClick={likeToggle} className={`${cardStyle.like} ${(isActive) ? (cardStyle.active) : ('')}`}>하트</button>
        </div>
        <figcaption className={cardStyle.imgDescription}>
          <span className={`${cardStyle.status} ${(isPerform === '공연중') ? (cardStyle.ongoing) : (isPerform === '공연 완료' ? cardStyle.ended : cardStyle.upcoming)}`}></span>
          <h3 className={cardStyle.title}>
            {item.title}
          </h3>
          <ul>
            <li className={cardStyle.venue}>              
              {item.venue}
            </li>
            <li className={cardStyle.date}>              
              {item.date}
            </li>
          </ul>
        </figcaption>
      </figure>

    </div>
  )
}

export default Card