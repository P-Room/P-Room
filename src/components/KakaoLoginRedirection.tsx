'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function KakaoRedirect() {
  const params = useSearchParams()
  const router = useRouter()

  useEffect(() => {
    const code = params.get('code')
    if (code) {
      fetch('/api/kakao/token', {
        method: 'POST',
        body: JSON.stringify({ code }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log('로그인 성공', data)
          router.push('/') // 홈이나 마이페이지 등으로 이동
        })
        .catch((err) => console.error('로그인 실패', err))
    }
  }, [params, router])

  return <div>카카오 로그인 중입니다...</div>
}
