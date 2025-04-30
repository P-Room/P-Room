'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

// 카카오 로그인 후 임시로 사용하게 될 리다이렉션 페이지
// 이후 개발 과정에서는 사라질 예정
function KakaoLoginRedirection() {
  const searchParams = useSearchParams()
  const code = searchParams.get('code')

  useEffect(() => {
    if (code) {
      console.log(code)
    }
  }, [code])

  return (
    <>
      <div>임시 페이지</div>
    </>
  )
}

export default KakaoLoginRedirection
