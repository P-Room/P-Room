'use client'

import { tm } from '@/utils/tw-merge'
import { useRouter } from 'next/navigation'

function SaveBar() {
  const router = useRouter()

  const handleMoveHome = () => {
    router.push('/')
  }

  return (
    <div
      className={tm(
        'w-full shadow-[0px_-2px_2px_0px_rgba(0,0,0,0.25)] bg-white',
        'py-2 px-8 sticky bottom-0 z-999',
        'flex flex-row justify-between'
      )}
    >
      <button
        type="button"
        onClick={handleMoveHome}
        className={tm(
          'cursor-pointer',
          'border border-secondary rounded-lg',
          'hover:bg-secondary hover:text-white duration-150',
          'p-2'
        )}
      >
        홈으로
      </button>
      <button
        type="button"
        className={tm(
          'cursor-pointer',
          'bg-secondary rounded-lg',
          'hover:scale-105 duration-150',
          'p-2 text-white'
        )}
      >
        저장하기
      </button>
    </div>
  )
}

export default SaveBar
