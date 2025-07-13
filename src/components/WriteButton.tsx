'use client'

import { tm } from '@/utils/tw-merge'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

function WriteButton() {
  const router = useRouter()

  return (
    <div>
      <button
        className={tm(
          'rounded-full bg-primary',
          'p-4',
          'fixed right-12 bottom-12',
          'cursor-pointer'
        )}
        onClick={() => router.push('/write-resume')}
      >
        <Image
          src="/icons/write-button.svg"
          alt="새 글 작성"
          width={32}
          height={32}
          priority
        />
      </button>
    </div>
  )
}

export default WriteButton
