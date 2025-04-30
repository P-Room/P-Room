'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

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
