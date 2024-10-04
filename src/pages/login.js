import React from 'react'
import loginStyle from '@/styles/login.module.scss'

function Login() {
  return (

    <div className={loginStyle.loginwrap}>
      <h2>로그인</h2>
      <form>
        <input type='text'  className='inputb' placeholder='이메일 주소 또는 핸드폰 번호를 입력하세요.'/>
        <input type='password'  className='inputb' placeholder='비밀번호 (영문/숫자/특수문자 조합 8~15자) '/>
        <input type="submit" value="로그인" />
        
        <input type='checkbox' className='checkbox' id="chk1" name="chk" />
        <label for="chk1"><i></i>아이디 저장</label>
        <input type='checkbox' className='checkbox'id="chk2" name="chk"/>
        <label for="chk2"><i></i>자동 로그인</label>
      </form>
      
      
      
      </div>
  )
}

export default Login