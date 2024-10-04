import React from 'react'
import { useRouter } from 'next/router'

const ServerError = () => {
  const router = useRouter();
    function goMain() {
        router.push('/');
    }
  return (
    <div>
      <h2>페이지가 작동하지 않습니다.</h2>
      <p>이용에 불편을 드려 죄송합니다.</p>
      <p>잠시 후 다시 시도해 주세요.</p>
      <button onClick={goMain}>메인 페이지로</button>
    </div>
  )
}

export default ServerError