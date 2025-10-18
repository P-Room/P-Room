import { ChangeEvent, useState } from 'react'
import useResumeInfoStore from '@/store/ResumeInfoStore'

function CustomDropdown({ ...restProps }: React.ComponentProps<'select'>) {
  const [career, setCareer] = useState<'인턴' | '신입' | '경력' | 'null'>(
    'null'
  )
  const { setResumeRequire } = useResumeInfoStore()

  const changeValue = (e: ChangeEvent<HTMLSelectElement>) => {
    setCareer(e.target.value as '인턴' | '신입' | '경력')

    setResumeRequire(e.target.value)
  }

  return (
    <select
      {...restProps}
      value={career}
      onChange={(data) => changeValue(data)}
    >
      <option disabled value={'null'} className="text-gray-500">
        요구 경력 정보를 입력해주세요.
      </option>
      <option value="인턴">인턴</option>
      <option value="신입">신입</option>
      <option value="경력">경력</option>
    </select>
  )
}

export default CustomDropdown
