import React from 'react'
import Swal from 'sweetalert2'
import joinStyle from '@/styles/join.module.scss'


function Join() {
  const name = '박지연'
  //로그아웃 POPUP
  function joinPop(e){
    e.preventDefault();
    
    Swal.fire({
      title: "회원가입 완료",
      text: `${name}님의 회원가입이 완료되었습니다.`,
      icon: "success",
      confirmButtonColor: "#FF4B77",
      confirmButtonText: "Confirm"
    });
  }


  return (
    <div className={joinStyle.loginwrap}>
      <h2>회원가입</h2>
      <form>
        <input type='text'  className={joinStyle.inputtext} placeholder='이메일 주소'/>
        <input type='password'  className={joinStyle.inputpass} placeholder='비밀번호 (영문/숫자/특수문자 조합 8~15자) '/>
        <input type='password'  className={joinStyle.inputpass} placeholder='비밀번호 확인'/>
        <input type='text'  className={joinStyle.inputname} placeholder='성함 '/>
        <input type='phone'  className={joinStyle.inputphone} placeholder='휴대폰 번호 ( - 없이 )'/>
        
        <input type='checkbox' className={joinStyle.checkbox} id="info1" name="info" />
        <label for="info1"><i></i>개인 정보 수집 및 이용에 동의합니다.</label>

        <input type="submit" className={joinStyle.inputbtn} value="가입 완료" onClick={joinPop}/>
      </form>
      
      </div>
  )
}

export default Join