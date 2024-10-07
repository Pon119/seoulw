"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import menuTapBarStyle from '@/styles/menuTapBar.module.scss'

const MenuTapBar = () => {
  const [isActive, setIsActive] = useState(0);

  const onToggle = (i) => {
    setIsActive(i);
  }

  return (
    <nav>
      <ul className={menuTapBarStyle.tapBarWrap}>
        <li onClick={() => onToggle(0)}>
          <Link href='/' replace>
            <div className={ `${isActive == 0 ? menuTapBarStyle.active : ''}` }>
              <p className={menuTapBarStyle.home}>홈</p>
            </div>
          </Link>
        </li>

        <li onClick={() => onToggle(1)}>
          <Link href='/category' replace>
            <div className={ `${isActive == 1 ? menuTapBarStyle.active : ''}` }>
              <p className={menuTapBarStyle.category}>카테고리</p>
            </div>
          </Link>
        </li>
        <li  onClick={() => onToggle(2)}>
          <Link href='/search'>
            <div className={ `${isActive == 2 ? menuTapBarStyle.active : ''}` }>
              <p className={menuTapBarStyle.search}>검색</p>
            </div>
          </Link>
        </li>
        <li  onClick={() => onToggle(3)}>
          <Link href='/mypage'>
            <div className={ `${isActive == 3 ? menuTapBarStyle.active : ''}` }>
              <p className={menuTapBarStyle.my}>MY</p>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default MenuTapBar