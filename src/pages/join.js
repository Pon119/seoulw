import React, { useState } from 'react';
import Swal from 'sweetalert2';
import joinStyle from '@/styles/join.module.scss';
import { useRouter } from 'next/router';
import Logininput from '@/components/Logininput';
import { addDoc, collection, query, where , getDocs} from 'firebase/firestore';
import db from '@/lib/firebase';

function Join() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [joinname, setJoinname] = useState('');
    const [phone, setPhone] = useState('');
    const [emailExists, setEmailExists] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
   
    const router = useRouter();


    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(e.target.info1.checked && e.target.info2.checked);

        if (!(e.target.info1.checked && e.target.info2.checked)) {
            setError("이용 약관에 동의해야 합니다.");
            return;
        }

        if (password !== confirmPassword) {
            setError("패스워드가 일치하지 않습니다.");
            return;
        }
        if (!(joinname && email && password && phone)) {
            console.log('회원가입 정보:', { joinname, email, password, phone });
            setError('모든 필드를 입력해주세요.');
            return;
        }

        try {
            console.log( {            
                userId: email,
                userPassword: password,
                userName: joinname, 
                userPhone: phone
            })
            await addDoc(collection(db, "member"), {            
                userId: email,
                userPassword: password,
                userName: joinname, 
                userPhone: phone
            });
           
            console.log("success")
            joinPop(); // 로그인 성공 팝업
            router.push('/login'); // 로그인 완료시 홈 이동
        } catch (error) {
            setError(error.message);
        }
    } ;


    //회원가입 완료 팝업 창    
    function joinPop() {
        Swal.fire({
            title: "회원가입 완료",
            text: `${joinname}님의 회원가입이 완료되었습니다.`,
            icon: "success",
            confirmButtonColor: "#FF4B77",
            confirmButtonText: "Confirm"
        });
    }

   


    return (
        <div className={joinStyle.loginwrap}>
            <h2>회원가입</h2>
            <form onSubmit={handleSubmit}>
                <div className={joinStyle.loginrow}>
                    <Logininput type="email" msg="아이디" value={email} setValue={setEmail} />
                    <button type="button">중복 체크</button>
                </div>
                <Logininput type="password" msg="비밀번호 (영문/숫자/특수문자 조합 8~15자)" value={password} setValue={setPassword} />
                <Logininput type="password" msg="비밀번호 확인" value={confirmPassword} setValue={setConfirmPassword} />
                <Logininput type="text" msg="성함" value={joinname} setValue={setJoinname} />
                <Logininput type="tel" msg="휴대폰 번호 ( - 없이 )" value={phone} setValue={setPhone} />
     
                <div className={joinStyle.inputcheck}>
                    <input type='checkbox' className={joinStyle.checkbox} id="info1" name="info1" />
                    <label htmlFor="info1"><i></i>이용 약관 동의<span>(필수)</span></label>
                </div>
                <div className={joinStyle.inputcheck}>
                    <input type='checkbox' className={joinStyle.checkbox} id="info2" name="info2" /> 
                    <label htmlFor="info2"><i></i>개인 정보 수집 및 이용 동의<span>(필수)</span></label>
                </div>
                <div className={joinStyle.inputcheck}>
                    <input type='checkbox' className={joinStyle.checkbox} id="info3" name="info3" />
                    <label htmlFor="info3"><i></i>E-mail 및 SMS 광고성 정보 수신 동의<span>(선택)</span></label>
                </div>

                <input type="submit" className={joinStyle.inputbtn} value="가입 완료" />
            </form>
        </div>
    );

}
export default Join;
