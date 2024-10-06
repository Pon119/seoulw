import React from 'react'
import joinStyle from '@/styles/join.module.scss'

function Join() {
  return (
    <div className={joinStyle.loginwrap}>
      <h2>회원가입</h2>
      <form>
        <input type='text'  className='inputb' placeholder='이메일 주소 또는 핸드폰 번호'/>
        <input type='password'  className='inputb' placeholder='비밀번호 (영문/숫자/특수문자 조합 8~15자) '/>
        <input type='password'  className='inputb' placeholder='비밀번호 확인'/>
        <input type='text'  className='inputb' placeholder='성함 '/>
        <input type='phone'  className='inputb' placeholder='휴대폰 번호 ( - 없이 )'/>
        <input type="submit" value="가입 완료" />

        <input type='checkbox' className='checkbox' id="info1" name="info" />
        <label for="info1"><i></i>개인 정보 수집 및 이용에 동의합니다.</label>
      </form>
      
      </div>
  )
}

export default Join