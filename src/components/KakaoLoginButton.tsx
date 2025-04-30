'use client'

import { tm } from '@/utils/tw-merge'
import Image from 'next/image'

function KakaoLoginButton() {
  const REST_API_KEY = '로그인에사용될키값'
  const REDIRECT_URI = '로그인후에사용될값'
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`

  const handleLogin = () => {
    window.location.href = KAKAO_AUTH_URL
  }

  return (
    <>
      <button
        type="button"
        className={tm(
          'bg-[#FEE500] rounded-2xl text-black text-xl',
          'flex items-center justify-center gap-10 mx-auto w-2/5 py-5',
          'cursor-pointer'
        )}
        onClick={handleLogin}
      >
        <Image src="/icons/kakao-login.svg" alt="" width={32} height={32} />
        카카오 로그인
      </button>
    </>
  )
}

export default KakaoLoginButton
