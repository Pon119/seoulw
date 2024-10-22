"use client"
import React, { useEffect, useState } from 'react'
import menuTapBarStyle from '@/styles/menuTapBar.module.scss'
import { useRouter } from 'next/router'
import movePageStore from "../store/movePage_store";
import Link from 'next/link';

const MenuTapBar = () => {
  const { detailStoreData } = movePageStore(); //moveDetailData={title:, prfstate:, link:}
  const [isActive, setIsActive] = useState(0);
  const [isDetail, setIsDetail] = useState(false);
  const [buttonText, setButtonText] = useState('예약하기');
  const [hide, setHide] = useState(false);
  const router = useRouter();

  const movePage = (page) => {
    router.push(page)
  }

  const checkStatus = (link, status) => {
    if(link !== '#'){
      switch (status) {
        case '공연중':
          setButtonText('예약하기');
          break;
        case '공연완료':
          setButtonText('공연완료');
          break;
        case '공연예정':
          setButtonText('공연예정');
          break;
        default:
          setButtonText('준비중'); // 기본값
      }
    }else{
      setButtonText('준비중')
    }
  }

  useEffect(() => {
    setIsDetail(() => false);
    setHide(() => false);

    switch(router.pathname){
      case '/':
        setIsActive(() => 0);
        break;
      case '/category':
        setIsActive(() => 1);
        break;
      case '/search':
      case '/search2':
        setIsActive(() => 2);
        break;
      case '/mypage':
        setIsActive(() => 3);
        break;
      case '/detail':
        setIsDetail(() => true)   
        const status = detailStoreData.prfstate;
        const link = detailStoreData.link;
        checkStatus(link, status);
        break;
      case '/login':
      case '/join':
        setHide(() => true)
      default:
        setIsActive(() => 0);
        break;
    }
  }, [router.pathname, detailStoreData])

  return (     
      <nav className={`${menuTapBarStyle.menuTapBar} ${hide ? menuTapBarStyle.hide : ''}`}>
        {
          isDetail ? (
            <div className={menuTapBarStyle.reserveButtonWrap}>
              <Link href={detailStoreData.link ? detailStoreData.link : '#'} target="_blank">
                <button className={`${menuTapBarStyle.reserveButton} ${buttonText === '예약하기' ? '' : (buttonText === '공연예정' ? menuTapBarStyle.upcoming : menuTapBarStyle.completed)}`}>{buttonText}</button>
              </Link>
            </div>
          )
          : 
          (
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
          )
          
        }
      </nav>
  )
}

export default MenuTapBar