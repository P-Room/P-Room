'use client'

import { tm } from '@/utils/tw-merge'
import LoggedInHeader from './LoggedInHeader'
import LoggedOutHeader from './LoggedOutHeader'

function Header() {
  return (
    <>
      <div
        className={tm(
          'flex flex-row justify-between items-center relative',
          'md:w-full h-16 py-2 pl-4 md:pr-8 pr-4',
          'shadow-[0_2px_4px_rgba(0,0,0,0.25)]',
          // 추후 삭제
          'mb-4'
        )}
      >
        {/* 로그인 상태에서 나타낼 헤더 */}
        <LoggedInHeader />
      </div>
      <div
        className={tm(
          'flex flex-row justify-between items-center',
          'w-full h-16 py-2 pl-4 md:pr-8 pr-4',
          'shadow-[0_2px_4px_rgba(0,0,0,0.25)]',
          // 추후 삭제
          'mb-4'
        )}
      >
        {/* 비로그인 상태에서 나타낼 헤더 */}
        <LoggedOutHeader />
      </div>
    </>
  )
}

export default Header
