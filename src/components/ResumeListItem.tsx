'use client'

import { tm } from '@/utils/tw-merge'
import { useRouter } from 'next/navigation'

interface ResumeListItemProps {
  title: string
  duedate: string[]
  hashtag: string[]
}

function ResumeListItem({
  title,
  duedate,
  hashtag,
  id,
}: ResumeListItemProps & React.ComponentProps<'div'>) {
  const router = useRouter()

  // 라우팅 이벤트
  const handleMoveDetail = () => {
    router.push(`/detail/${id}`)
  }

  return (
    <div
      className={tm(
        'flex flex-col gap-6',
        'w-3/5 border-2 border-primary rounded-2xl',
        'mx-auto p-6'
      )}
    >
      {/* 현재 제목만 클릭해야만 링크를 이동할 수 있는 형태 */}
      <button
        type="button"
        className="text-left text-2xl cursor-pointer"
        onClick={handleMoveDetail}
      >
        {title}
      </button>
      <p className="font-bold">{`${duedate[0]} ~ ${duedate[1]}`}</p>
      <div className="flex flex-row gap-2">
        {hashtag.map((item, index) => (
          <span
            className={tm(
              'bg-hashbg border-secondary border-1 rounded-full',
              'px-3 py-1',
              'text-secondary'
            )}
            key={item + index}
          >
            #{item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default ResumeListItem
