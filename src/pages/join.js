import React from 'react'
import Swal from 'sweetalert2'
import joinStyle from '@/styles/join.module.scss'
import { collection, addDoc } from "firebase/firestore"; 


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
        <div className={joinStyle.logininput}>
        <input type='text'  className={joinStyle.inputtext} placeholder='이메일 주소'/>
        <button type="button" class={`${joinStyle.input_reset_btn} ${joinStyle.inp_button}`}></button>
        <p class="error_msg"></p>
        </div>
        <div className={joinStyle.logininput}>
        <input type='password'  className={joinStyle.inputpass} placeholder='비밀번호 (영문/숫자/특수문자 조합 8~15자) '/>
        <button type="button" class={`${joinStyle.input_eye_btn} ${joinStyle.inp_button}`}></button>
        <button type="button" class={`${joinStyle.input_reset_btn} ${joinStyle.inp_button}`}></button>
        <p class="error_msg"></p>
        </div>
        <div className={joinStyle.logininput}>
        <input type='password'  className={joinStyle.inputpass} placeholder='비밀번호 확인'/>
        <button type="button" class={`${joinStyle.input_eye_btn} ${joinStyle.inp_button}`}></button>
        <button type="button" class={`${joinStyle.input_reset_btn} ${joinStyle.inp_button}`}></button>
        <p class="error_msg"></p> 
        </div>
       <div className={joinStyle.logininput}>
       <input type='text'  className={joinStyle.inputname} placeholder='성함 '/>
       <button type="button" class={`${joinStyle.input_reset_btn} ${joinStyle.inp_button}`}></button>
       <p class="error_msg"></p> 
       </div>
        <div className={joinStyle.logininput}>
        <input type='phone'  className={joinStyle.inputphone} placeholder='휴대폰 번호 ( - 없이 )'/>
        <button type="button" class={`${joinStyle.input_reset_btn} ${joinStyle.inp_button}`}></button>
        <p class="error_msg"></p> 
        </div>
        <div className={joinStyle.inputcheck}>
        <input type='checkbox' className={joinStyle.checkbox} id="info1" name="info" />
        <label for="info1"><i></i>이용 약관 동의<span>(필수)</span></label>
        </div>
        <div className={joinStyle.inputcheck}>
        <input type='checkbox' className={joinStyle.checkbox} id="info2" name="info" /> 
        <label for="info2"><i></i>개인 정보 수집 및 이용 동의<span>(필수)</span></label>
        </div>
        <div className={joinStyle.inputcheck}>
        <input type='checkbox' className={joinStyle.checkbox} id="info3" name="info" />
        <label for="info3"><i></i>E-mail 및 SMS 광고성 정보 수신 동의<span>(선택)</span></label>
        </div>

        <input type="submit" className={joinStyle.inputbtn} value="가입 완료" onClick={joinPop}/>
      </form>
      
      </div>
  )
}

export default Join