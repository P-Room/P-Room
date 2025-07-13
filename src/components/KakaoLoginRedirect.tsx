'use client'

import api from '@/lib/axios'
import { useSearchParams, useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function KakaoRedirect() {
  const params = useSearchParams()
  const router = useRouter()

  useEffect(() => {
    const code = params.get('code')
    if (code) {
      api
        .get('/me')
        .then((res) => {
          console.log('로그인 성공', res.data)
        })
        .catch((err) => console.error('로그인 실패', err))
    }
  }, [params, router])

  return <div>카카오 로그인 중입니다...</div>
}
