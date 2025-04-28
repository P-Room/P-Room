'use client'

import { tm } from '@/utils/tw-merge'
import Image from 'next/image'
import React, { ChangeEvent, useRef, useState, useEffect } from 'react'
import HashTag from './HashTag'

function ResumeDetail() {
  // 문항의 길이와 id를 저장하는 상태
  const [detailList, setDetailList] = useState<
    { id: number; contentLength: number }[]
  >([])
  // 문항 추가 버튼
  const detailAddButton = useRef<HTMLButtonElement>(null)

  // 길이를 실시간으로 체크하는 함수(각각의 상태를 구분해야함)
  const handleCheckContentLength = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const nextDetailList = detailList.map((item) => {
      return item.id === Number(e.target.id.split(' ')[0])
        ? { ...item, contentLength: e.target.value.length }
        : item
    })

    setDetailList(nextDetailList)
  }

  // 추가버튼을 클릭 시 발생할 이벤트(항목이 5개가 되었다면 버튼 삭제)
  const handleAddDetail = () => {
    const nextDetailList = [...detailList, { id: Date.now(), contentLength: 0 }]

    setDetailList(nextDetailList)

    if (detailList.length > 3) {
      detailAddButton.current!.disabled = true
      detailAddButton.current!.hidden = true
      return
    }
  }

  // 초기 값은 항상 첫번째 문항을 나타내도록 설정
  useEffect(() => {
    setDetailList([{ id: Date.now(), contentLength: 0 }])
  }, [])

  return (
    <div className="flex flex-col gap-8 mb-20">
      {detailList.map((item, idx) => (
        <div
          className={tm('flex flex-col w-3/5 mx-auto gap-3 relative')}
          key={item.id}
        >
          <div className={tm('flex w-full ml-0 items-center gap-1')}>
            <p className="text-primary font-bold">{idx + 1}.</p>
            <label htmlFor={`${item.id} input`} className="sr-only">
              제목을 입력해주세요
            </label>
            <input
              id={`${item.id} input`}
              type="text"
              placeholder="제목을 입력해주세요"
              className={tm(
                'p-1 w-full',
                'text-primary font-bold rounded-lg',
                'focus:outline-primary'
              )}
            />
          </div>
          <HashTag id={item.id + ''} />
          <label htmlFor={`${item.id} textarea`} className="sr-only">
            내용을 입력해주세요
          </label>
          <textarea
            id={`${item.id} textarea`}
            maxLength={2000}
            rows={10}
            placeholder="내용을 입력해주세요"
            onChange={(data) => handleCheckContentLength(data)}
            className={tm(
              'border-2 rounded-2xl border-primary',
              'p-4',
              'focus:outline-secondary'
            )}
          />
          <p
            className={tm(
              'absolute bottom-2 right-3',
              'text-light-primary font-bold text-sm'
            )}
          >
            {item.contentLength}/2000
          </p>
        </div>
      ))}
      <button
        type="button"
        onClick={handleAddDetail}
        ref={detailAddButton}
        aria-label="문항 추가"
        className={tm(
          'bg-primary',
          'flex justify-center w-1/5 mx-auto mt-16',
          'py-2 rounded-2xl',
          'cursor-pointer'
        )}
      >
        <Image src="/icons/add-detail.svg" alt="" width={48} height={48} />
      </button>
    </div>
  )
}

export default ResumeDetail
