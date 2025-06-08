'use client'

import { tm } from '@/utils/tw-merge'
import Image from 'next/image'

function KakaoLoginButton() {
  const handleLogin = () => {
    // 키 값과 URI는 이후 개발 과정에서 추가될 예정
    const REST_API_KEY = 'd773ffb4016733284e32a07069ebf666'
    const REDIRECT_URI = 'http://43.202.53.55:8080/login/oauth2/code/kakao'
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`

    // 로그인 시 카카오로 연결해주는 역할을 담당(SPA적 움직임X)
    window.location.href = KAKAO_AUTH_URL
  }

  return (
    <>
      {/* 카카오 디자인 규정에 맞춰 작성한 코드  */}
      <button
        type="button"
        className={tm(
          'bg-[#FEE500] rounded-2xl text-black text-[24px] font-semibold',
          'flex items-center justify-center gap-4 mx-auto w-150 py-5',
          'cursor-pointer'
        )}
        onClick={handleLogin}
      >
        <Image src="/icons/kakao-login.svg" alt="" width={36} height={36} />
        카카오 로그인
      </button>
    </>
  )
}

export default KakaoLoginButton
