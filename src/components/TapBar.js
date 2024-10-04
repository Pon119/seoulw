"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import tapBarStyle from '@/styles/tapBar.module.scss'

const TapBar = () => {
  const [isActive, setIsActive] = useState(0);

  const onToggle = (i) => {
    setIsActive(i);
  }

  return (
    <nav>
      <ul className={tapBarStyle.tapBarWrap}>
        <li onClick={() => onToggle(0)}>
          <Link href='/' replace>
            <div className={ `${isActive == 0 ? tapBarStyle.active : ''}` }>
              <p className={tapBarStyle.home}>홈</p>
            </div>
          </Link>
        </li>

        <li onClick={() => onToggle(1)}>
          <Link href='/category' replace>
            <div className={ `${isActive == 1 ? tapBarStyle.active : ''}` }>
              <p className={tapBarStyle.category}>카테고리</p>
            </div>
          </Link>
        </li>
        <li  onClick={() => onToggle(2)}>
          <Link href='/search'>
            <div className={ `${isActive == 2 ? tapBarStyle.active : ''}` }>
              <p className={tapBarStyle.search}>검색</p>
            </div>
          </Link>
        </li>
        <li  onClick={() => onToggle(3)}>
          <Link href='/mypage'>
            <div className={ `${isActive == 3 ? tapBarStyle.active : ''}` }>
              <p className={tapBarStyle.my}>MY</p>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default TapBar