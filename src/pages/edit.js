import React from 'react'
import editStyle from '@/styles/edit.module.scss'
import Header from "@/components/Header";

const edit = () => {
  const idName = 'parkwl***'
  return (
  
    <Header>
    <div className={editStyle.editwrap}>
    {/* <div className={mypageStyle.topwrap}>
    <button><img src="../../assets/icons/arrow_left.svg"/></button>
    <p>회원 정보 수정</p>
    </div> */}
      <form>
        <input type='Email' label="Email" readOnly className={editStyle.inputtext} placeholder={idName} />
        <input type='password'  className={editStyle.inputpass} placeholder='비밀번호 (영문/숫자/특수문자 조합 8~15자) '/>
        <input type='password'  className={editStyle.inputpass} placeholder='비밀번호 확인'/>
        <input type='text' readOnly className={editStyle.inputname} placeholder='성함 '/>
        <input type='phone'  className={editStyle.inputphone} placeholder='휴대폰 번호 ( - 없이 )'/>
        
        <input type='checkbox' className={editStyle.checkbox} id="info1" name="info" />
        <label for="info1"><i></i>개인 정보 수집 및 이용에 동의합니다.</label>

        <input type="submit" className={editStyle.inputbtn} value="수정 완료" />
      </form>
      </div>
   </Header>
  )
}

export default edit