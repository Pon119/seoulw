"use client"
import React, { useEffect, useState } from 'react'
import menuTapBarStyle from '@/styles/menuTapBar.module.scss'
import { useRouter } from 'next/router'

const MenuTapBar = () => {
  const [isActive, setIsActive] = useState(0);
  const router = useRouter();

  const movePage = (page) => {
    router.push(page)
  }

  useEffect(() => {
    switch(router.pathname){
      case '/':
        setIsActive(() => 0);
        console.log(isActive);
        break;
      case '/category':
        setIsActive(() => 1);
        console.log(isActive);
        break;
      case '/search':
        setIsActive(() => 2);
        console.log(isActive);
        break;
      case '/mypage':
        setIsActive(() => 3);
        console.log(isActive);
        break;
      case '/login':
        setIsActive(() => 3);
        console.log(isActive);
        break;
      default:
        setIsActive(() => 0);
        console.log(isActive);
        break;
    }
  }, [router.pathname])
  console.log(isActive);

  return (
    <nav>
      <ul className={menuTapBarStyle.tapBarWrap}>
        <li onClick={() => movePage('/')}>
          <button type='button'>
            <div className={ `${isActive === 0 ? menuTapBarStyle.active : ''}` }>
              <p className={menuTapBarStyle.home}>홈</p>
            </div>
          </button>
        </li>

        <li onClick={() => movePage('/category')}>
          <button type='button'>
            <div className={ `${isActive === 1 ? menuTapBarStyle.active : ''}` }>
              <p className={menuTapBarStyle.category}>카테고리</p>
            </div>
          </button>
        </li>

        <li onClick={() => movePage('/search')}>
          <button type='button'>
            <div className={ `${isActive === 2 ? menuTapBarStyle.active : ''}` }>
              <p className={menuTapBarStyle.search}>검색</p>
            </div>
          </button>
        </li>

        <li onClick={() => movePage('/mypage')}>
          <button type='button'>
            <div className={ `${isActive === 3 ? menuTapBarStyle.active : ''}` }>
              <p className={menuTapBarStyle.my}>MY</p>
            </div>
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default MenuTapBar