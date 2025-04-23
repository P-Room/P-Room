import { ChangeEvent, useState } from 'react'

function CustomDropdown({ ...restProps }: React.ComponentProps<'select'>) {
  const [, setCareer] = useState<'인턴' | '신입' | '경력' | 1>(1)

  const changeValue = (e: ChangeEvent<HTMLSelectElement>) => {
    setCareer(e.target.value as '인턴' | '신입' | '경력')
  }

  return (
    <select {...restProps} value={1} onChange={(data) => changeValue(data)}>
      <option disabled value={1} className="text-gray-500">
        요구 경력 정보를 입력해주세요.
      </option>
      <option value="인턴">인턴</option>
      <option value="신입">신입</option>
      <option value="경력">경력</option>
    </select>
  )
}

export default CustomDropdown
