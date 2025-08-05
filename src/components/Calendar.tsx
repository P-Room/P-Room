'use client'

import 'react-calendar/dist/Calendar.css'
import { Calendar as Cal } from 'react-calendar'
import { format } from 'date-fns'
import { tm } from '@/utils/tw-merge'
import Image from 'next/image'
import { useEffect } from 'react'
import api from '@/lib/axios'

const schedule: Record<string, string[]> = {
  '2025-05-01': [
    '공고 제목1asdfasdfasdfasdfasdfasdf',
    '공고 제목2',
    '공고 제목2',
    '공고 제목2',
    '공고 제목2',
    '공고 제목2',
    '공고 제목2',
  ],
  '2025-05-07': ['공고 제목3'],
}

function Calendar() {
  const delay = async (ms: number) => {
    return new Promise((res) => {
      setTimeout(() => {
        res(undefined)
      }, ms)
    })
  }

  // const testCalendar = async () => {
  //   await delay(1100)

  //   const data = api
  //     .get('/api/recruit')
  //     .then((res) => res.data)
  //     .catch(() => null)
  //   console.log(data)
  // }

  // useEffect(() => {
  //   testCalendar()
  // }, [])

  const tileContent = ({ date, view }: { date: Date; view: string }) => {
    if (view !== 'month') return null // 월간 뷰에서만 렌더링

    const key = format(date, 'yyyy-MM-dd')
    const items = schedule[key] || []

    return (
      <div className="mt-1 space-y-2">
        {items.map((item, idx) => (
          <p
            role="button"
            onClick={() => console.log(idx)}
            key={idx}
            className={tm(
              'shadow-[2px_2px_2px_rgba(92,93,112,0.6)] text-[12px] text-black border-secondary border-1',
              'rounded-sm h-8',
              'flex flex-row items-center px-2 gap-1',
              'truncate cursor-pointer'
            )}
          >
            <Image src="icons/resume-title.svg" alt="" width={16} height={16} />
            {item}
          </p>
        ))}
      </div>
    )
  }

  return (
    <>
      <Cal
        tileContent={tileContent}
        calendarType="gregory"
        locale="ko-KR"
        formatDay={(_, date) => date.getDate().toString()} // 날짜만 표시
        showNeighboringMonth={true}
        className={tm('hidden', 'md:block')}
      />
      {Object.keys(schedule).map((item, idx) => {
        return (
          <div
            key={idx}
            className={tm('md:hidden', 'w-4/5 mx-auto', 'flex flex-col gap-2')}
          >
            <span
              className={tm(
                'border-b border-primary py-1',
                'font-bold text-xl text-secondary'
              )}
            >
              {item}
            </span>
            {schedule[item].map((list, index) => {
              return (
                <button
                  type="button"
                  key={index + '아이템'}
                  className={tm(
                    'py-1 flex flex-row items-center gap-1 p-1',
                    'border rounded-xl',
                    'text-base text-secondary truncate',
                    'cursor-pointer'
                  )}
                >
                  <Image
                    src="icons/resume-title.svg"
                    alt=""
                    width={16}
                    height={16}
                  />
                  {list}
                </button>
              )
            })}
          </div>
        )
      })}
    </>
  )
}

export default Calendar
