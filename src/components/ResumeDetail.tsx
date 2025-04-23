'use client'

import { tm } from '@/utils/tw-merge'
import { ChangeEvent, useState } from 'react'

function ResumeDetail() {
  const [contentLength, setContentLength] = useState(0)

  const handleCheckContentLength = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContentLength(e.target.value.length)
  }

  return (
    <div className={tm('flex flex-col w-3/5 mx-auto relative')}>
      <div className={tm('flex w-4/5 ml-0 items-center gap-1')}>
        <p className="text-primary font-bold">1.</p>
        <label htmlFor="1" className="sr-only">
          제목을 입력해주세요
        </label>
        <input
          id="1"
          type="text"
          placeholder="제목을 입력해주세요"
          className={tm('py-1 px-1 w-full', 'text-primary font-bold')}
        />
      </div>
      <label htmlFor="2" className="sr-only">
        내용을 입력해주세요
      </label>
      <textarea
        id="2"
        maxLength={2000}
        rows={10}
        placeholder="내용을 입력해주세요"
        onChange={(data) => handleCheckContentLength(data)}
        className={tm('border-2 rounded-2xl border-primary', 'p-4')}
      />
      <p
        className={tm(
          'absolute top-1 right-3',
          'text-light-primary font-bold text-sm'
        )}
      >
        {contentLength}/2000
      </p>
    </div>
  )
}

export default ResumeDetail
