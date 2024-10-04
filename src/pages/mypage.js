// 4. MY
import React from 'react'
import { useRouter } from 'next/router'
import mypageStyle from '@/styles/mypage.module.scss'
import Login from './login'




function Mypage() {
  
  const router = useRouter()
  router.push('login')

  return (
    <div>

    </div>
  )
}

export default Mypage