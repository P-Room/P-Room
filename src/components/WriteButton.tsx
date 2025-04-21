import { tm } from '@/utils/tw-merge'
import Image from 'next/image'

function WriteButton() {
  return (
    <div>
      <button
        className={tm(
          'rounded-full bg-primary',
          'p-4',
          'absolute right-12 bottom-12',
          'cursor-pointer'
        )}
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
