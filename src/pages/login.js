import React from 'react'
import loginStyle from '@/styles/login.module.scss'

function Login() {
  return (

    <div className={loginStyle.loginwrap}>
      <h2>로그인</h2>
      <form>
        <input type='text' className={loginStyle.inputtext} placeholder='이메일 주소 또는 핸드폰 번호'/>
        <input type='password'  className={loginStyle.inputpass} placeholder='비밀번호 (영문/숫자/특수문자 조합 8~15자) '/>
        <input type="submit" value="로그인" />
        
        <input type='checkbox' className={loginStyle.checkbox} id="chk1" name="chk" defaultChecked/>
        <label htmlFor="chk1"><i></i>아이디 저장</label>
        <input type='checkbox' className={loginStyle.checkbox} id="chk2" name="chk"/>
        <label htmlFor="chk2"><i></i>자동 로그인</label>
      </form>
      <div className={loginStyle.loginbtn}>
        <a href="/">아이디 찾기 </a>
        <a href="/">비밀번호 찾기 </a>
        <a href="/join">회원가입</a>
      </div>
      <div className={loginStyle.loginicon}>
        <button><img src="../../assets/icons/kakao_icon.svg"/></button>
        <button><img src="../../assets/icons/naver_icon.svg"/></button>
        <button><img src="../../assets/icons/google_icon.svg"/></button>
      </div>
      
      </div>
  )
}

export default Login