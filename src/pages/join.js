import React, { useState } from 'react';
import Swal from 'sweetalert2';
import joinStyle from '@/styles/join.module.scss';
import { useRouter } from 'next/router';
import Logininput from '@/components/Logininput';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '@/lib/firebase';

function Join() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [joinname, setJoinname] = useState('');
    const [phone, setPhone] = useState('');

    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();


    const handleSubmit = async (e) => {
        e.preventDefault();

        addDoc(collection(db, 'member'),obj)

        if (joinname && email && password && phone) {
            console.log('회원가입 정보:', { joinname, email, password, phone });
            joinPop(); // 회원가입 완료 팝업 호출
            router.push('/'); // 홈 페이지로 이동
        } else {
            setError('모든 필드를 입력해주세요.');
        }
    };

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
                <Logininput type="email" msg="아이디" value={email} setValue={setEmail} />
                <Logininput type="password" msg="비밀번호 (영문/숫자/특수문자 조합 8~15자)" value={password} setValue={setPassword} />
                <Logininput type="password" msg="비밀번호 확인" value={confirmPassword} setValue={setConfirmPassword} />
                <Logininput type="text" msg="성함" value={joinname} setValue={setJoinname} />
                <Logininput type="tel" msg="휴대폰 번호 ( - 없이 )" value={phone} setValue={setPhone} />
     
                <div className={joinStyle.inputcheck}>
                    <input type='checkbox' className={joinStyle.checkbox} id="info1" name="info" />
                    <label htmlFor="info1"><i></i>이용 약관 동의<span>(필수)</span></label>
                </div>
                <div className={joinStyle.inputcheck}>
                    <input type='checkbox' className={joinStyle.checkbox} id="info2" name="info" /> 
                    <label htmlFor="info2"><i></i>개인 정보 수집 및 이용 동의<span>(필수)</span></label>
                </div>
                <div className={joinStyle.inputcheck}>
                    <input type='checkbox' className={joinStyle.checkbox} id="info3" name="info" />
                    <label htmlFor="info3"><i></i>E-mail 및 SMS 광고성 정보 수신 동의<span>(선택)</span></label>
                </div>

                <input type="submit" className={joinStyle.inputbtn} value="가입 완료" />
            </form>
        </div>
    );
}

export default Join;
