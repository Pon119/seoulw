import React, { useEffect, useState } from 'react'
import db from '@/lib/firebase';
import editStyle from '@/styles/edit.module.scss';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import Logininput from '@/components/Logininput';

const edit = () => {
  const idName = 'parkwl***'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [joinname, setJoinname] = useState('');
  const [phone, setPhone] = useState('');

  const [confirmPassword, setConfirmPassword] = useState('');

  const [userData, setUserData] = useState({
    email: '',
    name: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const [loading, setLoading] = useState(true);  // 데이터 로딩 상태

  // Firestore에서 사용자 데이터 가져오기
  useEffect(() => {
    const fetchUserData = async () => {
      const userDocRef = doc(db, 'users', idName);  // Firestore에서 'users' 컬렉션에서 사용자 문서 가져오기
      const userDoc = await getDoc(userDocRef);
      
      if (userDoc.exists()) {
        setUserData({
          email: userDoc.data().email,
          name: userDoc.data().name,
          phone: userDoc.data().phone,
          password: '',
          confirmPassword: '',
        });
      } else {
        console.error('User not found!');
      }
      setLoading(false);
    };
    
    fetchUserData();
  }, [idName]);

  // 폼 제출 핸들러
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (userData.password !== userData.confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    try {
      const userDocRef = doc(db, 'users', idName); // 수정할 사용자 문서 참조

      await updateDoc(userDocRef, {
        email: userData.email,
        name: userData.name,
        phone: userData.phone,
        password: userData.password, // 비밀번호는 암호화해서 저장하는 것이 좋음 (여기선 간단한 예시로 저장)
      });

      alert('수정이 완료되었습니다.');
    } catch (error) {
      console.error('Error updating user data:', error);
      alert('수정 실패');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  



  return (
  
    
    <div className={editStyle.editwrap}>
      <form onSubmit={handleSubmit}>
        <Logininput type="email" msg="아이디" readOnly={true} value={email} setValue={setEmail} className={editStyle.inputemail}/>
        <Logininput type="password" msg="비밀번호 (영문/숫자/특수문자 조합 8~15자)" value={password} setValue={setPassword} />
        <Logininput type="password" msg="비밀번호 확인" value={confirmPassword} setValue={setConfirmPassword} />
        <Logininput type="text" msg="성함" value={joinname} setValue={setJoinname} className={editStyle.inputname}/>
        <Logininput type="tel" msg="휴대폰 번호 ( - 없이 )" value={phone} setValue={setPhone} />
        
        <input type='checkbox' className={editStyle.checkbox} id="info1" name="info" />
        <label for="info1"><i></i>개인 정보 수집 및 이용에 동의합니다.</label>

        <input type="submit" className={editStyle.inputbtn} value="수정 완료" />
      </form>
      </div>
  
  )
}

export default edit