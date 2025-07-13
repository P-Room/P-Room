'use client'

import { tm } from '@/utils/tw-merge'
import LoggedInHeader from './LoggedInHeader'
import LoggedOutHeader from './LoggedOutHeader'
import { useEffect, useState } from 'react'
import api from '@/lib/axios'
import { Suspense } from 'react'

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>()

  const test = async () => {
    const data = await api
      .get('/me')
      .then((res) => {
        setIsLoggedIn(true)
        return res.data
      })
      .catch(() => {
        setIsLoggedIn(false)
        return null
      })

    console.log(data)
  }

  useEffect(() => {
    test()
    console.log(isLoggedIn)
  }, [])

  return (
    <Suspense>
      {isLoggedIn ? (
        <div
          className={tm(
            'flex flex-row justify-between items-center',
            'w-full h-16 py-2 pl-4 pr-8',
            'shadow-[0_2px_4px_rgba(0,0,0,0.25)]',
            // 추후 삭제
            'mb-4'
          )}
        >
          {/* 로그인 상태에서 나타낼 헤더 */}
          <LoggedInHeader />
        </div>
      ) : (
        <div
          className={tm(
            'flex flex-row justify-between items-center',
            'w-full h-16 py-2 pl-4 pr-8',
            'shadow-[0_2px_4px_rgba(0,0,0,0.25)]',
            // 추후 삭제
            'mb-4'
          )}
        >
          {/* 비로그인 상태에서 나타낼 헤더 */}
          <LoggedOutHeader />
        </div>
      )}
    </Suspense>

  )
}

export default Header
