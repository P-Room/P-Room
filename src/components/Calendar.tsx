'use client'

import 'react-calendar/dist/Calendar.css'
import { Calendar as Cal } from 'react-calendar'
import { format } from 'date-fns'

const schedule: Record<string, string[]> = {
  '2025-05-01': ['공고 제목1', '공고 제목2'],
  '2025-05-07': ['공고 제목3'],
}

function Calendar() {
  const tileContent = ({ date, view }: { date: Date; view: string }) => {
    if (view !== 'month') return null // 월간 뷰에서만 렌더링

    const key = format(date, 'yyyy-MM-dd')
    const items = schedule[key] || []

    return (
      <div
        role="button"
        className="mt-1 space-y-1 text-[10px] text-gray-600"
        onClick={() => console.log(1)}
      >
        {items.map((item, idx) => (
          <p
            key={idx}
            className="bg-white border border-gray-300 rounded px-1 py-0.5 shadow-sm"
          >
            📄 {item}
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
      />
    </>
  )
}

export default Calendar
