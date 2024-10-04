import React from 'react'
import footerStyle from "@/styles/footer.module.scss";
import Link from 'next/link';
import { useRouter } from 'next/router';

function Footer() {
  const router = useRouter();
  if(router.pathname === '/search' || router.pathname === '/mypage'){
    return null;
  }
  return (
    <footer className={footerStyle.footer}>
      <div>
        <ul className={footerStyle.policy}>
          <li><Link href='#'>이용 약관</Link></li>
          <li><Link href='#'>개인 정보 처리 방침</Link></li>
        </ul>
      </div>

      <div>
        <h3>서울더블유 주식회사</h3>
        <ul>
          <li>대표 이사: 고유나</li>
          <li>서울 강남구 테헤란로5길 24 장연빌딩 3~6층</li>
          <li>사업자 등록 번호: 123 45 67890</li>
          <li>통신 판매업 신고 번호: 제 2024 서울 강남 12345호</li>
          <li>고객 센터: 02-455-6678</li>
        </ul>
      </div>

      <div>
        <p>Copyright ⓒ SEOUL W corp. All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer