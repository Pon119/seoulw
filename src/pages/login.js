import React, { useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/router';
import Logininput from '@/components/Logininput';
import Link from 'next/link'
import loginStyle from '@/styles/login.module.scss'



function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  async function handleSubmit(e){
    
    e.preventDefault(); 

    let id=e.target.id.value,
        password =e.target.pw.value;
        console.log(id, password);

    //signIn이 계속 새로고침을 함 -> redirect: false로 해야 새로고침 안됨
    let loginResult = await signIn('credentials',{
                  redirect:false, id, password
                 }); 
      console.log(loginResult);
      if(loginResult.ok){
       
        //홈 화면으로 페이지 이동시
        const router = useRouter()
        router.push('/')


      }else{
        console.log("Error", loginResult.error);
      }
   }
   const { data: session } = useSession()
  //  console.log(session);
 
   if (session) {
    
    router.push("mypage");
   }
 
  return (

    <div className={loginStyle.loginwrap}>
      <h2>로그인</h2>
      <form onSubmit={handleSubmit}>
       <Logininput  type="email" msg="아이디" value={email} setValue={setEmail}/>
       <Logininput type="password" msg="비밀번호 (영문/숫자/특수문자 조합 8~15자)" value={password} setValue={setPassword} />
      
        <input type="submit" value="로그인" onClick={() => signIn()} />
        
        <input type='checkbox' className={loginStyle.checkbox} id="chk1" name="chk" defaultChecked/>
        <label htmlFor="chk1"><i></i>아이디 저장</label>
        <input type='checkbox' className={loginStyle.checkbox} id="chk2" name="chk"/>
        <label htmlFor="chk2"><i></i>자동 로그인</label>
      </form>
      <div className={loginStyle.loginbtn}>
      <Link href="/">아이디 찾기</Link>
      <Link href="/">비밀번호 찾기</Link>
      <Link href="/join">회원가입</Link>
      </div>
      <div className={loginStyle.loginicon}>
        <button onClick={()=>signIn('github',{callbackUrl:'/'})}><img src="../../assets/icons/github_icon1.svg"/></button>
        <button onClick={()=>signIn('naver',{callbackUrl:'/'})}><img src="../../assets/icons/naver_icon.svg"/></button>
        <button onClick={()=>signIn('google',{callbackUrl:'/'})}><img src="../../assets/icons/google_icon.svg"/></button>
        {/* 콜백,{callbackUrl:'/'}안넣으면 홈으로 안가고 마이페이지에 남음 */}
        {/* <button onClick={()=>signIn('google')}><img src="../../assets/icons/google_icon.svg"/></button> */}
      </div>  
      </div>
  )
}

export default Login