'use client'

import 'react-calendar/dist/Calendar.css'
import { Calendar as Cal } from 'react-calendar'
import { format } from 'date-fns'
import { tm } from '@/utils/tw-merge'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import api from '@/lib/axios'

function Calendar() {
  const [dateList, setDateList] = useState<Record<string, string[]>>({})

  const delay = async (ms: number) => {
    return new Promise((res) => {
      setTimeout(() => {
        res(undefined)
      }, ms)
    })
  }

  // 달력의 데이터를 불러오는 함수
  const loadCalendarData = async () => {
    // 현재 로그인하는 시간을 고려하여 1.1초 딜레이 생성
    // 추후 삭제 예정
    await delay(1100)

    // 달력 데이터 불러오기
    const calendarData = api
      .get('/api/recruit')
      .then((res) => {
        return res.data
      })
      .catch(() => {
        return null
      })

    // dateList를 업데이트 할 새로운 객체
    let newDateList = { ...dateList }

    // 불러온 데이터를 바탕으로 newDateList를 업데이트
    for (const date of (await calendarData).content) {
      const nowDate = date.startDate
      const nowDateDataList = newDateList[nowDate] ?? []
      const newNowDateDataList = [...nowDateDataList, date.name]

      // 지속적은 업데이트
      newDateList = {
        ...newDateList,
        [nowDate]: newNowDateDataList,
      }
    }

    // 최종적으로 완성된 newDateList를 dateList로 설정(state)
    setDateList(newDateList)
  }

  // 달력 데이터는 캘린더 로드 시에 한 번만 이벤트가 발생하도록 설정
  useEffect(() => {
    loadCalendarData()
  }, [])

  // 달력에 사용될 컴포넌트
  const tileContent = ({ date, view }: { date: Date; view: string }) => {
    if (view !== 'month') return null // 월간 뷰에서만 렌더링

    // 날짜를 통해 key값 추출
    const key = format(date, 'yyyy-MM-dd')
    const items = dateList[key] || []

    // chip 컴포넌트(분리해도 됨)
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
      {Object.keys(dateList).map((item, idx) => {
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
            {dateList[item].map((list, index) => {
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
