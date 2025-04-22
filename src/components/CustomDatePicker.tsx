import { tm } from '@/utils/tw-merge'
import { forwardRef, useState } from 'react'
import DatePicker from 'react-datepicker'
import { ko } from 'date-fns/locale/ko'

interface CustomDatePickerProps {
  sort: '기간'
}

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string
}

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
  ({ value, onClick, placeholder, id }, ref) => (
    <input
      id={id}
      onClick={onClick}
      ref={ref}
      value={value}
      readOnly
      placeholder={placeholder}
      className={tm('px-1 py-1 m-0 w-full')}
    />
  )
)

CustomInput.displayName = 'CustomInput'

function CustomDatePicker({ sort }: CustomDatePickerProps) {
  const [selectedDates, setSelectedDates] = useState<
    [Date | null, Date | null]
  >([null, null])
  const [startDate, endDate] = selectedDates

  return (
    <DatePicker
      locale={ko}
      dateFormat="yyyy.MM.dd"
      selectsRange
      placeholderText={`${sort} 정보를 입력해주세요.`}
      startDate={startDate}
      endDate={endDate}
      onChange={(date) => setSelectedDates(date)}
      customInput={<CustomInput placeholder={`${sort} 정보를 입력해주세요.`} />}
      wrapperClassName="w-4/5"
    />
  )
}

export default CustomDatePicker
