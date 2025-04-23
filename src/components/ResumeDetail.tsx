'use client'

import { tm } from '@/utils/tw-merge'
import React, { ChangeEvent, useRef, useState, useEffect } from 'react'

function ResumeDetail() {
  const [contentLength, setContentLength] = useState(0)
  const [detailList, setDetailList] = useState<{ id: number }[]>([])
  const detailAddButton = useRef<HTMLButtonElement>(null)

  const handleCheckContentLength = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContentLength(e.target.value.length)
  }

  const handleAddDetail = () => {
    if (detailList.length > 4) {
      detailAddButton.current!.disabled = true
      return
    }

    const nextDetailList = [...detailList, { id: Date.now() }]

    setDetailList(nextDetailList)
  }

  useEffect(() => {
    setDetailList([{ id: Date.now() }])
  }, [])

  return (
    <div className={tm('flex flex-col w-3/5 mx-auto gap-4 relative')}>
      {detailList.map((item, idx) => (
        <React.Fragment key={item.id}>
          <div className={tm('flex w-4/5 ml-0 items-center gap-1')}>
            <p className="text-primary font-bold">{idx + 1}.</p>
            <label htmlFor={`${item.id} input`} className="sr-only">
              제목을 입력해주세요
            </label>
            <input
              id={`${item.id} input`}
              type="text"
              placeholder="제목을 입력해주세요"
              className={tm('py-1 px-1 w-full', 'text-primary font-bold')}
            />
          </div>
          <p className={tm('text-secondary font-bold')}>#해시태그</p>
          <label htmlFor={`${item.id} textarea`} className="sr-only">
            내용을 입력해주세요
          </label>
          <textarea
            id={`${item.id} textarea`}
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
        </React.Fragment>
      ))}
      <button type="button" onClick={handleAddDetail} ref={detailAddButton}>
        추가하기
      </button>
    </div>
  )
}

export default ResumeDetail
