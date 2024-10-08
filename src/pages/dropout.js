import React from 'react'
import dropoutStyle from '@/styles/dropout.module.scss'

const dropout = () => {
  const name ="박지연"
  return (
    <div className={dropoutStyle.dropoutwrap}>
        <p>{name}님 <i>정보가 모두 사라져요!</i></p>
        <div className={dropoutStyle.dropbox} id={dropoutStyle.box1}><b>북마크</b><span>50<i>개</i></span></div>
        <div className={dropoutStyle.dropbox}><b>리뷰</b><span>1,024<i>개</i></span></div>
        <div className={dropoutStyle.dropinfo}>
        <p><em></em>꼭 확인해 주세요!</p>
        <ul>
        <li>회원 탈퇴 시 서울더블유 주식회사(SEOUL W corp.)의 모든 서비스에서 탈퇴 처리됩니다.</li>
        <li>회원 탈퇴 시 계정과 관련된 정보는 복구가 불가능합니다.</li>
        <li>동일한 이메일이나 휴대폰 번호로는 30일 간 재가입이 불가능합니다.</li>
        <li>디지털 콘텐츠 등 관련 서비스에서 회원님이 작성하신 콘텐츠에 대한 이용 권한이 상실됩니다.</li>
        </ul>
        </div>
        <form>
        <input type='checkbox' className={dropoutStyle.checkbox} id="info1" name="info" />
        <label for="info1"><i></i>위 내용을 숙지하였으며 탈퇴에 동의합니다.</label>
        <input type="submit" className={dropoutStyle.keepbtn} value="계속 사용하기" />
        <input type="submit" className={dropoutStyle.dropbtn} value="회원 탈퇴" />
        </form>
    </div>
  )
}

export default dropout