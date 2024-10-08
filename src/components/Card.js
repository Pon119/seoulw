import React, { useState } from 'react'
import cardStyle from "@/styles/card.module.scss";

function Card({item}) {
  let isPerform = item.prfstate;
  const [isActive, setIsActive] = useState(false);
  const likeToggle = () => {
    setIsActive((prev) => !prev)
  }

  return (
    <div className={cardStyle.cardWrap}>
      <figure>
        <div className={cardStyle.imgWrap}>
          <img src={item.poster} alt={item.prfnm} />
          <button onClick={likeToggle} className={`${cardStyle.like} ${(isActive) ? (cardStyle.active) : ('')}`} type="button"></button>
        </div>
        <figcaption className={cardStyle.imgDescription}>
          <span className={`${cardStyle.status} ${(isPerform === '공연중') ? (cardStyle.ongoing) : (isPerform === '공연 완료' ? cardStyle.ended : cardStyle.upcoming)}`}></span>
          <h3 className={cardStyle.title}>
            {item.prfnm}
          </h3>
          <ul>
            <li className={cardStyle.venue}>              
              {item.fcltynm}
            </li>
            <li className={cardStyle.date}>              
              {item.prfpdfrom}~{item.prfpdto}
            </li>
          </ul>
        </figcaption>
      </figure>

    </div>
  )
}

export default Card